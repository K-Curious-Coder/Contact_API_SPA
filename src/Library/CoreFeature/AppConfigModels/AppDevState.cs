namespace CoreFeature.AppConfigModels
{
  public class AppDevState
  {
    public static int DevelopmentLocal { get; } = 0;
    public static int DevelopmentLocalDeployed { get; } = 1;
    public static int Production { get; } = 2;

    public static int CurrentAppState { get; set; }
  }
}
