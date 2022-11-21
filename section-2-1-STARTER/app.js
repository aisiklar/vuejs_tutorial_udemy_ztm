const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      url: "www.google.com",
      age: 20
    }
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`
    },
    increment() {
      this.age++;
    },
    updateLastName(event) {
      this.lastName = event.target.value;
    }
  }


}).mount('#app')



/* setTimeout(() => {
    vm.firstName = 'Bob';
}, 2000) */

