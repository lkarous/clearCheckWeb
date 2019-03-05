var reloadSize = function(){
  var height = $(window).height();
  var headerH = 120,footerH = 100;
  if(height>800){
    var middleH = height - headerH - footerH;
    $(".middle1").css("height",middleH+"px");
    $(".middle2").css("height",middleH+"px");
  }else{
    $(".middle1").css("height","580px");
    $(".middle2").css("height","580px");
  }
  $(".header").css("height",headerH+"px");
  $(".footer").css("height",footerH+"px");
}
$(function(){
  reloadSize();
  $(window).resize(function() {
    reloadSize();
  });
});
