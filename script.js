function shortcut(s1, s2) {
  if (!s1 || !s2) {
    return '';
  }

  // Get the initial letter of each string and concatenate them
  const result = s1.charAt(0) + s2.charAt(0);

  return result;
}

// Example usage
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
