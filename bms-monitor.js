const { langaugeMessages } = require("./rangeMessages");

function batteryStatus(langaugeMessages, selectedLangauge) {
    
  function getMessageFromInput(input, inputParameterType) {
    const rangesArray = langaugeMessages[inputParameterType].dataRanges;
    const findIndex = rangesArray.findIndex((element) => {
      return element.limit > input;
    });
    const rangeArrayObject = rangesArray[findIndex - 1];
    return rangeArrayObject[selectedLangauge];
  }

  function batteryIsOk(temperature, soc, charge_rate) {
    const temperatureErrorLog = getMessageFromInput(temperature, "temperature");
    const socErrorLog = getMessageFromInput(soc, "soc");
    const chargeRateErrorLog = getMessageFromInput(charge_rate, "chargeRate");
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
  return { batteryIsOk };
}

module.exports = { batteryStatus };
