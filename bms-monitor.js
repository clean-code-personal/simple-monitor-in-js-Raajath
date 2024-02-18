const { langaugeMessages } = require("./rangeMessages");
const {checkUnit}=require("./checkInputUnit");
const {getMessageFromInput}=require("./getMessagesFromInput");

function batteryStatus(langaugeMessages, selectedLangauge,parameters,parameterTypes) {
    
   let outPutMessages=[];
   parameterTypes.forEach((parameterType)=>{
   let unitValue=checkUnit(parameters,parameterType);
   let log=getMessageFromInput(unitValue,parameterType,langaugeMessages,selectedLangauge);
   outPutMessages.push(log); 
   });

    const filteredMessages=outPutMessages.filter((log) => {
      return log != "";
    });

    return filteredMessages.length == 0
      ? langaugeMessages[selectedLangauge]
      : filteredMessages.join("\n");
  
}


module.exports = { batteryStatus,getMessageFromInput };
