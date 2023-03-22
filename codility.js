String.prototype.camelCase = function() {
    // Split the string into an array of words
    var words = this.split(' ');
  
    // Capitalize the first letter of each word and concatenate them
    var camelCase = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
  
    return camelCase;
  };
  