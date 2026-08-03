[h: source = getSelected()]
[macro("utility/pushOpportOverride@this"): source]
[h, if(macro.return), code:{
	[macro("utility/popRichiesta@this"): json.append(source,"OPPORTUNITA")]
	[sMsg = strformat("%s pu&ograve; infliggere un Attacco di Opportunit&agrave", getName(source))]
	[broadcast(sMsg)]
}]