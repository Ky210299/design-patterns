function Subject() {

  let observerList = [];

  function attachObserver(observer){
    return this.observerList.push(observer)
  }

  function detachObserver(observer){
    return this.observerList = observerList.filter(obs => observer !== obs);
  }

  function notifyObservers(event) {
    return this.observerList = observerList.forEach(obs => {
      return obs.update(event);
    })
  }
}
