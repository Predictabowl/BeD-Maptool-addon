[h: oToken = arg(0)]

[h: iMus = getProperty("Muscoli",oToken)]
[h: iCarico = (iMus*3)+2]
[h: iCarico = iCarico + getProperty("Mod_Carico",oToken)] 

[h: return(0,floor(iCarico))]

[h: sSize = getSize(oToken)]
<!-- Modificatori di taglia disabilitati -->

[h, switch(sSize), code:
	case "2/3":{
		[iCarico = iCarico * 0.85]
	};
	case "Large":{
		[iCarico = iCarico * 1.3]
	};
	default:{}
]

[h: iCarico = iCarico + getProperty("Mod_Carico",oToken)] 

[h: macro.return = floor(iCarico)]