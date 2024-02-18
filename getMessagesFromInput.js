function getMessageFromInput(input, inputParameterType,langaugeMessages,selectedLangauge) {
    const rangesArray = langaugeMessages[inputParameterType].dataRanges;
    const findIndex = rangesArray.findIndex((element) => {
      return element.limit > input;
    });
    const rangeArrayObject = rangesArray[findIndex - 1];
    return rangeArrayObject[selectedLangauge];
  }

  module.exports={getMessageFromInput};