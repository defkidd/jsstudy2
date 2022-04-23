export default () =>{
    alert("난 함수");
}
const c_obj1 = {
    name:"로제",
    song:"Gone"
}
const c_obj2 = {
    name:"제니",
    song:"Sole"
}
// export 대상이 많아지면 큰박스에 담아 한번에 export하는걸 고려하자
const bigBox = {
    "item1":c_obj1,
    "item2":c_obj2,
    "item3":()=>"안뇽"
}
// 이랬던걸 
// export {
//     c_obj1,c_obj2
// }
// 이렇게
export {
    bigBox
}
