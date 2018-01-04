function find_average(array) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const newArray = array.reduce(reducer);
  const val = newArray / array.length;
  return val;
}