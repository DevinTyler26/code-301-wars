'use strict';

function insertDash(num) {
  debugger;
  var prevNum = 'e';
  var newNum = '';
  var num = num.toString();
  var strNum = num.split('');
  for (var i = 0; i < strNum.length; i++){
    var currentNum = (strNum[i]) % 2;
    if(currentNum === 1 && prevNum === 'e'){
      newNum = newNum + strNum[i];
      prevNum = 'o';
    }else if (currentNum === 1 && prevNum === 'o'){
      newNum = newNum + '-' + strNum[i];
      prevNum = 'o';
    } else{
      newNum = newNum + strNum[i];
      prevNum = 'e';
    }
  }
  return newNum;
}

insertDash(454793);