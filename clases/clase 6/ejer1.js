function suma(obj){

	var key = Object.keys(obj);
	var total=0;
	key.forEach(function(curEl){
		total += obj[curEl];
	});
	return total;
}


function getCountrys(array){

	var obj = {};
	var countryData;
	var i;
	for(i=0;i < array.length ; i++){
		countryData = array[i].split(',');

		if(obj[countryData[1]] === undefined){
			obj[countryData[1]] = 1;
		}else{
			obj[countryData[1]] += 1;
		}
	}
	return obj;
}



function format(array){

	var i;
	var newArray = [];
	var key = Object.keys(array);
	key.forEach(function(curEl){
		var obj = { name : curEl, value: array[curEl]};
		newArray.push(obj);
	});

	return newArray;
}