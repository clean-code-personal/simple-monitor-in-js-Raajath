
const {langaugeMessages}=require('./rangeMessages');

function batteryStatus(langaugeMessages,langauge)
{   
    const rangeLog=langaugeMessages[langauge];
    
    function getMessageFromInput(input,inputParameterType){
        const rangesArray=rangeLog[inputParameterType].dataRanges;
        const findIndex=rangesArray.findIndex(element=>{
            return element.limit>input;
        });
        return rangesArray[findIndex-1].message;
    }

    function batteryIsOk(temperature, soc, charge_rate) {
        const temperatureErrorLog=getMessageFromInput(temperature,'temperature');
        const socErrorLog=getMessageFromInput(soc,'soc');
        const chargeRateErrorLog=getMessageFromInput(charge_rate,'chargeRate');
        const outPutMessages=[temperatureErrorLog,socErrorLog,chargeRateErrorLog]
        .filter(
            (log)=>{
                return log!='';
            } );
        return outPutMessages.length==0?rangeLog.sucessMessage:outPutMessages.join('\n');
    }
return {batteryIsOk};

}



module.exports={batteryStatus};

