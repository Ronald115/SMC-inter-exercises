function findLongestPalindrome(sentence) {
    let words = sentence.toLowerCase().split(/\W+/);
    let palindromes = [];

    // Iterate over the words and find palindromes
    for (var i = 0; i < words.length; i++) {
        let word = words[i];
        let reversed = word.split('').reverse().join('');
        if (word === reversed && word.length > 0) {
            palindromes.push(word);
        }
    }

    // To Find the longest palindrome
    var longestPalindrome = '';
    for (var j = 0; j < palindromes.length; j++) {
        let palindrome = palindromes[j];
        if (palindrome.length > longestPalindrome.length) {
            longestPalindrome = palindrome;
        }
    }

    return longestPalindrome || "No palindromes found";
}

document.getElementById('palindromeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let textInput = document.getElementById('textInput').value;
    let longestPalindrome = findLongestPalindrome(textInput);
    document.getElementById('palindromeOutput').textContent = longestPalindrome;
});

