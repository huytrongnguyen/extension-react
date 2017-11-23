import String from '~/core/string';
import Ext from '~/core/ext';

class Ajax {
  constructor() {
    Ext.extend(Ajax.prototype, {
      xhr: new XMLHttpRequest(),
      ajaxBefore: () => { /* to be implemented */ },
      ajaxError: (error) => { /* to be implemented */ },
      ajaxComplete: () => { /* to be implemented */ }
    });
  }

  async request({ url, contentType = 'application/json; charset=utf-8', method = 'get', params, next, error, complete }) {
    try {
      let response;
      try {
        this.ajaxBefore();
        response = await this.promise({ url, contentType, method, params });
      } catch (ex) {
        console.error(`Cannot get response from server for url [${url}] caused by: ${ex}`);
        this.ajaxError(ex);
        error && error(ex);
        return null;
      }

      return next ? next(response) : response;
    } finally {
      this.ajaxComplete();
      complete && complete();
    }
  }

  promise(settings) {
    return new Promise((resolve, reject) => {
      this.createRequest(settings, (err, res) => err ? reject(err) : resolve(res));
    });
  }

  createRequest({ url, contentType, method, params }, done) {
    (method === 'get' && params) && (url = `${url}?${String.toQueryString(params)}`);
    const xhr = this.xhr;
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', contentType);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        // ajax will return as a json by default, if parser error then it will return a raw string
        if (xhr.status === 200) {
          try {
            done(null, JSON.parse(xhr.responseText));
          } catch (e) {
            done(null, xhr.responseText);
          }
        } else {
          try {
            done(JSON.parse(xhr.responseText));
          } catch (e) {
            done(xhr.responseText);
          }
        }
      }
    }
    xhr.send(params ? JSON.stringify(params) : null);
  }
}

export default new Ajax();