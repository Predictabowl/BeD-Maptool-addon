[h: target = arg(0)]
[h, if(json.type(target) == "OBJECT"), code:{
	[macro.args = target]
	[target = json.get(macro.args,"target")]
	[arma = json.get(macro.args,"arma")]
	[bOpp = json.get(macro.args,"opportunita")]	
	[bOnlyBaseTime = 0]
};{
	[if(argCount()>1): bOpp = arg(1); bOpp = 0]
	[if(argCount()>2): arma = arg(2); arma = ""]
	[if(argCount()>3): bOnlyBaseTime = arg(3); bOnlyBaseTime = 0]
}]

[h, if(!isNumber(arma)), code:{
	[arma = getArmaDaUsare(target)]
}]


[h, if(bOpp == 1), code:{
	[iReturn = 2]
};{
	[h: oArma = getArma(target,arma)]
	[if(json.isEmpty(oArma)), code:{
		[iATempo = 17]
	};{
		[h: iATempo = getArmaStat(oArma,"Tempo di Attacco")]
	}]
	[h: iReturn = getProperty("Tempo_Attacco",target) + iATempo]
}]

[h, if(!bOnlyBaseTime), code:{
	[h: iReturn = calcActionTime(iReturn,target)]
}]


[h: macro.return = iReturn]