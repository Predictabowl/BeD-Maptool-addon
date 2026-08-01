[h: target = arg(0)]

<!-- se flag è 1 vuol dire che è colpibile -->
[h: bFlag = 1]

[h: target= findToken(target)]
[h, if(target == ""): return(0,0)]

[h, if(bFlag), code:{
	[if(getPropertyType(target) != "Basic"): bFlag = 0]
}]

[h: macro.return = bFlag]