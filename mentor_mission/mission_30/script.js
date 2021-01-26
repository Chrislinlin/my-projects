const draggableList =$('#draggable-list')[0]

const hottestVideo = [
    '羅一鈞副組長',
    '蔡阿嘎與孕婦二伯',
    '粿粿-花蓮落下事件',
    '這群人-請假經典語錄',
    '黃氏兄弟-我想跟家人說',
    '中指通的歐美女優精選',
    '孫生去監獄看媽媽',
    '狠愛演-謝謝大家',
    '反正我很閒-卑鄙源之助的一天',
    '東森51-臨終前最後26秒奮力道別'
]
const listItems= [];

let dragStartIndex;
creatList()


//creat List items into DOM
function creatList(){
    [...hottestVideo]
    .map(function(a){
        return{
            value:a ,
            sort: Math.random()
        }
    })
    .sort(function(a,b){
        return (a.sort - b.sort)
    })
    .map(function(a){
        return a.value
    })
    .forEach(function(video,index) {
        const listItem = document.createElement('li');

        console.log(video);
        //index =0~9
        listItem.setAttribute('data-index', index);
        listItem.innerHTML = `
        <span class ='number'>${ index + 1 }</span>
        <div class ="draggable" draggable ="true">
            <p class ="video-name">${video}</p>
            <i class = "fas fa-grip-lines></i>
        </div>
        `;
        listItems.push(listItem);
        draggableList.appendChild(listItem);
        
    });


}