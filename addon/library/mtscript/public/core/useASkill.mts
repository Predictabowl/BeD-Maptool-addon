[h: target = macro.args]
[h: switchToken(target)]
[h: active = getStrProp(Lista_Dati,"Abilita_Attiva")]
[h, if(active == ""): active =0]
[r, if(active <1), code:{
	[h: Lista_Dati = setStrProp(Lista_Dati,"Abilita_Attiva",1)]
	[h: macro.return = 1]
};{
	<span style="color:red;font-weight:bold;"> Non puoi utilizzare piu di un'abilita Attiva contemporaneamente </span>  
	[h: macro.return = 0]
}]