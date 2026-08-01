[h: element = macro.args]
[h: element = upper(element)]
[h, switch(element), code:
case "FUOCO":{
	[element = "Fuoco"]
};
case "ACQUA":{
	[element = "Acqua"]
};
case "TERRA":{
	[element = "Terra"]
};
case "ARIA":{
	[element = "Aria"]
};
case "MENTE":{
	[element = "Mentale"]
};
case "MENTALE":{
	[element = "Mentale"]
};
case "POSITIVO":{
	[element = "Positivo"]
};
case "POSITIVA":{
	[element = "Positivo"]
};
case "LUCE":{
	[element = "Positivo"]
};
case "OMBRA":{
	[element = "Negativo"]
};
case "NEGATIVA":{
	[element = "Negativo"]
};
case "NEGATIVO":{
	[element = "Negativo"]
};
case "ARCANA":{
	[element = "Arcano"]
};
case "ARCANO":{
	[element = "Arcano"]
};
case "FISICA":{
	[element = "Fisico"]
};
case "FISICO":{
	[element = "Fisico"]
};
default: {
	[element = "null"]
}]
[h: macro.return = element]