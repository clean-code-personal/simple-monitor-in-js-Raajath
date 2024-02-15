const rangeLog = {
    temperature: {
        dataRanges:[
        {limit:Number.MIN_SAFE_INTEGER,  message:"Out of Bound"},
        {limit:-49.0,  message:"Temperature is low"},
        {limit:0.0  ,  message:"Temperature Low-Warning"} ,
        {limit:4.0  ,  message: ""},
        {limit:42.0 ,  message:"Temperature High-Warning"},
        {limit:45.0 ,  message:"Temperature is high"},
        {limit:90.0 ,  message:"Out of Bound"},
        {limit:Number.MAX_SAFE_INTEGER ,  message:""}

        ]
        
    },
    soc: {
        dataRanges:[
        {limit:Number.MIN_SAFE_INTEGER , message:"Out of Bound"},    
        {limit:0.0  , message:"State of Battery is low"},
        {limit:21.0 , message:"State of Battery Low-Warning"},
        {limit:26.0 , message:"" },
        {limit:76.0 , message:"State of Battery High-Warning"},
        {limit:80.0 , message:"State of Battery is high"},
        {limit:100.0, message:"Out of Bound"},
        {limit:Number.MAX_SAFE_INTEGER ,message:""}
        ]

    },
    chargeRate: {
        dataRanges:[
        {limit:Number.MIN_SAFE_INTEGER, message:"Out of Bound"},
        {limit:0.00  , message:"Charge Rate is low"},
        {limit:0.05  , message:"Charge Rate Low-Warning"},
        {limit:0.20  , message:""},
        {limit:0.75  , message:"Charge Rate High-Warning"},
        {limit:0.80  , message:"Charge Rate is high"},
        {limit:1.00  , message:"Out of Bound"},
        {limit:Number.MAX_SAFE_INTEGER,message:""}
        ]
    }    
};

module.exports={rangeLog};