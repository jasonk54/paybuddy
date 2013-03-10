$(document).ready(function() {
  var formHandler = function(event) {
    console['log']("submitted"); // fixme: validate form here
    event['preventDefault'](); // prevents the page from reloading
  };

  $("form")['submit'](formHandler); // register a callback

  $('#email_conf').click(function() {
    $('.payment_conf').toggle();
  });
});

