angular.module("GradApp",[])
  .controller("Controller", function($scope,MyService) {
    $scope.students = MyService.getStudents();
    $scope.projects = MyService.getProjects();
    $scope.skills = MyService.getSkills();
})
.service("MyService",function(){
  var studentArray = [
    {name: "Misha Devine"},
    {name: "Kelly Price"}, 
    {name: "Jasmine Franklin"}, 
    {name: "Julie Frisco"},
    {name: "Kirsten Couch"}
  ];
  
  var projectsArray = [
    {name: "Misha Devine"},
    {name: "Kelly Price"}, 
    {name: "Jasmine Franklin"}, 
    {name: "Julie Frisco"},
    {name: "Kirsten Couch"}
  ];
  
  var skillsArray = [
    {name: "Javascript"},
    {name: "PHP"}, 
    {name: "Angular"}, 
    {name: "Node"},
    {name: "SASS"}
  ];
  
  this.getStudents = function () {
    return studentArray;
  }
  
  this.getProjects = function () {
    return projectsArray;
  }
  
  this.getSkills = function () {
    return skillsArray;
  }
});