
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
        sum: 0,
        totalSeats:[
            {
                name:"第一排",
                list: [
                    {
                        num:"一號",
                },
                    {
                        num:"二號",
                },
                    {
                        num:"三號",
                },
                    {
                        num:"四號",
                },
                    {
                        num:"五號",
                },
                    {
                        num:"六號",
                },
                    {
                        num:"七號",
                },
                    {
                        num:"八號",
                },
                    {
                        num:"九號",
                },
            ]
            },
            {
                name:"第二排",
                list: [
                    {
                        num:"一號",
                },
                    {
                        num:"二號",
                },
                    {
                        num:"三號",
                },
                    {
                        num:"四號",
                },
                    {
                        num:"五號",
                },
                    {
                        num:"六號",
                },
                    {
                        num:"七號",
                },
                    {
                        num:"八號",
                },
                    {
                        num:"九號",
                },
            ]
            },
            {
                name:"第三排",
                list: [
                    {
                        num:"一號",
                },
                    {
                        num:"二號",
                },
                    {
                        num:"三號",
                },
                    {
                        num:"四號",
                },
                    {
                        num:"五號",
                },
                    {
                        num:"六號",
                },
                    {
                        num:"七號",
                },
                    {
                        num:"八號",
                },
                    {
                        num:"九號",
                },
            ]
            },
        ],
        selSeats:[],
        test: false

    },
    computed:{
        total(){
            let price = 0;
            for(let i =0;i< this.tickets.length;i++){
                price = price+this.tickets[i].num*this.tickets[i].prices
            }return price
        },
        totalTickets(){
            let a =0;
            this.tickets.forEach(b =>{
                a +=b.num
            })
            return a
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
        },
        increase(){

// const rows = document.querySelector('.row');
// const container = document.getElementById('container')
// console.log('sss')
// const seatSelected = document.getElementById('seat-select')

// container.addEventListener('click',function (e) {
//     if(e.target.classList.contains('selected')){
//         console.log('aaa')
//         this.sum = this.sum-1;
//     }else{
//         this.sum =this.sum+1;
//     }
//     e.target.classList.toggle('selected')
//     console.log(e.target.classList[0]);
    
    
//     // updateSelectCount()
// })
//             const selectSeats = document.querySelectorAll('.selected')
//             console.log(selectSeats)
//             selectSeatsLength = selectSeats.length;
//             console.log(selectSeatsLength)
//             if(selectSeatsLength>0){
//                 this.selTotal =selectSeatsLength
//             }

//         }
//     }
    }, 
    increaseSeat(i,j){
        if(this.selSeats.length >0){
            // console.log(i.name, j.num);
            if(this.selSeats.indexOf(j.num)>-1){
                this.selSeats.splice(this.selSeats.indexOf(j.num),1)
                this.test =false;
            }else{
                this.selSeats.push(j.num)
                this.test = true;
            }
        }else{
            this.selSeats.push(j.num)
            this.test = true;
           
        }
        console.log(this.selSeats)
        // selSeats.push(`${i.name}-${j.num}`)
        


    } 
}
})
