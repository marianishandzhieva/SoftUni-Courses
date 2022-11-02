function login(input){
    let index = 0; 
    let user = input[index];
    index++;
    let password = input[index];
    let result = "";
    let counter = 0; 

    for (let i = user.length - 1; i >= 0; i--){
        let password = user.charAt(i); 
        result += password
    }
    while (password !== result){
        counter++
        if (counter === 4){
            console.log(`User ${user} blocked!`);
            break; 
        }
        console.log(`Incorrect password. Try again.`);
        index++
        password = input[index]; 
    }
    if (password === result){
        console.log(`User ${user} logged in.`);
    }

}
login (['sunny','rainy','cloudy','sunny','not sunny'])