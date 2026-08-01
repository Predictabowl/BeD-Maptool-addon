[h: source = macro.args]

[h, if(source ==""): source = getImpersonated()]
[h: switchToken(source)]

[rimuoviEffetto(source,"Nascosto")]