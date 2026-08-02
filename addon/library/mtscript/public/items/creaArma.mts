[h: sInputNome = "sNome|Arma|Nome"]
[h: sInputDanno1H = "sDanno1H|0|Danno ad una mano"]
[h: sInputDanno2H = "sDanno2H|0|Danno a due mani"]
[h: sInputCrit = "sCrit|0|Crit"]
[h: sInputPCrit = "sPCrit|0|PCrit"]
[h: sInputPortata = "sPortata|1|Portata"]
[h: sInputVel = "sVel|20|Tempo di Attacco"]
[h: sInputLASp = "sLASp|0|Bonus Spalle"]
[h: sInputCD = "sCD|0|Bonus CD"]
[h: sInputNumAtt = "iNumAtt|0|Numero Attacchi aggiuntivi"]
[h: sInputIng = "sIng|0|Ingombro"]
[h: sInputCAa = "sCAa|Muscoli,Precisione,Combinata,CaP|Caratteristica Arma|LIST|value=string"]
[h: sInputEquipMacro = "sEquipMacro|0|On Equip Macro"]
[macro("gui/getListaTipoArmi@this"):0]
[h: sInputTipoA = strformat("sTipoA|%{macro.return}|Tipo|LIST|value=string")]
[h: sInputPot = "sPot|0|Incantamento di Potenziamento"]
[h: sInputImg = "sImg||Immagine"]
[h: bCheck = input(sInputNome,sInputDanno1H,sInputDanno2H,sInputCrit,sInputPCrit,sInputPortata, sInputVel,sInputLAsp,sInputCD,
	sInputNumAtt,sInputIng,sInputCAa,sInputTipoA,sInputPot,sInputEquipMacro,sInputImg)]

[h, if(!bCheck): return(0,0)]

[h, if(isNumber(sImg)): sImg = ""]

[h: oAttributi = "{}"]
[h, if(sPot != 0), code:{
	[oAttributi = json.set(oAttributi,"LA",sPot,"LL",sPot)]
	[sCD = sCD + sPot]
}]
[h: oAttributi = json.set(oAttributi,"Crit",sCrit,"PCrit",sPCrit,"tempoAtt",sVel)]

[h, if(sCD != 0), code:{
	[oAttributi = json.set(oAttributi,"CD",sCD)]
}]

[h, if(sLASp != 0), code:{
	[oAttributi = json.set(oAttributi,"LASpalle",sLASp)]
}]

[h: sTipoTemp = upper(sTipoA)]
[h, if(sTipoTemp == "TIRO"): sCategoria = "armaDistanza"; sCategoria = "arma"]
[h, if(sTipoTemp == "LANCIO"): sCategoria = "armaLancio"]

[h: oJArma = json.set("","nome",sNome,"danno1H",sDanno1H,"danno2H",sDanno2H,"portata",sPortata,"attributi",oAttributi,"potenziamento",sPot,"ingombro",sIng,"icona",sImg)]
[h: oJArma = json.set(oJArma,"carArma",sCAa,"tipoArma",sTipoA,"numAttacchi",iNumAtt,"categoria",sCategoria)]
[h, if(!isNumber(sEquipMacro)), code:{
	[macro("items/addEquipMacro@this"): json.append("",oJArma,"incantamentoBase",sEquipMacro)]
	[oJArma = macro.return]
}]

[h: macro.return = oJArma]
