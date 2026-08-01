[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]

[macro("core/getServitore@this"):source]
[h: oSlave = macro.return]
[h: oSlave = listAppend(oSlave,target)]

[switchToken(source)]
[Lista_Dati = setStrProp(Lista_Dati,"Servitore",oSlave)]
