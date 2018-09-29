var app = new Vue({
  el: "#app",
  data: {
    message: "Hi everyone!"
  },
  methods: {
    greet() {
      this.message = "Hi!"
      return this.message;
    }
  }
});
