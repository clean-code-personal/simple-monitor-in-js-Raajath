const unitMapperAndConverter={
    temperature:{
    unit:'C',
    convertUnit:function(inputUnit,inputValue){
        if(inputUnit==='F'){
            return (inputValue - 32)*5/9;
        } 
        if(inputUnit==='K'){
            return inputValue - 273.15;
        }
    }
    },
    soc:{
    unit:'C'
    },
    chargeRate:{
    unit:''
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