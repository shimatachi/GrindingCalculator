function calculate() {
	var input = updateValue('input');

	var plane1 = input * 10000 ;
    var plane2 = input * 20000 ;
    var plane3 = input * 40000 ;
    var tank1 = input * 5000 ;
    var tank2 = input * 10000 ;
    var tank3 = input * 20000 ;
    var naval1 = input * 4000 ;
    var naval2 = input * 8000 ;
    var naval3 = input * 16000 ;
    var heli1 = input * 3600 ;
    var heli2 = input * 7200 ;
    var heli3 = input * 14400 ;

	let resultplane1 = plane1.toFixed(2);
	let resultplane2 = plane2.toFixed(2);
	let resultplane3 = plane3.toFixed(2);
	let resulttank1 = tank1.toFixed(2);
	let resulttank2 = tank2.toFixed(2);
	let resulttank3 = tank3.toFixed(2);
	let resultnaval1 = naval1.toFixed(2);
	let resultnaval2 = naval2.toFixed(2);
	let resultnaval3 = naval3.toFixed(2);
	let resultheli1 = heli1.toFixed(2);
	let resultheli2 = heli2.toFixed(2);
	let resultheli3 = heli3.toFixed(2);

	resultplane1=parseFloat(resultplane1).toFixed(2) + " RP" ;
	resultplane2=parseFloat(resultplane2).toFixed(2) + " RP" ;
	resultplane3=parseFloat(resultplane3).toFixed(2) + " RP" ;
	resulttank1=parseFloat(resulttank1).toFixed(2) + " RP" ;
	resulttank2=parseFloat(resulttank2).toFixed(2) + " RP" ;
	resulttank3=parseFloat(resulttank3).toFixed(2) + " RP" ;
	resultnaval1=parseFloat(resultnaval1).toFixed(2) + " RP" ;
	resultnaval2=parseFloat(resultnaval2).toFixed(2) + " RP" ;
	resultnaval3=parseFloat(resultnaval3).toFixed(2) + " RP" ;
	resultheli1=parseFloat(resultheli1).toFixed(2) + " RP" ;
	resultheli2=parseFloat(resultheli2).toFixed(2) + " RP" ;
	resultheli3=parseFloat(resultheli3).toFixed(2) + " RP" ;

	// document.getElementById('plane1', resultplane1).innerHTML = resultplane1 ;
	// document.getElementById('plane2', resultplane2).innerHTML = resultplane2;
	// document.getElementById('plane3', resultplane3).innerHTML = resultplane3 ;
	// document.getElementById('tank1', resulttank1).innerHTML = resulttank1 ;
	// document.getElementById('tank2', resulttank1).innerHTML = resulttank2 ;
	// document.getElementById('tank3', resulttank1).innerHTML = resulttank3 ;
	// document.getElementById('naval1', resultnaval1).innerHTML = resultnaval1 ;
	// document.getElementById('naval2', resultnaval2).innerHTML = resultnaval2 ;
	// document.getElementById('naval3', resultnaval3).innerHTML = resultnaval3 ;
	// document.getElementById('heli1', resultheli1).innerHTML = resultheli1 ;
	// document.getElementById('heli2', resultheli2).innerHTML = resultheli2 ;
	// document.getElementById('heli3', resultheli3).innerHTML = resultheli3 ;

	adTextRes('plane1', resultplane1)
	adTextRes('plane2', resultplane2)
	adTextRes('plane3', resultplane3)
	adTextRes('tank1', resulttank1)
	adTextRes('tank2', resulttank2)
	adTextRes('tank3', resulttank3)
	adTextRes('naval1', resultnaval1)
	adTextRes('naval2', resultnaval2)
	adTextRes('naval3', resultnaval3)
	adTextRes('heli1', resultheli1)
	adTextRes('heli2', resultheli2)
	adTextRes('heli3', resultheli3)

  }
  
  function updateValue(nameOf) {
	var inputNo = document.getElementById(nameOf).value;
	var no = createNo(inputNo);
	adTextRes(nameOf, no);
	return no;
  }
  
  function adTextRes(nameOf, no) {
	var asText = String(no).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById(nameOf).value = asText;
  }
  
  function createNo(textin) {
	return Number(textin.replace(/,/g, ""));
  }

  // number only on text type

  function onlyNumberKey(evt) {
                
	// Only ASCII character in that range allowed
	var ASCIICode = (evt.which) ? evt.which : evt.keyCode
	if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
		return false;
	return true;
}