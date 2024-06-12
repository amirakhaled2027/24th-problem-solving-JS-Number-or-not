//Check if input variable is a number or not
function checkNumber(a) {
    if (typeof a === 'number') {
      return true;
    } else {
      return false;
    }
  }
  console.log(checkNumber(1));