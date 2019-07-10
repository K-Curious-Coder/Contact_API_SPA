using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MimeKit;
//using MimeKit.Utils;

namespace EmailFeature.Service
{
  public class Emailer
  {
    public static string EmailFeedbackMessage { get; set; }

    public string FromDisplayName { get; set; }
    public string FromEmailAddress { get; set; }

    public string Subject { get; set; }
    public string Message { get; set; }

    public string EmailServerHost { get; set; }
    public int SmtpPort { get; set; }
    public bool IsSSL { get; set; }
    public string EmailServerHostAdminUserName { get; set; }
    public string EmailServerHostAdminPassword { get; set; }

    public string ToDisplayNameDeveloper { get; set; }
    public string ToEmailAddressDeveloper { get; set; }

    public string ToDisplayNameOwnerClient { get; set; }
    public string ToEmailAddressOwnerClient { get; set; }

    //public async Task SendEmailAsync(string fromDisplayName, string fromEmailAddress, string toName, string toEmailAddress, string subject, string message, params Attachment[] attachments)
    //mm
    private MimeMessage GetEmailMessage(MimeMessage mimeMessage)
    {
      mimeMessage.From.Add(new MailboxAddress(name: this.FromDisplayName, address: this.FromEmailAddress));

      mimeMessage.To.Add(new MailboxAddress(name: this.ToDisplayNameDeveloper, address: this.ToEmailAddressDeveloper));

      mimeMessage.Subject = this.Subject;

      var builder = new BodyBuilder();

      builder.TextBody = this.Message;
      builder.HtmlBody = this.Message;

      #region If using images!
      // Use this if using images!
      // generate a Content-Id for the image we'll be referencing
      //var contentId = MimeUtils.GenerateMessageId();
      // Since selfie.jpg is referenced from the html text, we'll need to add it to builder.LinkedResources and then set the Content-Id header value
      //builder.HtmlBody = $"{this.Message}, {contentId}";
      //builder.LinkedResources.Add(@"C:\Users\Joey\Documents\Selfies\selfie.jpg");
      //builder.LinkedResources[0].ContentId = contentId;

      // We may also want to attach a calendar event for Monica's party...
      //builder.Attachments.Add(@"C:\Users\Joey\Documents\party.ics");
      #endregion

      mimeMessage.Body = builder.ToMessageBody();

      return mimeMessage;
    }

    private async Task SetEmailClient(MimeMessage mimeMessage)
    {
      using(var client = new SmtpClient())
      {
        // For demo-purposes, accept all SSL certificates (in case the server supports STARTTLS)
        client.ServerCertificateValidationCallback = (sender, certificate, certChainType, errors) => true;
        client.AuthenticationMechanisms.Remove("XOAUTH2");

        await client.ConnectAsync(this.EmailServerHost, this.SmtpPort, this.IsSSL).ConfigureAwait(false);

        await client.AuthenticateAsync(userName: this.EmailServerHostAdminUserName, password: this.EmailServerHostAdminPassword).ConfigureAwait(false);

        await client.SendAsync(mimeMessage).ConfigureAwait(false);
        await client.DisconnectAsync(true).ConfigureAwait(false);
      }
    }

    public async Task SendEmailAsync()
    {
      await this.SetEmailClient(GetEmailMessage(mimeMessage: new MimeMessage()));
    }
  }
}
