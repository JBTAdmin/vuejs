new Vue({
  el: "#app",
  data: {
    message: "Hi",
    url: "https://www.google.com"
  },
  // define all custom methods within the 'methods' object
  methods: {
    greet() {
      // 'this' keyword refers to the current Vue instance
      this.message === "Hi" ? this.message = "Hello" : this.message = "Hi";
    }
  }
});
