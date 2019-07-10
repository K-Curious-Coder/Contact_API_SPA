using System.Threading.Tasks;

namespace EmailFeature.Service
{
  public class EmailSender : IEmailSender
  {
    public async Task SendEmailAsync(Emailer emailer) => await emailer.SendEmailAsync();
  }
}

