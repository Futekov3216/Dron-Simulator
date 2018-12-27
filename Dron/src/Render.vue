<template>
<div class="example-container">
  <div class="conteri">

    <div v-for="(letter, index) in letters" :key="index" class="letter" :class="true ? 'animeletter_IN_' + (index + 1) : ('positionClass animeletter_OUT_' + (index + 1))">{{letter}}</div>
    <!-- <p>awesomeness</p> -->
  </div>
    <button @click="removeclass()">HI</button>
</div>  
</template>
<script>
export default {
    //  <span>{{letter}}</span>
    data(){
        return{
            letters:"awesomeness",
            remover: true
        }
    },
    props:{
        letter: String
    },
    methods:{
        removeclass(){
            this.remover = !this.remover
        }
    }

}
</script>
<style lang="scss">

@keyframes slide-in {
    0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    }
    100% {
        -webkit-transform: translateY(100px);
        transform: translateY(100px);

    }
}
@keyframes slide-out{
    0% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
    }
    100% {
        -webkit-transform: translateY(200px);
        transform: translateY(200px);

    }
}

    .letter{
            display: inline-block;
            font-size: 100px;
            padding-right: 10px; 
            position: relative;
            display: block;
            left: 20px;
            color: red;
        }
        .positionClass{
            top:100px;
        }

    @for $i from 1 through 26 {
        $animDelay:#{$i * 0.1};
        .animeletter_IN_#{$i} {
            display: inline-block;
            color: red;

	-webkit-animation: slide-in 1s;
	        animation: slide-in 1s;
            animation-delay: #{$animDelay}s;
            -webkit-animation-delay: #{$animDelay}s;
             -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
            -moz-animation-fill-mode: forwards;    /* FF 5+ */
            -o-animation-fill-mode: forwards;      /* Not implemented yet */
            -ms-animation-fill-mode: forwards;     /* IE 10+ */
            animation-fill-mode: forwards;

        }
    }
        @for $i from 1 through 26 {
        $animDelay:#{$i * 0.2};
        .animeletter_OUT_#{$i} {
            display: inline-block;
            color: red;

	-webkit-animation: slide-out 1s;
	        animation: slide-out 1s;
            transform-origin: 100 10;
            animation-delay: #{$animDelay}s;
            -webkit-animation-delay: #{$animDelay}s;
             -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
            -moz-animation-fill-mode: forwards;    /* FF 5+ */
            -o-animation-fill-mode: forwards;      /* Not implemented yet */
            -ms-animation-fill-mode: forwards;     /* IE 10+ */
            animation-fill-mode: forwards;

        }
    }

</style>
