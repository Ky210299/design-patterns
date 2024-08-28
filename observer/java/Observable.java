// This is the interface of the object to be observed
public interface Observable {


  // This method subscribe an observer to the object
  void addObserver(IObserver o);

  // This remove an observer of the object
  void removeObserver(IObserver o);

  // And this method notify the observers for changes
  void notifyObservers();
}
