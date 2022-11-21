### loading from CDN
* in the index.html file:  <script src="https://unpkg.com/vue@3"></script>.. This script is written before the <script src="app.js"></script>
* const vm = Vue.createApp({}).mount('#app')
  * in the {}:
    * data() {
      * return {
        * prop: value,
        * prop2: value2 }
      },
    * methods {
      * method1() {return {....} },
      * ......
      }

### Proxy

* definition of proxy: a figure that can be used to represent the value of something in a calculation
  
* without proxy:
  access to a variable by:
  `vm.$data.firstName`

* with proxy
  access to a variable by
`vm.firstName`



### Directives

* directives change the behaviour of the elements (i.e. changing the color, removing an element.....)

* v-cloak: waits until the mounting of the component then removes itself.
  * usage ex:
    * in the tutorial, it is used to hide the {{fullname()}} until the data is ready. (upon loading if the network is slow, the statement is showed as it is until the "fullname()" is run and displays what returns from the function)
    * in CSS:
      * [v-cloak] { display: none }
    * after the mounting of the component/element, the v-cloak is removed so that the CSS prop is also non-functional
    
* v-model: for 2-way binding.
* v-bind:<attribute name> : allows any attribute to have a dynamic value
  OR, :<attribute name>"
  * EXAMPLE
in index.html:
<a vbind:href="url" target="_blank" >Google</a>
or ALTERNATIVELY use :
<a :href="url" target="_blank" >Google</a>
in app.js:
data() {
"url" : "www.google.com"
  * if we dont use v-bind, then href should be static link, i.e. "www.google.com"
* v-html: renders the html written as a "data" in .js file.
  Ex:
    * in data() we write html expression, like:
  data () {
    raw_url: '<a :href="url" target="_blank" >Google</a>'
  }
    * check cross site scripting
    * in index.html;
      <p> v-html={{raw_url}} </p>
    * in console we can change the link with vm.raw_url = ......
* v-on: directive (for events, like v-on:click). ALTERNATIVELY: @ (like @click)

### outputting raw HTML
* with v-html directive
#### cross site scripting (XSS)
* when malicious or harmful HTML is injected into webpage causing unintended behaviour in the browser
* check v-html directive


## events
### passing data and events with functions

* @input="updateLastName" >> passes event implicitly
* @input="'last name update event triggere', $event"
  in the app.js
  methods () {
    updateLastName(msg, event) {
      event.preventDefault() // to prevent def.behaviour
      console.log(msg)
      this.lastName = event.target.value;
    }
  }