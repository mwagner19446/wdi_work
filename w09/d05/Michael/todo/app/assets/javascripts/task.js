function loadPage() {
  $("div#list").html("")

  $.getJSON("task/loadpage", function(response){
    $("<ul>").appendTo($("div#list"))
    for(var i=0; i < response.length; i++){
      var item = ($("<li>").attr("id",response[i].id).text(response[i].task) )
      var checkbox = $("<input type='checkbox'>").attr("id",i).appendTo(item)
      var delbutton = $("<button class='delete'></button").text("delete").appendTo(item)
      if(response[i].done == true){
        item.addClass("strikethrough")
        checkbox.attr("checked", true)
      }      
      item.appendTo("ul")
    }
    $(":checkbox").click(function(e){
      $(this).parent().toggleClass("strikethrough")
      var crossOut; 
      ($(this).parent().hasClass("strikethrough")==true) ? crossOut = true: crossOut = false; 
      $.ajax({
        type: "PUT",
        url: "/task/"+$(this).parent().attr("id"),
        data: {done: crossOut}
        });
      loadPage();
    });

    $("button.delete").click(function(e){
      $.ajax({
        type: "DELETE",
        url: "/task/"+ $(this).parent().attr('id')
        });
      loadPage();
    });

  });
};

loadPage();

$("form button").click(function(e){
  e.preventDefault()
  var task = $("form input").val()
  $.post("task/create", {task: task } );
  $("form input").val("")
  loadPage();
})

// $(":checkbox").click(function(e){
//   $(this).parent().toggleClass("strikethrough")
//   var crossOut; 
//   ($(this).parent().hasClass("strikethrough")==true) ? crossOut = true: crossOut = false; 
//   $.ajax({
//     type: "PUT",
//     url: "/task/"+$(this).parent().attr("id"),
//     data: {done: crossOut}
//   });
// }); 

// $("button.delete").click(function(e){
//   $.ajax({
//     type: "DELETE",
//     url: "/task/"+ $(this).parent().attr('id')
//     });
// });
 