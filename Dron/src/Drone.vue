<template>
    <div>
        <h1>ROTATE +90 C: {{leftR}}</h1>
        <h1>up: {{updata}}</h1>
        <h1>forrward: {{forrward}}</h1>
        <div class="drone" >
            
            <!-- <button @click="leftRotate">ZDRE</button> -->
            <img src="./images/drone.png" alt="" :style="stylesFn()">
        </div>
    </div>
</template>
<script>
import io from 'socket.io-client';
export default {
    data(){
        return {
            socket : io('http://localhost:3001'),
            leftR:'',
            updata:'',
            forrward:1,
            mLeft:''

        }
    },
    methods:{
        stylesFn(){
            return {
                transform: `rotate(${-1 * this.leftR}deg) scale(${this.forrward})` ,
                "margin-bottom": this.updata + "%",
                "margin-right": this.mLeft + "%"
                
            }
        },
        leftRotate(){
            
           this.socket.on('leftR', leftR => {
               console.log("IMA LI ", leftR)
               this.leftR = leftR
            })
        },
        upFn(){
            console.log("zdre")
             this.socket.on('up', up => {
               console.log("IMA LI UP", up)
               this.updata = up
            }) 
        },
         forrwardFn(){
            console.log("zdre")
             this.socket.on('forrward', forrward => {
               console.log("IMA LI forrward", forrward)
               this.forrward = forrward
            }) 
        },
        mLeftFn(){
            this.socket.on('mLeft', mLeft => {
               console.log("IMA LI mLeft", mLeft)
               this.mLeft = mLeft
            }) 
        }
    },
    mounted(){
        this.socket.on("data", data => {
            console.log("let")
            console.log('connected DATA', data)
        })
        this.leftRotate()
        this.upFn()
        this.forrwardFn()
        this.mLeftFn()
    },


}
</script>
<style lang="scss" scoped>
    .drone {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
}

.drone img {
    transition-duration: 2s;
    transition: all 2s;
    width: 8%;
}
</style>


