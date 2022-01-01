let str=prompt("enter a string")
function ingExtractor(str) {
    return str.replace(/[^a-zA-Z ]/g, "").split(" ").filter((word) => {
        let temp = word.toLowerCase().replace("ing", "");
        if (temp.length === temp.replace(/[aeiou]/g, "").length) {
          return false;
        }
        if (word.toLowerCase().includes("ing")) {
          return true;
        }
      });
  }
  console.log(ingExtractor(str))
// function getString(str){
//     let array=[]
//     array.push(str.splite(""))
//     for(let i=array.length; i >= array.length-3; i--){
//         array.pop(array[i])  
//     }
//     return array.join("")
// }
// console.log(getString(str))