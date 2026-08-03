[h: source = json.get(macro.args,"source")]
[h: sLibName = json.get(macro.args,"libName")]
[h: oUseParam = json.get(macro.args,"useParam")]
[h: sTemplateMacro = json.get(macro.args,"templateMacro")]
[h: oTemplateParam = json.get(macro.args,"templateParam")]

[macro("consumables/getItemAuto@this"): json.append(source,sLibName,oUseParam)]
[h: oOggetto = macro.return]
[macro("consumables/getCDOggetto@this"): oOggetto]
[h: iCD = macro.return]

[h: oParam = json.set(oTemplateParam, "LL",getLLOggetto(oOggetto),"CD",iCD)]
[macro(sTemplateMacro): oParam]