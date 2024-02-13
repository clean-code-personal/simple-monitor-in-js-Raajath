const {limits}=require('./inputParameterLimits');

function batteryStatus(limits)
{
        // function to know if breach is Higher or lower than given limits
    function checkBreach(inputParameter,parameterRange){
            if(inputParameter<parameterRange.minimum)
            {
             return 'low';
            }
            else if(inputParameter>parameterRange.maximum){
             return 'high';
            }
            return '';
     }
     
    function getLog(errorType,inputParameterType){
            return errorType===''?'':`${inputParameterType} is ${errorType}`;
    }
      

    function batteryIsOk(temperature, soc, charge_rate) {

        const temperatureError=checkBreach(temperature,limits.temperature);
        const socError=checkBreach(soc,limits.soc);
        const chargeRateError=checkBreach(charge_rate,limits.chargeRate);

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

