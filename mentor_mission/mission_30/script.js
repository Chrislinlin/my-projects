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
    //part II
    .map(function(a){
        return{
            value:a ,
            sort: Math.random()
        }
    })//part III
    .sort(function(a,b){
        return (a.sort - b.sort)
    })//part IV
    .map(function(a){
        return a.value
    })
    .forEach(function(video, index) {
        const listItem = document.createElement('li');
        // listItem.classList.add('over')

        // console.log(video);
        //index =0~9
        listItem.setAttribute('data-index', index);
        listItem.innerHTML = `
        <span class ='number'>${ index + 1 }</span>
        <div class ="draggable" draggable ="true">
            <p class ="video-name">${video}</p>
            <i class="fas fa-grip-lines"></i>
        </div>
        `;
        listItems.push(listItem);
        draggableList.appendChild(listItem);
        
        addEventListeners()
    });
}
function dragStart() {
    // console.log('event: ' , 'drapstart')
    dragStartIndex = +this.closest('li').getAttribute('data-index');
    // console.log(dragStartIndex);
  }
  function dragOver(e) {
    // console.log('event: ' , 'drapover')
    e.preventDefault();
  }
  function dragDrop() {
    // console.log('event: ' , 'drapDrop')
    
    const dragEndIndex = +this.getAttribute('data-index')
    swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove('over');
  }
  //swap item function
  function swapItems(fromIndex, toIndex){
    //   console.log(124);
    const itemOne = listItems[fromIndex].querySelector('.draggable')
    const itemTwo = listItems[toIndex].querySelector('.draggable');
    // console.log(itemOne, itemTwo);
    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
  }
  function dragLeave() {
    // console.log('event: ' , 'dragleave');
    this.classList.remove('over');
  }
  function dragEnter() {
    // console.log('event: ' , 'dragenter')
    this.classList.add('over');
  }

function addEventListeners(){
    const draggables = document.querySelectorAll('.draggable')
    const dragListItems = document.querySelectorAll('.draggable-list li')

    draggables.forEach(function(draggable){
        draggable.addEventListener('dragstart', dragStart);
    });
    dragListItems.forEach(function (item) {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
      });
}
$('#check-btn').click(checkOrder);

function checkOrder(){
    listItems.forEach(function(listItem, index){
        const videoName = listItem.querySelector('.draggable').innerText.trim();
        //  console.log(videoName)
         if(videoName !== hottestVideo[index]){
            listItem.classList.add('wrong');
        }else{
            listItem.classList.remove('wrong');
            listItem.classList.add('right');
        }

    })
}