const { batteryStatus } = require("../bms-monitor");
const {rangeLog}=require('../rangeMessages');
const assert =require('assert');
const {describe,it}=require('mocha');

const testBatteryCondition=batteryStatus(rangeLog);
const testCases={
test1:{
    temperature:40,
    soc:70,
    chargeRate:0.7,
    expectedMessage:"Battery is good"
},
test2:{
    temperature:50,
    soc:70,
    chargeRate:0.7,
    expectedMessage:"Temperature is high"
},
test3:{
    temperature:40,
    soc:90,
    chargeRate:0.7,
    expectedMessage:"State of Battery is high"
},
test4:{
    temperature:40,
    soc:70,
    chargeRate:0.9,
    expectedMessage:"Charge Rate is high"
},
test5:{
    temperature:50,
    soc:90,
    chargeRate:0.7,
    expectedMessage:"Temperature is high\nState of Battery is high"
},
test6:{
    temperature:50,
    soc:10,
    chargeRate:0.7,
    expectedMessage:"Temperature is high\nState of Battery is low"
},

test7:{
    temperature:-1,
    soc:10,
    chargeRate:0.01,
    expectedMessage:"Temperature is low\nState of Battery is low\nCharge Rate is low"
},
test8:{
    temperature:50,
    soc:95,
    chargeRate:0.9,
    expectedMessage:"Temperature is high\nState of Battery is high\nCharge Rate is high"
},

test9:{
    temperature:2,
    soc:22,
    chargeRate:0.07,
    expectedMessage:"Temperature Low-Warning\nState of Battery Low-Warning\nCharge Rate Low-Warning"
     
},
test10:{
    temperature:44,
    soc:78,
    chargeRate:0.78,
    expectedMessage:"Temperature High-Warning\nState of Battery High-Warning\nCharge Rate High-Warning"
     
},

test11:{
    temperature:200,
    soc:110,
    chargeRate:1.1,
    expectedMessage:"Out of Bound\nOut of Bound\nOut of Bound"
     
},
test12:{
    temperature:-200,
    soc:-1,
    chargeRate:-1,
    expectedMessage:"Out of Bound\nOut of Bound\nOut of Bound"
     
},


}

describe('Battery conditions all tests',function(){

 it("Tests all cases",function(){
     
   for(testNumber in testCases)
   {
   const test=testCases[testNumber];
   assert.strictEqual(testBatteryCondition.batteryIsOk(test.temperature, test.soc, test.chargeRate), test.expectedMessage);
   }
});

});




