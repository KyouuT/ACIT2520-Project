let database = require("../database");
const passport = require("../middleware/passport");

let authController = {
  login: (req, res) => {
    const isLoggedin = req.isAuthenticated();
    res.render("auth/login", {isLoggedin});
  },

  register: (req, res) => {
    res.render("auth/register");
  },
  admin: (req, res) => {
    const isLoggedin = req.isAuthenticated();
    const isAdmin = req.user.role;
    req.sessionStore.all((err, sessions) => {
      if (err) {
        console.log(err);
      }else if(isAdmin === "admin"){
        res.render("auth/admin", {
          isLoggedin,
          sessions: sessions,
          user:req.user,
          isAdmin,
        });
      } 
    })
  },
  destroy:(req,res)=>{
    const sessionId = req.params.sessionId;
    req.sessionStore.destroy(sessionId, (error) => {
      if (error) {
          console.error('Error destroying session:', error);
          res.status(500).send('Error destroying session');
      }
      res.redirect('/admin');
    });
  },

  loginSubmit: passport.authenticate("local", {
      successRedirect: "/reminders",
      failureRedirect: "/login",
    }),

  registerSubmit: (req, res) => {
    // implement later
  },
};

module.exports = authController;
