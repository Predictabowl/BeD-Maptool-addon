[h: oToken = arg(0)]
[h, if(argCount() > 1): bSet = arg(1); bSet = 1]
[h, if(argCount() > 2): bPermanent = arg(2); bPermanent = 1]

[h: sTag = "FiorituraPrematura"]

[h: switchToken(oToken)]
[h, if(bSet), code:{
	[pushOverride(oToken,sTag,bPermanent)]
};{
	[delOverride(oToken,sTag)]
}]
