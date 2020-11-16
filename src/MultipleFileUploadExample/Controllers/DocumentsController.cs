using Microsoft.AspNetCore.Mvc;
using MultiFileUploadExample.Data.Requests;
using System.Threading.Tasks;

namespace MultipleFileUploadExample.Controllers
{
    [Route("api")]
    public class DocumentsController : Controller
    {
        [Route("SubmitDocuments")]
        public Task<IActionResult> SubmitDocuments(FileUploadRequest[] request)
        {
            //This does nothing as its just an example of how to use formData to send an array of multiple files and parameters with them
            return null;
        }
    }
}
