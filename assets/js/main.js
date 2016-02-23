angular.module("GradApp",[])

  // exposing student data to frontend
  .controller("MasterController", function($scope,StudentInformation) {
    $scope.students = StudentInformation.getStudents();
    $scope.projects = StudentInformation.getProjects();
    $scope.skills = StudentInformation.getSkills();
})

// collecting static information
.service("StudentInformation",function(){
  var studentArray = [
    {name: "Misha Devine"},
    {name: "Kelly Price"},
    {name: "Jasmine Franklin"},
    {name: "Julie Frisco"},
    {name: "Kirsten Couch"}
  ];

  var projectsArray = [
    {url: "www.teamtahjmowryofficial.is-great.org"},
    {url: "www.panyhamagazine.com"},
    {url: "www.panyhafoundation.org"},
    {url: "www.sandhillins.com"},
    {url: "www.theuselessweb.com"}
  ];

  var skillsArray = [
    {level: "Javascript"},
    {level: "PHP"},
    {level: "Angular"},
    {level: "Node"},
    {level: "SASS"}
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
