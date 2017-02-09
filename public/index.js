mql = window.matchMedia("only screen and (min-device-width: 320px) and (max-device-width: 568px)");

$("body").mousemove(function(e) {
  if (!mql.matches) {
    var x = -(e.pageX + this.offsetLeft) / 45 + 60;
    var y = -(e.pageY + this.offsetTop) / 45 + 60;
    $(this).css('background-position', x + '% ' + y + '%');
  }
});

$("#mainContainer").mousemove(function(e) {
  if (!mql.matches) {
    var x = -(e.pageX + this.offsetLeft) / 15 + 80;
    var y = -(e.pageY + this.offsetTop) / 15 + 80;
    $("#mainContainer").css('background-position', x + '% ' + y + '%');
  }
});
