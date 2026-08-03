[h: source = json.get(macro.args,0)]
[h: nomeLib = json.get(macro.args,1)]
[h, if(json.length(macro.args)>3): sMacro = json.get(macro.args,4); sMacro = "consumables/iniziaUsoConsumabile@" + getMacroLocation()]

[h, if(nomeLib != ""), code:{
	[h: imgA = getImage(nomeLib)]
	[h: strCast = strformat("<img src='%{imgA}' width='27' length='27' border='2'/>")]
	[h: param = json.set("","libName",nomeLib,"source",source,"macro",sMacro)]
	[h: sCastLink = macrolinkText("gui/iniziaActionBlockWrapper@this","none",param)]
	[h: sReturn = strformat("<a href='%{sCastLink}' class='spellCast'>%{strCast}</a>")]
};{
	[sReturn = ""]
}]
[h: macro.return = sReturn]