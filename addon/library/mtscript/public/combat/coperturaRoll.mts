[h: target = json.get(macro.args,"target")]
[h: source = json.get(macro.args,"source")]
[h: origine = json.get(macro.args,"origine")]
[h, if(origine == ""): origine = source]

[h, if(getOverride(source, "attaccoPotenziale") > 0): return(0, 0)]

[h: fCop = getCopertura(json.set("","attaccante",origine,"difensore",target))]

[r, if(fCop>0), code:{
	[h: fCop = round(fCop*1000)]
	[h: dado = (1d1000)]
	[h: message = strformat("<span title='%{dado} [%{fCop}]'>")]
	[macro("core/verbosePrint@this"):message]
	[h: msg = macro.return]
	[r, if (dado <= fCop), CODE:{
		[h:msg = msg + " Copertura Colpita, Bersaglio Mancato!</span>"]
		[h: result =1]
	};{
		[h: msg = msg+" Copertura Evitata!</span>"]
		[h: result =0]
	}]
};{
	[h: msg=""]
	[h: result = 0]
}]

[h: setMessaggio(source, "coperturaResult", msg)]
[h: macro.return = result]