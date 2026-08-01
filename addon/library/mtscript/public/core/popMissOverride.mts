[h: broadcast("DEPRECATA: "+getMacroName()+"@"+getMacroLocation())]
[h: source = macro.args]
[h: switchToken(source)]
[h, if(json.type(Overrides) != "OBJECT"): Overrides="{}"]
[h, if (json.contains(Overrides,"MissOverride")), code:{
	[Overrides = json.remove(Overrides,"MissOverride")]
	[return =1]
};{
	[return = 0]
}]
[h: macro.return = return]