import { Observable } from 'rxjs';

class Ajax {
  request({ url, method = 'get', responseType = 'json', params }) {
    return new Promise((resolve, reject) => {
      Observable.ajax({
        url,
        method,
        headers: { 'Content-Type': 'application/json' },
        body: method === 'post' && params,
        responseType,
      })
      .subscribe({
        next: value => resolve(value.response),
        error: err => reject(err.message || err.response),
      });
    });
  }
}

export default new Ajax();