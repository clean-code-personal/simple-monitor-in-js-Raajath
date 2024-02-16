const { langaugeMessages } = require("./rangeMessages");
const {checkUnit}=require("./checkInputUnit");

function batteryStatus(langaugeMessages, selectedLangauge,parameters) {
    
  function getMessageFromInput(input, inputParameterType) {
    const rangesArray = langaugeMessages[inputParameterType].dataRanges;
    const findIndex = rangesArray.findIndex((element) => {
      return element.limit > input;
    });
    const rangeArrayObject = rangesArray[findIndex - 1];
    return rangeArrayObject[selectedLangauge];
  }



  function batteryIsOk() {
    const temperature=checkUnit(parameters,"temperature");
    const soc=checkUnit(parameters,"soc");
    const chargeRate=checkUnit(parameters,"chargeRate");

    const temperatureErrorLog = getMessageFromInput(temperature, "temperature");
    const socErrorLog = getMessageFromInput(soc, "soc");
    const chargeRateErrorLog = getMessageFromInput(chargeRate, "chargeRate");
    const outPutMessages = [
      temperatureErrorLog,
      socErrorLog,
      chargeRateErrorLog,
    ].filter((log) => {
      return log != "";
    });

    return outPutMessages.length == 0
      ? langaugeMessages[selectedLangauge]
      : outPutMessages.join("\n");
  }
  const returnValue=batteryIsOk();
  return returnValue;
}

module.exports = { batteryStatus };
