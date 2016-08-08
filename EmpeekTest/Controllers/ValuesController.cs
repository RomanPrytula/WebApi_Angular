using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.IO;
using EmpeekTest.Models;


namespace EmpeekTest.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<string> Get()
        {
            string[] drives = Environment.GetLogicalDrives();
            return drives;
        }

        // POST api/values
        public FolderInfo Post([FromBody]FolderName value)
        {
            DirectoryInfo dir = new DirectoryInfo(value.Name);
            FolderInfo total = new FolderInfo(dir);
            return total;
        }
    }
}
