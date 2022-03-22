import { Component, ElementRef, OnInit } from '@angular/core';
import { DnnAppComponent, Context, SxcApp } from '@2sic.com/dnn-sxc-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends DnnAppComponent {
  constructor(el: ElementRef, context: Context) {
    super(el, context);
  }
}
