import { action } from 'mobx';
import firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store';

const base = 'posts';

export default class PostStore extends MobxFirebaseStore {
  constructor() {
    super(firebase.database().ref());
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
      if (user) {
        this.storage = firebase.storage().ref(user.uid);
      }
    });
  }

  subs() {
    return [{
      subKey: base,
      asList: true,
      path: base
    }]
  }

  @action
  addPost(text) {
    let post, key;
    post = {
      name: text,
      created: Date.now(),
      user: this.user.uid
    }
    key = this.fb.child(base).push().key;

    let updates = {};
    updates['/' + base + '/' + key] = post;
    updates['/' + this.user.uid + '/history/' + key] = true;
    this.fb.update(updates);
  }

}
