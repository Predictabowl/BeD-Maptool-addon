[h: broadcast(strformat("Funzione DEPRECATA: %s@%s",getMacroName(),getMacroLocation()))]
[h: source = json.get(macro.args,0)]
[h: iTime = json.get(macro.args,1)]

[h: assert(isNumber(iTime),"getAzioneTime@Lib:TokenMacros: formato tempo azione errato"))]
[h: switchToken(source)]

[macro("mobs/getDifendersiTime@this"):source]
[h: iTime = iTime+ macro.return]

[h: iTime = iTime + Mod_Tempo_Azione]

[macro("core/popStatModifier@this"):json.append(source,"Mod_Tempo_Azione")]
[h: iTime = iTime + macro.return]

[macro("core/popStatModifier@this"):json.append(source,"Perc_Tempo_Azione")]
[h: iTime = ceil(iTime*(1+macro.return))]

[h, if(iTime < 1): iTime = 1]
[h: macro.return = iTime]
