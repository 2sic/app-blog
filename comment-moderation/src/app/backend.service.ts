import { Comment } from './shared/comment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Data, SxcApp } from '@2sic.com/dnn-sxc-angular';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  commentService: Data<Comment>;

  comments: BehaviorSubject<Comment[]> = new BehaviorSubject<Comment[]>([]);
  comments$ = this.comments.asObservable();

  constructor(private app: SxcApp) {
    this.commentService = app.data('Comment');
  }

  getComments(): void {
    this.commentService.getAll().subscribe((comments) => this.comments.next(comments))
  }
}
