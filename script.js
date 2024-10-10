function convertScore() {

    let score = document.getElementById('scoreInput').value;

    let grade;

    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else if (score >= 0) {
        grade = 'K';  // For scores between 0-59
    } else {
        grade = 'Invalid';  // In case the score is not in the valid range
    }

    console.log('Numerical Score: ' + score + ', Alphabetical Grade: ' + grade);

    document.getElementById('result').innerText = 'Your grade is: ' + grade;
}
