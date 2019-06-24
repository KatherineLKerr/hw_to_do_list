import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>{
  new Vue({
    el: "#app",
    data: {
      items: ["Buy Shopping", "Clean Bathroom", "Car's MOT"],
      newItem: ""
    },
    methods: {
      saveNewItem: function() {
        this.items.push(this.newItem);
        this.newItem = "";
      } //comma needs to go here if you add another method
    }//end of methods
  });//end of new vue
});
