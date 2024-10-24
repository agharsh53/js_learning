console.log("Hello dosto!")

const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i=0; i<6; i++){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
}
let intervalId;
const startChangeColor = function(){
    if(!intervalId){
        console.log("Start Interval")
        intervalId = setInterval(()=>changeColor(),1000);
        function changeColor(){
            document.body.style.backgroundColor = randomColor();
        }
    }
                                            
};
const stopChangeColor = function(){
    if(intervalId){
        clearInterval(intervalId);
        intervalId = null;  // reset the intervalId to allow restart
            console.log('Interval stopped');
    }
};                                                                                                     

document.querySelector('#start').addEventListener('click',startChangeColor);
document.querySelector('#stop').addEventListener('click',stopChangeColor);