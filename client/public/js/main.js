// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

$('form').on('submit',function(e){
  e.preventDefault();
  var payload = {
     name:$("#name").val(),
     location:$("#location").val()
  };

  console.log(payload);

});
