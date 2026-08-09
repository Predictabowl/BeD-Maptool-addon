<!-- Da chiamare SOLAMENTE quando si è sicuri che Energia Distruttiva è attivata -->
[h: source = macro.args]

[h: sEventName = "Energia Distruttiva"]
[h: thisPlace = getMacroLocation()]
[h: sAttack= "mechanics/attackEDEvent@"+thisPlace]
[h: sActionClean= "mechanics/actionCleanEDEvent@"+thisPlace]

<!-- l'evento On_Attack avviene dopo l'evento On_Spellcast, quindi si può usare On_Spellcast per lanciare macro prima del controllo di Energia Distruttiva -->

[macro("events/eventInstaller@this"): json.set("","name",sEventName,"token",source,"event","On_Attack","macroName",sAttack)]
[macro("events/eventInstaller@this"): json.set("","name",sEventName,"token",source,"event","On_Action_Interrupt","macroName",sActionClean)]
[macro("events/eventInstaller@this"): json.set("","name",sEventName,"token",source,"event","On_Action_End","macroName",sActionClean)]


[macro("core/pushStatModifier@this"):json.append(source,"EnergiaDistruttiva",1)]