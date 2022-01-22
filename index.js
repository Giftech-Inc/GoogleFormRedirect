$(document).ready(function () {
  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdLdri6qyTj1apAxwKJv1ovBW0Rb_YWWbUrS1DpKk8f1Sz0og/formResponse',
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
