$('#input_data').on('input', function() {
// do your stuff
var inputText = $("#input_data").val();
var numChars = getNumberOfChars(inputText);
console.log(numChars);
$("#num_letters").text(numChars);

var numSentence = getNumberOfSentence(inputText);
$("#num_sentences").text(numSentence);

});

function getNumberOfSentence(input) {
    console.log("test");
    var matches = input.match(/.+?[.!?]/g);
    if (matches == null) {
        return 0;
    }
    return matches.length;
}

function getCli(input) {

}
