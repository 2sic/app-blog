import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Api, Data, SxcApp } from '@2sic.com/dnn-sxc-angular';
import { Comment } from '../shared/comment'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  displayedColumns: string[] = ['avatar', 'displayName', 'content', 'target', 'created', 'isPublished', 'actions'];
  dataSource = new MatTableDataSource();

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  commentService: Data<Comment>;
  api: Api;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private app: SxcApp) {
    this.commentService = app.data('Comment');
    this.api = app.api('Comment');
  }

  ngOnInit(): void {
    this.loadData();
  }

  approveComment(commentId: number): void {
    this.commentService.update(commentId, { PublishState: true })
    .subscribe(res => {
      if ((res as { Modified: Date}).Modified) {
        this.loadData();
        return;
      }
      alert("Something went wrong. Please contact the admin.")
    });
  }

  deleteComment(commentId: number): void {
    this.commentService.delete(commentId).subscribe(res => this.loadData());
  }

  loadData(): void {
    this.api.get<Comment[]>('getAll', "")
    .subscribe((comments) => {
      this.dataSource.data = comments;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

