[h: target = json.get(macro.args,"target")]
[h: colore = json.get(macro.args,"colore")]
[h: nome = json.get(macro.args,"nome")]
[h: valore = json.get(macro.args,"valore")]
[h: sMsgTag = json.get(macro.args,"msgTag")]

[h, if(sMsgTag == ""): bVerbose = 1; bVerbose = 0]

[h: msgOutput = strformat("%s&nbsp;",getName(target))]

[h, if(valore < 0), code:{
	[h:  msgOutput=msgOutput+"<b>perde</b> "]
	[h: valore = -valore]
};{
	 [h: msgOutput=msgOutput+"<b>recupera</b> "]
}]

[h: msgOutput = strformat("%{msgOutput}<span style='color:%{colore};font-weight:bold;'>%{valore}</span> %{nome}")]

[h, if(bVerbose), code:{
	[h: broadcast(msgOutput)]
};{
	[macro("appendMessaggio@this"): json.append(target,sMsgTag,msgOutput)]
}]
