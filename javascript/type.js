function type(o){
	let type = Object.prototype.toString.call(o)
	type = type.substring(8,type.length-1)
	if(type === 'Number'){
		if(Number.isNaN(o)){
			type = 'NaN'
        }
    }
	return type
}


module.exports = type