var app = new Vue({
  el: "#app",
  data: {
    message: "Hi",
    counter: 0
  },
  // define all the methods within the 'methods' object
  methods: {
    greet(greeting) {
      // 'this' keyword refers to the current Vue instance
      this.message = greeting;
    },
    // another way to define methods before es6
    addOne: function() {
      this.counter += 1;
    }
  }
});
