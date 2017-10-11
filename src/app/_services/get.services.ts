import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {DOCUMENT} from '@angular/platform-browser';
import {CLSEntity} from '../common/clear_entity';

@Injectable()
export class GetService {

  strUrl: string;
  port: string;

  constructor(public http: Http, private clsentity: CLSEntity, @Inject(DOCUMENT) document: any) {
    console.log('PostService Initialized ......');
    this.strUrl = document.location.hostname;
    this.port = '7913';
  }

  getTodoList() {
    return this.http.get(`http://${this.strUrl}:${this.port}/demo/list-todo`)
      .map(res => res.json());

  }

  deleteTodo(todoId: string) {
    return this.http.get(`http://${this.strUrl}:${this.port}/demo/delete-todo?id=` + todoId)
      .map(res => res.json());
  }
}

