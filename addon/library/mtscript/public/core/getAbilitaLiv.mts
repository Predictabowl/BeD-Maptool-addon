[h, if(json.type(macro.args) == "ARRAY"), code:{
	[h: source = json.get(macro.args,0)]
	[h: sNomeAb = json.get(macro.args,1)]
};{
	[source = arg(0)]
	[sNomeAb = arg(1)]
}]

[macro("core/getAbilitaClasse@this"): json.append(source,sNomeAb)]
[h: oAbilita = macro.return]
[h: iLiv = ""]
[h, if(json.isEmpty(oAbilita) != 1): iLiv = json.get(oAbilita,"livello")]	

[h, if(iLiv == ""): iLiv = 0]

[h: macro.return = iLiv]
