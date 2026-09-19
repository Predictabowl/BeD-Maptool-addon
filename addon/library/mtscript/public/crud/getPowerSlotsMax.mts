[h: sProgressionKey = arg(0)]
[h: sStatKey = arg(1)]
[h: tokenId = arg(2)]

[h: switchToken(tokenId)]
[h: jClasses = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/config/classes.json")]

[h, if(Classe != ""), code:{
    [h: fScaling1 = json.path.read(jClasses, strformat("%{Classe}.%{sProgressionKey}"), "SUPPRESS_EXCEPTIONS")]
    [h, if(fScaling1 == "null"): fScaling1 = 0; fScaling1 = eval(string(fScaling1))]
}; {
    [fScaling1 = 0]
}]

[h, if(Classe2 != ""), code:{
    [h: fScaling2 = json.path.read(jClasses, strformat("%{Classe2}.%{sProgressionKey}"), "SUPPRESS_EXCEPTIONS")]
    [h, if(fScaling2 == "null"): fScaling2 = 0; fScaling2 = eval(string(fScaling2))]
}; {
    [fScaling2 = 0]
}]

[h, macro("crud/getPowerBonusSlots@this"): tokenId]
[h: aStatBonus = macro.return]
[h, if(fSCaling1 > 0): iStatBonus1 = json.get(aStatBonus, 0); iStatBonus1 = 0]
[h, if(fSCaling2 > 0): iStatBonus2 = json.get(aStatBonus, 1); iStatBonus2 = 0]

[h: iBaseSlot = floor((fSCaling1 * LC) + iStatBonus1 + (fScaling2 * LC2 ) + iStatBonus2)]
[h: iTot = iBaseSlot + getProperty(sStatKey)]
[h: return(0, iTot)]