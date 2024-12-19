let votes = Array(12).fill(0);

function vote(catId) {
    votes[catId - 1]++;
    document.getElementById('vote' + catId).innerText = 'Szavazatok: ' + votes[catId - 1];
}