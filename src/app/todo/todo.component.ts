import { Component, OnInit } from '@angular/core';
import {TodoEntity} from '../common/common';
import {PostService} from '../_services/post.services';
import {GetService} from '../_services/get.services';
import {CLSEntity} from '../common/clear_entity';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  entity: TodoEntity;
  listEntity: TodoEntity[];
  showlist: boolean;
  showEntity: boolean;
  isedited: boolean;

  constructor(private postService: PostService, private getService: GetService, private clsentity: CLSEntity) {
    this.showEntity = false;
    this.showlist = true;
    this.entity = this.clsentity.clearTodoEntity();
    this.listEntity = new Array();
    this.loadIinit();
  }

  loadIinit() {
    console.log('Calling Officer loadInit .....');
    this.showlist = true;
    this.showEntity = false;
    this.getService.getTodoList().subscribe(resulstList => {
      this.listEntity = resulstList;
      console.log('Calling loadIinit .....' + this.listEntity.length);
    });

  }

  ngOnInit() {
  }

  edit(todoid: string) {
    console.log('Calling entity .....' + todoid);
    this.showlist = false;
    this.showEntity = true;
    for (let i = 0; i <= this.listEntity.length; i++) {
      if ((this.listEntity[i]).id == todoid) {
        this.entity = this.listEntity[i];
        console.log('Selected =>' + this.entity);
        this.isedited = true;
        break;
      }
    }
  }

  delete(todoid: string) {
    this.getService.deleteTodo(todoid).subscribe(pos => {
      console.log(JSON.stringify(pos))
      if (pos) {
        if (pos.status === 200) {
          this.loadIinit();
        } else {
/*          this._flashMessagesService.show('Error on Officer Deletion id = ' + officerId, {
            cssClass: 'alert-info',
            timeout: 2000
          });*/
        }
      }
    });
  }

  cancel() {
    console.log('Calling cancel entity .....');
    this.loadIinit();
  }

  addNewItem() {
    console.log('...Calling addNew entity');
    this.entity = this.clsentity.clearTodoEntity();
    this.isedited = false;
    this.showlist = false;
    this.showEntity = true;
  }


  save() {
    this.postService.saveTodo(this.entity, this.isedited).subscribe(pos => {
      if (pos) {
        if (pos.status === 200) {
/*          this._flashMessagesService.show('Officer has been saved successfully !', {
            cssClass: 'alert-info',
            timeout: 3000
          });*/
          this.loadIinit();
        } else {
/*          this._flashMessagesService.show('Error on Officer Saving ! ' + pos.message, {
            cssClass: 'alert-info',
            timeout: 3000
          });*/
        }
      }
    });
  }

}


