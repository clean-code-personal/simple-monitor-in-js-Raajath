const { batteryStatus } = require("../bms-monitor");
const {limits}=require('../inputParameterLimits');
const {outPutLogs}=require('../outputLogs');
const assert =require('assert');

const testBatteryCondition=batteryStatus(limits,outPutLogs);

// testing when battery is good and one of the parameter is out of range
assert.strictEqual(testBatteryCondition.batteryIsOk(40,70,0.7),"Battery is good");
assert.strictEqual(testBatteryCondition.batteryIsOk(50,70,0.8),"Temperature is high");
assert.strictEqual(testBatteryCondition.batteryIsOk(-1,70,0.8),"Temperature is low");
assert.strictEqual(testBatteryCondition.batteryIsOk(40,90,0.8),"State of Battery is high");
assert.strictEqual(testBatteryCondition.batteryIsOk(40,70,0.9),"Charge Rate is high");


//testing multiple parameter out of ideal range
assert.strictEqual(testBatteryCondition.batteryIsOk(50,70,0.9),"Temperature is high\nCharge Rate is high");
assert.strictEqual(testBatteryCondition.batteryIsOk(50,90,0.7),"Temperature is high\nState of Battery is high");
assert.strictEqual(testBatteryCondition.batteryIsOk(40,90,0.9),"State of Battery is high\nCharge Rate is high");
assert.strictEqual(testBatteryCondition.batteryIsOk(-1,10,0.7),"Temperature is low\nState of Battery is low");

//testing if all parameters are out of ideal range
assert.strictEqual(testBatteryCondition.batteryIsOk(50,90,0.9),"Temperature is high\nState of Battery is high\nCharge Rate is high");
assert.strictEqual(testBatteryCondition.batteryIsOk(-1,10,-1),"Temperature is low\nState of Battery is low\nCharge Rate is low");


console.log("All Good");


