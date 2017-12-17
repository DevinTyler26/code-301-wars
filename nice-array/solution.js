function isNice(arr){
  var newStr = [];
  var niceStr = [];
  debugger;
  for (var i = 0; i < arr.length; i++){
    var a = arr[i] + 1;
    var b = arr[i] - 1;
    newStr = [a,b];
    if(arr.includes(undefined)){
      niceStr.push('false');
    }else if (arr.includes(a) || arr.includes(b)){
      niceStr.push('true');
    }else{
      niceStr.push('false');
    }
  }
  if (niceStr.includes('false')){
    return false;
  } else{
    return true;
  }
};