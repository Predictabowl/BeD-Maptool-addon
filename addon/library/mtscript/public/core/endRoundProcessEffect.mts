[h: param = macro.args]
[h: target = json.get(macro.args,0)]
[h: effetto = json.get(macro.args,1)]
[h: switchToken(target)]
[h: endstr= ""]
[h: subList = json.get(Lista_Effetti,effetto)]
[r, if(json.isEmpty(subList) == 0), code:{
	[h: inizioR = json.get(subList,"inizioRound")]

	[r, if (inizioR !=1), code:{
		[macro("core/ProcessEffect@this"):param]
		[h: endstr = macro.return]
	};{}]
};{}]
[h: macro.return = endstr]