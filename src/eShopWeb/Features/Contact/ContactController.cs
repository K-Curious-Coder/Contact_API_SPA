using System;
using System.Threading.Tasks;
using EmailFeature.Service;
using eShopWeb.Features.Contact.ViewModels;
using eShopWeb.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace eShopWeb.Features.Contact
{
  [Produces("application/json")]
  [Route("api/[controller]")]
  [ApiController]
  public class ContactController : ControllerBase
  {
    public IEmailSender EmailSender { get; set; }

    private readonly AppSettings appSettings;

    public ContactController(IEmailSender emailSender, IOptions<AppSettings> appSettings)
    {
      this.EmailSender = emailSender;
      this.appSettings = appSettings.Value;
    }

    private Emailer SetEmailData(ContactViewModel model)
    {
      var emailer = new Emailer();

      //Start: Setup
      emailer.EmailServerHost = this.appSettings.EmailServerHost;
      emailer.SmtpPort = this.appSettings.SmtpPort;
      emailer.IsSSL = this.appSettings.IsSSL;
      emailer.EmailServerHostAdminUserName = this.appSettings.EmailServerHostAdminUserName;
      emailer.EmailServerHostAdminPassword = this.appSettings.EmailServerHostAdminPassword;

      emailer.ToDisplayNameDeveloper = this.appSettings.ToDisplayNameDeveloper;
      emailer.ToEmailAddressDeveloper = this.appSettings.ToEmailAddressDeveloper;
      //End: Setup

      emailer.FromDisplayName = model.TitleAndFullName;
      emailer.FromEmailAddress = model.Email;
      emailer.Subject = $"Re: {model.TitleAndFullName} contacting us.";
      emailer.Message = $"{model.TitleAndFullName} sent the following message: {model.Message} - Date: {DateTime.Now.ToString()}";

      return emailer;
    }

    [HttpGet]
    public IActionResult Get() => Ok("Test Data");

    [HttpPost]
    public async Task<ActionResult> Post([FromBody]ContactViewModel model)
    {
      await this.EmailSender.SendEmailAsync(this.SetEmailData(model: model));

      return Ok();
    }
  }
}
