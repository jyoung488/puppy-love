$(document).ready(function() {
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

  $('#logout').on('click', function(event){
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

  $('#register').on('click', function(event){
    event.preventDefault();

    $.ajax({
      url: '/users/new',
      method: 'GET'
    })
    .done(function(response){
      $('.container').html(response);
    });
  });

  $('.container').on('submit','.login-form', function(event){
    event.preventDefault();
    var form = $(this);
    userInfo = form.serialize();

    $.ajax({
      method: 'POST',
      url: '/users',
      data: userInfo
    })
    .done(function(response){
      window.location = "/"
    })
  })

  $('button').on('click', function(event){
    $.ajax({
      async: true,
      crossDomain: true,
      method: 'GET',
      url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=94049170d6810a26619006597bc3c72e&tags=puppy%2C+dog&lat=37.80&lon=-122.25&radius=10&format=json&nojsoncallback=1&auth_token=72157676261047282-4c49609871a0a22e&api_sig=78ed3a2c84fdb495516faafda296043d',
      headers: {}
    })
    .done(function(response){
        $.each(response.photos.photo, function(i, gp) {
          var farmId = gp.farm;
          var serverId = gp.server;
          var id = gp.id;
          var secret = gp.secret;

          console.log('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');

          $('.gallery').append('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');
        });
    });
  });
});
