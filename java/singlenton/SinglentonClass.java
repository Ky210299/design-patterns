public class SinglentonClass {

  // This are the field of the class that we need
  private int globalCounter = 10;
  private int major;
  private int minor;
  private int revision;
  // Now this version is really, the app version. Is only one for all the app
  private String version;

  public String getVersion(){
    return version;
  }

  // This field can be the same for all the application
  // so we need ensure that only exist one instance of it
  private static final SinglentonClass isntance = new SinglentonClass(2, 3, 5);

  // Now must bring access to the unic instance of the class
  public static SinglentonClass getInstance(){
    return isntance;
  }

  // this is a expensive method
  public void expensiveMethod(){
    for(int i = 0; i < globalCounter; i++){
      System.out.println(i);
      for(int j = 0; j < globalCounter; j++){
        System.out.println(j);
        for(int k = 0; k < globalCounter; k++){
          System.out.println(k);
          }
        }
    }
  }

  // Overrinding the constructor ensure that cannot be intanced normally
  private SinglentonClass(int major, int minor, int revision){
    this.major = major;
    this.minor = minor;
    this.revision = revision;
    version = String.format("v%d.%d.%d", this.major, this.minor, this.revision);
  };
}
