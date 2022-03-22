import { TranslateService } from '@ngx-translate/core';
import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Data, SxcApp } from '@2sic.com/dnn-sxc-angular';
import { Comment } from '../shared/comment'
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TargetService } from '../target.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit, AfterContentInit {

  displayedColumns: string[] = ['IP', 'Created', 'actions'];
  dataSource = new MatTableDataSource<{ IP: string, Created?: Date }>();

  ipControl = new FormControl('');
  blockedIPsService: Data<{ IP: string, Created?: Date }>;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private app: SxcApp) {
    this.blockedIPsService = app.data('BlockedIP');
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterContentInit(): void {
    this.dataSource.sort = this.sort;
  }


  unblockIp(ipId: number): void {
    this.blockedIPsService.delete(ipId).subscribe(res => this.loadData());
  }

  blockIp(): void {
    if(this.ipControl.valid) this.blockedIPsService.create({ IP: this.ipControl.value }).subscribe(() => this.loadData())
  }

  loadData(): void {
    this.blockedIPsService.getAll()
    .subscribe(ips => {
      this.dataSource.data = ips.map(ip => {return {...ip, Created: new Date(ip.Created || new Date())}});
    });
  }


  // custom filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
