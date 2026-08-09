[h: source = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]

[h: sNam = getName(source)]
[h: broadcast(string(sNam))]

[h, if(bRemove == 1), code:{
	[eventUninstaller(source,"On_Hit","Incantesimo Arma Elementale")]
}]
