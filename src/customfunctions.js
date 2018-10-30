/** 
* Consumes an API to return a json with address object
*
* @param {string} cep The brazilian zipcode to search 
* @returns {Promise}
*/
async function getAddressData(cep) {
  return (await fetch(`https://viacep.com.br/ws/${cep}/json/`)).json();
};

/**
* Returns the name of street
* 
* @param {string} cep 
* @returns {string}
*/
async function getLogradouro(cep) {
  let address = await getAddressData(cep);
  return address.logradouro;
};

/**
* Returns the name of city district
* 
* @param {string} cep
* @returns {string} 
*/
async function getBairro(cep) {
  let address = await getAddressData(cep);
  return address.bairro;
};

/**
* Returns the name of the city
* 
* @param {string} cep
* @returns {string} 
*/
async function getCidade(cep) {
  let address = await getAddressData(cep);
  return address.localidade;
};

/**
* Returns the code of federative unit
* 
* @param {string} cep 
* @returns {string}
*/
async function getUf(cep) {
  let address = await getAddressData(cep);
  return address.uf;
};

CustomFunctionMappings.CONSULTALOGRADOURO = getLogradouro;
CustomFunctionMappings.CONSULTABAIRRO = getBairro;
CustomFunctionMappings.CONSULTACIDADE = getCidade;
CustomFunctionMappings.CONSULTAUF = getUf;
