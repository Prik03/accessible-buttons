$("#likeBtn").on("click", function () {
  let isPressed = $(this).attr("aria-pressed") === "true";
  $(this).attr("aria-pressed", !isPressed)
         .css("color", isPressed ? "" : "#ff7c93");
});


 $("#darkModeSwitch").on("click", function () {
    let isChecked = $(this).attr("aria-checked") === "true";
    $(this).attr("aria-checked", !isChecked);
    $(this).text(`Dark Mode: ${isChecked ? "Off" : "On"}`);
  });