let database = require("../database");
const passport = require("../middleware/passport");

let authController = {
  login: (req, res) => {
    const isLoggedIn = req.isAuthenticated();
    res.render("auth/login", { isLoggedIn });
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  // loginSubmit: (req, res) => {
  //   res.redirect("/reminders");
  // },
  loginSubmit: passport.authenticate("local", {
      successRedirect: "/reminders",
      failureRedirect: "/login",
    }),

  registerSubmit: (req, res) => {
    // implement later
  },
};

module.exports = authController;
