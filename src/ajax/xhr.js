import String from '~/core/string'
import service from '~/decorators/service'

export const MutationType = {
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete'
};

@service
export default class Xhr {
  constructor() {
    this.BASE_API = null
    this.xhr = new XMLHttpRequest()
    this.ajaxComplete = function() { /* to be implemented */ }
    this.ajaxError = function(error) { /* to be implemented */ }
  }

  async ajax(url, method, params) {
    try {
      const response = await this.promise({ url, method, params })
      if (response.error) {
        this.ajaxError(response.error)
        return null
      }
      this.ajaxComplete()
      return response
    } catch (e) {
      console.error(e)
      this.ajaxError(e)
      return null
    }
  }

  promise(settings) {
    return new Promise((resolve, reject) => {
      this.request(settings, (err, res) => {
        if (err) {
          reject(err)
          return
        }
        resolve(res)
      })
    })
  }

  request(settings, done) {
    let xhr = this.xhr
    let { url, method, params } = settings
    if (this.BASE_API) {
      url = `${this.BASE_API}/${url}`
    }
    if (method === 'get' && params !== null) {
      url = `${url}?${String.toQueryString(params)}`
    }
    xhr.open(method, url, true)
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        try {
          done(null, JSON.parse(xhr.responseText))
        } catch (e) {
          done(null, xhr.responseText)
        }

      }
    }
    xhr.send(params !== null ? JSON.stringify(params) : null)
  }
}