[h: sNome = arg(0)]
[h: iValue = arg(1)]
[h: sEffect = arg(2)]
[h: sTipoBersaglio = arg(3)]


[h, switch(sEffect), code:
	case "MCR":{
		[temp = json.set("","key","Mod_Cura_In","value",iValue/100,"tipo","onceMod","moltiplicabile",0)]
		[altro = json.append("",temp)]		
	};
	case "MCG":{
		[temp = json.set("","key","Mod_Cura_Out","value",iValue/100,"tipo","onceMod","moltiplicabile",0)]
		[altro = json.append("",temp)]		
	};
	case "MDR":{
		[temp = json.set("","key","Mod_Danno_In","value",iValue/100,"tipo","onceMod","moltiplicabile",0)]
		[altro = json.append("",temp)]		
	};
	case "MDI":{
		[temp = json.set("","key","Mod_Danno_Out","value",iValue/100,"tipo","onceMod","moltiplicabile",0)]
		[altro = json.append("",temp)]
	};
	case "Crit e PCrit":{
		[temp = json.set("","key","Crit","value",iValue,"tipo","onceMod","moltiplicabile",0)]
		[altro = json.append("",temp)]
		[temp = json.set("","key","PCrit","value",iValue,"tipo","onceMod","moltiplicabile",0)]
		[altro = json.append(altro,temp)]
	};
	case "TS":{
		[temp = json.set("","key","TS_Rif","value",iValue,"tipo","onceMod","moltiplicabile",0)]
		[altro = json.append("",temp)]
		[temp = json.set("","key","TS_Tem","value",iValue,"tipo","onceMod","moltiplicabile",0)]
		[altro = json.append(altro,temp)]
		[temp = json.set("","key","TS_Vol","value",iValue,"tipo","onceMod","moltiplicabile",0)]
		[altro = json.append(altro,temp)]		
	};	
	case "CD":{
		[temp = json.set("","key","CD_Base","value",iValue,"tipo","onceMod","moltiplicabile",0)]
		[altro = json.append("",temp)]		
	};
	case "LL":{
		[temp = json.set("","key","LL_Base","value",iValue,"tipo","onceMod","moltiplicabile",0)]
		[altro = json.append("",temp)]		
	};	
	default:{
		[h: temp = json.set("","key",sEffect,"value",iValue,"tipo","onceMod","moltiplicabile",0)]
		[h: altro = json.append("",temp)]
	}
]

[h: iDurata = -1]
[h: sEffectName = strformat("SonataEffect-%{sNome}-%{sTipoBersaglio}")]
[h, if(sTipoBersaglio=="NEMICI"): sStato = "SonataNegativa"; sStato="Sonata"]

[h: oEffetto = json.set("","stato",sStato,"subito",1,"params",altro,"verbose",0,"durata",iDurata,"tipo","Nascosto","effetto",sEffectName)]
[h: macro.return = oEffetto]