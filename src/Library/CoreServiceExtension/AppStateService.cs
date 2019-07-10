using EmailFeature.Service;
using Microsoft.Extensions.DependencyInjection;

namespace CoreServiceExtension
{
  public static class AppStateService
  {
    public static void ConfigureAppState(this IServiceCollection services)
    {
      services.AddTransient<IEmailSender, EmailSender>();
      //services.AddScoped<IEmailSender, EmailSender>();
    }
  }
}
