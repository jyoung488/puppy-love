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

  // $('button').on('click', function(event){
  //   $.ajax({
  //     url: "https://api.flickr.com/services/rest/",
  //     data: {
  //       method: "flickr.photos.search",
  //       api_key: ENV['FLICKR_KEY'],
  //       lat: 37.8,
  //       lon: -122.25,
  //       radius: 5,
  //       tags: "puppies,dogs",
  //       format: "json",
  //       nojsoncallback: 1
  //     }
  //   })
  //   .done(function(response){
  //       $.each(response.photos.photo, function(i, gp) {
  //         var farmId = gp.farm;
  //         var serverId = gp.server;
  //         var id = gp.id;
  //         var secret = gp.secret;
  //
  //         // console.log('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');
  //
  //         $('.gallery').append('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');
  //       });
  //   });
  // });
  // var lat = '37.8'
  // var long = '-122.25'
  // var call = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=35d6e43be466c649556aaffa8f4e75a1&tags=puppies&lat=' + lat + '&lon=' + long + '&radius=5&format=json&nojsoncallback=1'

  $('.show').on('click', function(event){
    event.preventDefault();
    url = $(this).attr('href');

    $.ajax({
      async: true,
      crossDomain: true,
      method: 'GET',
      url: url,
      headers: {}
    })
    .done(function(response){
        $.each(response.photos.photo, function(i, gp) {
          var farmId = gp.farm;
          var serverId = gp.server;
          var id = gp.id;
          var secret = gp.secret;

          // console.log('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');

          $('.wrapper').append('<div class="dt-8 tl-6 tp-4 ml-6"><img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/></div>');
        });
    });
  });
});
