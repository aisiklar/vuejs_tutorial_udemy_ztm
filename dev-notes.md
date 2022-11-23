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
* @input="updateLastName('last name update event triggered', $event)"
  in the app.js
  methods () {
    updateLastName(msg, event) {
      event.preventDefault() // to prevent def.behaviour
      console.log(msg)
      this.lastName = event.target.value;
    }
  }

### Event modifier
* in the function "updateLastName()" instead of "event.preventDefault()" an event modifier can bue used.
* it is as below:
@input.prevent="updateLastName('last name update event triggered', $event)"
* https://vuejs.org/guide/essentials/event-handling.html#event-modifiers
* now you can delete event.preventDefault() in the fnc body.

### keyboard events
* sample > @keyup.enter='updateMiddleName' in template (upon pressing the key 'enter', updateMiddleName method will be called)
* keycode:
  * https://www.toptal.com/developers/keycode/table-of-all-keycodes
  * https://www.toptal.com/developers/keycode
  * use the given keycode in case you need to use a "key" where there is no assigned alias (like @keyup.enter)  
* key modifiers: https://vuejs.org/guide/essentials/event-handling.html#key-modifiers
  * using the system modifier keys, an ex:
    * <button type="button" @click.ctrl="age--">decrement</button>
    * if the button is pressed, the age-- is not executed. However if ctrl+ button clicked, it does.
### v-model modifiers:
* .number modifier, an ex:
  * with <input>, you get string values. If you need "number" data structure:
  * <input type="number" (so that the user has to enter number value, enforced by the browser)
  * add a modifier: v-model.number="age", so that the input is converted to number
* .trim moodifier:
  * trim: removes excessive white space from the value (like String.trim())
* .lazy modifier:
  * the updates on the value is delayed until the user stops providing the input and clicks another part
* an Ex (you can use modifiers together):
  * v-model.lazy.trim="firstName"...

### computed properties
* fullname() method is called whenever
  * name / last name etc. is changed (as it should be)
  * increment() is called (button clicked)
  * decrement button clicked (no function here, the age is decremented by @click='age--').
  * whenever any data property is updated page is re-rendered and any method in the template is called
  * Therefore giving the fullname is NOT efficient... Unnecessary rendering occurs
* solution, computed properties:
  * create a computed: {} metod at the same level with data() and methods
  * move the fullname() method FROM methods:{} TO computed:{}
  * in the template, remove paranthesis from fullname()
    * <p> {{ fullname }} </p> 
    * vue treats computed property as DATA
  * vue checks which data is used in the computed property. If any of this is updated the re-rendering occurs, otherwise it does not re-render
* data() for storing single values, objects, arrays
* methods: for storing functions. any (including computing methods but performance issues occur)
* computed property: for storing  functions that calculate / compute value. Must always return a value (there can be other actions too in the compute function)
* https://vuejs.org/guide/essentials/computed.html 







# Composition API

### being reactive
* reactive() > only takes objects (incl. arrays built-in types like Map and Set)
* ref() > can take any value type
* in order to change the state. stateName.value = <new value>
