$(document).ready(function() {

  $('.gallery').hide();

  $(".login").on('click', function(event){
    event.preventDefault();
    var url = $(this).attr('href');

    $.ajax({
      method: 'GET',
      url: url
    }).done(function(response){
      $('.container').html(response);
    })
  })

  $("#login").on('click', function(event){
    event.preventDefault();

    $.ajax({
      method: 'GET',
      url: '/login'
    }).done(function(response){
      $('.container').html(response);
    })
  })

  $('.container').on('submit','#form', function(event){
    event.preventDefault();
    var url = $(this).attr('action');
    var method = $(this).attr('method');
    var info = $(this).serialize();

    console.log(url);
    console.log(method);
    console.log(info);

    $.ajax({
      method: 'POST',
      url: '/login',
      data: info
    })
    .done(function(response){
      console.log(response);
      window.location = "/"
    });
  });

  $(".register").on('click', function(event){
    event.preventDefault();
    var url = $(this).attr('href');

    $.ajax({
      method: 'GET',
      url: url
    }).done(function(response){
      $('.container').html(response);
    })
  });

  $('.container').on('submit','#new-user', function(event){
    event.preventDefault();
    var form = this;
    var method = $(form).attr('method');
    var url = $(form).attr('action');
    var userInfo = $(form).serialize();

    $.ajax({
      method: method,
      url: url,
      data: userInfo
    })
    .done(function(response){
      window.location = "/"
    })
  });

  $('.logout').on('click', function(event){
    event.preventDefault();

    $.ajax({
      method: 'DELETE',
      url: '/logout'
    }).done(function(response){
      if (response) {
        window.location = "/"
      }
    })
  })



  $('.container').on('click', '.display-pups', function(event){
    event.preventDefault();

    var element = this;
    var lat;
    var lon;

    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

    var url = $('.display-pups').attr('href') + lat + '&lon=' + lon + '&radius=10&format=json&nojsoncallback=1';
      $.ajax({
      method: 'GET',
      url: url,
    })
    .done(function(response){
        $.each(response.photos.photo, function(i, gp) {
          var farmId = gp.farm;
          var serverId = gp.server;
          var id = gp.id;
          var secret = gp.secret;
          $('.gallery').append('<div class="picture"><img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"></div>');
          $('.gallery').fadeIn(1700);
          $(element).hide();
        });
      });
    });
  });
});
