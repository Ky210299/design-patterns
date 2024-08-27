public interface Observable {

  void addObserver(IObserver o);

  void removeObserver(IObserver o);

  void notifyObservers();
}
