/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = address => address.split('.').map(Number).join('[.]');
