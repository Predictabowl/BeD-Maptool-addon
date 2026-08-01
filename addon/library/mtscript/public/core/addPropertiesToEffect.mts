<!-- Le nuove proprietà non saranno processate fino al termine del round -->

[h: oToken = json.get(macro.args,0)]
[h: sEffetto = json.get(macro.args,1)]
[h: oProperties = json.get(macro.args,2)]


[macro("core/getEffect@this"): json.append(oToken,sEffetto)]
[h: oEffetto = macro.return]
[h, if(!json.isEmpty(oEffetto)), code:{
	[h: oProps = json.get(oEffetto,"params")]

	[h, foreach(oItem,oProperties), code:{
		[oProps = json.append(oProps,oItem)]
	}]

	[h: oEffetto = json.set(oEffetto,"params",oProps)]
	[macro("core/setEffect@this"): json.append(oToken,sEffetto,oEffetto)]
};{
	[broadcast(strformat("Effetto %{sEffetto} non trovato"))]
}]