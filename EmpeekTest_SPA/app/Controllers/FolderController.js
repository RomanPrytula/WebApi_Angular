(function () {
    var FolderController = function ($scope, BrowseDirectoryServices, $routeParams) {
        var name = $routeParams.id;
        var getCurrentFolders = function () {
            BrowseDirectoryServices.getFolderContent(name)
            .then(function (response) {
                $scope.FolderData = response.data;
                $scope.currentFolderPath = name;
                $scope.SelectFold = $scope.FolderData.subFolders[0];
                $scope.IsFolders = $scope.FolderData.subFolders.length > 0;
                $scope.IsFiles = $scope.FolderData.files.length > 0;
            });
        };
        getCurrentFolders();
    };

    DirectoryApp.controller("FolderController", ["$scope", "BrowseDirectoryServices", "$routeParams", FolderController]);
}());


