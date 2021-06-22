using System.Web.Http;		// this enables [HttpGet] and [AllowAnonymous]
using DotNetNuke.Web.Api;	// this is to verify the AntiForgeryToken

[AllowAnonymous]			// define that all commands can be accessed without a login
public class RssController : ToSic.Sxc.Dnn.ApiController
{

  // TODO: SPM
  // - inherit from hybrid
  // - make it return an xml based on the _RSS Feed.cshtml
  // - but make sure you use an XmlDocument object or something to ensure it's reliable
  // - Then modify the link to point to Link.To(api: ...)
  // - test with an RSS reader
  // - verify it works on Oqtane

    [HttpGet]
    public string Feed()
    {
        return "Hello from the controller with ValidateAntiForgeryToken in /api";
    }

}
