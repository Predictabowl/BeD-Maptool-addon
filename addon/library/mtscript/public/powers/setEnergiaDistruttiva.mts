[h: oToken = json.get(macro.args,0)]
[h, if(json.length(macro.args) > 1): bSet = json.get(macro.args,1); bSet = 1]
[h, if(json.length(macro.args) > 2): bPermanent = json.get(macro.args,2); bPermanent = 1]

[h: sTag = "EnergiaDistruttiva"]

[h: switchToken(oToken)]
[h, if(bSet), code:{
	[pushOverride(oToken,sTag,bPermanent)]
};{
	[delOverride(oToken,sTag)]
}]
