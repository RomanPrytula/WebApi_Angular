(function () {
    var CountFolderFilesController = function ($scope, BrowseDirectoryServices, $routeParams) {
        var name = $routeParams.id;
        var getCountFiles = function () {
            BrowseDirectoryServices.getFolderFilesCount(name)
            .then(function (response) {
                $scope.FolderFilesCount = response.data;
                $scope.curFoldFilesCountPath = name;
            });
        };
        getCountFiles();
    };

    DirectoryApp.controller("CountFolderFilesController", ["$scope", "BrowseDirectoryServices", "$routeParams", CountFolderFilesController]);
}());


