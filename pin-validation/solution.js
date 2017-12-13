function validatePIN (pin) {
  pin = /^(?=[0-9]*$)(?:.{4}|.{6})$/.test(pin);
  return pin;
}