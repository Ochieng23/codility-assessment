String.prototype.camelCase = function() {
    // Replace all spaces with empty string and capitalize the first letter of each word
    return this.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  };
  
  git