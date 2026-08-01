[h: source = macro.args]

[h: switchToken(source)]
[h: Lista_Dati = deleteStrProp(Lista_Dati,"DIFENDERSI")]
[macro("core/popOverride@this"): json.append(source,"freeCostDifendersi")]