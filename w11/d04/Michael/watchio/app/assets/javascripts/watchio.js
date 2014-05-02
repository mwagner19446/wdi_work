//REQUIREMENTS
// 1 Add a movie to the Watch List
// 1A An Added Movie should have its poster displayed with it.  
// 2 Update the movie as seen
// 3 Delete the movie


var Movie = Backbone.Model.extend({
  urlRoot: "/movies"
}); 

var MovieCollection = Backbone.Collection.extend({
  model: Movie, 
  url: "/movies"
}); 

var MovieView = Backbone.View.extend({
  tagName: "li", 

  initialize: function () {
    this.listenTo(this.model, "change", this.render)
    this.render(); 
  }, 

  events: {
    "change input[type='checkbox']": "toggleSeen", 
    "click span": "destroy"
  }, 

  toggleSeen: function(e){
    var checked = $(e.target).is(":checked"); 
    this.model.set('seen', checked); 
    this.model.save(); 
  }, 

  destroy: function(){
    this.model.destroy(); 
    this.remove(); 
  }, 

  render: function(){
    var template = $("script.template").html()
    var rendered = _.template(template, { movie: this.model});
    this.$el.html(rendered);  
  } 
}); 

var ListView = Backbone.View.extend({
  el: "ul",

  initialize: function() {
    this.listenTo(this.collection, "reset", this.addAll); 
    this.listenTo(this.collection, "add", this.addOne); 
  }, 

  addAll: function() {
    this.collection.each(this.addOne.bind(this)); 
  }, 

  addOne: function(movie){
    var view = new MovieView({model: movie}); 
    this.$el.append(view.el);
  }

}); 

var FormView = Backbone.View.extend({
  el: 'form', 

  events: {
    "submit": "createMovie"
  }, 

  createMovie: function(e) {
    e.preventDefault(); 
    var title = this.el.elements["title"].value; 
    this.collection.create({title: title})
    this.el.reset(); 
  }


}); 



$(document).ready(function(){
  var movies = new MovieCollection(); 
  var moviesView = new ListView({collection: movies});
  var formView = new FormView({collection: movies});
  movies.fetch({reset: true});
}); 