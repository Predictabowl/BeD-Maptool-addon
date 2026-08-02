[h: oArma = arg(0)]
[h, if(argCount()>1): oToken = arg(1); oToken = ""]

[h, if(json.type(oArma) != "OBJECT"): return(0,0)]
[h: iIngombro = json.get(oArma,"ingombro")]
[h, if(!isNumber(iIngombro)): iIngombro = 0]

[h, if(oToken != ""), code:{
	[macro("gui/getIngombroRaceMod@this"): oToken]
	[h: iIngombro = round(iIngombro * macro.return)]
}]

[h: macro.return = iIngombro]