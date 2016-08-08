using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace EmpeekTest.Models
{
    public class FolderInfo
    {
        public List<string> files { get; set; }
        public List<string> subFolders { get; set; }

        public FolderInfo(DirectoryInfo dir)
        {
            files = new List<string>();
            foreach (FileInfo file in dir.GetFiles("*"))
            {
                int idx = file.FullName.LastIndexOf(@"\");
                files.Add(file.FullName.Substring(idx + 1));
            }

            subFolders = new List<string>();
            foreach (DirectoryInfo subDir in dir.GetDirectories())
            {
                subFolders.Add(subDir.FullName);
            }
        }





    }
}