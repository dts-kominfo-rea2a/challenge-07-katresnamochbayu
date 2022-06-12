const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {

  let marah = 0;
  let tidakMarah = 0;

  let dataPromiseIXX = await promiseTheaterIXX();
  dataPromiseIXX.forEach((object, index) => {
    if(object.hasil === 'marah') {
      marah++
    }
    if(object.hasil === 'tidak marah') {
      tidakMarah++
    }
  })

  let dataPromiseVGC = await promiseTheaterVGC();
  dataPromiseVGC.forEach((object, index) => {
    if(object.hasil === 'marah') {
      marah++
    }
    if(object.hasil === 'tidak marah') {
      tidakMarah++
    }
  })

  if(emosi == "marah") {
    return marah;
  }
  if(emosi == "tidak marah") {
    return tidakMarah;
  }
  

};

module.exports = {
  promiseOutput,
};
