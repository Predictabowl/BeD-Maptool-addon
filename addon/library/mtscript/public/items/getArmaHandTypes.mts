[h: oArma = arg(0)]

[h, macro("items/getItemCategory@this"): oArma]
[h, switch(macro.return), code:
    case "armaDistanza": {
        [aTypes = json.append("", "ranged")]
    };
    case "armaLancio": {
        [aTypes = json.append("", "throw")]
    };
    default: {
        [aTypes = "[]"]
    }
]

[r, if(!json.isEmpty(aTypes)), code:{
    [r: aTypes]
    [h: return(0, aTypes)]
}]

[h: sDanno = string(json.get(oArma,"danno1H"))]
[h, if(sDanno != "" && sDanno != "0"): aTypes = json.append(aTypes, "1hand")]
[h: sDanno = string(json.get(oArma,"danno2H"))]
[h, if(sDanno != "" && sDanno != "0"): aTypes = json.append(aTypes, "2hand")]

[r: aTypes]
[h: macro.return = aTypes]