function caesarCipher(s, k) {
  var result = "";

  for (var i = 0; i < s.length; i++) {
    var charCode = s.charCodeAt(i);

    // Encrypt uppercase letters
    if (charCode >= 65 && charCode <= 90) {
      var encryptedCharCode = ((charCode - 65 + k) % 26) + 65;
      console.log('test is', encryptedCharCode);
      console.log('test us', String.fromCharCode(encryptedCharCode));
      result += String.fromCharCode(encryptedCharCode);
    }
    // Encrypt lowercase letters
    else if (charCode >= 97 && charCode <= 122) {
      var encryptedCharCode = ((charCode - 97 + k) % 26) + 97;
      result += String.fromCharCode(encryptedCharCode); 
    }
    // Non-alphabetic characters remain unchanged
    else {
      result += s.charAt(i);
    }
  }

  return result;
}

// Example usage
console.log(caesarCipher("middle-Outz", 2)); // Output: "okffng-Qwvb"
