<template>
    <div>
        <h1>ROTATE +90 C: {{leftR}}</h1>
        <h1>up: {{updata}}</h1>
        <h1>forrward: {{forrward}}</h1>
        <h1>move left {{mLeft}}</h1>
        <h1> {{landed ? "Landing..." : ''}}</h1>
        <div class="drone" >
            <img src="./images/drone.png" alt="" :style="stylesFn()">
        </div>
    </div>
</template>
<script>
import io from 'socket.io-client';
const host = "10.10.0.239" // must be the real ip to work on phones otherwise localhost does the
export default {
    data(){
        return {
            socket : io(`http://${host}:3001`),
            landed: false,
            leftR:'',
            updata:'',
            forrward:2,
            mLeft:'',

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
   
             this.socket.on('up', up => {
               console.log("IMA LI UP", up)
               this.updata = up
            }) 
        },
         forrwardFn(){
  
             this.socket.on('forrward', forrward => {
               console.log("IMA LI forrward", forrward)
               this.forrward = forrward
            }) 
        },
        mLeftFn(){
            this.socket.on('mLeft', mLeft => {
            console.log("zdre", this.landed)
               console.log("IMA LI mLeft", mLeft)
               this.mLeft = mLeft
            }) 
        },
        landFn (){
             this.socket.on('land', land => {
                 console.log(land)
               console.log("IMA LI mLeft", land)
            //    this.leftR = land.leftRotate
               this.updata = land.up
               this.forrward = land.forrward
               this.mLeft = land.mLeft
               this.landed = true
               setTimeout(() => {
                   this.landed = false
               }, 2000)
            })
        } 
    },
    mounted(){
        this.socket.on("data", data => {
            console.log('connected DATA', data)
        })
        this.leftRotate()
        this.upFn()
        this.forrwardFn()
        this.mLeftFn()
        this.landFn()
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


