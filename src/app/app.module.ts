import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {HttpModule} from '@angular/http';
import {APP_BASE_HREF, DatePipe} from '@angular/common';
import {PostService} from './_services/post.services';
import {GetService} from './_services/get.services';
import {CLSEntity} from './common/clear_entity';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule, routing, HttpModule, FormsModule
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }, PostService, GetService, CLSEntity, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
