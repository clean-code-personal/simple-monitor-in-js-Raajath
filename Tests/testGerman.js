const { batteryStatus } = require("../bms-monitor");
const { langaugeMessages } = require("../rangeMessages");
const assert = require("assert");
const { describe, it } = require("mocha");

const parameterTypes=["temperature","soc","chargeRate"];
const testCasesGerman = {
    test1: {
      parameters: {
        temperature: {
          value: 40,
          unit: 'C'
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
      expectedMessage: "Batterie ist ok",
    },
    test2: {
      parameters: {
        temperature: {
          value: -1,
          unit: 'C'
        },
        soc: {
          value: 10,
          unit: ''
        },
        chargeRate: {
          value: 0.01,
          unit: 'C'
        }
      },
      expectedMessage: "Die Temperatur ist niedrig\nDer Batteriestand ist niedrig\nDie Laderate ist niedrig",
    },
   
    test3: {
      parameters: {
        temperature: {
          value: 2,
          unit: 'C'
        },
        soc: {
          value: 22,
          unit: ''
        },
        chargeRate: {
          value: 0.07,
          unit: 'C'
        }
      },
      expectedMessage: "Warnung vor niedriger Temperatur\nWarnung vor niedrigem Batteriestand\nWarnung vor niedrigem Ladestrom",
    },
   test4: {
      parameters: {
        temperature: {
          value: 200,
          unit: 'C'
        },
        soc: {
          value: 110,
          unit: ''
        },
        chargeRate: {
          value: 1.1,
          unit: 'C'
        }
      },
      expectedMessage: "Außerhalb der Grenzen\nAußerhalb der Grenzen\nAußerhalb der Grenzen",
    }
  };
  
  
  
  
  describe("Battery conditions all tests In German", function () {
    it("Tests all cases", function () {
      for (testNumber in testCasesGerman) {
        const test = testCasesGerman[testNumber];
        assert.strictEqual(
          batteryStatus(
            langaugeMessages,
            "German",
            test.parameters,
            parameterTypes
          ),
          test.expectedMessage,
        );
      }
    });
  });
  