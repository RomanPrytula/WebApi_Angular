using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace EmpeekTest.Models
{
    public class FilesCount
    {
        private const int MB = 1000000;
        public delegate bool IsEqual(long x);

        public static long Sum(string folderName, IsEqual func)
        {
            long result = 0;
          
            DirectoryInfo dir = new DirectoryInfo(folderName);
            FileInfo[] files = dir.GetFiles("*");
            foreach (var file in files)
            {
                if (func(file.Length / MB))
                    result++;
            }

            DirectoryInfo[] subDirs = dir.GetDirectories();
            foreach (DirectoryInfo subDir in subDirs)
            {
                result += Sum(subDir.FullName, func);
            }
                        
            return result;
        }

    }
}