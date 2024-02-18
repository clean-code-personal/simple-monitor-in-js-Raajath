const unitMapperAndConverter={
    temperature:{
    unit:'C',
    convertUnit:function(inputUnit,inputValue){
        if(inputUnit==='F'){
            return ((inputValue - 32)*5/9).toFixed(4);
        } 
        if(inputUnit==='K'){
            return (inputValue - 273.15).toFixed(4);
        }
    }
    },
    soc:{
    unit:''
    },
    chargeRate:{
    unit:'C'
    }
}

function checkUnit(parameters,category){

  if(parameters[category].unit!==unitMapperAndConverter[category].unit)
  {
    return unitMapperAndConverter[category].convertUnit(parameters[category].unit,parameters[category].value);

  }
  return parameters[category].value;

}
module.exports={checkUnit};