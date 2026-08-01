[h: spellName = macro.args]
[h: param = json.set("","source",getImpersonated(),"spellName",spellName)]
[macro("powers/SpellCast@this"):param]