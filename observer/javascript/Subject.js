export default class Subject{
  constructor(){
    this.observers = new Map();
  }

  attach(event, obs){
    if (!this.observers.has(event)){
      this.observers.set(event, []);
    }
    this.observers.get(event).push(obs);
  }

  detach(event, obs) {
    if(!this.observers.has(event)) return

    this.observers.set(event, this.observers.get(event).filter(observer => observer !== obs))
  }

  notify(event, data = undefined){
    if(!this.observers.has(event)) return

    this.observers.get(event).forEach(obs => {
     obs.update(data);
    });
  }
}
