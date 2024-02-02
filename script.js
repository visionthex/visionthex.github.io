let score = 0;

document.getElementById('myButton').addEventListener('click', function() {
    score++;
    document.getElementById('score').textContent = 'Score: ' + score;
});