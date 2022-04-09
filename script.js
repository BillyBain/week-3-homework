// Assignment Code
const generateBtn = document.querySelector("#generate");

function generatePassword() {
  let password = ""
  const upper = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]; 
  const lower = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]; 
  const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const unique = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "+", "=", "?"];
  
  const all = upper.concat(lower, number, unique)
  const uln = upper.concat(lower, number)
  const ulq = upper.concat(lower, unique)
  const ul = upper.concat(lower)
  const un = upper.concat(number)
  const uq = upper.concat(unique)
  const unq = upper.concat(number, unique)
  const lnq = lower.concat(number, unique)
  const ln = lower.concat(number)
  const lq = lower.concat(unique)
  const nq = number.concat(unique)

  let length = window.prompt("Enter desired length:");
  if (length < 8) {
    return "Needs to be minimum 8 characters.";
  } else if (length > 128){
    return "Needs to be less than 128 characters."
  }
  const upperT = window.confirm("Would you like Upper case letters?")
  const lowerT = window.confirm("would you like Lower case letters?")
  const numberT = window.confirm("Would you like Numbers?")
  const uniqueT = window.confirm("Would you like Special characters")
  
  if (upperT === true && lowerT === true && numberT === true && uniqueT ===true) {
      for (i = 0; i < length; i++) {
      password += all[Math.floor(Math.random()*all.length)];
      }
      return password;
      } else if (upperT === true && lowerT === true && numberT === true && !uniqueT ===true) {
        for (i = 0; i <length; i++) {
        password += uln[Math.floor(Math.random()*uln.length)];
        }
        return password;
        } else if (upperT === true && lowerT === true && !numberT === true && uniqueT ===true) {
          for (i = 0; i <length; i++) {
          password += ulq[Math.floor(Math.random()*ulq.length)];
          }
          return password;
          } else if (upperT === true && !lowerT === true && numberT === true && uniqueT ===true) {
            for (i = 0; i <length; i++) {
            password += unq[Math.floor(Math.random()*unq.length)];
            }
            return password;
            } else if (upperT === true && lowerT === true && !numberT === true && !uniqueT ===true) {
              for (i = 0; i <length; i++) {
              password += ul[Math.floor(Math.random()*ul.length)];
              }
              return password;
              } else if (upperT === true && !lowerT === true && !numberT === true && uniqueT ===true) {
                for (i = 0; i <length; i++) {
                password += uq[Math.floor(Math.random()*uq.length)];
                }
                return password;
                } else if (upperT === true && !lowerT === true && numberT === true && !uniqueT ===true) {
                  for (i = 0; i <length; i++) {
                  password += un[Math.floor(Math.random()*un.length)];
                  }
                  return password;
                  } else if (upperT === true && !lowerT === true && !numberT === true && !uniqueT ===true) {
                    for (i = 0; i <length; i++) {
                    password += upper[Math.floor(Math.random()*upper.length)];
                    }
                    return password;
                    } else if (!upperT === true && lowerT === true && numberT === true && uniqueT ===true) {
                      for (i = 0; i <length; i++) {
                      password += lnq[Math.floor(Math.random()*lnq.length)];
                      }
                      return password;
                      } else if (!upperT === true && lowerT === true && !numberT === true && uniqueT ===true) {
                        for (i = 0; i <length; i++) {
                        password += lq[Math.floor(Math.random()*lq.length)];
                        }
                        return password;
                        } else if (!upperT === true && !lowerT === true && numberT === true && uniqueT ===true) {
                          for (i = 0; i <length; i++) {
                          password += nq[Math.floor(Math.random()*nq.length)];
                          }
                          return password;
                          } else if (!upperT === true && lowerT === true && numberT === true && !uniqueT ===true) {
                            for (i = 0; i <length; i++) {
                            password += ln[Math.floor(Math.random()*ln.length)];
                            }
                            return password;
                            } else if (!upperT === true && lowerT === true && !numberT === true && !uniqueT ===true) {
                              for (i = 0; i <length; i++) {
                              password += lower[Math.floor(Math.random()*lower.length)];
                              }
                              return password;
                              } else if (!upperT === true && !lowerT === true && numberT === true && !uniqueT ===true) {
                                for (i = 0; i <length; i++) {
                                password += number[Math.floor(Math.random()*number.length)];
                                }
                                return password;
                                } else if (!upperT === true && !lowerT === true && !numberT === true && uniqueT ===true) {
                                  for (i = 0; i <length; i++) {
                                  password += unique[Math.floor(Math.random()*unique.length)];
                                  }
                                  return password;
                                  } else {
                                    return "Please Select at least one variable."
                                  }
      }

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// generatePassword()