function consultaLogradouro(cep) {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      console.log(response)
      resolve(response.logradrouro);
    });
};

CustomFunctionMappings.CONSULTALOGRADOURO = consultaLogradouro;


// function add(first, second){
//   return first + second;
// }

// function increment(incrementBy, callback) {
//   var result = 0;
//   var timer = setInterval(function() {
//     result += incrementBy;
//     callback.setResult(result);
//   }, 1000);

//   callback.onCanceled = function() {
//     clearInterval(timer);
//   };
// }

// CustomFunctionMappings.ADD = add;
// CustomFunctionMappings.INCREMENT = increment;