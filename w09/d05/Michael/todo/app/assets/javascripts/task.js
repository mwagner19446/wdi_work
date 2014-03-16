$("form button").click(function(e){
  e.preventDefault()
  var task = $("form input").val()
  $.post("task/create", {task: task } );
  $("form input").val("") 
})

$(":checkbox").click(function(e){
  $(this).parent().toggleClass("strikethrough")
  var crossOut; 
  ($(this).parent().hasClass("strikethrough")==true) ? crossOut = true: crossOut = false; 
  $.ajax({
    type: "PUT",
    url: "/task/"+$(this).parent().attr("id"),
    data: {done: crossOut}
    });
});

$("button.delete").click(function(e){
  $.ajax({
    type: "DELETE",
    url: "/task/"+ $(this).parent().attr('id')
    });
  $(this).parent().remove();
}); 


// $(function() {
//     $( "#sortable" ).sortable();
//     $( "#sortable" ).disableSelection();
//   });
