public class Main {

  public static void main(String[] args) {

    ObservableClass observable = new ObservableClass();

    // Here we are adding the functionality of the observer Example1 and
    // Example 2 to the observable object
    observable.addObserver(new Example1());
    observable.addObserver(new Example2());

    observable.notifyObservers();
  }
}
