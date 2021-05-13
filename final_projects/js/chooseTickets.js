


let vm= new Vue({
    el: '#app',
    data: {
        tickets:[
            {
                types:"全票",
                num: 1,
                prices: 200

            },
            {
                types:"半票",
                num: 1,
                prices: 100

            },
        ],

    },
    computed:{
        total(){
            let price = 0;
            for(let i =0;i< this.tickets.length;i++){
                price = price+this.tickets[i].num*this.tickets[i].prices
            }return price
        },
    },

    methods:{

        minusBtn(index){
            this.tickets[index].num--
            if(this.tickets[index].num<0){
                return this.tickets[index].num =0;
            }
        },
        plusBtn(index){
            this.tickets[index].num++
        }
    }
})