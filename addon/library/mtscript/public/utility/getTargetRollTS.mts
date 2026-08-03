[h: target = macro.args]
[h: typeList = json.append("Riflessi","Tempra","Volonta")]
[h: elemList = json.append("Fisico","Acqua","Aria","Fuoco","Terra","Arcano","Mente","Negativo","Positivo")]
[h: control =  input("type|"+json.toList(typeList)+"|Tipo|LIST","element|"+json.toList(elemList)+"|Elemento|LIST") ]
[h: abort(control)]
[h: type = json.get(typeList,type)]
[h: element = json.get(elemList,element)]

[foreach(id, target, "<br>"), CODE:
{
	[h: param = json.append(id,type,element)]
	[macro("powers/RollTS@this"): param]
	[h: msgOutput= ("<b>"+getName(id)+"</b> effettua un TS "+type+" (resistenza "+element+"), "+  json.get(macro.return,2))]
	[h: broadcast(msgOutput)]
}]