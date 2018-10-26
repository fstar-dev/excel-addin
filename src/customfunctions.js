function consultaLogradouro(cep) {
  return new Promise(function(setResult){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
          response.status);
          return;
        }

        response.json().then(function(data) {
          setResult(data.logradouro)
        });
      })
      .catch(function(err) {
          console.log('Fetch Error :-S', err)
      }
    )
  })
};

CustomFunctionMappings.CONSULTALOGRADOURO = consultaLogradouro;
