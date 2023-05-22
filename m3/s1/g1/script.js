function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function findClosestGuess(player1Guess, player2Guess, randomNumber) {
  var player1Difference = Math.abs(randomNumber - player1Guess);
  var player2Difference = Math.abs(randomNumber - player2Guess);
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
var player1 = 5;
var player2 = 10;
var randomNum = generateRandomNumber(1, 100);
console.log("Numero casuale generato:", randomNum);
var result = findClosestGuess(player1, player2, randomNum);
console.log(result);
