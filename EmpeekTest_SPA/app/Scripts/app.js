var $$ServiceUrl = 'http://localhost:55074/api';
var DirectoryApp = angular.module("DirectoryApp", ["ngRoute"]);

DirectoryApp.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "app/Views/BrowseDirectory/Index.html",
        controller: "BrowseDirectoryController"
    })
    .when("/Folder/FolderContent/:id*", {
        templateUrl: "app/Views/Folder/FolderContent.html",
        controller: "FolderController"
    })
    .when("/CountFolderFiles/Index/:id*", {
        templateUrl: "app/Views/CountFolderFiles/Index.html",
        controller: "CountFolderFilesController"
    })
    .otherwise({
        templateUrl: "/",
        controller: "BrowseDirectoryController"
    });

});