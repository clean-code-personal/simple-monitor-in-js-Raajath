const { langaugeMessages } = require("../rangeMessages");
const assert = require("assert");
const { describe, it } = require("mocha");

const correctSpellingMain=["temperature","soc","chargeRate","English","German"];
const correctSpellingDataRanges=["English","German"];
const paramaters=["temperature","soc","chargeRate"];


describe("Test Type Error", function () {
    it("Check if key names within langaugeMessages are correctly spelled", function () {
       
       correctSpellingMain.forEach((correctName)=>{
        assert.equal(
            langaugeMessages.hasOwnProperty(correctName),
            true
            );
       }) 
    });
    it("Check if key names of dataRanges within each paramater of langauges are correctly spelled", function () {
    paramaters.forEach((parameter)=>{
    
        correctSpellingDataRanges.forEach((correctName)=>{
            for(i=0;i<langaugeMessages[parameter].dataRanges.length;i++)
            {
             assert.equal(langaugeMessages[parameter].dataRanges[i].hasOwnProperty(correctName),true);
            }
      
    });


     });

  });
});