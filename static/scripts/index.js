$(document).ready(function() {
  $("tbody tr")
    .slice(1)
    .on("click", function() {
      alert($(this).text());
    });
});
