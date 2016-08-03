$(function() {
  $('.dino').submit(function(event) {
    event.preventDefault();
    var type;
    if ($('select[name=type]').val() === 0) {
      type = 'html';
    }
    else {
      type = $('select[name=type]').val();
    }
    var paragraphs = $('#paragraphs').val();
    var words = $('#words').val();
   $.get('http://dinoipsum.herokuapp.com/api/?format=' + type + '&words=' + words + '&paragraphs=' + paragraphs).then(function(html) {
     if (type === 'html') {
       $('output').html(html);
     }
     else if (type === 'text') {
       var output = '';
       html.split('.').forEach(function(p) {
         output = output + '<p>' + p + '</p>';
       });
       $('#output').html(output)
     }
     else {
       var output = '';
       html.forEach(function(p) {
         output = output + '<p>' + p.join(' ') + '</p>';
       });
       $('#output').html(output)
     }
      }).fail(function(error) {
        $('#output').text('Where did all the dinosaurs go?');
      });
  });
});
