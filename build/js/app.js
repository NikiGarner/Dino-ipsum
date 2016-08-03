(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
