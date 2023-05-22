function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findClosestGuess(
  player1Guess: number,
  player2Guess: number,
  randomNumber: number
): string {
  const player1Difference = Math.abs(randomNumber - player1Guess);
  const player2Difference = Math.abs(randomNumber - player2Guess);

  if (player1Guess === player2Guess) {
    return "Entrambi i giocatori hanno fatto lo stesso numero.";
  } else if (player1Difference === player2Difference) {
    return "I giocatori sono altrettanto vicini al numero casuale.";
  } else if (player1Difference < player2Difference) {
    return "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!";
  } else {
    return "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!";
  }
}

// Esempio di utilizzo:
const player1 = 5;
const player2 = 10;
const randomNum = generateRandomNumber(1, 100);

console.log("Numero casuale generato:", randomNum);

const result = findClosestGuess(player1, player2, randomNum);
console.log(result);
