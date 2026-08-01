[h: target = arg(0)]

[h, foreach(id,target), code:{
	[iCarico = getCarico(id)]
	[iIngombro = getIngombroTotale(id)]
	[if(iIngombro > iCarico), code :{
		[broadcast(strformat("%s non può riposarsi perché è <span style='font-weight:bold'>sovraccarico</span>", getName(id)))]	
	};{
		[switchToken(id)]
		[macro("mobs/riposoBasicRecovery@this"): id]
		[h: PF = PF_Max]
		[h: Mana = Mana_Max]
		[setTossicoLiv(id,0)]
		[macro("ricaricaRuneGiornaliere@Lib:OggettiUsabili"): id]
		[macro("mobs/getPVRiposoLungo@this"): id]
		[macro("core/CuraTarget@this"): json.append(id, macro.return, "", "",0,1)]
		[delDaMemoria(id, "riposoBreve")]
		[macro("powers/ifSpiritoRollDisattivazione@this"): id]
		[sMsg = popMessaggio(id,"strCura")]
		[if(sMsg != ""): broadcast(sMsg)]
	}]
}]