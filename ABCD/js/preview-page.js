$(".head-link").mouseover(function() {
  console.log('over')
  $(this).children(".tooltip").show();
}).mouseout(function () {
  console.log('out')
  $(this).children(".tooltip").hide();
});
