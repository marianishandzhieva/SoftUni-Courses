function printAndSum(num1, num2){
    let sum = 0
    let s = " "
    for (i = num1; i <= num2; i++){
        s += i + " "
        sum += i
    }
    console.log(s)
    console.log(`Sum: ${sum}`);
}
printAndSum (50, 60)
