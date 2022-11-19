function lcfirst (word : string) {
    const firstLetter = word.charAt(0).toLowerCase();
    return firstLetter + word.slice(1)
  }

  export default lcfirst;