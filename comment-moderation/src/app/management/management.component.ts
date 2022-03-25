import { TranslateService } from '@ngx-translate/core';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Api, Context, Data, SxcApp } from '@2sic.com/dnn-sxc-angular';
import { Comment } from '../shared/comment'
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TargetService } from '../target.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ManagementComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['avatar', 'displayName', 'content', 'target.title', 'created', 'type', 'isPublished'];
  dataSource = new MatTableDataSource<Comment>();

  targetControl = new FormControl(-1);
  statusControl = new FormControl(-1);

  statuses: string[] = [ "approved", "unverified", "denied"]

  filterValues = {
    searchFilter: '',
    targetFilter: -1,
    statusFilter: -1
  }

  commentService: Data<unknown>;
  blogService: Data<{ Title: string, Id: number}>;
  blockedIPsService: Data<{ IP: string}>;
  api: Api;

  expandedElement: Comment | null = null;

  targets: { title: string, id: number}[] = [];

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private app: SxcApp,
    private ctx: Context,
    private targetService: TargetService,
    private translate: TranslateService
  ) {
    ctx.apiEdition = "";
    this.commentService = app.data('Comment');
    this.blogService = app.data('BlogPost');
    this.blockedIPsService = app.data('BlockedIP');
    this.api = app.api('Comment');
  }

  ngOnInit(): void {
    this.loadData();
    this.blogService.getAll().subscribe(blogs => {
      this.targets = blogs.map(blog => {return { title: blog.Title, id: blog.Id}});
    })

    this.dataSource.filterPredicate = this.customFilterPredicate();

    this.targetControl.valueChanges.subscribe((target) => {
      this.targetService.setTarget(target)
      this.filterValues.targetFilter = target
      this.dataSource.filter = JSON.stringify(this.filterValues)
    });

    this.statusControl.valueChanges.subscribe((status) => {
      console.log(status)
      this.filterValues.statusFilter = status
      this.dataSource.filter = JSON.stringify(this.filterValues)
    });

    this.targetControl.setValue(this.targetService.currentTarget.value)
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch(property) {
        case 'target.title': return item.target?.title;
        default: return (item as any)[property];
      }
    };
  }

  approveComment(commentId: number): void {
    this.commentService.update(commentId, { PublishState: true })
    .subscribe((res: any) => {
      if (res.Modified) {
        this.loadData();
        return;
      }
      alert(`${this.translate.instant('ERROR_JS')}: ${res.Message}`)
    });
  }

  denyComment(commentId: number): void {
    this.commentService.update(commentId, { IsDenied: true })
    .subscribe((res: any) => {
      if (res.Modified) {
        this.loadData();
        return;
      }

      alert(`${this.translate.instant('ERROR_JS')}: ${res.Message}`)
    });
  }

  deleteComment(commentId: number): void {
    if(confirm(this.translate.instant('CONFIRM_COMMENT_DELETE')))
      this.commentService.delete(commentId).subscribe(() => this.loadData());
  }

  loadData(): void {
    this.api.get<Comment[]>('getAll', "").subscribe((comments) => this.dataSource.data = comments);
  }

  blockIp(ip: string): void {
    this.blockedIPsService.create({ IP: ip })
      .subscribe((res: any) => {
        if (res.Created) {
          this.loadData();
          return;
        }

        alert(`${this.translate.instant('ERROR_JS')}: ${res.Message}`)
      });
  }

  // custom filter
  applyFilter(event: Event): void {
    this.filterValues.searchFilter = (event.target as HTMLInputElement).value
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }

  customFilterPredicate(): (data: Comment, filter: string) => boolean {
    const myFilterPredicate = (data: Comment, filter: string): boolean => {
      const searchTerms = JSON.parse(filter);

      if (searchTerms.targetFilter != -1 && data.target.id != searchTerms.targetFilter)
        return false

      if (searchTerms.statusFilter != -1) {
        console.log(searchTerms.statusFilter)
        switch(searchTerms.statusFilter) {
          case '0': return data.isPublished ?? false;
          case '1': return (!data.isPublished && data.isDenied) ?? false;
          case '2': return (!data.isPublished && !data.isDenied) ?? false;
        }
      }

      if (searchTerms.searchFilter)
        // search all object fields for searchFilter
        return Object.values(data).find(val =>
          val != null
          ? (val.toString().trim().toLowerCase()
            .indexOf(searchTerms.searchFilter.toLowerCase()) !== -1)
          : true)

      return true
    }
    return myFilterPredicate;
  }
}

