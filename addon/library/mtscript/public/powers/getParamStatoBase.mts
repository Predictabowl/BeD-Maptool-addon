[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sEffetto = json.get(macro.args,"effetto")]
[h: iDurata = json.get(macro.args,"durata")] <!-- Se omessa non viene settata tranne in casi in cui è predefinita nello stato-->
[h: sNome = json.get(macro.args,"nome")] <!-- Opzionale -->
[h: iMolt = json.get(macro.args,"moltiplicatore")] <!-- Se manca è 1 -->
[h: bTrauma = json.get(macro.args,"trauma")] <!-- Se manca è 0 -->

[h: sMutex = sEffetto]
[h, if(sNome == ""): sNome = sEffetto]

[h, if(!isNumber(bTrauma)): bTrauma = 0]
[h, if(bTrauma), code:{
	[sSuffix = "-Trauma"]
	[if(!endsWith(sNome,sSuffix)): sNome = sNome+sSuffix]
	[sMutex = sMutex+sSuffix]
	[iDurata = -1]
}]
[h, if (!isNumber(iMolt)): iMolt = 1]

[macro("powers/getMoltMod@this"):json.set("","source",source,"target",target)]
[h: iMolt = iMolt+ macro.return]

<!-- 
1) Necessita di un codice specifico per Mimetizzato, possibilmente usare quello dell'incantesimo invisibilita
-->

[h: oParam = json.set("","target",target,"durata",iDurata,"categoria",sEffetto,"effetto",sNome,"stato",sEffetto,"mutex",sMutex,"subito",1,"potenza",iMolt,
	"moltiplicatore",iMolt,"otherInfo","{}")]

[h, switch(sEffetto), code:
case "Annebbiato":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: temp = json.set("","key","Mancare","value",6,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","CD_Base","value",-2,"tipo","onceMod","moltiplicabile",0)]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Atterrato":{
	[oParam = json.set(oParam,"durata",-1,"moltiplicatore",1,"tipo","Nocivo")]
	[h: temp = json.set("","macroName","powers/AtterratoMacro@"+getMacroLocation(),"tipo","macroCall")]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","Spalle_Override","value",1,"tipo","onceMod","moltiplicabile",0)]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Cecita":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: temp = json.set("","key","Mancare","value",16,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","Percezione","value",-4,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Confusione":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: temp = json.set("","key","PA","value",-1,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","PA_Max","value",-1,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Mancare","value",11,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Congelamento":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: temp = json.set("","key","Res_Fisico","value",-2,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","LD","value",-2,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","VA","value",-9,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Debilitato":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: temp = json.set("","key","Mod_Danno_Out","value",-0.19,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Debolezza":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: temp = json.set("","key","LA","value",-1,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
		[h: temp = json.set("","key","LL","value",-1,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Mancare","value",7,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Dolore":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: iCDMod = -2]
	[h: temp = json.set("","key","TS_Rif","value",iCDMod,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","TS_Tem","value",iCDMod,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","TS_Vol","value",iCDMod,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Mancare","value",6,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Fragilita":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: temp = json.set("","key","Mod_Danno_In","value",0.19,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Incendio": {
	[h: iLP = json.get(macro.args,"LP")]
	[oParam = json.set(oParam,"tipo","Nocivo","durata",2,"subito",0)]
	[oParam = json.remove(oParam,"mutex")]
	[h: iDanno = iLP]
	[h, if(iDanno < 1): iDanno = 1]

	[h: temp = json.set("","source",source,"value",iDanno,"tipo","danno")]
	[h: altro = json.append("",temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Lentezza":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: temp = json.set("","key","MM","value",-2,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","MM_Max","value",-2,"tipo","onceMod","moltiplicabile",1)]	
	[h: altro = json.append(altro,temp)]	
	[h: temp = json.set("","key","Parare","value",-4,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Schivare","value", -6,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","VA","value",-15,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Mimetizzato":{
	[oParam = json.set(oParam,"tipo","Benefico")]
	[h: temp = json.set("","key","Elusione","value",16,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","Furtivita","value", 4,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Nausea":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: temp = json.set("","key","PA","value",-1,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","PA_Max","value",-1,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Mod_Cura_In","value",-0.05,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Mancare","value",4,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","TS_Vol","value",-2,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Panico":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: temp = json.set("","key","PA","value",-2,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","PA_Max","value",-2,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]	
	[h: temp = json.set("","key","Mancare","value",6,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Paralisi":{
	[if (iMolt < 5): iMolt = 5]
	[oParam = json.set(oParam,"tipo","Nocivo","moltiplicatore",iMolt)]
	[h: temp = json.set("","key","TS_Rif","value",-8,"tipo","onceMod","moltiplicabile",0)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","macroName","powers/IncapacitatoMacro@"+getMacroLocation(), "tipo","macroCall")]
	[h: altro = json.append(altro,temp)]	
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Paura":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: temp = json.set("","key","VA","value",-12,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","Mancare","value",11,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Pietrificato":{
	[if (iMolt < 5): iMolt = 5]
	[oParam = json.set(oParam,"tipo","Nocivo","moltiplicatore",iMolt)]
	[h: temp = json.set("","key","Mod_Danno_In","value",-0.6,"tipo","onceMod","moltiplicabile",0)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","TS_Rif","value",-8,"tipo","onceMod","moltiplicabile",0)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","TS_Tem","value",8,"tipo","onceMod","moltiplicabile",0)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Res_Veleno","value",20,"tipo","onceMod","moltiplicabile",0)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Res_Sanguinamento","value",20,"tipo","onceMod","moltiplicabile",0)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Res_Malattia","value",20,"tipo","onceMod","moltiplicabile",0)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Res_Maledizione","value",20,"tipo","onceMod","moltiplicabile",0)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","macroName","powers/PietrificatoMacro@"+getMacroLocation(), "tipo","macroCall")]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Potenza":{
	[oParam = json.set(oParam,"tipo","Benefico")]
	[h: temp = json.set("","key","Mod_Danno_Out","value",0.19,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Sordita":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: temp = json.set("","key","Perspicacia","value",-4,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","TS_Rif","value",-2,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Mancare","value",6,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Parare","value",-9,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Schivare","value",-6,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","VA","value",-1,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Spossatezza":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: temp = json.set("","key","LA","value",-1,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","TS_Tem","value",-2,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","LL_Base","value",-1,"tipo","onceMod","moltiplicabile",1)]
		[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","CD_Base","value",-1,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Stanchezza":{
	[oParam = json.set(oParam,"tipo","Protetto","durata", -1)]
	[h: temp = json.set("","key","Mancare","value",5,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","PA_Max","value",-1,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","PA","value",-1,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","VA","value",-10,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","TS_Tem","value",-1,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","TS_Rif","value",-1,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","TS_Vol","value",-1,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	<!-- Mancano le penalità alle capacità -->
	[h: oParam = json.set(oParam,"params",altro)]
	[h: temp = json.set("","key","Parare","value", -10,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
};

case "Stordimento":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: temp = json.set("","key","PA","value",-3, "tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","PA_Max","value",-3,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","VA","value",-1,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]	
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Terrore":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: temp = json.set("","key","TS_Vol","value", -8,"tipo","onceMod","moltiplicabile",0)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","macroName","powers/IncapacitatoMacro@"+getMacroLocation(), "tipo","macroCall")]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Torpore":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: temp = json.set("","key","MM_Max","value", -1,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","MM","value", -1,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]	
	[h: temp = json.set("","key","Schivare","value", -7,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Parare","value", -10,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","VA","value", -10,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]	
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Tramortito":{
	[if (iMolt < 5): iMolt = 5]
	[oParam = json.set(oParam,"tipo","Nocivo","moltiplicatore",iMolt)]
	[h: oParam2 = json.set("","effetto","Atterrato")]
	[h: temp = json.set("","macroName","powers/standardEffectTemplate@"+getMacroLocation(), "tipo","macroCall","parametri",oParam2)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","macroName","powers/IncapacitatoMacro@"+getMacroLocation(), "tipo","macroCall")]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Vacillante":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: temp = json.set("","key","Schivare","value",-10,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","Parare","value",-15,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Mod_Danno_In","value",0.05,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","VA","value",-4,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Velocita":{
	[oParam = json.set(oParam,"tipo","Benefico")]
	[h: temp = json.set("","key","MM","value",2,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","MM_Max","value",2,"tipo","onceMod","moltiplicabile",1)]	
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Parare","value",4,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Schivare","value",6,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","VA","value",15,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

case "Vulnerabilita":{
	[oParam = json.set(oParam,"tipo","Nocivo")]
	[h: mod = -2]
	[h: temp = json.set("","key","Res_Aria","value", mod,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append("",temp)]
	[h: temp = json.set("","key","Res_Acqua","value",mod,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Res_Fuoco","value",mod,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Res_Terra","value",mod,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Res_Mentale","value",mod,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Res_Arcano","value",mod,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Res_Positivo","value",mod,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: temp = json.set("","key","Res_Negativo","value",mod,"tipo","onceMod","moltiplicabile",1)]
	[h: altro = json.append(altro,temp)]
	[h: oParam = json.set(oParam,"params",altro)]
};

default:{
	[oParam = json.set(oParam,"tipo","Nocivo")]
}]

[h, if(bTrauma): oParam = json.set(oParam,"tipo","PROTETTO")]

[h: macro.return = oParam]
