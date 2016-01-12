function getNumberOfWords(inputText) {
    console.log("inside getchars");
    return inputText.match(/\S+/g).length;
}
