let displayvalue=(num)=>result.value+=num
// function displayvalue (num){
    
//     let txt_box=document.querySelector("#result")
//     txt_box.value+=num
// }
let clearbox=()=>result.value=""
// function clearbox(){
//     document.querySelector("#result").value=""

// }
let evaluated_exp=()=>result.value=eval(result.value)
// function evaluated_exp(){
//     let txt_box=document.querySelector("#result")
//     txt_box.value=eval(txt_box.value)
// }
let remove_element=()=>result.value=result.value.slice(0,-1)
// function remove_element(){
//     let txt_box=document.querySelector("#result")
//     txt_box.value=txt_box.value.slice(0,-1)
// }