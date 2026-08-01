[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]

[h: slOwners = getOwners(",",target)]
[h, if(isPC(source) ==  isPC(target)): bFaction =1 ; bFaction = 0]

[h, if(slOwners == "" && bFaction == 1), code:{
	[switchToken(source)]
	[Lista_Dati = setStrProp(Lista_Dati,"Servitore",target)]
	[switchToken(target)]
	[Lista_Dati = setStrProp(Lista_Dati,"Padrone",source)]
	[setLabel(getName(source),target)]
	[return = 1]
};{
	[return = 0]
}]

[h: macro.return = return]