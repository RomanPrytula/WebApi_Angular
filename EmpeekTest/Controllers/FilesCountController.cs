using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EmpeekTest.Models;
using System.IO;


namespace EmpeekTest.Controllers
{
    public class FilesCountController : ApiController
    {
        // POST: api/FilesCount
        public Dictionary<string, long> Post([FromBody]FolderName value)
        {
            var name = value.Name;
            Dictionary<string, long> count = new Dictionary<string, long>();
            count.Add("Less 10Mb", FilesCount.Sum(name, x => x <= 10));
            count.Add("10Mb-50Mb", FilesCount.Sum(name, x => (x > 10) && (x <= 50)) );
            count.Add("More 100Mb", FilesCount.Sum(name, x => x >= 100));
            return count;

        }
    }
}
