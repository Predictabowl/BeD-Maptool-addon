[h: source = arg(0)]
[h: oServitore = getServitore(source)]

[h, if(oServitore != ""), code:{
	[h: oParam = json.append(oServitore,"Servitore"+getName(source))]
	[macro("gui/ApriScheda@this"):oParam]
	[macro("gui/listaPoteriMem@this"):oParam]
	[closeDialog("DialogAbilita")]
}]