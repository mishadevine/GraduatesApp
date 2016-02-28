module.exports = function () {
var dotenv = require('dotenv').load();
var Sequelize = require('sequelize');
var mysql = require('mysql');
var _sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

var _Student = _sequelize.define('student', {
  name: {
    type: Sequelize.STRING
  }
});

var _Project = _sequelize.define('project', {
  url: {
    type: Sequelize.STRING
  }
});

var _Skill = _sequelize.define('skill', {
  level: {
    type: Sequelize.STRING
  }
});

_sequelize.sync();

return {
    connection: _sequelize,
    student: _Student,
    project: _Project,
    skill: _Skill
};

}();
