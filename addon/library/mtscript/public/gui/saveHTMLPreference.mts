<!-- TODO seem almost useless, maybe because accept a json object? check if can be removed -->
[h: sPreferenza = json.get(macro.args,"preference")]
[h: oToken = json.get(macro.args,"token")]
[h: sComponente = json.get(macro.args,"componente")]
[h: sGruppo = json.get(macro.args,"gruppo")]

[h: setPreferenza(sComponente,sPreferenza,oToken,sGruppo)]