import java.util.HashSet;
import java.util.Set;

public class ObservableExample implements Observable{

  Set<IObserver> observerSet = new HashSet<>();
  @Override
  public void addObserver(IObserver o) {
    observerSet.add(o);
  }

  @Override
  public void removeObserver(IObserver o) {
    observerSet.remove(o);
  }

  @Override
  public void notifyObservers() {
    for (IObserver observer : observerSet) {
      observer.update();
    };
  }
}
