function rot13(str) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const code = char.charCodeAt(0);
    // Uppercase letters
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + 13) % 26) + 65);
    }
    // Lowercase letters
    return String.fromCharCode(((code - 97 + 13) % 26) + 97);
  });
}