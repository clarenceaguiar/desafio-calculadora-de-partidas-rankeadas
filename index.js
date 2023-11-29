let victories = 99;
let defeats = 15;
let level = "";

let winningBalance = calculateWinningBalance(victories, defeats);

function calculateWinningBalance(a, b) {
    let differenceVictoriesDefeats = a - b;
    return differenceVictoriesDefeats;
}

if (winningBalance < 10) {
    level = "Iron";
} else if (winningBalance >= 11 && winningBalance <= 20) {
    level = "Bronze";
} else if (winningBalance >= 21 && winningBalance <= 50) {
    level = "Silver";
} else if (winningBalance >= 51 && winningBalance <= 80) {
    level = "Gold";
} else if (winningBalance >= 81 && winningBalance <= 90) {
    level = "Diamond";
} else if (winningBalance >= 91 && winningBalance <= 100) {
    level = "Legendary";
} else if (winningBalance >= 101) {
    level = "Immortal";
}

console.log("The Hero has a balance of " + winningBalance + " victories and is at the " + level + " level.");