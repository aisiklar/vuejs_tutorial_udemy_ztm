const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }


}).mount('#app')



/* setTimeout(() => {
    vm.firstName = 'Bob';
}, 2000) */

