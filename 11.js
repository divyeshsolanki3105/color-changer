//let tempInDegree = 0;
//if(tempInDegree<0){
  //  console.log("extremely cold outside");
//}else if(tempInDegree<16){
  //  console.log("it is  cold outside");
//}else if(tempInDegree<25){
  //  console.log("wheather is okey");
//}else if(tempInDegree<35){
  //  console.log("lets go for swim");
//}else if(tempInDegree<45){
  //  console.log("turn o AC");
//}else{
 //   console.log("too hot!!!");
//}
//console.log("script start");
//const id = setTimeout(()=>{
  //  console.log("inside setTimeout");
//},1000);
//for(let i = 1; i<100; i++){
  //  console.log("....");
//}
//console.log("settimeout id is ",id);
//console.log("clearing time out");
//clearTimeout(id);
//console.log("script end");cons
//console.log("script start");
//setInterval(() =>{
  //  let total = 0;
 //for(let i = 0; i<10000000; i++){
    //    total += i;
    //}
    //console.log(total);
    //console.log(Math.random());
//},5000);
//cons

const body = document.body;
const button = document.querySelector("button");
const intervalId = setInterval(()=> {
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);
    const rgb = `rgb(${red},${green},${blue})`;
    body.style.background = rgb;
    },1000);
    button.addEventListener("click", ()=>{
      clearInterval(intervalId);
      button.textContent = body.style.background;
    });

console.log(intervalId);






























