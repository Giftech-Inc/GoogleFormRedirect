$(document).ready(function () {
  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScLKP8uIMcJ0iM0ugq8GbvKnIT8TiXkxFrxVw8ZfIIAjTcwhQ/formResponse',
      data: formData,
      type: 'POST',
      dataType: 'xml',
      statusCode: {
        0: function () {
          // $(".end-message").slideDown();
          // $(".submit-btn").fadeOut();
          window.location.href = 'https://editor-camp.jp/law/thanks.html';
        },
        200: function () {
          // $(".false-message").slideDown();
        },
      },
    });
    event.preventDefault();
  });
});
