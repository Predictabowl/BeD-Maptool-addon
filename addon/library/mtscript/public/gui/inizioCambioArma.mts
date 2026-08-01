[h: oToken = json.get(macro.args,"token")]
[h: jParams = macro.args]

[closeDialog("DialogCambioArmi")]
[h, macro("combat/inizioCambioArma@this"): json.append(oToken, jParams)]