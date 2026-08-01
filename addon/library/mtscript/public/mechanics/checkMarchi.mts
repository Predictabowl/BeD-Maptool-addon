[h: oToken = json.get(macro.args,0)] <!-- colui che si deve controllare che possa infrangere il marchio -->
[h: targets = json.get(macro.args,1)]

[h:sSfida = "SFIDA"]
[h: sProt = "PROTEZIONE"]

<!-- Serve un controllo per gli incantesimi ad area, basta che in spellTargets sia presente il proprietario del marchio per non essere infranto -->
[macro("mechanics/checkMarchioSfidaAoE@this"): json.append(oToken,targets)]
[bSfida = macro.return]
[if(bSfida == 1), code:{
	[macro("mechanics/eseguiMarchio@this"): json.append(oToken,targets,sSfida)]
}]

[macro("mechanics/checkMarchioProtAoE@this"): json.append(oToken,targets,sProt)]
[listaProt = macro.return]
[h, foreach(oID,listaProt), code:{
	[macro("mechanics/eseguiMarchio@this"): json.append(oToken,oID,sProt)]
}]