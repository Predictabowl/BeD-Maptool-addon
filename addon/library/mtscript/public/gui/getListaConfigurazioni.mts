[h: target = macro.args]
[h: switchToken(target)]
[h: return = ""]
[h, foreach(conf,Configurazioni_Scheda,"<br>"), code:{
	[h: return = listAppend(return,conf)]
}]
[h: macro.return = return]