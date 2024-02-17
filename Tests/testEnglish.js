const { batteryStatus } = require("../bms-monitor");
const { langaugeMessages } = require("../rangeMessages");
const assert = require("assert");
const { describe, it } = require("mocha");

const parameterTypes=["temperature","soc","chargeRate"];
const testCasesEnglish = {
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
    expectedMessage: "Battery is good",
  },
  test2: {
    parameters: {
      temperature: {
        value: 122,
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
    expectedMessage: "Temperature is high",
  },
  test3: {
    parameters: {
      temperature: {
        value: 314,
        unit: 'K'
      },
      soc: {
        value: 90,
        unit: ''
      },
      chargeRate: {
        value: 0.7,
        unit: 'C'
      }
    },
    expectedMessage: "State of Battery is high",
  },

  test4: {
    parameters: {
      temperature: {
        value: 50,
        unit: 'C'
      },
      soc: {
        value: 90,
        unit: ''
      },
      chargeRate: {
        value: 0.7,
        unit: 'C'
      }
    },
    expectedMessage: "Temperature is high\nState of Battery is high",
  },

  test5: {
    parameters: {
      temperature: {
        value: 30,
        unit: 'F'
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
    expectedMessage: "Temperature is low\nState of Battery is low\nCharge Rate is low",
  },
  test6: {
    parameters: {
      temperature: {
        value: 50,
        unit: 'C'
      },
      soc: {
        value: 95,
        unit: ''
      },
      chargeRate: {
        value: 0.9,
        unit: 'C'
      }
    },
    expectedMessage: "Temperature is high\nState of Battery is high\nCharge Rate is high",
  },
  test7: {
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
    expectedMessage: "Temperature Low-Warning\nState of Battery Low-Warning\nCharge Rate Low-Warning",
  },
  test8: {
    parameters: {
      temperature: {
        value: 44,
        unit: 'C'
      },
      soc: {
        value: 78,
        unit: ''
      },
      chargeRate: {
        value: 0.78,
        unit: 'C'
      }
    },
    expectedMessage: "Temperature High-Warning\nState of Battery High-Warning\nCharge Rate High-Warning",
  },
  test9: {
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
    expectedMessage: "Out of Bound\nOut of Bound\nOut of Bound",
  },
  test10: {
    parameters: {
      temperature: {
        value: -200,
        unit: 'C'
      },
      soc: {
        value: -1,
        unit: ''
      },
      chargeRate: {
        value: -1,
        unit: 'C'
      }
    },
    expectedMessage: "Out of Bound\nOut of Bound\nOut of Bound",
  },



};

//Could do alternate testing by testing rangeMessage (if for english bms-monitor is tested)
describe("Battery conditions all tests In English", function () {
  it("Tests all cases", function () {
    for (testNumber in testCasesEnglish) {
      const test = testCasesEnglish[testNumber];
      assert.strictEqual(
        batteryStatus(
          langaugeMessages,
          "English",
          test.parameters,
          parameterTypes
        ),
        test.expectedMessage,
      );
    }
  });
});



