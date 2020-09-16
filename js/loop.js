// for(let i = 1; 1<= 20 ; i+=1){
//     console.log(i)
// }

let temp = ['apple','banana','kiwi']
// temp.forEach((element, idx) =>{
//     console.log(idx, element)
// });

let newValue = temp.map((element, idx) => 
{return`${idx+1}.${element}`})
console.log(newValue)

