[h: source = json.get(macro.args,0)]
[h: oEffect = json.get(macro.args,1)]

<!-- sEvent può essere un oggetto effetto, nel qual caso si recupera direttamente,
se non è un oggetto è il nome di un effetto presente su source -->

[h, if(json.type(oEffect) == "OBJECT"), code:{
	[h: return = json.get(oEffect,"moltiplicatore")]
};{
	[h: switchToken(source)]
	[h, if(json.type(Lista_Effetti) != "OBJECT"): Lista_Effetti = "{}"]
	[h, if(json.contains(Lista_Effetti,oEffect)), code:{
		[h: oEffect = json.get(Lista_Effetti,oEffect)]
		[h: return = json.get(oEffect,"moltiplicatore")]
	};{
		[return = 1]
	}]
}]

[h: macro.return = return]