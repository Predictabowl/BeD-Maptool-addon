[h: target = json.get(macro.args,0)]
[h: sStile = upper(json.get(macro.args,1))]
[h: switchToken(target)]

[h: moltA = 1.5]
[h, switch(sStile), code:
case "ARMA E MANO LIBERA":{
	[return = "1A"]
};
case "DUE ARMI":{
	[return ="2A"]
};
case "ARMA A DUE MANI":{
	[return = "2M"]
};
case "ARMA A DISTANZA":{
	[return = "AD"]	
};
case "ARMA E SCUDO":{
	[return = "AS"]
};
default:{
	[return = sStile]
}]

[h: setProperty("Stile",return,target)]