const { batteryStatus } = require("../bms-monitor");
const {limits}=require('../inputParameterLimits');
const {outPutLogs}=require('../outputLogs');
const assert =require('assert');
const {describe,it}=require('mocha');

const testBatteryCondition=batteryStatus(limits,outPutLogs);


describe('Battery conditions all tests',function(){


describe('Battery Condition Good Test', function() {
    it('Battery is good Input conditions ', function() {
      assert.strictEqual(testBatteryCondition.batteryIsOk(40, 70, 0.7), "Battery is good");
    });
  });


  describe('When one of battery parameter is out of range',function(){
 
    it('Teperature is high in this test case',function(){
    assert.strictEqual(testBatteryCondition.batteryIsOk(50,70,0.8),"Temperature is high");
    });

    it('Temperature is low in this test case',function(){
    assert.strictEqual(testBatteryCondition.batteryIsOk(-1,70,0.8),"Temperature is low");
    });

    it('State of Battery is high in this test case',function(){
        assert.strictEqual(testBatteryCondition.batteryIsOk(40,90,0.8),"State of Battery is high");
    });

    it('State of Battery is low in this test case"',function(){
        assert.strictEqual(testBatteryCondition.batteryIsOk(40,10,0.8),"State of Battery is low");
    });

    it('Charge Rate is high in this test case',function(){
        assert.strictEqual(testBatteryCondition.batteryIsOk(40,70,0.9),"Charge Rate is high");
    });


  });


  describe('When multiple parameter is out of range',function(){

    it('Temperature and Charge rate high here',function(){

        assert.strictEqual(testBatteryCondition.batteryIsOk(50,70,0.9),"Temperature is high\nCharge Rate is high");
    });

    it('Temperature and state of charge is  high here',function(){

        assert.strictEqual(testBatteryCondition.batteryIsOk(50,90,0.7),"Temperature is high\nState of Battery is high");
    });

    
    it('Temperature and state of charge is  low here',function(){

        assert.strictEqual(testBatteryCondition.batteryIsOk(-1,10,0.7),"Temperature is low\nState of Battery is low");
    });

    it('Temperature is high and state of charge is  low here',function(){

        assert.strictEqual(testBatteryCondition.batteryIsOk(50,10,0.7),"Temperature is high\nState of Battery is low");
    });

    it('Temperature is low and state of charge is  high here',function(){

        assert.strictEqual(testBatteryCondition.batteryIsOk(-1,92,0.7),"Temperature is low\nState of Battery is high");
    });

    it('State of battery is high and Charge rate is high',function(){
   assert.strictEqual(testBatteryCondition.batteryIsOk(40,90,0.9),"State of Battery is high\nCharge Rate is high");
    });

    it('All parameters high',function(){
        assert.strictEqual(testBatteryCondition.batteryIsOk(50,90,0.9),"Temperature is high\nState of Battery is high\nCharge Rate is high");
    });

    it('All parameters low',function(){
        assert.strictEqual(testBatteryCondition.batteryIsOk(-1,10,-1),"Temperature is low\nState of Battery is low\nCharge Rate is low");
    });


  });




});




