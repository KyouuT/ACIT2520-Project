let database = require("../database");

let remindersController = {
  isLoggedIn : (req,res) =>{ req.isAuthenticated()
  },
  list: (req, res) => {
    let user = database.find((user) => user.name === req.user.name);
    res.render("reminder/index", { reminders: user.reminders, isLoggedIn: remindersController.isLoggedIn }); // req.user.reminders 로 바꾸기
  },

  new: (req, res) => {
    res.render("reminder/create", {isLoggedIn: remindersController.isLoggedIn});
  },

  listOne: (req, res) => {
    let user = database.find((user) => user.name === req.user.name);
    let reminderToFind = req.params.id;
    let searchResult = user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult, isLoggedIn: remindersController.isLoggedIn});
    } else {
      res.render("reminder/index", { reminders: user.reminders });
    }
  },

  create: (req, res) => {
    let user = database.find((user) => user.name === req.user.name);
    let reminder = {
      id: user.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    user.reminders.push(reminder);
    res.redirect("/reminders",);
  },

  edit: (req, res) => {
    let user = database.find((user) => user.name === req.user.name);
    let reminderToFind = req.params.id; 
    let searchResult = user.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult, isLoggedIn: remindersController.isLoggedIn});
  },

  update: (req, res) => {
    let user = database.find((user) => user.name === req.user.name);
    let reminderToUpdate = req.params.id;
    let reminder = user.reminders.find(reminder => reminder.id == reminderToUpdate);
    if (reminder) {
      reminder.title = req.body.title;
      reminder.description = req.body.description;
      reminder.completed = req.body.completed==='true';
    res.redirect("/reminders");
    };
  },

  delete: (req, res) => {
    let user = database.find((user) => user.name === req.user.name);
    let reminderToFind = req.params.id;
    let searchResult = user.reminders.findIndex(function (reminder) {
      return reminder.id == reminderToFind;
    });
    user.reminders.splice(searchResult, 1);
    res.redirect("/reminders");

  },
};

module.exports = remindersController;
