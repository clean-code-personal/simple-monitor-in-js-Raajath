const {limits}=require('./inputParameterLimits');
const {outPutLogs}=require('./outputLogs');

function batteryStatus(limits,outPutLogs)
{       
    function getLogsFromInputAndRange(input,parameterRange,inputParameterType){
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

        const temperatureErrorLog=getLogsFromInputAndRange(temperature,limits.temperature,'temperature');
        const socErrorLog=getLogsFromInputAndRange(soc,limits.soc,'soc');
        const chargeRateErrorLog=getLogsFromInputAndRange(charge_rate,limits.chargeRate,'chargeRate');
      
        const errorLogs=[temperatureErrorLog,socErrorLog,chargeRateErrorLog]
        .filter(
            (log)=>{
                return log!='';
            } ); 
        return errorLogs.length==0?'Battery is good':errorLogs.join('\n');
    }
return {batteryIsOk};

}


module.exports={batteryStatus};

