let starOn = '/final_projects/image/movie-introduction/yellowStar.png';
let starOff = '/final_projects/image/movie-introduction/blackStar.png';

let vm =new Vue({
    el: '#box',
    data:{
        rate:'',
        comment:'',
        stars:[{
            num:5,
            time: '6/5',
            imgUrl:'image/movie-introduction/head_03.jpg',
            comment:'sfjoejfojerifjkrenfren',

        }],
        starArray:[
            {
                src: starOff,
                active: false
            },
            {
                src: starOff,
                active: false
            },
            {
                src: starOff,
                active: false
            },
            {
                src: starOff,
                active: false
            },
            {
                src: starOff,
                active: false
            },
        ],

        starNum: 0,
        showStars:[
            `★`,
            `★★`,
            `★★★`,
            `★★★★`,
            `★★★★★`
        
        //     `<i>★</i><i>★</i>`
        // ,
        
        //     `<i>★</i><i>★</i><i>★</i>`
        // ,
        
        //     `<i>★</i><i>★</i><i>★</i><i>★</i>`
        // ,
        
        //     `<i>★</i><i>★</i><i>★</i><i>★</i><i>★</i>`
    ],
   
    },
    methods:{
        addto: function(index){
            console.log(this.starNum)
      
            var timestamp = Math.floor(Date.now());
            let a=0;
            if(this.starNum ==0){
                return
            }else{
                if(this.starNum ==1){

                     a =0;
                }if(this.starNum ==2){
                     a =1;
                }if(this.starNum ==3){
                     a=2
                }
                if(this.starNum==4){
                     a=3
                }
                if(this.starNum ==5){
                     a=4
                }
            }
      
            this.stars.push({   
                id:timestamp,
                num: this.starNum,
                comment: this.comment,
                star: this.showStars[a]
            });
            this.rate='';
            this.comment='';

        },
        removeto:function(index){
            this.stars.splice(index,1)
        },
        sort(type){
            this.order =!this.order
            this.sortType = type;
            this.stars.sort(this.stars1(type));
        },
        stars1(key){
            let that = this;
            return function(a, b){
                
                let x= a[key];
                let y= b[key];
                if(that.order){
                    if(that.sortType =='time'){
                        return new Date(y)-new Date(x)
                        }else{
                        return y-x
                    }
                }
                else{
                    if(that.sortType =='time'){
                        return new Date(x)-new Date(y)
                        }else{
                        return x-y
                    }
                }
            }
        },
        rating(index){
            let total = this.starArray.length;
            let idx = index +1// 代表選第幾個星星
            if(this.starNum ==0){
                //假如一開使沒有星星
                this.starNum =idx;
                for(let i =0; i< idx;i++){
                    this.starArray[i].src =starOn;
                    this.starArray[i].active =true 
                }
            } else{
                // if( idx == this.starNum){
                //     //如果點到現在亮的最後一個星星，取消最後一個，保留之前的
                //         for(let i =index; i< total;i++){

                //             this.starArray[i].src=starOff;
                //             this.starArray[i].active= false;
                //             }
                //     }
                if( idx <= this.starNum){
                    //如果點到的星星<當前星星總數，直接保留到點到當前星星總數
                        for(let i =idx; i< this.starNum;i++){

                            this.starArray[i].src=starOff;
                            this.starArray[i].active= false;
                            }
                    }
                if( idx > this.starNum){
                    //如果點到的星星>當前星星總數，直接保留到點到的星星數
                        for(let i =0; i<idx;i++){

                            this.starArray[i].src=starOn;
                            this.starArray[i].active=true;
                            }
                        }
                }
                let count = 0; //計數器，統計當前有幾個星星
                for(let i = 0; i < total; i++) {
                    if(this.starArray[i].active) {
                        count++;
                    }
                }
                this.starNum =count
        },

    }

})