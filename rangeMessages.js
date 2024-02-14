const rangeLog = {
    temperature: {
        dataRanges:{
       '-49.0':"Temperature is low",
        '0.0': "Temperature Low-Warning" ,
        '4.0': "",
        '42.0':"Temperature High-Warning",
        '45.0':"Temperature is high",
        '90.0':""
       }
        
    },
    soc: {
        dataRanges:{
        '0.0': "State of Battery is low",
        '21.0':"State of Battery Low-Warning",
        '26.0': "",
        '76.0':"State of Battery High-Warning",
        '80.0':"State of Battery is high",
        '100.0':""
        }

    },
    chargeRate: {
        dataRanges:{
        '0.00':"Charge Rate is low",
        '0.05':"Charge Rate Low-Warning",
        '0.20':"",
        '0.75':"Charge Rate High-Warning",
        '0.80':"Charge Rate is high",
        '1.00':""
        }
    }
};

module.exports={rangeLog};