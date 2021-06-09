let vm =new Vue({
    el: '#box',
    data:{
        rate:'',
        comment:'',
        stars:[{
            num:5,
            time: '6/5',
            imgUrl:'image/movie-introduction/head_03.jpg',
            comment:'sfjoejfojerifjkrenfren'
        },]
   
    },
    methods:{
        addto: function(){
      
            var timestamp = Math.floor(Date.now());
            this.stars.push({
                id:timestamp,
                num: this.rate,
                comment: this.comment
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
        }

    }

})