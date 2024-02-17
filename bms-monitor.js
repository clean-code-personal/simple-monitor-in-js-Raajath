const { langaugeMessages } = require("./rangeMessages");
const {checkUnit}=require("./checkInputUnit");

const parameterTypes=["temperature","soc","chargeRate"];

function batteryStatus(langaugeMessages, selectedLangauge,parameters,parameterTypes) {
    
  function getMessageFromInput(input, inputParameterType) {
    const rangesArray = langaugeMessages[inputParameterType].dataRanges;
    const findIndex = rangesArray.findIndex((element) => {
      return element.limit > input;
    });
    const rangeArrayObject = rangesArray[findIndex - 1];
    return rangeArrayObject[selectedLangauge];
  }



  function batteryIsOk() {
   let outPutMessages=[];
   parameterTypes.forEach((parameterType)=>{
   let unitValue=checkUnit(parameters,parameterType);
   let log=getMessageFromInput(unitValue,parameterType);
   outPutMessages.push(log); 
   });

    const filteredMessages=outPutMessages.filter((log) => {
      return log != "";
    });

    return filteredMessages.length == 0
      ? langaugeMessages[selectedLangauge]
      : filteredMessages.join("\n");
  }
  const returnValue=batteryIsOk();
  return returnValue;
}


module.exports = { batteryStatus };
