(function () {
    var BrowseDirectoryController = function ($scope, BrowseDirectoryServices) {
        var getDirs = function () {
            BrowseDirectoryServices.getDirectories()
            .then(function (response) {
                $scope.Dirs = response.data;
                $scope.SelectDir = $scope.Dirs[0];
            });
        };
        getDirs();
    };

    DirectoryApp.controller("BrowseDirectoryController", ["$scope", "BrowseDirectoryServices", BrowseDirectoryController]);
}());
