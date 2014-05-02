var Todo = Backbone.Model.extend({ 
  urlRoot: "/todos"
});

var TodoCollection = Backbone.Collection.extend({
  model: Todo,
  url: "/todos"
});

var TodoView = Backbone.View.extend({
  tagName: "li",

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
    this.render();
  },

  events: {
    "change input[type='checkbox']": "toggleDone",
    "click span": "destroy"
  },

  toggleDone: function(e) {
    var checked = $(e.target).is(":checked");
    this.model.set('done', checked);
    this.model.save();
  },

  destroy: function() {
    this.model.destroy();
    this.remove();
  },

  render: function() {
    var template = $("script.template").html();
    var rendered = _.template(template, { todo: this.model });
    this.$el.html(rendered);
  }
});

var FormView = Backbone.View.extend({
  el: "form",

  events: {
    "submit": "createTodo"
  },

  createTodo: function(e) {
    e.preventDefault();
    var task = this.el.elements["task"].value;
    this.collection.create({task: task});
    this.el.reset();
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

  addOne: function(todo) {
    var view = new TodoView({model: todo});
    this.$el.append(view.el);
  }
});

$(document).ready(function() {
  var todos = new TodoCollection();
  var listView = new ListView({collection: todos});
  var formView = new FormView({collection: todos});
  todos.fetch({ reset: true });
});




// var Todos = [], ul;

// var Todo = Backbone.Model.extend({ 
//   urlRoot: "/todos" 
// });

// var TodoView = Backbone.View.extend({
//   tagName: "li", 

//   initialize: function() {
//     this.listenTo(this.model, "change", this.render)
//     this.render(); 
//   }

//   render: function () {
//     var template = $("script.template").html();
//     var rendered = _.template(template, {tod: this.model });
//     this.$el.html(rendered);
//   }
// }); 


// function buildLI(todo) {
//   var template = $("script.template").html();
//   var rendered = _.template(template, { todo: todo });
//   return $(rendered);
// };

// function attachListeners(li, todo) {
//   li.find("input[type='checkbox']").on("change", function() {
//     var checked = $(this).is(":checked");
//     todo.set({ done: checked });
//     todo.save();
//     render();
//   });

//   li.find("span").on("click", function() {
//     Todos.splice(Todos.indexOf(todo), 1);
//     todo.destroy();
//     render();
//   });

//   return li;
// };

// function render() {
//   ul.empty();

//   Todos.map(function(todo) {
//     var view = new TodoView({model: todo}); 
//     var li = view.el; 
//     return li; 
//   }).forEach(function(li){
//     ul.append(li);
//   }); 
// }


//   Todos.map(function(todo) {
//     var li = buildLI(todo);
//     li = attachListeners(li, todo);
//     return li;
//   }).forEach(function(li) {
//     ul.append(li);
//   });
// };

// $(document).ready(function(){
//   ul = $("ul");
  
//   $.getJSON("/todos", function(todos) {
//     todos.forEach(function(todo) {
//       Todos.push(new Todo(todo));
//     });
//     render();
//   });

//   $("form").on("submit", function(e) {
//     e.preventDefault();

//     var todo = new Todo({
//       task: this.elements["task"].value,
//       done: false
//     });
//     todo.save()
//     Todos.push(todo);
//     this.reset();
//     render();
//   });
// });


// var Todos = [], ul;

// // var Todo = function(todo) {
// //   this.task = todo.task;
// //   this.done = todo.done;
// //   this.id = todo.id;
// // };

// var Todo = Backbone.Model.extend({
//   urlRoot: "/todos"
// })

// // Todo.prototype.complete = function(bool) {
// //   this.done = bool;
// // }

// function buildLI(todo) {
//   var template = $("script.template").html();
//   var rendered = _.template(template, { todo: todo }); 
//   return $(rendered)
// };

// //OLD: 
// // function buildLI(todo) {
// //   var li = $("<li>" + todo.task + "</li>");
// //   var checkbox = $("<input />", { type: "checkbox" });

// //   li.append(checkbox);
// //   li.append($("<span>&times;</span>"));

// //   if (todo.done) {
// //     checkbox.prop("checked", true);
// //     li.addClass("done");
// //   };

// //   return li;
// // };

// function attachListeners(li, todo) {
//   li.find("input[type='checkbox']").on("change", function() {
//     // todo.complete($(this).is(":checked"));
//     var checked = $(this.is("checked"))
//     update(todo);
//     render();
//   });

//   li.find("span").on("click", function() {
//     Todos.splice(Todos.indexOf(todo), 1);
//     destroy(todo);
//     render();
//   });

//   return li;
// };

// function render() {
//   ul.empty();

//   Todos.map(function(todo) {
//     var li = buildLI(todo);
//     li = attachListeners(li, todo);
//     return li;
//   }).forEach(function(li) {
//     ul.append(li);
//   });
// };

// function update(todo) {
//   $.ajax({
//     type: "PUT",
//     url: "/todos/" + todo.id,
//     data: {todo: todo}
//   });
// };

// // function destroy(todo) {
// //   $.ajax({
// //     type: "DELETE",
// //     url: "/todos/" + todo.id
// //   });
// // };

// function destroy(todo){
//   var todo_task = new Task(todo)
//   todo_task.destroy()  
// }

// // function create(todo) {
// //   $.ajax({
// //     type: "POST",
// //     url: "/todos",
// //     data: {todo: todo}
// //   }).success(function(todo) {
// //     Todos.push(new Todo(todo));
// //     render();
// //   });
// // };

// function create(todo) {
//   var Task = Backbone.Model.extend({ urlRoot: '/todos', })
//   var todo_task = new Task(todo)
//   todo_task.save()
// }


// $(document).ready(function(){
//   ul = $("ul");
  
//   $.getJSON("/todos", function(todos) {
//     todos.forEach(function(todo) {
//       Todos.push(new Todo(todo));
//     });
//     render();
//   });

//   $("form").on("submit", function(e) {
//     e.preventDefault();

//     create(new Todo({task: this.elements["task"].value}));
//     this.reset();
//   });
// });