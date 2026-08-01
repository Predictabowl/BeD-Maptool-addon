[h: oToken = json.get(macro.args,0)]
[h, if(json.length(macro.args)>1), code:{
	[sSpirito = json.get(macro.args,1)] 
};{
	[sSpirito = ""]
}]

[h: switchToken(oToken)]

[h, if(sSpirito == ""), code:{
	[Spiriti_Data = json.remove(Spiriti_Data,"SpiritoAttivo")]
};{
	[Spiriti_Data = json.set(Spiriti_Data,"SpiritoAttivo",sSpirito)]
}]