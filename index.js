const passport = require("./middleware/passport");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const { ensureAuthenticated, forwardAuthenticated } = require("./middleware/checkAuth");

const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
const authController = require("./controller/auth_controller");


app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use(ejsLayouts);

app.set("view engine", "ejs");
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes start here
app.get("/reminders", ensureAuthenticated,reminderController.list);
app.get("/reminder/new", reminderController.new);
app.get("/reminder/:id", reminderController.listOne);
app.get("/reminder/:id/edit", reminderController.edit);
app.post("/reminder", reminderController.create);
// ⭐ Implement these two routes below!
app.post("/reminder/update/:id", reminderController.update);
app.post("/reminder/delete/:id", reminderController.delete);

// 👌 Ignore for now
app.get("/register", authController.register);
app.get("/login", forwardAuthenticated ,authController.login);
app.post("/register", authController.registerSubmit);
app.post("/login", authController.loginSubmit);

app.listen(8000, function () {
  console.log(
    "Server running. Visit: http://localhost:8000/reminders in your browser 🚀"
  );
});
