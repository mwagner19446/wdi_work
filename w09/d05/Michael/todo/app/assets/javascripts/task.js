//OPen Questions: 
//Problem:  New Records added do not have the proper event listeners.  Tried creating a separate function and calling that within the other function, but that simply invalidate the other event listners.  How to properly setup scope? 
//Problem 2:  How to get the new ID? 

// http://stackoverflow.com/questions/7203304/warning-cant-verify-csrf-token-authenticity-rails
$.ajaxSetup({
  headers: {
    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
  }
});

$("form button").click(function(e){
  e.preventDefault()
  var task = $("form input")[1]
  task = task.value
  $.post("task/create", {task: task } );
  var item = $("<li>").attr("id", $("div#max-num").text() ).addClass("ui-state-default").text(task).append($("<span>").addClass("ui-icon ui-icon-arrowthick-2-n-s")) 
  var checkbox = $("<input type='checkbox'>").appendTo(item)
  var delbutton = $("<button class='delete'></button").text("delete").appendTo(item)
  item.appendTo($("ul"))
  $("form input").val("")
});

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

$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });
