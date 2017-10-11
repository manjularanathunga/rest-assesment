import {Injectable} from '@angular/core';
import {TodoEntity} from './common';
/**
 * Created by manjula
 */

@Injectable()
export class CLSEntity {

  clearTodoEntity(): TodoEntity {
    return {
      id: '',
      toDoCode: '',
      todoName: '',
      status: 'A',
    };
  }
}
