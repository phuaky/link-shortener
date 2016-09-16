$(function () {
  console.log('javascript loaded');

  $('.submit-button').submit(function (event) {
    event.preventDefault(); // stop the browser reloading
    var data = {url: $('#url').val()};
    $('.submit-button').trigger('reset'); // clear the form
    console.log(data);
    addURL(data);
  });

  // ADD URL
  function addURL (urlData) {
    $.ajax({
      url: 'http://localhost:3000/',
      type: 'POST',
      data: urlData
    }).done(function (data) {
      console.log('success posting URL');
      // draw and post hashed URL in display
      display(data)
      console.log(data);
    }).fail(function () {
      console.log('error posting URL');
    });
  }
});

function display (zebra) {
  $('.display').empty()
  $('.display').append(zebra)
}
