[h: oToken = json.get(macro.args,0)]
[h: iArma = json.get(macro.args,1)-1]

[h: switchToken(oToken)]
[macro("mobs/checkArmiIntegrity@this"): oToken]

[h: sArma =  listGet(Armi_Equipaggiate,iArma)]
[h, if(sArma != ""): oArma = getArma(oToken,sArma); oArma = ""]

[h, if(json.isEmpty(oArma)): return(0,0)]

[macro("runEquipMacros@Lib:EquipEffect"):json.set("","token",oToken,"numArma",iArma+1,"item",oArma,"remove",1, "idItem",sArma)]

[h, if(iArma < 1), code:{
	[Danno_Arma1 = listReplace(Danno_Arma1,0,"1d4")]
	[Gittata = Gittata - json.get(oArma,"portata")+1]
	[Armi_Equipaggiate = listReplace(Armi_Equipaggiate,iArma,"Pugno")]
};{
	[Danno_Arma2 = listReplace(Danno_Arma2,0,"1d4")]
	[Gittata_2 = Gittata_2 - json.get(oArma,"portata")+1]
	[Armi_Equipaggiate = listReplace(Armi_Equipaggiate,iArma, "")]
}]

[macro("processEffectInstallers@Lib:EquipEffect"): json.append(oToken,sArma, 1)]

[h, if(!json.isEmpty(oArma)), code:{
	[macro("processaAttributi@Lib:EquipEffect"): json.append(oToken,oArma,-1)]
}]

<!-- Mancano da rimuovere gli eventi se hanno effetti aggiuntivi -->