[h: broadcast(strformat("DEPRECATED: %s@%s",getMacroName(),getMacroLocation()))]

[h: oToken = json.get(macro.args,0)]
[h: sArma = json.get(macro.args,1)]
[h: oParam = json.get(macro.args,2)]

[macro("mobs/getArma@this"): json.append(oToken,sArma)]
[h: oArma = macro.return]
[h: oIncParam = json.get(oArma,"equipParam")]
[h,if(json.isEmpty(oIncParam)), code:{
	[oIncParam = oParam]
};{
	[oIncParam = json.merge(oIncParam,oParam)]
}]
[h: oArma = json.set(oArma,"equipParam",oIncParam)]
[macro("mobs/setArma@this"): json.append(oToken,sArma,oArma)]