
const {rangeLog}=require('./rangeMessages');

function batteryStatus(rangeLog)
{
        
    function getLogsFromInputAndRange(input,inputParameterType){
        const parameter=rangeLog[inputParameterType].dataRanges;
        let previousKey=null;
        for(currentKey in parameter){
          const convertNum=parseFloat(currentKey);
         
          if(input<convertNum){
             if(previousKey!=null){
             return parameter[previousKey];
             }
             else{
                 return "Out of Bound";
             }
          }
         
          previousKey=currentKey;

        }
        return"Out of Bound";

    }
     
    function batteryIsOk(temperature, soc, charge_rate) {

        const temperatureErrorLog=getLogsFromInputAndRange(temperature,'temperature');
        const socErrorLog=getLogsFromInputAndRange(soc,'soc');
        const chargeRateErrorLog=getLogsFromInputAndRange(charge_rate,'chargeRate');
      
        const outPutMessages=[temperatureErrorLog,socErrorLog,chargeRateErrorLog]
        .filter(
            (log)=>{
                return log!='';
            } );
            //used filter to remove empty logs
        
        return outPutMessages.length==0?'Battery is good':outPutMessages.join('\n');
    }
return {batteryIsOk};

}



module.exports={batteryStatus};

