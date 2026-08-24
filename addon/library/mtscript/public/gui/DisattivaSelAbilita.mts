<!-- DEPRECATRED ? -->
[macro("gui/blockIfNotOwner@this"):source]

[h: source = macro.args]
[h: AList = ""]
[macro("core/getAbilitaInUso@this"): json.append(source,"ATTIVA")]
[h, if(macro.return != ""): AList = listAppend(AList,macro.return)]
[macro("core/getAbilitaInUso@this"): json.append(source,"ASECONDARIA")]
[h, if(macro.return != ""): AList = listAppend(AList,macro.return)]
[macro("core/getAbilitaInUso@this"): json.append(source,"PECULIARE")]
[h, if(macro.return != ""): AList = listAppend(AList,macro.return)]

[h: nomeList = ""]
[h, foreach(item,AList), code:{
	[macro("core/getStatsAbilita@this"):json.append(source,item)]
	[h: sNome = getStrProp(macro.return,"nome")]
	[nomeList = listAppend(nomeList,sNome)]
}]

[h, if(listCount(AList) > 0), code:{
	[h: check = input("abIndex|"+nomeList+"|Disattiva|RADIO")]
	[if (check == 1), code:{
		[sAbName = listGet(AList,abIndex)]
		[macro("core/DisattivaAbilita@this"):json.append(source,sAbName)]
	}]
}]