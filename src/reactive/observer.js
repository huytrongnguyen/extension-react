class Observer {
  constructor() {
    this.next = value => { /* to be implemented */ };
    this.error = err => { /* to be implemented */ };
    this.complete = () => { /* to be implemented */ };
  }
}

export default new Observer();