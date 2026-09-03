<!-- DEPRACATED but still in use somewhere -->
[h: target = arg(0)]
[h: sStile = getProperty("Stile",target)]
[h, switch(sStile), code:
case "1A":{
	[return = "Arma e mano libera"]
};
case "2A":{
	[return ="Due armi"]
};
case "2M":{
	[return = "Arma a due mani"]
};
case "AD":{
	[return = "Arma a distanza"]
};
default:{
<!-- AS -->
	[return = "Arma e scudo"]
}]
[h: macro.return = return]