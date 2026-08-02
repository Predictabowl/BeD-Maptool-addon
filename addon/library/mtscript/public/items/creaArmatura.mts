
[h: sInputNome = "sNome||Nome"]
[h: sInputLD = "iLD|5|LD"]
[h: sInputParare = "iParare|0|Parare"]
[h: sInputSchivare = "iSchivare|0|Schivare"]
[h: sInputIng = "sIng|0|Ingombro"]
[h: sInputAddArm = "sAddArm|0|Addestramento Armatura"]
[h: sInputPot = "sPot|0|Incantamento di Potenziamento"]
[h: sInputImg = "sImg||Immagine"]

[h: bCheck = input(sInputNome,sInputLD,sInputParare,sInputSchivare,sInputIng,sInputAddArm,sInputPot,sInputImg)]
[h, if(!bCheck): return(0,0)]


[h: oAttributi = "{}"]
[h: oAttributi = json.set(oAttributi,"LD",iLD+sPot)]
[h, if(iParare != 0): oAttributi = json.set(oAttributi,"Parare",iParare)]
[h, if(iSchivare != 0): oAttributi = json.set(oAttributi,"Schivare",iSchivare)]
[h: iTemp = ceil(iSchivare/2)]
[h, if(iTemp != 0): oAttributi = json.set(oAttributi,"Furtivita",iTemp)]
[h: iTemp = ceil(iSchivare/4)]
[h, if(iTemp != 0): oAttributi = json.set(oAttributi,"Manualita",iTemp)]

[h, if(sPot != 0), code:{
	[oAttributi = json.set(oAttributi,
		"Res_Acqua", sPot,
		"Res_Aria", sPot,
		"Res_Fuoco", sPot,
		"Res_Terra", sPot,
		"Res_Arcano", sPot,
		"Res_Mentale", sPot,
		"Res_Negativo", sPot,
		"Res_Positivo", sPot,
		"Res_Fisico", sPot)]
}]

[h, if(isNumber(sImg)): sImg = ""]

[h: oJArmatura = json.set("","nome",sNome,"attributi",oAttributi,"ingombro",sIng,"addArmatura",sAddArm,"potenziamento",sPot,"categoria","armatura","icona",sImg)]


[h: macro.return = oJArmatura]
