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
    var form = $(this);
    userInfo = form.serialize();

    $.ajax({
      method: 'POST',
      url: url,
      data: userInfo
    })
    .done(function(response){
      window.location = "/users/" + response
    })
  })

  $(".register").on('click', function(event){
    event.preventDefault();
    var url = $(this).attr('href');

    $.ajax({
      method: 'GET',
      url: url
    }).done(function(response){
      $('.container').html(response);
    })
  })

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

  $('.register').on('click', function(event){
    event.preventDefault();
    var url = $(this).attr('href');

    $.ajax({
      url: url,
      method: 'GET'
    })
    .done(function(response){
      $('.container').html(response);
    });
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
  })

  $('.display-pups').on('click', function(event){
    event.preventDefault();
    $('.gallery').show();
    var lat = 30
    var lon = 30
    var url = $(this).attr('href') + lat + '&lon=' + lon + '&radius=5&format=json&nojsoncallback=1'


    $.ajax({
      async: true,
      crossDomain: true,
      method: 'GET',
      url: url + lat + '&lon=' + lon + '&radius=5&format=json&nojsoncallback=1',
      headers: {}
    })
    .done(function(response){
        $.each(response.photos.photo, function(i, gp) {
          var farmId = gp.farm;
          var serverId = gp.server;
          var id = gp.id;
          var secret = gp.secret;

          $('.gallery').append('<div><img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/></div>');
        });
    });
  });

});

function initiateLoc() {
    navigator.geolocation.getCurrentPosition(handle_geolocation_query);
     }

 function handle_geolocation_query(position){
     alert('Lat: ' + position.coords.latitude + ' ' +
           'Lon: ' + position.coords.longitude);
 }
