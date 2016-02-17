/**
 * Created by user on 2/16/16.
 */
$(document).ready(function() {
   getData()

   $('#submit-button').on('click', postData);

});

function postData() {
   event.preventDefault();
   var values = {};

   $.each($('#sql-form').serializeArray(), function(i, field) {
      values[field.name] = field.value;
   });

   console.log(values);

   $.ajax({
      type: 'POST',
      url: '/people',
      data: values,
      success: function(data) {
         getData();
         console.log(data);
      }
   })
}

function getData() {
   $.ajax({
      type: 'GET',
      url: '/people', //this refers to the app.get in the app.js
      success: function(data) {
         console.log(data);
         appendDBToDom(data);
      }
   })
}

function appendDBToDom(info) {
   $('#DB-info').empty();
   for(var i = 0; i < info.length; i++) {
      //$('#DB-info').append('<p>' + info[i].id + '</p>');
      $('#DB-info').append('<p>' + info[i].name + '</p>');
      $('#DB-info').append('<p>' + info[i].address + '</p>');
      $('#DB-info').append('<p>' + info[i].city + ', ' + info[i].state + ' ' + info[i].zip_code + '</p>');
      //$('#DB-info').append('<p>' + info[i].state + '</p>');
      //$('#DB-info').append('<p>' + info[i].zip_code + '</p>');
   }
}