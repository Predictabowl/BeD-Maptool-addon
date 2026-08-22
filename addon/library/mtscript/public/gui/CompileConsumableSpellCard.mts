[h: oToken = arg(0)]
[h: oConsumabile = arg(1)]
[h: bEquipped = arg(2)]

[h, macro("consumables/getTipoConsumabile@this"): json.append(json.get(oConsumabile, "libName"), 1)]
[r, if(macro.return == "POZIONE"), code:{
    [r, macro("gui/CompilePotionSpellCard@this"): macro.args]
};{
    [r, macro("gui/CompileScrollSpellCard@this"): macro.args]
}]