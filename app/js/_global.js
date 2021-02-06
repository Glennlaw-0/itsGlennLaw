// Global
console.log('Load Global');

// Instantiating the global app object
var app = {};

app.global = {
  init: function () {
    // Load all global functions here
    console.log('load global functions');
    app.global.loadHeader();
  },
  loadHeader: function () {
    // Some specific function
    console.log('loadHeader()');
  },
};

// Run the global stuff
app.global.init();
