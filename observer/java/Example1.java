public class Example1 implements IObserver{

  // This a functionality in un observer
  // When this observer is notified call to update
  @Override
  public void update() {
    System.out.println("Example 1 has been called");
  }
}
