function ucfirst (word : string) {
    const firstLetter = word.charAt(0).toUpperCase();
    return firstLetter + word.slice(1)
  }

  export default ucfirst;