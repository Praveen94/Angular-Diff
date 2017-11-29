var app=angular.module('app', ['ds.objectDiff']);
app.controller('MyController', ['$scope', 'ObjectDiff', function($scope, ObjectDiff){
       $scope.yourObjectOne = {
         name:{
           firstName:"Rajeev",
           middleName:"Kumar",
           lastName:"S"
         },
         year:2012,
         subjectMarks:{
           Maths:[100,90,80,95],
           Physics:[100,85,80,90],
           Chem:[100,89,85,85]
         }
       };
       $scope.yourObjectTwo = {
         name:{
           firstName:"Suresh",
           middleName:"Babu",
           lastName:"K"
         },
         year:2017,
         subjectMarks:{
           Maths:[100,90,80,95],
           Physics:[100,85,80,90],
           Chem:[10,85,90,100]
         }
       };

       // This is required only if you want to show a JSON formatted view of your object without using a filter
       $scope.yourObjectOneJsonView = ObjectDiff.objToJsonView($scope.yourObjectOne);
       $scope.yourObjectTwoJsonView = ObjectDiff.objToJsonView($scope.yourObjectTwo);

       // you can directly diff your objects js now or parse a Json to object and diff
       var diff = ObjectDiff.diffOwnProperties($scope.yourObjectOne, $scope.yourObjectTwo);

       // you can directly diff your objects including prototype properties and inherited properties using `diff` method
       var diffAll = ObjectDiff.diff($scope.yourObjectOne, $scope.yourObjectTwo);

       console.log(diffAll);
       // gives a full object view with Diff highlighted
       // $scope.diffValue = ObjectDiff.toJsonView(diff);

       // gives object view with onlys Diff highlighted
       // $scope.diffValueChanges = ObjectDiff.toJsonDiffView(diff);

   }]);
