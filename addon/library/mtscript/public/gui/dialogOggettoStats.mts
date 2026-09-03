[h: oOggetto = arg(0)]

[h: sNome = json.get(oOggetto, "nome")]
[h: sDialog = "DialogInfoOggetto-"+sNome]
[h: jAttributi = json.get(oOggetto, "attributi")]
[h: jAttributiArma = json.get(oOggetto, "attributiArma")]
[h: jDatiCustom = json.get(oOggetto, "datiCustom")]
[h, if(json.contains(jDatiCustom, "RuneInstallate")): aRune = json.get(jDatiCustom, "RuneInstallate"); aRune = "[]"]

[h: sAttributiArma = ""]
[h, foreach(sAttr, jAttributiArma,""), code :{
	[h, macro("gui/getAttributeDisplayName@this"): sAttr]
	[h: iValue = json.get(jAttributiArma, sAttr)]
	[h, if(!math.isInt(iValue)): iValue = round(iValue *100)]
	[h: sAttributiArma = strformat("%{sAttributiArma}<li>%s: %+d</li>", macro.return, iValue)]
}]

[dialog5(sDialog, strformat('temporary=1; width=450; height=500; closebutton=0; noframe=0;')):{
<html>

<head> 
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/CharSheetCssLink.html")]
	<title>Equipaggiamento</title>
	<style>
	</style>
</head>
<body align="center">
		
	<!-- DESCRIZIONE -->
	<div id="box-descrizione-oggetto" class="itemInfo"
			style="border:1px solid black; padding: 10px; overflow-y:scroll; grid-row: 3;">
		<div id="nomeOggetto" class="spellFont" style="font-size:120%; text-align:center; color:red; font-weight:bold; margin-bottom:5px;">
			[r: sNome]
		</div>
		[r, if(json.contains(oOggetto, "danno1H")), code: {
			<div id="datiArma" style="margin:0; padding:0;">
				<div style="border-bottom:1px solid; padding-bottom:0; margin-bottom:3px;">
					<div style="display:inline-grid; grid-template-columns: auto auto; justify-content: space-between; width:95%; padding:0; margin:0;">
						[h, macro("gui/dmgTypeIcons@this"): oOggetto]
						[h: sDmgIcons = " "+macro.return]
						<div>
							Danno 1M: <span id="descrDanno" style="color:darkorange;">[r: json.get(oOggetto,"danno1H")]</span>[r: sDmgIcons]
						</div>
						[h: sCaA = json.get(oOggetto, "carArma")]
						<div id="descrCaA" style="margin:0; padding:0">[r, if(sCaA == "CaP"): "Mana"; sCaA]</div>
						<div>
							Danno 2M: <span id="descrDanno" style="color:darkorange;">[r: json.get(oOggetto,"danno2H")]</span>[r: sDmgIcons]
						</div>
						<div>Portata: <span>[r: json.get(oOggetto,"portata")]</span></div>
					</div>
				</div>
				<ul id="listaAttributiArma" style="color:darkgreen; margin-bottom:0; margin-top:0;">
					[r: sAttributiArma]
				</ul>
			</div>
		}]
		<ul id="listaAttributi" style="color:blue; margin-bottom:0; margin-top:0;">
			[r, foreach(sAttr, jAttributi,""), code :{
				[h, macro("gui/getAttributeDisplayName@this"): sAttr]
				[h: iValue = json.get(jAttributi, sAttr)]
				[h, if(!math.isInt(iValue)): iValue = floor(iValue *100)]
				[r: strformat("<li>%s: %+d</li>", macro.return, iValue)]
			}]
		</ul>
		<div style="display:inline-grid; grid-template-columns: auto auto; justify-content: space-between; align-items:center; width:95%; padding:0px;">
			[h: iIngombro = getIngombroEquip(oOggetto)]
			[r, if(iIngombro != 0), code: {
				<div id="descrIngombro">Ingombro: [r: iIngombro]</div>
			};{}]
			[h: iAddestramento = getAddestramentoArmatura(oOggetto)]
			[r, if(iAddestramento > 0), code:{
				<div id="descrAddestramento">Addestramento: [r: getAddestramentoArmatura(oOggetto)]</div>
			}]
		</div>
		[r, if(!json.isEmpty(aRune)), code:{
			<table style="border-spacing: 6px;">
				<tbody>
		}]
				[r, foreach(key, aRune, ""), code:{
					[h: oRuna = json.get(aRune, key)]
					[h: sLibSpell = json.get(oRuna, "libName")]
					[h: sImg = fetchSpellImage(sLibSpell)]
					<tr>
						<td>
							<img src="[r: sImg]" width='25' height='25'/>
						</td>
						<td>
							[h: spellName = json.get(oRuna, "libName")]
							[h: jDescArgs = json.set("", "token", getImpersonated(), "libSpell", spellName)]
							[r: macroLink(fetchConsumableProp(spellName,"nome_decorativo"), "gui/dialogDescrizioneSpell@this", "", jDescArgs)]
						</td>
						<td>
							Liv. [r: json.get(oRuna, "livello")]
						</td>
						<td>
							[h: iMaxCariche = json.get(oRuna, "maxCariche")]
							Cariche: [r: json.get(oRuna, "cariche")][r, if(isNumber(iMaxCariche)): "/"+iMaxCariche; ""]
						</td>
					</tr>
				}]
		[r, if(!json.isEmpty(aRune)), code:{
				</tbody>
			</table>
		}]
		<p id="descrizioneOggetto">
			[r: json.get(oOggetto, "descrizione")]
		</p>
	</div>
		
	
</body>
</html>
}]