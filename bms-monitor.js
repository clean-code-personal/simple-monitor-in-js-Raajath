const {limits}=require('./inputParameterLimits');
const {outPutLogs}=require('./outputLogs');

function batteryStatus(limits,outPutLogs)
{
        // function to know if breach is Higher or lower than given limits
    function checkBreach(input,parameterRange,inputParameterType){
            if(input<parameterRange.minimum)
            {
             return outPutLogs[inputParameterType].low;
            }
            else if(input>parameterRange.maximum){
             return outPutLogs[inputParameterType].high;
            }
            return '';
     }
     
    function batteryIsOk(temperature, soc, charge_rate) {

        const temperatureErrorLog=checkBreach(temperature,limits.temperature,'temperature');
        const socErrorLog=checkBreach(soc,limits.soc,'soc');
        const chargeRateErrorLog=checkBreach(charge_rate,limits.chargeRate,'chargeRate');
      
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

