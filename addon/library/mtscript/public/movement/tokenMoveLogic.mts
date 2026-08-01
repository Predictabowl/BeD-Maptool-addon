[h: source = arg(0)]

[macro("movement/popMoveOverride@this"):0]
[h: mOverride = macro.return]
[h: bGm = isGM()]
[h, if(bGm && (mOverride==1)): return(0,0)]

[h: tokenType = getPropertyType()]

[h, switch(tokenType), code:
	case "Basic":{
		[macro("movement/MoveCreatureToken@this"):source]
		[h: bDenyMove =  macro.return]  
	};
	case "Bersaglio":{
		[macro("movement/MoveBersaglioToken@this"):source]
		[h: bDenyMove =  macro.return]  
	};
	case "Oggetto Fisso":{
		[if(bGM): bDenyMove = 0; bDenyMove = 1]
	};
	default :{
		[bDenyMove = 0]
	}
]

[h: macro.return = bDenyMove]