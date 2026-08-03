[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: arma = json.get(macro.args,"arma")]
[h: critRoll = json.get(macro.args,"critRes")]
[h: LAA= json.get(macro.args,"LA")]
[h: CFA= json.get(macro.args,"CF")]
[h: iPCF = json.get(macro.args,"PCF")]
[h: DannoA= json.get(macro.args,"DannoArma")]
[h: iMoltiplicatore = json.get(macro.args,"moltiplicatore")]
[h: bOpp = json.get(macro.args,"opportunita")]


[h, if(LAA == ""), code:{
	[macro("combat/getLA@this"):json.set("","source",source,"arma",arma)]
	[h: LAA= macro.return]
	[macro("getModLAPos@"+getMacroLocation()):json.append(source,target,bOpp)]
	[h: LAA = LAA + macro.return]
}]

[h, if(CFA == ""), code:{
	[macro("combat/getCF@this"):json.set("","source",source,"arma",arma)]
	[h: CFA= macro.return]
}]

[h, if(DannoA == ""), code:{
	[macro("combat/getDannoArma@this"):json.set("","source",source,"arma",arma)]
	[h: DannoA= macro.return]
}]

[h, if(iMoltiplicatore == ""): iMoltiplicatore = getProperty("Moltiplicatore_Att",source)]


[h: switchToken(source)]

[macro("utility/getMessaggio@this"):json.set("","token",source,"key","attacco")]
[h: msgOutput = macro.return]


[r, if(critRoll ==""), code:{
	[macro("criticalRoll@"+getMacroLocation()): json.set("","mancare",Mancare,"critico",CFA,"source",source)]
	[h: critRoll =macro.return]
	[macro("utility/popMessaggio@this"):json.set("","token",source,"key","criticalResult")]
	[h: msgOutput = msgOutput +"<br>"+macro.return]
};{}]

[r, if(critRoll != -1), code: {
	[macro("coperturaRoll@"+getMacroLocation()): json.set("","target",target,"source",source)]
	[h: critRoll = if(macro.return == 1,-1,critRoll)]
	[macro("utility/popMessaggio@this"):json.set("","token",source,"key","coperturaResult")]
	[h: msgOutput = msgOutput +macro.return]
};{}]

<!-- Importante getCritPower deve essere sempre chiamata, altrimenti non viene fatto il clear dei bonus temporanei e questi si cumulano -->
[macro("getCritPower@"+getMacroLocation()): json.set("","target",source,"type",arma)]
[h, if(iPCF == ""), code:{
	[iPCF = macro.return]
}]

[r, if (critRoll == 1), code:{
	[macro("events/runEvents@this"): json.set("","source",source,"target",target,"event","On_Critical")]
	[h: LAA = LAA +iPCF]
};{}]

[r, if(critRoll == -1), code:{
	[h: danno= 0]
};{
	[h: LDT = getProperty("LD",target)]
	[h: dado = eval(DannoA)]

	[macro("utility/trunc@this"):((LAA-LDT)*iMoltiplicatore)]
	[h: bonus = macro.return]
	[h: danno = dado+bonus]

	[h: message = "<br> ("]
	[h, if(arma==2): message= message+"Arma Secondaria"; message = message+"Arma Primaria"]
	[h: message = message+strformat(": %{dannoA}%+d = %{dado}%+d",bonus,bonus)+")"]
	[macro("core/verbosePrint@this"):message]
	[h: msgOutput = msgOutput+macro.return]

	[macro("combat/getModDmgOut@this"): source]
	[h: danno = floor(danno * macro.return)]
	[h, if (danno <1): danno =1]
	[h: msgOutput = msgOutput + " Infligge "+danno+" danni."]
}]

[macro("utility/setMessaggio@this"):json.set("","token",source,"key","attacco","msg",msgOutput)]
[h: macro.return = danno]


