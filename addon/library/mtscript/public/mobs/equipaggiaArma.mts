[h: oToken = json.get(macro.args,0)]
[h: iArma = json.get(macro.args,1)-1]
[h: sArma = json.get(macro.args,2)]

[h: switchToken(oToken)]

[macro("mobs/checkArmiIntegrity@this"): oToken]

[h: sArmaOld =  listGet(Armi_Equipaggiate,iArma)]

[macro("mobs/riponiArma@this"): json.append(oToken,iArma+1)]

<!-- Possibili problemi:
Effetti che modificano il danno dell'arma possono mandare tutto nel pallone
perché il valore viene semplicemente sostituito 
risolvibile perché il danno arma è una lista di stringhe, quindi si dovrebbe controllare quando si applica
a mantenere le stringhe successive-->

[h, if(sArma != ""): oArma = getArma(oToken,sArma); oArma = ""]
[h, if(json.isEmpty(oArma)): return(0,0)]


[macro("combat/isStile2M@this"): oToken]
[h: b2M = macro.return]
[if(b2M): sDanno = json.get(oArma,"danno2H"); sDanno = json.get(oArma,"danno1H")]
[h: sDmgType = json.get(oArma, "tipoDanno")]


[macro("items/runEquipMacros@this"):json.set("","token",oToken,"numArma",iArma+1,"item",oArma, "idItem", sArma)]


[h, if(iArma < 1), code:{
	[Danno_Arma1 = listReplace(Danno_Arma1,0,sDanno)]
	[Tipo_Danno_Arma1 = sDmgType]
	[Gittata = Gittata + json.get(oArma,"portata")-1]
};{
	[Danno_Arma2 = listReplace(Danno_Arma2,0,sDanno)]
	[Tipo_Danno_Arma2 = sDmgType]
	[Gittata_2 = Gittata_2 + json.get(oArma,"portata")-1]
}]

[macro("items/processEffectInstallers@this"): json.append(oToken,sArma)]

[h, if(!json.isEmpty(oArma)), code:{
	[macro("items/processaAttributi@this"): json.append(oToken,oArma)]
}]

[h: Armi_Equipaggiate = listReplace(Armi_Equipaggiate,iArma,sArma)]


<!-- Mancano da aggiungere gli eventi se hanno effetti aggiuntivi -->