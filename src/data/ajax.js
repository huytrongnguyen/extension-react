import { Observable } from 'rxjs';

class Ajax {
  request({ url, method = 'get', responseType = 'json', params, done, fail, always }) {
    Observable.ajax({
      url,
      method,
      headers: { 'Content-Type': 'application/json' },
      body: method === 'post' && params,
      responseType,
    })
    .subscribe({
      next: value => done && done(value.response),
      error: err => fail && fail(err.message || err.response),
      complete: always
    });
  }
}

export default new Ajax();