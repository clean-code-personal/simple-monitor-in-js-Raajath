const { batteryStatus } = require("../bms-monitor");
const {limits}=require('../inputParameterLimits');
const assert =require('assert');

const testBatteryCondition=batteryStatus(limits);

// testing when battery is good and one of the parameter is out of range
assert.strictEqual(testBatteryCondition.batteryIsOk(40,70,0.7),"Battery is good");
assert.strictEqual(testBatteryCondition.batteryIsOk(50,70,0.8),"Temperature is out of range!");
assert.strictEqual(testBatteryCondition.batteryIsOk(40,90,0.8),"State of Battery is out of range!");
assert.strictEqual(testBatteryCondition.batteryIsOk(40,70,0.9),"Charge Rate is out of range!");

//testing multiple parameter out of ideal range
assert.strictEqual(testBatteryCondition.batteryIsOk(50,70,0.9),"Temperature is out of range!\nCharge Rate is out of range!");
assert.strictEqual(testBatteryCondition.batteryIsOk(50,90,0.7),"Temperature is out of range!\nState of Battery is out of range!");
assert.strictEqual(testBatteryCondition.batteryIsOk(40,90,0.9),"State of Battery is out of range!\nCharge Rate is out of range!");

//testing if all parameters are out of ideal range
assert.strictEqual(testBatteryCondition.batteryIsOk(50,90,0.9),"Temperature is out of range!\nState of Battery is out of range!\nCharge Rate is out of range!");

console.log("All Good");


