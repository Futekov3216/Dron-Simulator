<template>
    <div>
        <Render/>
    </div>
</template>
<script>
import Render from './Render.vue'
export default {
    components:{
        Render
    },
    data(){
        return{
            letters:"awesome"
        }
    }
}
</script>
