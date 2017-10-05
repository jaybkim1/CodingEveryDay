$(document).ready(function () {
  $(document).on('click', '.control nav a', function (event) {
    history.pushState(null, null, event.target.href); // URL 로딩없이 바꾸는 코드
    $('article').load(event.target.href+' article>.content');
    event.preventDefault();
    alert(event.target.href);
  })
  $(window).on('popstate', function(event){
    $('article').load(location.href+' article>.content');
  })
  var audio = new Audio('Tyburn - Eden.mp3');
  $(document).on('click', '.control .player .play', function(event){
    audio.play();
  });
  $(document).on('click', '.control .player .pause', function(event){
    audio.pause();
  });
});
