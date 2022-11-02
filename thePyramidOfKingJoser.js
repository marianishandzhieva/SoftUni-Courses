function thePyramidOfKingJoser(width, length){
    let stone = 0; 
    let marble = 0; 
    let lapisLazuli = 0; 
    let gold = 0; 
    let counter = 0; 
    let innerArea = 0; 
    for (let i = width; i > 0; i -= 2){
        let areaTotal = i * i;
        counter++;
        if (i - 2 <= 0){
            gold += areaTotal * length;
        } else {
            let innerWidth = i - 2; 
            innerArea = innerWidth * innerWidth;
            stone += innerArea * length;
            if (counter % 5 === 0){
                lapisLazuli += (areaTotal - innerArea) * length; 
            } else {
                marble += (areaTotal - innerArea) * length;
            }
        }
    }
    let height = counter * length; 
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}` );
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}
thePyramidOfKingJoser (11,1)
