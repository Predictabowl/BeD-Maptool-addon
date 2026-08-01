[h: source = arg(0)]
[h: target = arg(1)]

[h: switchToken(target)]

[h: jDatiCap = getDaMemoria(target,"Dati-Capacita")]
[h, if(json.contains(jDatiCap,"Medicina")), code:{
	[h: jMedicina = json.get(jDatiCap,"Medicina")]
	[if(json.contains(jMedicina,"curaFeriteUsato")), code:{
		[broadcast(strformat("%s non può ulteriormente essere curato con Medicina fin quando non ha riposato",getName(target)))]
		[return(0,"")]
	}]
};{
	[jMedicina = "{}"]
}]

[h, macro("mobs/getTalento@this"): json.append(source, "Medico Esperto")]
[h, if(macro.return == ""), code:{
	[sDado = "d6"]
	[iBonus = 2]
};{
	[sDado = "d8"]
	[iBonus = 3]
}]


[h: iMedicina = getProperty("Medicina",source)]

[h: sCD = strformat("iXScelta|%d|Scegli x|TEXT|WIDTH=2",iMedicina-4)]
[h: bCheck = input(sCD, "junk0|La CD della prova è pari a x+5||LABEL|SPAN=true", strformat("junk1|Se ha successo verrano curati x*(1%{sDado}+%{iBonus}) PV||LABEL|SPAN=true"), "junk2|Se fallisce infligge 1d8 danni per punto mancante||LABEL|SPAN=true")]

[h, if(!bCheck): return(0,"")]

[h, macro("mobs/rollCapacita@this"): json.append(source, "Medicina")]
[h: iResult = macro.return]
[h: iCDScelta = iXScelta +5]
[h: iScarto = iResult - iCDScelta]

[h, if(iScarto < 0), code:{
	[h: sDado = strformat("%dd8", -iScarto)]
	[iTot = eval(sDado)]
	[h: broadcast(strformat("CD = %{iCDScelta}, <span style='color:red'>Fallimento</span> Danno inflitto: %{sDado}"))]
	[dannoTarget(target,iTot,source)]
};{
	[h: sDado = strformat("%{iXScelta}%{sDado}+%d",iXScelta*iBonus)]
	[iTot = eval(sDado)]
	[h: broadcast(strformat("CD = %{iCDScelta}, Cura ferite: %{sDado}"))]
	[macro("core/CuraTarget@this"): json.append(target,iTot,source)]
}]

[h: jMedicina = json.set(jMedicina,"curaFeriteUsato",1)]
[h: jDatiCap = json.set(jDatiCap,"Medicina",jMedicina)]
[h: setInMemoria(target,"Dati-Capacita",jDatiCap)]
[h: macro.return = ""]
