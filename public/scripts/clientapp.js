/**
 * Created by user on 2/16/16.
 */
$(document).ready(function() {
   $('#submit-button').on('click', postData);

   //getData();
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
      url: '/people', //this referts to the app.get in the app.js
      success: function(data) {
         console.log(data);
      }
   })
}