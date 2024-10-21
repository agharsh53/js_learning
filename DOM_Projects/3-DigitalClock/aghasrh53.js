const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock')
const todayDate = document.getElementById('date');


setInterval( function(){
    let date = new Date();
    //console.log(date.toLocaleTimeString);
    clock.innerHTML = date.toLocaleTimeString();
    todayDate.innerHTML = date.toLocaleDateString();
},1000)