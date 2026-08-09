[h: target = macro.args]
[h: moltiplicatore = 1]
[h: effList = getProperty("Lista_Effetti",target)]
[r, if(json.isEmpty(effList) != 1), code:{
	[h: eff = json.get(effList,"Debilitato")]
	[r, if(json.isEmpty(eff) == 0), code:{
		[h: moltiplicatore = json.get(eff,"potenza")+1]
	};{}]
};{}]

[h: macro.return = moltiplicatore]