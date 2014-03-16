var gifs; 
var keyword;
var gifsAttached = 0

  function searchGifs(keyword){
    gifs = $.getJSON("/search?keyword="+ keyword)
  };

  function displayGifs(){
    $("<img>").attr("src",gifs.responseJSON.data[gifsAttached].images.original.url).appendTo($("div#gifs"))
    gifsAttached ++
  };

  //Step 1: Setup the Form Submit to capture the keyword and submit the form. 
  $("button#search").click(function(e){
    e.preventDefault()
    var keyword = e.target.parentElement.children[0].value
    searchGifs(keyword)
  })

  //Step 2: Display the Gifs
  $("<div>").attr("id","gifs").appendTo($("body"))
  $("button#add").click(function(){
    // for(i=0; i<gifs.responseJSON.data.length; i++ ){
    //   displayGifs()
    displayGifs();
    }
  });

  //Step 3:  When page is at bottom, call search again
  $(window).scroll(function(){
    if($(window).scrollTop() > $(document).height()- $(window).height() -10){
      displayGifs();
    }
  })



  //Step 4:  When 
