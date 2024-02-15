const langaugeMessages = {
    English:{
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
    },
    sucessMessage:"Battery is good"
},  
German:{
    temperature: {
        dataRanges:[
        {limit:Number.MIN_SAFE_INTEGER,  message:"Außerhalb der Grenzen"},
        {limit:-49.0,  message:"Die Temperatur ist niedrig"},
        {limit:0.0  ,  message:"Warnung vor niedriger Temperatur"} ,
        {limit:4.0  ,  message: ""},
        {limit:42.0 ,  message:"Warnung vor hoher Temperatur"},
        {limit:45.0 ,  message:"Die Temperatur ist hoch"},
        {limit:90.0 ,  message:"Außerhalb der Grenzen"},
        {limit:Number.MAX_SAFE_INTEGER ,  message:""}

        ]    
    },
    soc: {
        dataRanges:[
        {limit:Number.MIN_SAFE_INTEGER , message:"Außerhalb der Grenzen"},    
        {limit:0.0  , message:"Der Batteriestand ist niedrig"},
        {limit:21.0 , message:"Warnung vor niedrigem Batteriestand"},
        {limit:26.0 , message:"" },
        {limit:76.0 , message:"Warnung vor hohem Batteriestand"},
        {limit:80.0 , message:"Der Batteriezustand ist hoch"},
        {limit:100.0, message:"Außerhalb der Grenzen"},
        {limit:Number.MAX_SAFE_INTEGER ,message:""}
        ]

    },
    chargeRate: {
        dataRanges:[
        {limit:Number.MIN_SAFE_INTEGER, message:"Außerhalb der Grenzen"},
        {limit:0.00  , message:"Die Laderate ist niedrig"},
        {limit:0.05  , message:"Warnung vor niedrigem Ladestrom"},
        {limit:0.20  , message:""},
        {limit:0.75  , message:"Warnung vor hoher Laderate"},
        {limit:0.80  , message:"Die Laderate ist hoch"},
        {limit:1.00  , message:"Außerhalb der Grenzen"},
        {limit:Number.MAX_SAFE_INTEGER,message:""}
        ]
    },
    sucessMessage:"Batterie ist ok"

} 
};

module.exports={langaugeMessages};