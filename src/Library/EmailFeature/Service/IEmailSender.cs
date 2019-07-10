using System.Threading.Tasks;

namespace EmailFeature.Service
{
  public interface IEmailSender
  {
    Task SendEmailAsync(Emailer emailer);
  }
}

