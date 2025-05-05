// Notes {
//   num = the amount of precentage that is stoped for reset,
//   num1 = the amount of precentage that is stoped for restart,

// }



// ============ selection phase for the elements of the html
const Loading = document.getElementById("loading");
const Start = document.getElementById("start__loading");
const Stop = document.getElementById("stop__loading");
Reset = document.getElementById("reset__loading");
// decleration and intialization phase
let stop_loading = false;
let stop_reseting = true;
var num;
var num1 = 0;

// ================= MAIN CLASS: to implement the main manipulation ===========
class Overloading{

  start_loadig(){
    stop_loading = true;
    // --- condition for not starting from beginnig after stop
    if(num1 != 0 && num1 != 100){
      // loads from 0 to 100
      for(let i = num1 ; i <= 100 ; i++){
        setTimeout(() => {
          // condation for stoping loading
          if(stop_loading){
          Loading.style.width = `${i}%`;
          document.querySelector(".pracentage").innerHTML = `${i}%`;
          // store the amount of load for resetting back
          num = i;

          // stop_loading = true;
        }}, (i - num1) * 100 )
     } 
    }
    // sart loading from beginnig
    else{
      for(let i = 1 ; i <= 100 ; i++){
        setTimeout(() => {
          // condation for stoping loading
          if(stop_loading){
          Loading.style.width = `${i}%`;
          document.querySelector(".pracentage").innerHTML = `${i}%`;
          // store the amount of load for resetting back
          num = i;
          // store the amount of load for starting back
          num1 = i;
        }}, i* 30 )
        
        
     }  
    }
  

  }
  stop__loading(){
    stop_loading = false;
    num = i;
    num1 = i;
  }

  Reset__loading(){
    // reseting from the end
    if(stop_loading){
      for(let i = 100 ; i >= 0 ; i--){
        setTimeout(() => {
          Loading.style.width = `${i}%`;
          document.querySelector(".pracentage").innerHTML = `${i}%`;
          // store the amount of load for resetting back
          num = i;
          // store the amount of load for starting back
          num1 = i;
        }, (100 - i)* 30 )
        
    }
    }
    // reseting from after stop
    else{
      for(let h = num; h >= 0 ; h--){
        setTimeout(() => {

          Loading.style.width = `${h}%`;
          document.querySelector(".pracentage").innerHTML = `${h}%`;
          // store the amount of load for resetting back
          num = h;
          // store the amount of load for starting back
          num1 = h;
          // after reseting the start should start from beginning
          stop_loading = true;
        }, (num - h) * 30)
      }
}
}
}

Overloadingob1 = new Overloading();

Start.addEventListener("click", Overloadingob1.start_loadig);
Stop.addEventListener("click", Overloadingob1.stop__loading);
Reset.addEventListener("click", Overloadingob1.Reset__loading);