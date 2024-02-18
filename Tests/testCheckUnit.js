const {checkUnit}=require("../checkInputUnit");
const assert = require("assert");
const { describe, it } = require("mocha");

const testCases={
    test1:{
        parameters: {
            temperature: {
              value: 32,
              unit: 'F'
            },
            soc: {
              value: 70,
              unit: ''
            },
            chargeRate: {
              value: 0.7,
              unit: 'C'
            }
          },
        category:"temperature",
        expectedOutput:0
    },
    test2:{
        parameters: {
            temperature: {
              value: 32,
              unit: 'F'
            },
            soc: {
              value: 70,
              unit: ''
            },
            chargeRate: {
              value: 0.7,
              unit: 'C'
            }
          },
        category:"soc",
        expectedOutput:70
    },
    test3:{
        parameters: {
            temperature: {
              value: 32,
              unit: 'F'
            },
            soc: {
              value: 70,
              unit: ''
            },
            chargeRate: {
              value: 0.7,
              unit: 'C'
            }
          },
        category:"chargeRate",
        expectedOutput:0.7
    },
    test4:{
        parameters: {
            temperature: {
              value: 104,
              unit: 'F'
            },
            soc: {
              value: 70,
              unit: ''
            },
            chargeRate: {
              value: 0.7,
              unit: 'C'
            }
          },
        category:"temperature",
        expectedOutput:40
    },
    test5:{
        parameters: {
            temperature: {
              value: 64,
              unit: 'F'
            },
            soc: {
              value: 70,
              unit: ''
            },
            chargeRate: {
              value: 0.7,
              unit: 'C'
            }
          },
        category:"temperature",
        expectedOutput:17.7778
    },
    test6:{
        parameters: {
            temperature: {
              value: 273.15,
              unit: 'K'
            },
            soc: {
              value: 70,
              unit: ''
            },
            chargeRate: {
              value: 0.7,
              unit: 'C'
            }
          },
        category:"temperature",
        expectedOutput:0
    }

}

describe("Testing if input conversions are working function", function () {
    it("Tests Faherenhite to celcius convertion", function () {
      for (testNumber in testCases) {
        const test = testCases[testNumber];
        assert.equal(
          checkUnit(test.parameters,test.category),
          test.expectedOutput,
        );
      }
    });
  });



