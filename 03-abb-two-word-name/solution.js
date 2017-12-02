function abbrevName(arr){
    var arrName = arr.split(" ");
    return `${arrName[0][0].toUpperCase()}.${arrName[1][0].toUpperCase()}`;
  }