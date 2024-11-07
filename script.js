function getComputerChoice(){
    let rand = Math.floor((Math.random() * 3 + 1));

    switch(rand)
    {
        case 1:
            console.log("rock")
            break;
        case 2:
            console.log("paper")
            break;
        case 3:
            console.log("scissors")
            break;
        default:
            console.log("ERROR, number was: " + rand);
    }
};

getComputerChoice();

