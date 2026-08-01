[h: oSource = arg(0)]
[h: oTarget = arg(1)]

[h, if(oSource == "" || oTarget == ""): return(0,0)]

[macro("mobs/getUnusedEquip@this"): oSource]
[h: oItems = macro.return]
[h: aTemp = ""]
[h: lList = ""]

[h: lInput = listAppend("",strformat("noUse|Traferisci a %s||LABEL|SPAN=TRUE",getName(oTarget)),"##")]
[h: i = 0]
[h, foreach(key, oItems), code:{
	[oItem = json.get(oItems,key)]
	[sNome = json.get(oItem,"nome")]
	[sVarName = strformat("variabile%{i}")]
	[aTemp = json.set(aTemp,sVarName,key)]
	[sInput = strformat("%{sVarName}|0|%{sNome}|CHECK")]
	[lInput = listAppend(lInput,sInput,"##")]
	[i = i+1]
}]

[h: abort(input(lInput))]

[h: switchToken(oTarget)]
[h, foreach(sVar, aTemp), code:{
	[evalMacro(strformat("[bTransfer = %{sVar}]"))]
	[sKey = json.get(aTemp,sVar)]
	[if(bTransfer), code:{
		[macro("mobs/findOggettoFromEquip@this"): json.append(oSource, sKey)]
		[oCustomData = json.get(macro.return, "datiCustom")]
		[macro("mobs/disinstallaEquip@this"): json.append(oSource,sKey)]
		[oDati = macro.return]
		[assert(oDati,"Errore irreversibile durante la disinstallazione")]
		[macro("mobs/installaEquip@this"): json.append(oTarget,oDati)]
		[iLocalId = macro.return]
		[oNewOgg = json.get(Equipaggiamento, iLocalId)]
		[oNewOgg = json.set(oNewOgg, "datiCustom", oCustomData)]
		[Equipaggiamento = json.set(Equipaggiamento, iLocalId, oNewOgg)]
		[broadcast(strformat("%s trasferito da %s a %s", json.get(json.get(oItems,sKey),"nome"),getName(oSource),getName(oTarget)))]
	}]
}]