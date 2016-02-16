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
    {name: "www.teamtahjmowryofficial.is-great.org"},
    {name: "www.panyhamagazine.com"}, 
    {name: "www.panyhafoundation.org"}, 
    {name: "www.sandhillins.com"},
    {name: "www.theuselessweb.com"}
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