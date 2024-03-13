import _ from 'lodash';
_.mul = (array: number[]) : number => {
  return array.reduce((total, actual) => total * actual, 1)
}

global.MYGLOBAL = 'CREATING MY GLOBAL DECLARE'

export default _;
