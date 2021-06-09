

let vm = new Vue({

    el:'#box',
    // import imgUrl from '/final_projects/image/movie-introduction/head_01.jpg',
    data:{
        stars:[{
            num:5,
            time: '5/3',
            imgUrl: 'image/movie-introduction/head_01.jpg',
            comment: '                                        好看⋯推推，好看值得推薦歡迎大家帶家庭小朋友一起來看好看喔真的非常好看推推推推'
        },
        {
            num:4,
            time: '5/2',
            imgUrl: 'image/movie-introduction/head_01.jpg',
            comment:'                                        名偵探柯南：緋色的不在場證明要先看~~~ 再來看緋色的彈丸才會銜接的上這部 然後真空超導新幹線的創新很不錯 緋色的彈丸也太神，飛這麼久還這麼準 演的不錯 東奧真的辦不成了 而且是一年前的電影延後上映'
        },
        {
            num:5,
            time: '5/1',
            imgUrl:'image/movie-introduction/head_03.jpg',
            comment:'                                        覺得好看，赤井真的很帥，但比想像中出現的少，但灰原這次戲份很多，超開心'
        },
        {
            num:3,
            time: '4/29',
            imgUrl:'image/movie-introduction/head_01.jpg',
            comment:'                                        超好看的,加上主題曲後勁很強,想再2刷一次'
            },

        ],
        message:'',
        rate:'',
        comment:'',
        sortRate:0, //默認評分為空
        sortWay: false,
        sortDate:0,
        sortType:'',
        order:false,
        time2:'',
      
    },
    methods:{
        addto: function(){
      
            var timestamp = Math.floor(Date.now());
            var d = new Date();
            var month = d.getMonth() +1;
            var day = d.getDate();

            this.stars.push({
                id:timestamp,
                num: this.rate,
                comment: this.comment,
                imgUrl:'image/movie-introduction/head_01.jpg',
                time: month+""+'/'+day+""
            });
            this.rate='';
            this.comment='';

        },
        removeto: function(index){
            this.stars.splice(index,1)
        },
        sort(type){
            this.order =!this.order
            this.sortType = type;
            this.stars.sort(this.stars1(type));
        },
        // sortFn(sortRate){

        //     this.sortRate = sortRate; //參數的sortRate就是 vue的sortrate
            
        // },
        // sortTfn( sortDate){

        
        //     this.sortDate = sortDate //參數的sortRate就是 vue的sortrate
        // },
        currentTime(){
            setInterval(this.getDate,500)
        },
        getDate(){
            d = new Date();
           
            // console.log(time)
            this.time2 = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '-' + d
                .getHours() + '-' +
                d.getMinutes() +'-' + d.getSeconds()
            
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
        }

    },
    computed:{

    },


        // filterStar(){
        //     let finalList = [];
          
        //     var _this = this;
        //     for( let i =0; i< this.stars.length ;i++){
             
        //         finalList.push(this.stars[i])
        //     };
        //     //排序星星
        //     if(this.sortRate !==0){
        //         finalList.sort(function(a,b){
        //             if(_this.sortRate ===1){
        //                 return b.rate - a.rate
        //             }else{
        //                 return a.rate - b.rate;
        //             }
        //         })
        //     }

        //     console.log(finalList);
         
        //     return finalList
           
        // }, 

    mounted () {
        this.currentTime()
      },
})