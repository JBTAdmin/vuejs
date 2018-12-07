new Vue({
  el: "#app",
  data: {
    role: "",
    tagName: ""
  },
  // define all custom methods within the 'methods' object
  methods: {
    greet() {
        alert("Hi");
    },
    showRole(customRole, event) {
      // 'this' keyword refers to the current Vue instance
      this.role = customRole;
      this.tagName = event.target.tagName;
    }
  }
});
