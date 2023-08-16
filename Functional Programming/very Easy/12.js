// এখানে দেখো গারভেজ একটা ডাটা কে pop() করে মুছে দিলাম!




function garvesData(arr,...newData){
     

    //console.log(arr);
    //console.log(newData);

   
    let dataPop = newData.pop()
    let data = newData.flat()
    console.log(data);
    
   
  
}

 garvesData([
    {name:'shihan',age:34},
    {name:"rakib",age:44}      ],
[{name:'sada',age:55}],(x)=>x.data === x.data)
