

//challenge start
function splitBill(amount , numPeople){
     return "Each person needs to pay ${amount/ numPeople} "
     }
     const splitBill=(amount , numPeople) => {return "Each person needs to pay ${amount/ numPeople} "}
     console.log(splitBill)
    //  console.log(splitBill(10,2));
    //  console.log(splitBill(10,4));
    //stretch goal start
     function countdown(startingNumber ,step){
     let countFromNum = startingNumber + step
     return function decrease(){
     countFromNum -=step;
     return countFromNum;
     }
     }
     const countingDown =countdown(20,2);
     console.log(countingDown());
     console.log(countingDown());
     const countdown=(startingNumber ,step) =>{
        let countFromNum = startingNumber + step
        return  decrease=() => {
        countFromNum -=step;
        return countFromNum;
        }
     }