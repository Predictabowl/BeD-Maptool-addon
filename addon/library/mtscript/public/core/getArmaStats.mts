[h: arma = macro.args]
[h, if (arma ==2), code:{
	[macro.return = json.append(LA2,CF2,PCF2,Danno_Arma2)]
};{
	
	[macro.return = json.append(LA1,CF1,PCF1,Danno_Arma1)]
}]