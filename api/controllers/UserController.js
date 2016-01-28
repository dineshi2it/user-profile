/**
 * UserController
 *
 * @description :: Server-side logic for User CRUD
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var UserController = {
  index: function(req, res) {
   return res.view();
  },

  /**
   * Update user avatar
   * @param {object} req - current request
   * @param {object} res - current response
   * req.body {avatar}
   */
  //TODO: code clean up and proper error handling 
  updateAvatar: function(req, res) {
    var userId = req.session.user.id;
    User.update({
      id: userId
    },{
      avatar: req.body.avatar
    }).exec(function afterwards(err, updated) {
      if (err) {
        console.log("err",err);
        return;
      }
    });
  }

};

module.exports = UserController;

