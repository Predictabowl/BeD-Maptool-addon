[h: source = json.get(macro.args,0)]
[h: iValore = json.get(macro.args,1)]

[h: switchToken(source)]

[macro("utility/getFrazionePersonale@this"): source]
[h: iFrazione = macro.return]
[h: iFrazione = iFrazione - iValore]
[macro("utility/setFrazionePersonale@this"): json.append(source,iFrazione)]