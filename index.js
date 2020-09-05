const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

 let total=0;
function totalBatteries(arr){
  let total=arr.reduce((ele)=>{
   return total+=ele;
  },0)
  return total;
}

