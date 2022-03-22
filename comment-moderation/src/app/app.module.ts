import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagementComponent } from './management/management.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContentManagerModule, Context, DnnSxcRootModule, SxcApp } from '@2sic.com/dnn-sxc-angular';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { NavComponent } from './nav/nav.component';
import { BlocksComponent } from './blocks/blocks.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';

@NgModule({
  declarations: [
    AppComponent,
    ManagementComponent,
    NavComponent,
    BlocksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    DnnSxcRootModule,
    ContentManagerModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    private app: SxcApp,
    private ctx: Context,
    private translate: TranslateService,
    private http: HttpClient) {

    ctx.apiEdition = "";
    ctx.appNameInPath = "Blog5";

    this.app.api('Blog').get<{ CurrentCode: string }>("CurrentCulture", "").subscribe(lang => {
      this.app.api('Blog').get<string>("TranslationPath", "").subscribe(path => {
        this.translate.currentLoader = new TranslateHttpLoader(http, path);
        this.translate.setDefaultLang(lang.CurrentCode);
        this.translate.getTranslation(lang.CurrentCode).subscribe();
      })
    })
  }
}
