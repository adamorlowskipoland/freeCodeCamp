$(document).ready(function() {
    $("#three, #seven").click(function() {
      $("#mark").hide(500);
      $("#wrong").show(500);
      $(".quiz__answers--btn").attr("disabled", true);
    });
    $("#five").click(function() {
      $("#mark").hide(500);
      $("#right").show(500);
      $(".quiz__answers--btn").attr("disabled", true);
    });


    $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

            window.location.hash = hash;
          });
        }
    });
});