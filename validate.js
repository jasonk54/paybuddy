$(document).ready(function() {
  var formHandler = function(event) {
    console['log']("submitted"); // fixme: validate form here
    event['preventDefault'](); // prevents the page from reloading
  };

  $("form")['submit'](formHandler); // register a callback
  
  $('#email_conf').click(function() {
    $('.payment_conf').toggle();
  });

  $("input[name='submit']").click(function() {
    var ccNumber = $('#cc_number').val();
    var ccv = $('#ccv').val();
    var validCCNumber = /\d{16}/;
    if (!validCCNumber.test(ccNumber)) {
      $('#span').show();
    } else {
      $('#span').hide();
    }
    var validCCV = /\d{3}/;
    if (!validCCV.test(ccv)) {
        $('#spanCCV').show();
    } else {
      $('#spanCCV').hide();
    }
  });
});   




    
