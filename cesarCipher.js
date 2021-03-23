const caesarCipher = (str, shiftAmount) => {
    let encryptedStr = "";
  
    for (let i = 0; i < str.length; i++) {
      let letter = str[i];
      if (letter.match(/[a-z]/i)) {
        let code = str.charCodeAt(i);
        // Uppercase
        if (code >= 65 && code <= 90) {
          letter = String.fromCharCode(((code - 65 + shiftAmount) % 26) + 65);
        }
        // LowerCase
        else if (code >= 97 && code <= 122) {
          letter = String.fromCharCode(((code - 97 + shiftAmount) % 26) + 97);
        }
      }
      encryptedStr += letter;
    }
  
    return encryptedStr;
  };

  
  // Direction can be 'left' or 'right'. If invalid direction passed, it will consider it as right shift
  const caesarShift = (str, direction, amount) => {
    if (direction.toLowerCase() === 'left') {
        return caesarCipher(str, 26 - Math.abs(amount));
    } else {
         return caesarCipher(str, Math.abs(amount));
    }
}

module.exports = caesarShift;
