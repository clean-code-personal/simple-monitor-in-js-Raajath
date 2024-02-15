const { batteryStatus } = require("../bms-monitor");
const {langaugeMessages}=require('../rangeMessages');
const assert =require('assert');
const {describe,it}=require('mocha');

const testBatteryConditionEnglish=batteryStatus(langaugeMessages,"English");
const testCasesEnglish={
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
test13:{
    temperature:57,
    soc:70,
    chargeRate:0.76,
    expectedMessage:"Temperature is high\nCharge Rate High-Warning"
},
test14:{
   temperature:43,
   soc:67,
   chargeRate:0.6,
   expectedMessage:"Temperature High-Warning",
},
test15:{
    temperature:40,
    soc:78,
    chargeRate:0.6,
    expectedMessage:"State of Battery High-Warning",
 },
 test16:{
    temperature:40,
    soc:70,
    chargeRate:0.77,
    expectedMessage:"Charge Rate High-Warning",
 },
 test17:{
    temperature:1,
    soc:67,
    chargeRate:0.6,
    expectedMessage:"Temperature Low-Warning",
 },
 test18:{
     temperature:40,
     soc:22,
     chargeRate:0.6,
     expectedMessage:"State of Battery Low-Warning",
  },
  test19:{
     temperature:40,
     soc:70,
     chargeRate:0.1,
     expectedMessage:"Charge Rate Low-Warning",
  }


}

//Could do alternate testing by testing rangeMessage (if for english bms-monitor is tested)
describe('Battery conditions all tests In English',function(){

 it("Tests all cases",function(){
     
   for(testNumber in testCasesEnglish)
   {
   const test=testCasesEnglish[testNumber];
   assert.strictEqual(testBatteryConditionEnglish.batteryIsOk(test.temperature, test.soc, test.chargeRate), test.expectedMessage);
   }
});

});
const testBatteryGerman=batteryStatus(langaugeMessages,"German");
const testCasesGerman={
    test1:{
        temperature:40,
        soc:70,
        chargeRate:0.7,
        expectedMessage:"Batterie ist ok"
    },
    
    test2:{
        temperature:-1,
        soc:10,
        chargeRate:0.01,
        expectedMessage:"Die Temperatur ist niedrig\nDer Batteriestand ist niedrig\nDie Laderate ist niedrig"
    },
    test3:{
        temperature:50,
        soc:95,
        chargeRate:0.9,
        expectedMessage:"Die Temperatur ist hoch\nDer Batteriezustand ist hoch\nDie Laderate ist hoch"
    },
    
    test4:{
        temperature:2,
        soc:22,
        chargeRate:0.07,
        expectedMessage:"Warnung vor niedriger Temperatur\nWarnung vor niedrigem Batteriestand\nWarnung vor niedrigem Ladestrom"
         
    },
    
    test5:{
        temperature:44,
        soc:78,
        chargeRate:0.78,
        expectedMessage:"Warnung vor hoher Temperatur\nWarnung vor hohem Batteriestand\nWarnung vor hoher Laderate"
         
    },
    
    test6:{
        temperature:200,
        soc:110,
        chargeRate:1.1,
        expectedMessage:"Außerhalb der Grenzen\nAußerhalb der Grenzen\nAußerhalb der Grenzen"
         
    },
  
   
}
describe('Battery conditions all tests In German',function(){

    it("Tests all cases",function(){
        
      for(testNumber in testCasesGerman)
      {
      const test=testCasesGerman[testNumber];
      assert.strictEqual(testBatteryGerman.batteryIsOk(test.temperature, test.soc, test.chargeRate), test.expectedMessage);
      }
   });
   
   });






