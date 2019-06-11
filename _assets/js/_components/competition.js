////////////////////////////////////////////////////////////////////////////////
//    Competition form
////////////////////////////////////////////////////////////////////////////////
var competitionForm = (function functionName() { // IIFE to control scope of form code

  var form = {
    element: $('.competition-form'),
    inputClass: 'js-form-input',
    isOnPage: function () { return this.element.length > 0; },
    statusMessages: [
      {
        'id': 'expired',
        'title': 'Competition closed',
        'description' : 'This competition is not running and we are no longer accepting new entries.'
      }
    ],
  };

  // is the competition form on the page?
  if (form.isOnPage()) {
    // setting up the form
    formFunctions(form).init();
    // has the competition expired?
    var currentDate = new Date();
    var expiredDate = new Date(form.element.data('expires'));
    if (currentDate > expiredDate) { // has today's day passed the expired date
      formFunctions(form).showMessage('expired'); // show expired competition message
    }
    // submit form function
    form.element.submit(function(e){
      // get the current date and convert into "YYYY-MM-DD HH:MM" format
      var now = new Date();
      var timestamp = now.getFullYear() + "-" + ("0"+(now.getMonth()+1)).slice(-2) + "-" + ("0" + now.getDate()).slice(-2) + " " + ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2);
      // add timestamp for entry to hidden input
      $('.js-form-entry-time').val(timestamp);
      // check if data is valid
      if (formValidation(form).isValid()) {
        formFunctions(form).submissionInProgress();
      } else {
        e.preventDefault(); // stop the default submit function
        formValidation(form).scrollToFirstError();
      }
    });
  }

}());