[h: sInputNome = "sNome|Scudo|Nome"]
[h: sInputLD = "iLD|1|LD"]
[h: sInputParare = "iParare|0|Parare"]
[h: sInputSchivare = "iSchivare|0|Schivare"]
[h: sInputIng = "sIng|0|Ingombro"]
[h: sInputAddArm = "sAddArm|0|Addestramento Armatura"]
[h: sInputImg = "sImg||Immagine"]

[h: bCheck = input(sInputNome,sInputLD,sInputParare,sInputSchivare,sInputIng,sInputAddArm,sInputImg)]

[h: oAttributi = json.set("","LD",iLD,"Parare",iParare)]
[h, if(iSchivare != 0): oAttributi = json.set(oAttributi,"Schivare",iSchivare)]

[h: oJScudo = json.set("","nome",sNome,"attributi",oAttributi,"ingombro",sIng,"addArmatura",sAddArm,"categoria","scudo","icona",sImg)]

[h: macro.return = oJScudo]
