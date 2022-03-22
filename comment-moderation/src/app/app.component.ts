import { Component, ElementRef, OnInit } from '@angular/core';
import { DnnAppComponent, Context } from '@2sic.com/dnn-sxc-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends DnnAppComponent implements OnInit {
  constructor(el: ElementRef, context: Context) {
    super(el, context);
  }

  ngOnInit(): void {

  }
}
