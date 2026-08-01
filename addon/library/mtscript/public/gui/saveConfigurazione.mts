[h: token = json.get(macro.args,0)]
[h: nomeC = json.get(macro.args,1)]

[h: switchToken(token)]
[h: statList = "LA1,LA2,CF1,CF2,PCF1,PCF2,LL_Base,Tempo_Attacco1,Tempo_Attacco2,Mancare,LL_Base,LL_Base2,CD1,CD2,CDM_Base,CDM_Base2,CM,CM2,PCM,PCM2"]
[h: statList = statList + ",Armi_Equipaggiate,Danno_Arma1,Danno_Arma2,Gittata,Gittata2,LA_Spalle,LA_Spalle2,Stile,Moltiplicatore_Att"]
[h: statList = statList + ",PA_Max,MM_Max,PV_Max,Mana_Max,PF_Max,PV_Negativi"]
[h: statList = statList + ",LD,Schivare,Parare,Copertura,Res_Fisico,Res_Acqua,Res_Aria,Res_Fuoco,Res_Terra,Res_Arcano,Res_Mentale,Res_Negativo,Res_Positivo,TS_Rif,TS_Tem,TS_Vol"]

[h: datiC = "{}"]
[h, foreach(sItem,statList,","), code:{
	[datiC = json.set(datiC,sItem,getProperty(sItem))]
}]

[h: Configurazioni_Scheda = json.set(Configurazioni_Scheda,nomeC,datiC)]