[h: source = arg(0)]
[h: target = arg(1)]
[h: spellName = arg(2)]
[h: oEffetto = arg(3)]

[h: lTags = upper(fetchSpellProp(spellName,"tags"))]
[h: aTags = json.fromList(lTags)]
[h: aCategoria = json.get(oEffetto, "categoria")]
[h: aCategoria = json.merge(aCategoria, aTags)]
[h: aCategoria = json.unique(aCategoria)]
[h: json.set(oEffetto, "categoria", aCategoria)]

[h: macro.return = oEffetto]
