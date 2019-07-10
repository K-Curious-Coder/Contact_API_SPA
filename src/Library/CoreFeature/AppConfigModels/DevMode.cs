namespace CoreFeature.AppConfigModels
{
  public static class DevMode
  {
    public static int DevModeFake { get; } = 0;
    public static int DevModeReal { get; } = 1;
    public static int DevModeRealDeployed { get; } = 2;
    public static int DevModeProduction { get; } = 3;
  }
}
