using Microsoft.AspNetCore.Http;
using MultiFileUploadExample.Data.Interfaces;

namespace MultiFileUploadExample.Data.Requests
{
    public class FileUploadRequest : IRequest
    {
        public IFormFile File { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
    }
}
