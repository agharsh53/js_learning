const form  = document.querySelector('form');
//this usecase will give yu emprty
//const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit',function(e){
e.preventDefault();

const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const result = document.querySelector('#results');

if(height==='' || height<0 || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`;
}
else if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}`;
}else{
   const bmi =  ((weight/((height*height)/1000)).toFixed(2));
   //show the result
   
   if(bmi<18.6){
    result.innerHTML = `Under Weight = <span>${bmi}</span>`;
   }else if(bmi>18.6 && bmi<24.9){
    result.innerHTML = `Normal Range = <span>${bmi}</span>`;
   }else{
    result.innerHTML = `Overweight = <span>${bmi}</span>`;
   }
}

} );