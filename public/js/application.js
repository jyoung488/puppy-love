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

});
