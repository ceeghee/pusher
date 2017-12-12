/**
 * [myModule description]
 * @type {[type]}
 */
var myModule= require('./modules.js');
var myid= require('./process_env.js');
var base= process.env.PWD;
  var arith= myModule.calculate(8,3);

  console.log(arith);
  console.log(myid.id);
  console.log(base);
  /*++++++++++++++++++++++++==Module Exportation and implementation Ends*/