angular.module("GradApp",[])

  // exposing student data to frontend
  .controller("MasterController", function($scope,StudentInformation) {
    $scope.featuredStudent = "Misha Devine";
    StudentInformation.getStudents()
    .success(function(students){
      $scope.students = students;
      console.log("hey 1", $scope.students);
    });
})

// collecting static information
.service("StudentInformation", function($http){

  this.getStudents = function () {
    console.log("running")
    return $http.get("/API/studentInfo").success( function(response) {
      var students = response;
      console.log("data from api",students)
      return students;
      });
    }
  });
