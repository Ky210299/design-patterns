public class Main {

  public static void main(String[] args) {

    ObservableExample observable = new ObservableExample();

    observable.addObserver(new Example1());
    observable.addObserver(new Example2());

    observable.notifyObservers();
  }
}
