
$(document).on('ready', function() {
  // getItems();
});
// POST TO CREATE AN ITEM
$('form').on('submit',function(e){
  e.preventDefault();
  var payload = {
     name:$("#name").val(),
     location:$("#location").val()
  };
  $.post('/items',payload,function(data){
    $('#all').html('Added '+ data.name +" in the "+ data.location);
    getItems();
  });
});

// delete item
$(document).on('click','.delete-button',function(){
  $.ajax({
    method: "DELETE",
    url: '/item/' + $(this).attr('id')}).done(function(data){
      // $('#all').html('');
      $('#results').html('success!');
      getItems();
    });

});

// FUNCTION FOR DISPLAYING THE ITEMS

function getItems(){
  $('#all').html('');
  $.get('/items',function(data){
    console.log(data.location)
    for(var i= 0; i<data.length;i++){
      $('#all').prepend('<tr>' +
        '<td><a href="#">' + data[i].name + '</a></td>' +
        '<td>' + data[i].location + '</td>' +
        '<td><a class="btn btn-danger btn-xs delete-button" id="' + data[i]._id + '" role="button">Delete</a>' +
        '&nbsp;<a class="btn btn-primary btn-xs edit-button" id="' + data[i]._id + '" role="button">Edit</a></td>' +
        '</tr>'
        );
      $('form input').val('');
    }
  });
}


