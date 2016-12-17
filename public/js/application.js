$(document).ready(function() {
  $('#login').on('click', function(event){
    event.preventDefault();

    $.ajax({
      method: 'GET',
      url: '/login'
    })
    .done(function(response){
      $(".container").html(response);
    });
  });

  $('#register').on('click', function(event){
    event.preventDefault();

    $.ajax({
      method: 'GET',
      url: '/users/new'
    })
    .done(function(response){
      $(".container").html(response);
    });
  });

  $('#logout').on('click', function(event){
    event.preventDefault();

    $.ajax({
      method: 'DELETE',
      url: '/logout'
    })
    // .done(function(response){
    //   $(".container").html(response);
    // });
  });

});
