[h: oItem = macro.args]

[h: jDisplay = "{}"]
[h: lDmgType = json.get(oItem, "tipoDanno")]
[h, if(lDmgType != ""), code:{
    [jDisplay = json.set(jDisplay, "tipoDanno", json.fromList(lDmgType))]
}]

[h: jAttrs = json.get(oItem, "attributiArma")]
[h: jUpdatedAttArma = "{}"]
[h,foreach(sAttr, jAttrs), code:{
    [h, macro("gui/getAttributeDisplayName@this"): sAttr]
    [label = macro.return]
    [value = json.get(jAttrs, sAttr)]
    [if(!math.isInt(value)): value = round(value*100)]
    [jUpdatedAttArma = json.set(jUpdatedAttArma, label, value)]
}]
[h: jDisplay = json.set(jDisplay, "attributiArma", jUpdatedAttArma)]
[h: jAttrs = json.get(oItem, "attributi")]
[h: jUpdatedAttrs = "{}"]
[h,foreach(sAttr, jAttrs), code:{
    [h, macro("gui/getAttributeDisplayName@this"): sAttr]
    [label = macro.return]
    [value = json.get(jAttrs, sAttr)]
    [if(!math.isInt(value)): value = round(value*100)]
    [jUpdatedAttrs = json.set(jUpdatedAttrs, label, value)]
}]
[h: jDisplay = json.set(jDisplay, "attributi", jUpdatedAttrs)]

[h, macro("items/getItemIcon@this"): oItem]
[h: jDisplay = json.set(jDisplay, "iconAsset", macro.return)]

[h: jDatiCustom = json.get(oItem, "datiCustom")]
[h, if(json.contains(jDatiCustom, "RuneInstallate")): jRune = json.get(jDatiCustom, "RuneInstallate"); jRune = "{}"]
[h: aRune = "[]"]
[h, foreach(key, jRune, ""), code:{
    [h: oRuna = json.get(jRune, key)]
    [h: spellId = json.get(oRuna, "libName")]
    [h: sImg = fetchSpellImage(spellId)]
    [h: sNome = fetchSpellProp(spellId,"nome_decorativo")]
    [oRuna = json.set(oRuna, "iconAsset", sImg, "nomeDecorativo", sNome)]
    [aRune = json.append(aRune, oRuna)]
}]
[h: jDisplay = json.set(jDisplay, "RuneInstallate", aRune)]
[h: oItem = json.set(oItem, "displayData", jDisplay)]

[h: return(0, oItem)]