$(document).ready(function () {
  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSef15TyZhHGLiO91Uu1vHXMb0O44NrOjy_j6tPL_XkKglvzKQ/formResponse',
      data: formData,
      type: 'POST',
      dataType: 'xml',
      statusCode: {
        0: function () {
          // $(".end-message").slideDown();
          // $(".submit-btn").fadeOut();
          window.location.href =
            'https://giftech-inc.github.io/GoogleFormRedirect/result.html';
        },
        200: function () {
          // $(".false-message").slideDown();
        },
      },
    });
    event.preventDefault();
  });
});
