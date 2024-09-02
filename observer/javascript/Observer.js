export default class Observer {
  constructor(name,fn){
    this.name = name
    this.fn = fn
  }

  update(data = undefined){
      this.fn(data);
  }
}
