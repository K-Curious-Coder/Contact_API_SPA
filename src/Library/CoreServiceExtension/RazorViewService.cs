using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.Extensions.DependencyInjection;

namespace CoreServiceExtension
{
  public static class RazorViewService
  {
    public static void ConfigureFeatures(this IServiceCollection services)
    {
      services.Configure<RazorViewEngineOptions>(o =>
      {
        // {2} is area, {1} is controller,{0} is the action    
        o.ViewLocationFormats.Clear();
        o.ViewLocationFormats.Add("/Features/{1}/Views/{0}" + RazorViewEngine.ViewExtension);
        o.ViewLocationFormats.Add("/Features/Shared/Views/{0}" + RazorViewEngine.ViewExtension);
        //
        //o.ViewLocationFormats.Add("/Views/Shared/{0}" + RazorViewEngine.ViewExtension);

        // Untested. You could remove this if you don't care about areas.
        o.AreaViewLocationFormats.Clear();
        o.AreaViewLocationFormats.Add("/Areas/{2}/Features/{1}/Views/{0}" + RazorViewEngine.ViewExtension);
        o.AreaViewLocationFormats.Add("/Areas/{2}/Features/Shared/Views/{0}" + RazorViewEngine.ViewExtension);
        o.AreaViewLocationFormats.Add("/Areas/Shared/Views/{0}" + RazorViewEngine.ViewExtension);
      });
    }
  }
}
