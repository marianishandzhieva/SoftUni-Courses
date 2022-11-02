function vacation(numPeople, groupType, day){
    let price = 0; 
    let totalPrice = 0
    switch (groupType){
        case "Students":
            if (day === "Friday"){
                price = 8.45; 
            } else if (day === "Saturday"){
                price = 9.80; 
            } else if (day === "Sunday"){
                price = 10.46
            }
            if (numPeople >= 30){
                totalPrice = (price * numPeople) - (price * numPeople * 0.15)
            } else {
                totalPrice = price * numPeople
            } break; 
        case "Business":
            if (day === "Friday"){
                price = 10.90; 
            } else if (day === "Saturday"){
                price = 15.60; 
            } else if (day === "Sunday"){
                price = 16;
            }
            if (numPeople >= 100){
                totalPrice = price * (numPeople - 10)
            } else {
                totalPrice = price * numPeople
            } break; 
        case "Regular":
            if (day === "Friday"){
                price = 15; 
            } else if (day === "Saturday"){
                price = 20; 
            } else if (day === "Sunday"){
                price = 22.50
            }
            if (numPeople >= 10 && numPeople <= 20){
                totalPrice = (price * numPeople) - (price * numPeople * 0.05)
            } else {
                totalPrice = price * numPeople
            } break;
    }
    console.log(`Total price: ${(totalPrice).toFixed(2)}`);
}    
vacation (40, "Students", "Saturday")
