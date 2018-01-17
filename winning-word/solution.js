function high(x){
    return x.split(' ')
    .sort((a,b) => calcWordScr(a) < calcWordScr(b))[0]
    
  }
  
  function calcWordScr(word) {
    return [...word].map(x => x.charCodeAt(0)-96)
    .reduce((x,y) => x + y, 0)
  }