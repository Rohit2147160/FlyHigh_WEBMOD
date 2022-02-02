var app = angular.module("myApp", []);
app.controller("roaster_ctrl",function($scope,$http)
{
    $http.get("https://rohit2147160.github.io/JSONFIle/roaster.json")
    .then(function(response)
    {
        $scope.r_list = response.data.roaster;
        $scope.rowlimit = response.data.length();
        // $scope.rowlimit = 6;
    });
});

app.filter("name",function()
{
    return function(input)
    {
        return input.substring(0,1).toUpperCase() + input.substring(1);
    }
});


app.filter("unit",function()
{
    return function(input)
    {
        return input + " seats";
    }
});

