

  $("form").on("submit", function(e){
    e.preventDefault();
    var note = $("input").val();
    $.post("/welcome", {list: note}, function(response){
      console.log(response);
    } );
    this.reset();

  }); 

   

  function listTasks(){
    $.getJSON("/welcome", function(response){
    $.each(response, function(i, note) {
      $("<li>").text(note.list).appendTo("ul");
    })
      $("<input type=checkbox>").appendTo("li");

   });
  }

  listTasks();
  

    $('ul').on('change', 'li', function(){
    $(this).toggleClass('line');
});
  