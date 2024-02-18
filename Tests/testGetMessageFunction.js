const {getMessageFromInput}=require("../getMessagesFromInput");
const { langaugeMessages } = require("../rangeMessages");
const assert = require("assert");
const { describe, it } = require("mocha");

const testCases={

    test1:{
        input:40,
        inputType:"temperature",
        selectedLangauge:"English",
        expectedMessage:""
    },
    test2:{
        input:60,
        inputType:"temperature",
        selectedLangauge:"English",
        expectedMessage:"Temperature is high"
    },
    test3:{
      input:-1,
      inputType:"temperature",
      selectedLangauge:"German",
      expectedMessage:"Die Temperatur ist niedrig"
  },
    test4:{
      input:2,
      inputType:"temperature",
      selectedLangauge:"English",
      expectedMessage:"Temperature Low-Warning"
  },

   test5:{
    input:90,
    inputType:"soc",
    selectedLangauge:"English",
    expectedMessage:"State of Battery is high"
  },
  
  test6:{
    input:1.2,
    inputType:"chargeRate",
    selectedLangauge:"German",
      expectedMessage: "Außerhalb der Grenzen" 
  },
}

describe("Testing getMessageFromInput function", function () {
    it("Tests all cases", function () {
      for (testNumber in testCases) {
        const test = testCases[testNumber];
        assert.strictEqual(
          getMessageFromInput(test.input,test.inputType,langaugeMessages,test.selectedLangauge),
          test.expectedMessage,
        );
      }
    });
  });