[h: spellName = json.get(macro.args,"spellName")]
[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bOpp = json.get(macro.args,"isOpport")]
[h: iArma = json.get(macro.args, "arma")]
[h: sSpellMacro = json.get(macro.args, "spellMacro")]
[h: bIsAoE = json.get(macro.args, "isAoE")]

[h: jProcParam = macro.args]
[h, if(sSpellMacro == ""): jProcParam = json.set(jProcParam, "spellMacro", "powers/spells/"+spellName+"/spellEffect@this")]

[h: switchToken(source)]

[h: fluff = fetchSpellProp(spellName,"nome_decorativo")]
[r: getSpeech(fluff)]
[h: im = fetchSpellImage(spellName)]
[h: msgOutput = strformat("<table style='border-collapse: collapse; margin:0px; padding:0px;'><td><img src='%{im}' width='35' height='35' /></td>")]
[h: msgOutput = strformat("%{msgOutput}<td><span style='font-size:medium; font-weight:bold'> %s: %{fluff}</span></td></table>",getName(source))]

[macro("utility/popMessaggio@this"): json.set("","token",source,"key","msgEventOn_Spellcast")]
[h, if(macro.return != ""): msgOutput = msgOutput + macro.return + "<br>"]

[h: sTargetLog = popMessaggio(source,"targetingLog")]
[h, if(sTargetLog != ""): msgOutput = msgOutput + sTargetLog + "<br>"]

[h, if(bIsAoE != 1 && !isAoESpell(spellName, source)): target = listGet(target,0)]

[macro("powers/isAttack@this"): spellName]
[h: bIsAttack = macro.return]

[macro("powers/getSpellOrigine@this"): json.append(source,spellName)]
[sOrigine = macro.return]
[h: appendMessaggio(source,"endOfActionMsg",msgOutput)]

[h, macro("powers/processSpellEffect@this"): json.set(jProcParam, "origine", sOrigine, "isAttack", bIsAttack)]

[h: sProcessMsg = popMessaggio(source, "processSpellEffect")]
[h: appendMessaggio(source,"endOfActionMsg",sProcessMsg)]