const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      middleName: '',
      lastName: 'Doe',
      url: "www.google.com",
      age: 20
    }
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName(event) {
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    }
  },
  computed: {
    fullName() {
      console.log('computed property, fullname is called')
      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
    }
  }
  
}).mount('#app')



/* setTimeout(() => {
    vm.firstName = 'Bob';
}, 2000) */

