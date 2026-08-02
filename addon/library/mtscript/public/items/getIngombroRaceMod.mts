[h: oToken = arg(0)]

[h: return(0,1)]

<!-- Modificatori Ingombro taglia disabilitati -->

[h: sSize = getSize(oToken)]
[h, switch(sSize), code:
	case "2/3":{
		[iResult = 0.75]
	};
	case "Large":{
		[iResult = 1.5]
	};
	default:{ 
		[iResult = 1]
	}	
]

[h: macro.return = iResult]
