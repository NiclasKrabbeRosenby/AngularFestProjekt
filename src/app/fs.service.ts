import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class FsService {

  ref = firebase.firestore().collection('users');

  constructor() { }

  getBoards(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        let boards = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          boards.push({
            key: doc.id,
          displayName: data.displayName,
          email: data.email,
          uid: data.uid
          });
        });
        observer.next(boards);
      });
    });
  }

  getBoard(id: string): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).get().then((doc) => {
        let data = doc.data();
        observer.next({
          key: doc.id,
          displayName: data.displayName,
          email: data.email,
          uid: data.uid
        });
      });
    });
  }

  postBoards(data): Observable<any> {
    return new Observable((observer) => {
      this.ref.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }

  updateBoards(id: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }

  deleteBoards(id: string): Observable<{}> {
    return new Observable((observer) => {
      this.ref.doc(id).delete().then(() => {
        observer.next();
      });
    });
  }
}
