[h:source = macro.args]
[h: check = input("sScuola|Acqua,Aria,Fuoco,Terra,Arcano,Luce,Ombra,Mente|Scegli la Scuola|LIST|SELECT=0 VALUE=STRING")]
[h, if(check == 1), code:{
	[macro("powers/setScuolaUniversale@this"): json.append(source,sScuola)]
	[h: return = json.append(check,sScuola)]
};{
	[h: return = json.append(check,"")]
}]
[h: macro.return = return]

