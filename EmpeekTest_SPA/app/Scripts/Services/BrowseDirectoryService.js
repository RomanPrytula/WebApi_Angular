(function () {
    var BrowseDirectoryServices = function ($http) {
        var url = $$ServiceUrl;
        var getDirectories = function () {
            return $http.get(url + '/Values')
        };
        
        var getFolderContent = function (folder) {
            var folderName = { Name: folder };
            return $http.post(url + '/Values', folderName);
        };

        var getFolderFilesCount = function (folder) {
            var folderName = { Name: folder };
            return $http.post(url + '/FilesCount', folderName);
        };


        return {
            getDirectories: getDirectories,
            getFolderContent: getFolderContent,
            getFolderFilesCount: getFolderFilesCount
        }

    };


    DirectoryApp.factory("BrowseDirectoryServices", ["$http", BrowseDirectoryServices]);
}());
