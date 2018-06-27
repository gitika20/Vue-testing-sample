<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>HELLO</h2>
    <router-link to="/components/test">go to test</router-link>
    <span class="count">{{count}}</span>
    <button @click="increment">increment</button>
    <input type="text" name="text" id="text" v-model="value">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome',
      count: 0,
      value: 'abc'
    }
  },
  methods: {
    submit () {
      alert('submitted')
    },
    increment () {
      this.count++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  border:2px solid black;
  padding:5px;
  margin-top:20px;
  background:blue;
  color:white;
}
</style>
