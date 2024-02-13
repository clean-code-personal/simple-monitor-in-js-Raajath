const {expect} = require('chai');
const {limits}=require('./inputParameterLimits');

function checkError(inputParameter,limits){
    return inputParameter<limits.minimum || inputParameter>limits.maximum;
}

function batteryIsOk(temperature, soc, charge_rate,limits) {

  
   const temperatureError=checkError(temperature,limits.temperature);
   const socError=checkError(soc,limits.soc);
   const chargeRateError=checkError(charge_rate,limits.chargeRate);

    const temperatureErrorLog=temperatureError?'Temperature is out of range!':'';
    const socErrorLog=socError?'State of Charge is out of range!':'';
    const chargeRateErrorLog=chargeRateError ?'Charge rate is out of range!':'';

    //used filter to remove empty logs
    const errorLogs=[temperatureErrorLog,socErrorLog,chargeRateErrorLog].filter(
        (log)=>{
            return log!='';
        }

    );
  
    return errorLogs.length==0?'Battery is good':errorLogs.join('\n');

}



console.log(batteryIsOk(40,66,0.6,limits))
