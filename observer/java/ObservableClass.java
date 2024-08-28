import java.util.HashSet;
import java.util.Set;


// This can be observed by the observer interface
public class ObservableClass implements Observable{

  // In this set the observable have all the observers
  Set<IObserver> observerSet = new HashSet<>();

  @Override
  public void addObserver(IObserver o) {
    observerSet.add(o);
  }

  @Override
  public void removeObserver(IObserver o) {
    observerSet.remove(o);
  }

  // We notify all observer here
  @Override
  public void notifyObservers() {
    for (IObserver observer : observerSet) {
      observer.update();
    };
  }
}
