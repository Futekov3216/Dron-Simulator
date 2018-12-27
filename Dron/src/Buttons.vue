<template>
    <div class="wrapper">
        <button @click="randomTicket(60)">60</button><p></p>
        <button @click="randomTicket(10)">10</button><p></p>
        <button @click="generateRandomSingleTicket">1</button><p></p>
        <p>PLAYERS {{this.settings.players}}</p>
        <p>TICKET PRICE ===========>{{ settings.price }} {{this.settings.currency}}</p>
        <p>TOTAL TICKETS =============> {{this.allTickets.length + this.singleTicketArr.length}}</p>
        <p>BET =============> {{bet}}</p>
        
          <div class="iCountUp"> 
              <p>balance =========>
                 <ICountUp :startVal="1000" :endVal="endVal" :decimals="decimals"/> {{this.settings.currency}} <!-- BALANCE startVal BROKEN -->
              </p>
         </div>
         <!-- <IMG SRC="jav&#x0D;ascript:alert('XSS');"> -->
        <hr/>
        <div class="cellContainer">
            <p class="cellNumber"
                v-for="index in this.settings.totalballs"
               @click="SingleTicket"
               :index="index" 
               :key="index">
               {{index}}
            </p>
        </div>
        <button style="margin-top: 20px" @click="pushOnetoAllTickets">BUY BTN</button>
<!-- <div v-demo="{ color: 'white', text: 'hello!' }"></div> -->
        
    </div>
</template>

<script>
import ICountUp from 'vue-countup-v2';

export default {
    components: {
      ICountUp
    },
    data(){
        return {
            settings:{
             balls:5,
             totalballs:35,
             price: 1,
             currency: "EUR",
             balance: 1000,
             players:1,
             bonus_balls:3
            },
            bet:0,
            ticketVal: 0,
            singleTicketArr:[],
            singleTicketWithCustomNumbers:[],
            randomSingleTicketCheck: false,
            uniqueArr: new Set(),
            allTickets:[], // all bought tickets array
            customTicketArr:[],
            startVal: 0, // count
            endVal:0,
            decimals:2,
            // isActive: false// class toggles
        }
    },
    methods:{
        SingleTicket(){
           return this.randomSingleTicketCheck ? this.SelectCustomNumbers(event) : this.UserTicket(event)
        },
        UserTicket(event){ // START FILLING ARRAY FROM START
           let index = event.target.getAttribute('index')
            if(this.singleTicketArr.length <= this.settings.balls + this.settings.bonus_balls - 1){                
            this.singleTicketArr.push(Number(index))
            // this.addClassTocustomNumbers() //adding class to certain btn from layout
            }
            console.log("singleT", this.singleTicketArr)
        },
        randomTicket(i){ // Generate random ticket and push it to the array with all tickets
          for(let t = 0; t < i; t++){  
                while(this.uniqueArr.size < this.settings.balls){
                    this.uniqueArr.add(Math.floor(Math.random()*this.settings.totalballs) + 1) * i
                }
                if(this.uniqueArr.size === this.settings.balls){
                    this.allTickets.push([...this.uniqueArr]) 
                    this.uniqueArr = new Set()
                }
                if(i * this.settings.price > this.settings.balance.toFixed(2) - (this.ticketVal * this.settings.price).toFixed(2)) return // check if left balance is less than ticket price
            }
            this.ticketVal += i 
            // this.endVal = Number((this.ticketVal * this.settings.price))
        },
        //TODO ----------------
        SelectCustomNumbers(event){ // Select and deselect tickets from ticket layout 
        let index = event.target.getAttribute('index')
            if(this.singleTicketWithCustomNumbers.length <= this.settings.balls + this.settings.bonus_balls - 1){                
            this.singleTicketWithCustomNumbers.push(Number(index))
            // this.addClassTocustomNumbers() //adding class to certain btn from layout
            }
    
        },
        pushOnetoAllTickets(){
            if(this.customTicketArr.length !== 0){
                this.allTickets.push(this.singleTicketArr[0])
            }
                console.log("hi", this.singleTicketArr[0])
                console.log("bie", this.singleTicketArr)
            // this.balance = (this.balance - (this.ticketVal * this.price)).toFixed(2)
            this.singleTicketArr = []
            this.customTicketArr = []
            // this.allTickets = []
            // this.singleTicketArr[0].shift()
            this.uniqueArr = new Set()
            this.bet = this.allTickets.length * this.settings.price
            this.endVal = this.settings.balance - this.bet
            console.log("asdasddsa", this.allTickets)
        },
        generateRandomSingleTicket(){
            for(let t = 0; t < 1; t++){
                while(this.uniqueArr.size < this.settings.balls){
                    this.uniqueArr.add(Math.floor(Math.random()*this.settings.totalballs) + 1)
                }
                 if(this.uniqueArr.size === this.settings.balls){ 
                     this.customTicketArr = [...this.uniqueArr]
                     this.singleTicketArr.push(this.customTicketArr) // fill array with
                     this.uniqueArr = new Set() // reset unique array
                     if(this.singleTicketArr.length == 2){
                         this.singleTicketArr.shift() // returns always array with 1 item 
                     }
                    console.log(this.singleTicketArr[0]) // get the newest combination for 1 ticket on click              
                }
            }
            this.randomSingleTicketCheck = false
        },
        addClassTocustomNumbers(){
            if(event.target.classList.value.indexOf("bcolor") > -1){
                event.target.classList.remove("bcolor") 
            }else{
                event.target.classList.add("bcolor")
            }
        }


    },
    directives:{

    }
}
</script>
<style scoped>
    .wrapper{
        display: block;

    }
    .wrapper button{
        display: block;
    }
    .cellContainer{
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-auto-rows: 1fr;
        grid-column-gap: 30px;
        grid-row-gap: 30px;
    }
    .cellContainer .cellNumber{
        text-align: center;
        border: 1px solid black;
        padding: 10px;
    }
    .bcolor{
        background: red!important;
    }


</style>

