
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
        seat_data:[
            {
                row:"第一排",
                list: [
                    {
                        num:"一號",
                        id:1
                },
                    {
                        num:"二號",
                        id:2
                },
                    {
                        num:"三號",
                        id:3
                },
                    {
                        num:"四號",
                        id:4
                },
                    {
                        num:"五號",
                        id:5
                },
                    {
                        num:"六號",
                        id:6
                },
                    {
                        num:"七號",
                        id:7
                },
                    {
                        num:"八號",
                        id:8
                },
                    {
                        num:"九號",
                        id:9
                },
            ]
            },
            {
                row:"第二排",
                list: [
                    {
                        num:"一號",
                        id:11
                },
                    {
                        num:"二號",
                        id:22
                },
                    {
                        num:"三號",
                        id:33
                },
                    {
                        num:"四號",
                        id:44
                },
                    {
                        num:"五號",
                        id:55
                },
                    {
                        num:"六號",
                        id:66
                },
                    {
                        num:"七號",
                        id:77
                },
                    {
                        num:"八號",
                        id:88
                },
                    {
                        num:"九號",
                        id:99
                },
            ]
            },
            {
                row:"第三排",
                list: [
                    {
                        num:"一號",
                        id:111
                },
                    {
                        num:"二號",
                        id:222
                },
                    {
                        num:"三號",
                        id:333
                },
                    {
                        num:"四號",
                        id:444
                },
                    {
                        num:"五號",
                        id:555
                },
                    {
                        num:"六號",
                        id:666
                },
                    {
                        num:"七號",
                        id:777
                },
                    {
                        num:"八號",
                        id:888
                },
                    {
                        num:"九號",
                        id:999
                },
            ]
            },
        ],
        selected_seats:[],

    },
    computed:{
        select_num(){
           let select_num = this.selected_seats.length
            return select_num;
        },
        less_num(){
            let less_num = this.totalTickets - this.select_num;
            return less_num;
        },
        totalTickets(){
            let a =0;
            this.tickets.forEach(b =>{
                a +=b.num
            })
            return a
        },
        total_price(){

            let price = 0;
            for(let i =0;i< this.tickets.length;i++){
                price = price+this.tickets[i].num * this.tickets[i].prices
            }return price
        },
        seat_arr(){
            //把創造出來的selected_seats 用map回傳成 只有參數id的陣列
            let seat_arr = this.selected_seats.map( item =>{
                return item.id
            })
            return seat_arr
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
        select(r, l, event){
        //加上屬性->toggle
        //先判斷selected_seat裡面有沒有東西， 沒有=> 加進來/ 有=> 再做比較
        if(!this.selected_seats.length > 0){
            event.target.classList.toggle('selected');

            this.selected_seats.push({ 
                row: r.row,
                id: l.id, 
                name: l.num
            })
        }else if(this.seat_arr.indexOf(l.id) >-1){
            //找找看seat_arr有沒有l.id, 有的話就刪除那一個元素
            event.target.classList.toggle('selected');
            this.selected_seats.splice(this.seat_arr.indexOf(l.id),1)
        }else{
            if(this.seat_arr.length < this.totalTickets){
                event.target.classList.toggle('selected');
                this.selected_seats.push({ 
                    row: r.row,
                    id: l.id, 
                    name: l.num
                })
            }

        }
    }
}
})
