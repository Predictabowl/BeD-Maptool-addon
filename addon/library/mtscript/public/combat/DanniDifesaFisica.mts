[h: target = json.get(macro.args,"target")]
[h: source = json.get(macro.args,"source")]
[h: danno = json.get(macro.args,"danno")]
[h: difesa = json.get(macro.args,"difesa")]

[h: param = macro.args]
[h: msg = ""]
[r, switch(difesa), code:
case "parato":{
	[macro("combat/getBloccoDmg@this"):param]
	[h: value = floor(danno - macro.return)]
	[h: iResult = macro.return]
	[h: message =strformat(" (%{value} danni parati)")]
	[macro("core/verbosePrint@this"):message]
	[h: msg = msg +macro.return]
};
case "schivato":{
	[macro("combat/getSchivareDmg@this"):param]
	[h: value = floor(danno - macro.return)]
	[h: iResult = macro.return]
	[h: message =strformat(" (%{value} danni schivati)")]
	[macro("core/verbosePrint@this"):message]
	[h: msg = msg +macro.return]
};
default: {
	[h: iResult = danno]
}]

[macro("utility/appendMessaggio@this"):json.set("","token",source,"key","RiduzioneDmg","msg",msg)]
[h: macro.return=iResult]