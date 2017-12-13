function capitalize(str){
    var newString = str.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
    var newStringTwo = str.split('').map((v,i) => i % 2 ? v.toUpperCase(): v.toLowerCase()).join('');
      return [newString, newStringTwo]
  };