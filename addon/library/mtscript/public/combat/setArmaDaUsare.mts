[h: oToken = arg(0)]
[h: iArmaDaUsare = arg(1)]
[h: switchToken(oToken)]

[h: iArmaUsata = getStrProp(Lista_Dati,"UltimaArmaUsata")]
[h, if(!isNumber(iArmaUsata)): iArmaUsata = 1]

[h: Lista_Dati = setStrProp(Lista_Dati,"UltimaArmaUsata",iArmaDaUsare)]

[h, if(iArmaDaUsare != iArmaUsata): execFunction("guiUpdateSchedaArmaAttiva",json.append("", oToken),0,"all")]