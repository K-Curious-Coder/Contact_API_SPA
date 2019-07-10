using System.ComponentModel.DataAnnotations;

namespace eShopWeb.Features.Contact.ViewModels
{
  public class ContactViewModel
  {
    [Required(ErrorMessage = "Required")]
    [Display(Name = "Full Namee")]
    public string TitleAndFullName { get; set; }

    [EmailAddress]
    [Required(ErrorMessage = "Required")]
    [RegularExpression(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}" + @"\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\" + @".)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$", ErrorMessage = "Email is not valid")]
    [DataType(DataType.EmailAddress)]
    [Display(Name = "Email")]
    public string Email { get; set; }

    [Required(ErrorMessage = "Required")]
    [Display(Name = "Message")]
    public string Message { get; set; }
  }
}
