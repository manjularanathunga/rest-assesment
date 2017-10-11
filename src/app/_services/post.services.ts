import {Inject, Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/subscribeOn';

import {DOCUMENT} from '@angular/platform-browser';
import {TodoEntity} from '../common/common';

@Injectable()
export class PostService {

  strUrl: string;
  port: string;

  constructor(public http: Http, @Inject(DOCUMENT) document: any) {
    console.log('PostService Initialized ......');
    this.strUrl = document.location.hostname;
    this.port = '7913';
  }

  dailyLeaveList(empid: any) {
    return this.http.get(`http://${this.strUrl}:${this.port}/list-dailyLeave?employeeid=` + empid)
      .map(res => res.json());

  }

  saveTodo(sysuser: TodoEntity, isedited: boolean) {
    console.log('calling service.save usertype .....');
    const body = `entity=${JSON.stringify(sysuser)}`;
    const headers = new Headers();
    let requesMethod;

    if (isedited) {
      requesMethod = 'demo/update-todo';
    } else {
      requesMethod = 'demo/save-todo';
    }

    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(`http://${this.strUrl}:${this.port}/${requesMethod}`, body, {headers: headers})
      .map(res => res.json());
  }
}


