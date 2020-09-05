const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

 let total=0;
function totalBatteries(arr){
  arr.reduce((ele)=>{
   return total+=ele;
  })
  return total;
}

