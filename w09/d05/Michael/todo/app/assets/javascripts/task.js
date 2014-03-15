var tasks 
function loadPage() {
  $.getJSON("task/loadpage", function(response){
    tasks = response
    $("<ul>").appendTo($("div#list"))
    for(var i=0; i < tasks.length; i++){
      var item = ($("<li>").attr("id",tasks[i].id).text(tasks[i].task) )
      $("<input type='checkbox'>").attr("id",i).appendTo(item)
      $("<img src='https://cdn1.iconfinder.com/data/icons/iconsweets/50/delete.png' >").appendTo(item)
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
    }); 

    $("img").click(function(e){
      $.ajax({
        type: "DELETE",
        url: "/task/"+ $(this).parent().attr('id')
        });
    });

  });
};
loadPage();

$("button").click(function(e){
  e.preventDefault()
  var task = $("form input").val()
  $.post("task/create", {task: task } );
  $("form input").val("")
})


var getId = function(){
  var x;
  $.getJSON("/notes/info", function(response){
    x = response["id"];
    $("<li id="+x+">").text($("input").val())
    .append("<input type='checkbox' id="+x+">").appendTo("ul");
    $("input").val(""); 
    $("ul li").on("click", "input", function(){
      $(this).parent().toggleClass("done");
      var crossOut;
      ($(this).parent().hasClass("done") == true) ? crossOut = true : crossOut = false;
      $.ajax({
        url: "/notes/"+$(this).parent().attr("id"),
        type: "PUT",
        data: {done: crossOut}
      });
    });
  });
};


