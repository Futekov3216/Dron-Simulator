<template>
  <div id="app">
    <!-- <TodoList/> -->
    <!-- <Buttons/> -->
    <!-- <Child/> -->
    <!-- <Animation /> -->
    <!-- <Volcano /> -->
    <Drone />
  </div>
</template>

<script>

// import TodoList from './TodoList'
import Buttons from './Buttons'
import Animation from './Animation'
import Child from './Child'
import Volcano from './Volcano.vue'
import Drone from './Drone.vue'
import { expose } from 'vue-expose-inject';

export default {
   mixins: [expose],

    expose() {
        return {
            bus: "OK"
        };
    },
  data () {
    return {
      parent:"parent"
    }
  },
  
  components:{
    Buttons,
    Child,
    Animation,
    Volcano,
    Drone
  }
} 
// console.log(this.bus)

</script>

<style>

</style>

  .anim0 {
    -webkit-animation: slide-right 2s forwards linear ;
              animation: slide-right 2s forwards linear ;
              -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
              -moz-animation-fill-mode: forwards;    /* FF 5+ */
              -o-animation-fill-mode: forwards;      /* Not implemented yet */
              -ms-animation-fill-mode: forwards;     /* IE 10+ */
              animation-fill-mode: forwards;
  }
.anim1 {
  -webkit-animation: slide-right 1.5s forwards linear ;
            animation: slide-right 1.5s forwards linear ;
            -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
            -moz-animation-fill-mode: forwards;    /* FF 5+ */
            -o-animation-fill-mode: forwards;      /* Not implemented yet */
            -ms-animation-fill-mode: forwards;     /* IE 10+ */
            animation-fill-mode: forwards;
            animation-delay: 0.2s;
             -webkit-animation-delay: 0.2s;
}