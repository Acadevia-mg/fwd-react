//PARAMETERS

//DEFAULT PARAMETERS
// fonksiyon ile default parametreleri
function defaultParameters(name = "John", age = 30, city = "New York") {
  return {
    name: name,
    age: age,
    city: city,
  };
}

//REST PARAMETERS
// fonksiyon ile rest parametreleri
function restParameters(...args) {
  return args;
}
