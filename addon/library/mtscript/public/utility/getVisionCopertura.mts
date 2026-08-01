[h: attaccante = arg(0)]
[h: difensore = arg(1)]

[h: return(0,0)]

<!-- Metodo disabilitato fin quando non sistemato -->

[h: sSize = getSize(difensore)]
[h, switch(sSize), code:
	case "2/3":{[fPow = 1.7]};
	case "Medium":{[fPow = 2.0]};
	case "Large":{[fPow = 2.3]};
	case "Huge":{[fPow = 2.6]};
	case "Humongous":{[fPow = 2.9]};
	default:{[fPow = 1.4]}
]
[macro("canSeeTokenAbsolute@this"): json.append(attaccante,difensore)]
[h: fVisCopertura = math.pow((5-json.length(macro.return))*0.2,fPow)]

[h: macro.return = fVisCopertura]