[h: target = macro.args]

[h: input ("faticaP|1|Punti Fatica pagati")]
[h: costo = json.append(target,0,FaticaP,0,-FaticaP)]
[macro("core/payAction@this"):costo]
[r, if(macro.return == 1), code:{
	[h: return = 1]
};{
	[h: return = 0]
}]

[h: macro.return = return]