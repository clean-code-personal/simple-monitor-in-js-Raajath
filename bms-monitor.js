const {limits}=require('./inputParameterLimits');

function batteryStatus(limits)
{

    function checkError(inputParameter,parameterRange){
       return inputParameter<parameterRange.minimum || inputParameter>parameterRange.maximum;
     }

    function getLog(errorStatus,inputParameterType){
    
      return errorStatus ? `${inputParameterType} is out of range!`:'';
    }

    function batteryIsOk(temperature, soc, charge_rate) {

    
        const temperatureError=checkError(temperature,limits.temperature);
        const socError=checkError(soc,limits.soc);
        const chargeRateError=checkError(charge_rate,limits.chargeRate);
    
        const temperatureErrorLog=getLog(temperatureError,"Temperature");
        const socErrorLog=getLog(socError,"State of Battery")
        const chargeRateErrorLog=getLog(chargeRateError,"Charge Rate");

        const errorLogs=[temperatureErrorLog,socErrorLog,chargeRateErrorLog]
        .filter(
            (log)=>{
                return log!='';
            } );
            //used filter to remove empty logs
        
        return errorLogs.length==0?'Battery is good':errorLogs.join('\n');
    }
return {batteryIsOk};

}


module.exports={batteryStatus};

