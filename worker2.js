$('#input_data').on('input', function() {
// do your stuff
var inputText = $("#input_data").val();
var numChars = getNumberOfChars(inputText);
console.log(numChars);
$("#num_letters").text(numChars);

var numSentence = getNumberOfSentence(inputText);
$("#num_sentences").text(numSentence);

var numWords = getNumberOfWords(inputText);
$("#num_words").text(numWords);

var cli = getCli(inputText);
$("#cli_score").text(cli);

});

function getNumberOfSentence(input) {
    var matches = input.match(/.+?[.!?]/g);
    if (matches == null) {
        return 0;
    }
    return matches.length;
}

function getCli(input) {
    var nLetters = getNumberOfChars(input);
    var nWords = getNumberOfWords(input);
    var nSentences = getNumberOfSentence(input);
    var L = nLetters / nWords * 100;
    var S = nSentences / nWords * 100;
    return 0.0588 * L - 0.296 * S - 15.8;
}
