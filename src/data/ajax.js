import String from '~/core/string';
import Ext from '~/core/ext';

class Ajax {
  constructor() {
    Ext.extend(Ajax.prototype, {
      xhr: new XMLHttpRequest(),
      ajaxBefore: () => { /* to be implemented */ },
      ajaxError: (error) => { /* to be implemented */ },
      ajaxComplete: () => { /* to be implemented */ },
      BASE_URL: null
    });
  }

  async request({ url, method = 'get', params, next, error, complete }) {
    try {
      this.ajaxBefore();
      const response = await this.promise({ url, method, params });
      return next ? next(response) : response;
    } catch (ex) {
      console.error(`Cannot get response from server for url [${url}] caused by: ${ex}`);
      this.ajaxError(ex);
      error && error(ex);
      return null
    } finally {
      this.ajaxComplete();
      complete && complete();
    }
  }

  promise(settings) {
    return new Promise((resolve, reject) => {
      this.createRequest(settings, (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      })
    })
  }

  createRequest({ url, method, params }, done) {
    (this.BASE_URL) && (url = `${this.BASE_URL}/${url}`);
    (method === 'get' && params !== null) && (url = `${url}?${String.toQueryString(params)}`);
    const xhr = this.xhr;
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          done(null, JSON.parse(xhr.responseText));
        } else {
          try {
            done(JSON.parse(xhr.responseText));
          } catch (e) {
            done(xhr.responseText);
          }
        }
      }
    }
    xhr.send(params !== null ? JSON.stringify(params) : null);
  }
}

export default new Ajax;