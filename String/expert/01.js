function caesarCipher(s, k) {
  var result = "";

  for (var i = 0; i < s.length; i++) {
    var charCode = s.charCodeAt(i);

    // Encrypt uppercase letters
    if (charCode >= 65 && charCode <= 90) {
      var encryptedCharCode = ((charCode - 65 + k) % 26) + 65;
      result += String.fromCharCode(encryptedCharCode);
    }
    //Encrypt lowercase letters
    else if (charCode >= 97 && charCode <= 122) {
      var encryptedCharCode = ((charCode - 97 + k) % 26) + 97;
      result += String.fromCharCode(encryptedCharCode);
    }
    //Non-alphabetic characters remain unchanged
    else {
      result += s.charAt(i);
    }
  }

  return result;
}

// Example usage
console.log(caesarCipher("middle-Outz", 2)); // Output: "okffng-Qwvb"
console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)); // Output: "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"
console.log(caesarCipher("A friend in need is a friend indeed", 20)); // Output: "U zlcyhx ch hyyx cm u zlcyhx chxyyx"
