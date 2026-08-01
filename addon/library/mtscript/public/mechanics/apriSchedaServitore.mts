[h: source = arg(0)]
[h: oServitore = getServitore(source)]

[h, if(oServitore != ""), code:{
	[h: oParam = json.append(oServitore,"Servitore"+getName(source))]
	[macro("ApriScheda@Lib:Scheda"):oParam]
	[macro("listaPoteriMem@Lib:Scheda"):oParam]
	[closeDialog("DialogAbilita")]
}]