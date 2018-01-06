function cubeOdd(arr) {
      let numbers = arr.map(num => Math.pow(num, 3))
      if(numbers.includes(NaN)){
        return numbers = undefined
      }else{
        let filteredNum = numbers.filter(num => num % 2)
        if (filteredNum.length === 0){
        return 0
        }else{
          const reducer = (accumulator, currentValue) => accumulator + currentValue;
          let newNumbers = filteredNum.reduce(reducer);
          return newNumbers
        }
    }
}