[h: sPreferenza = json.get(macro.args,"preference")]
[h: oToken = json.get(macro.args,"token")]
[h: sComponente = json.get(macro.args,"componente")]
[h: sGruppo = json.get(macro.args,"gruppo")]

[h: setPreferenza(sComponente,sPreferenza,oToken,sGruppo)]