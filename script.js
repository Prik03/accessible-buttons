$("#likeBtn").on("click", function () {
  let isPressed = $(this).attr("aria-pressed") === "true";
  $(this).attr("aria-pressed", !isPressed)
         .css("color", isPressed ? "gray" : "#ff7c93");
});

 let isLike=true;
$("#LikeBtn").on("click",function(){
   isLike = !isLike;
  $(this).css("color", isLike ? "gray" : "#393ff3ff")
         .attr("aria-label",!isLike? 'Like':'Dislike');
});

 $("#darkModeSwitch").on("click", function() {
      $(this).toggleClass("active");
      let isOn = $(this).hasClass("active");
      $(this).attr("aria-checked", isOn);
      $("#statusBtn").text("Dark Mode: " + (isOn ? "On" : "Off"));
    });
