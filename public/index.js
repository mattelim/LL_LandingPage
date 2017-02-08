
$("body").mousemove(function(e) {
    var x = -(e.pageX + this.offsetLeft) / 45 + 60;
    var y = -(e.pageY + this.offsetTop) / 45 + 60;
    $(this).css('background-position', x + '% ' + y + '%');
});

$("#mainContainer").mousemove(function(e) {
    var x = -(e.pageX + this.offsetLeft) / 15 + 80;
    var y = -(e.pageY + this.offsetTop) / 15 + 80;
    $("#mainContainer").css('background-position', x + '% ' + y + '%');
});
