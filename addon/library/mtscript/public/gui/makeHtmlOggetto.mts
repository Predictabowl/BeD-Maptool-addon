[h: oOggetto = arg(0)]
[h: oToken = arg(1)]
[h, if(json.isEmpty(oOggetto)): return(0,"")]
[h, if(argCount()>2), code:{
	[sId = arg(2)]
};{
	[sId = json.get(oOggetto,"localId")]
}]
[h, if(argCount()>3): sStyle = arg(3); sStyle = ""]

[macro("items/getItemIcon@this"): oOggetto]
[h: sIcona = macro.return]
[h, if(sIcona == ""): return(0,"")]
[h: sNome = json.get(oOggetto,"nome")]
[macro("items/getItemCategory@this"): oOggetto]
[h: sCategoria = macro.return]

[h: iIng = getIngombroEquip(oOggetto, oToken)]
[h: iAdd = getAddestramentoArmatura(oOggetto)]
[h: sCaA = json.get(oOggetto,"carArma")]
[h, if(sCaA == "CaP"): sCaA = "Mana"]
[h: iPortata = json.get(oOggetto, "portata")]

[h: oRune = getAllRune(oToken,sId)]
[h: aRune = "[]"]
[h, foreach(sRuna, oRune), code:{
	[oRuna = json.get(oRune,sRuna)]
	[sLibName = json.get(oRuna,"libName")]
	[sImgRuna = getImage(sLibName)]
	[aRuneData = json.append(sImgRuna,getLibProperty("nome_decorativo",sLibName))]
	[aRune = json.append(aRune,aRuneData)]
}]

[h: lDmgTypes = json.get(oOggetto, "tipoDanno")]
[h: aDmgTypes = "[]"]
[h, if(listContains(lDmgTypes,"T")): aDmgTypes = json.append(aDmgTypes, "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/slash_icon.png")]
[h, if(listContains(lDmgTypes,"B")): aDmgTypes = json.append(aDmgTypes, "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/crush_icon.png")]
[h, if(listContains(lDmgTypes,"P")): aDmgTypes = json.append(aDmgTypes, "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/pierce_icon.png")]ù

[h: jAttributi = json.get(oOggetto, "attributi")]
[h: jNewAttr = ""]
[h, foreach(sAttr, jAttributi), code:{
	[macro("gui/getAttributeDisplayName@this"): json.append(sAttr, oToken)]
	[jNewAttr = json.set(jNewAttr, macro.return, json.get(jAttributi, sAttr))]
}]
[h: oOggetto =json.set(oOggetto, "attributi", jNewAttr)]

[h: jAttributi = json.get(oOggetto, "attributiArma")]
[h: jNewAttr = ""]
[h, foreach(sAttr, jAttributi), code:{
	[macro("gui/getAttributeDisplayName@this"): json.append(sAttr, oToken)]
	[jNewAttr = json.set(jNewAttr, macro.return, json.get(jAttributi, sAttr))]
}]
[h: oOggetto =json.set(oOggetto, "attributiArma", jNewAttr)]


[h: sImg = strformat("<img name='image' src='%{sIcona}' id='%{sNome}' data-oggetto='%{oOggetto}' data-oggettoid='%{sId}' data-categoria='%{sCategoria}' data-ingombro='%{iIng}' data-addestramento='%{iAdd}' data-CaA='%{sCaA}' data-rune='%{aRune}' data-dmgTypes='%{aDmgTypes}' data-portata:'%{iPortata}' draggable='true' style='width:52px; cursor:grab; %{sStyle};' onclick='clickInfo(event)' onmouseover='hoverInfo(event)' onmouseleave='removeInfo(event)' ondragstart='drag(event)'>")]

[h: return(0, sImg)]