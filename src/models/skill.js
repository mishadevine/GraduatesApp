module.exports = function() {
  var db = require("./database.js");
  var sequelize = db.connection;

  function _create(data,err,success) {
    db.skill.create(data).then(success).catch(err);
  }

  function _update(data,err,success) {
    db.skill.find({where:{id:data.id}}).then(function(matchedSkill) {
      matchedSkill.updateAttributes(data).then(success).catch(err);
    }).catch(err);
  }

  function _find(data,err,success) {
    db.skill.find({where:{id:data.id}}).then(success).catch(err);
  }

  function _findAll(err,success) {
    db.skill.findAll().then(success).catch(err);
  }

  function _delete(data,err,success) {
    db.skill.destroy({where:{id:data.id}}).then(success).catch(err);
  }

  return {
    create: _create,
    update: _update,
    find: _find,
    findAll: _findAll,
    delete: _delete
  }

}();
