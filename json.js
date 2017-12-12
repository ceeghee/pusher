/**
 * working with JSON
 * Objects Can be referenced inside anoda object
 * key-pairs are accessed using the . notation
 *
 * You can use an iteration to get json object attributes eg: { var myjson={ 
            id:2,
            name:"ekene"
            }
for(var att in myjson){
    console.log(att)
}
====>outputs : id and name
 */

var customer={
    name:'Goodluck ekene',
    age:30,
    address:{
        city:"Ibadan",
        state:"Oyo",
        country:"Nigeria"
    },
    regDate: new Date()

}

// customer.name="Mike Ross";/*Editing Json attribute value*/
    // customer['id']="dfgdfhhjdbfjhbdhbfjh";/*inserting new data into json object */
// console.log(customer);
