[h: target = macro.args]
[h: switchToken(target)]
[h: active = getStrProp(Lista_Dati,"Abilita_Attiva_Secondaria")]
[h, if(active = ""): active =0]
[h, if(active <2), code:{
	[active = active +1]
	[Lista_Dati = setStrProp(Lista_Dati,"Abilita_Attiva_Secondaria",active)]
	[macro.return = 1]
};{
	<span style="color:red;font-weight:bold;">Non puoi utilizzare piu di due abilita Attive Secondarie contemporaneamente</span>  
	[h: macro.return = 0]
}]