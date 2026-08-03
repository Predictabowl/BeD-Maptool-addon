[h: source = json.get(macro.args,0)]
[h: sFrame = "Scheda"]
[h, if(json.length(macro.args) > 1), code:{
	[sTemp = json.get(macro.args,1)]
	[if(startsWith(sTemp,sFrame)): sFrame = sTemp; sFrame = strformat("%{sFrame}%{sTemp}")]
}]

[h:target = getSelected()]


[h, macro("combat/isStile2A@this"):source]
[h: checkS = macro.return || isArmaLancioEquipped(source)]
[h, if(checkS): tableHead = "<th> Arma 2</th>"; tableHead = ""]

[h, macro("gui/makeAttackTabArray@this"):source]
[h, macro("gui/generaTabellaHTML@this"):macro.return]
[h: strTabella = macro.return]

[h, macro("gui/makeResistenzeTabArray@this"):source]
[h, macro("gui/generaTabellaHTML@this"):macro.return]
[h: strResistenzeTabella = macro.return]

[h, macro("gui/makeDifeseTabArray@this"):source]
[h, macro("gui/generaTabellaHTML@this"):macro.return]
[h: strDifTabella = macro.return]

[h, macro("gui/makeTSTabArray@this"):source]
[h, macro("gui/generaTabellaHTML@this"):macro.return]
[h: strTSTabella = macro.return]

[h: switchToken(source)]

[h: list = LMM]
[h: listLen = countStrProp(list)]
[h: classType="evenRow"]
[h: tabellaLL = ""]
[h, for (i,0,listLen,1), code:{
	[h: classType = if(classType=="oddRow","evenRow","oddRow")]

	[h: key = indexKeyStrProp(list,i)]
	[h: valueLMM = getLMM(json.set("","source",source,"scuola",key))]
	[h: valueLL1 = getLL(json.set("","source",source,"scuola",key,"arma",1))]
	[h: valueCD1 = getSpellCD(json.set("","source",source,"LM",valueLMM,"arma",1))]
	[tabellaLL = strformat("%{tabellaLL} <tr class='%{classType}'> <td align='left'>%{key}</td><td>%{valueLMM}</td><td>%{valueLL1}</td><td>%{valueCD1}</td>")]
	[if(checkS == 1), code:{
		[h: valueLL2 = getLL(json.set("","source",source,"scuola",key,"arma",2))]
		[h: valueCD2 = getSpellCD(json.set("","source",source,"LM",valueLMM,"arma",2))]
		[tabellaLL = strformat("%{tabellaLL}<td>%{valueLL2}</td><td>%{valueCD2}</td>")]
	}]
	[tabellaLL = tabellaLL +"</tr>"]
}]

[h: jSpiriti = getArraySpiriti(source)]
[h, if(json.isEmpty(jSpiriti)), code:{
	[sSpiriti = ""]
};{
	[sSpiriti = strformat("
		<div style='margin-top:10px;'>
			<a href='%s'>Spiriti</a>
		</div>"
	,macrolinkText("gui/showPannelloSpiriti@this","none",source))]
}]

[h: oParam = json.set("","source",source,"frameName",sFrame,"Armi",1)]

[h: sArmaHeadLink = strformat("<a href='%s' style='color:inherit;'><span style='display:block;'>Armi</span></a>",macrolinkText("combat/inizioCambioArma@lib:it.aldinucci.piero.bed.maptool.ruleset","none",source))]
[h: sGradoModLink = strformat("<a href='%s' style='color:inherit;'><span style='display:block;'>Modifica Grado</span></a>",macrolinkText("gui/ModificaCapacita@this","none",source))]
[h: sScuolaLMMUpdate = strformat("<a href='%s' style='color:inherit;'><span style='display:block;'>Scuola</span></a>",macrolinkText("gui/inputLMM@this","none",source))]
[h: sAggiornaLink = strformat("<a  class='relevantTitle' href='%s'>%s</a>",macrolinkText("gui/updateSchedaAttacco@this","none",json.append(source,sFrame)),getName(source))]
[h: sCaratteristicheLink = macrolinkText("gui/dialogCaratteristiche@this","none", source,sFrame)]

<!-- Recupero preferenze scheda -->
[h: sDettagliDisplay = getPreferenza("dettagli_aggiuntivi",source,"SchedaHTML")]
[h, if(json.isEmpty(sDettagliDisplay)): sDettagliDisplay = "display:none;"]
[h: sPoteriDisplay = getPreferenza("tabella_poteri",source,"SchedaHTML")]
[h, if(json.isEmpty(sPoteriDisplay)): sPoteriDisplay = "display:none;"]
[h: sDifeseDisplay = getPreferenza("stat_difese",source,"SchedaHTML")]
[h, if(json.isEmpty(sDifeseDisplay)): sDifeseDisplay = "display:none;"]
[h: sTipoDif = getPreferenza("difesa_fisica_in_uso",source,"Combattimento")]
[h, if(json.isEmpty(sTipoDif)): sTipoDif = "Auto"]

[frame5(sFrame,strformat("value=%{source};")):{
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/CharSheet5.css"><!-- ?cachelib=false-->
	<title> Scheda </title>
</head>
<body class="dataCentered">

<!-- Form Preferenze -->
<form id="savePreferenceForm" action="[r: macroLinkText("gui/saveHTMLPreference@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
<input type="hidden" name="preference" value ="" id="id_component_value" />
<input type="hidden" name="token" value ="[r:source]"/>
<input type="hidden" name="componente" id="id_component_field" value =""/>
<input type="hidden" name="gruppo" id="id_group_type" value ="SchedaHTML"/>
</form>

<div style="display:flex; justify-content:center; align-items: center; gap:1rem;">
	<a href="[r: sCaratteristicheLink]" title="Mostra Caratteristiche">
		<img class="pulsanteGrande" src="[r: getTokenImage()]" width="60"/> 
	</a>
	[r:sAggiornaLink]
</div>

<div class="splitscheda">
	<table class="center">
		<tr class='genericTable'> <td/><th colspan="2" class='tabHeaderLink'>[r: sArmaHeadLink]</th></tr>
		[r: strTabella]
	</table>
		
	<!-- Tabella LL -->

	[h,if(checkS == 1): sHeader ="<th> LL 2 </th><th> CD 2 </th>";sHeader = ""]
	<div class="sectionbox" style="margin-top:0.5rem;">
		<a href="#" onclick="toggle_and_save('tabella_poteri');" class="sectionTitle">Maestria Poteri</a>
		<div id="tabella_poteri" style="[r:sPoteriDisplay]"> 
			<table  class="center">
				<tr class="genericTable"> <th class='tabHeaderLink'> [r:sScuolaLMMUpdate]</th> <th> LMM </th><th> LL </th><th> CD </th> [r:sHeader] </tr>
				[r: tabellaLL]
			</table>
			[r: sSpiriti]
		</div>
	</div>
	<!-- Tabella Difese e TS -->
	<div class="sectionbox">
		<a href="#" onclick="toggle_and_save('stat_difese');" class="sectionTitle">Difese</a>
		<div id = "stat_difese" style="[r:sDifeseDisplay]">
			<div style="display:flex; flex-wrap: wrap; justify-content: center; flex-grow: 1; gap: 0.75rem;">
				<table id="tabella_TS" style="border-collapse:collapse;">
					<tr class='genericTable'> <th colspan = 2>Dif. Fisiche</th></tr>
					[r: strDifTabella]
					<tr><td colspan=2>In uso: <a id="tipo_difesa_usata" href="#" onclick="toggle_difesa();">[r: sTipoDif]</a></td></tr>
					<tr colspan=2 / height=10>
					<tr class='genericTable'> <th colspan = 2>Tiri Salvezza</th></tr>
					[r: strTSTabella]
				</table>
				
				<!-- Tabella Resistenze -->
				<table id="tabella_resistenze" style="border-collapse:collapse;">
					<tr class='genericTable'> <th colspan = 2>Resistenze</th></tr>
					[r: strResistenzeTabella]
				</table>
			</div>
		</div>
	</div>

	<!-- Altri Dettagli -->
	<div class="sectionbox">
		<a href="#"  onclick="toggle_and_save('dettagli_aggiuntivi');" class="sectionTitle">Altri Dettagli</a>
		<div id="dettagli_aggiuntivi" style="[r:sDettagliDisplay]; margin-top: 0.75rem;">
			<div style="display:flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center;">
				<div>
					<table class="center">
						<thead>
							<tr class="genericTable">
								<th colspan=2>Modificatori</th>
							</tr>
						</thead>
						<tbody>
							<tr class="evenRow">
								<td class="description">
									<a href="macro://utility/infoDialog@lib:it.aldinucci.piero.bed.maptool.ruleset//Impersonated?MDI">MDI</a>
								</td>
								[h, macro("core/getMDIPerc@this"): source]
								<td class="table-data">[r: round(calcPercentMod(macro.return)*100,1)+"%"]</td>
							</tr>
							<tr class="oddRow">
								<td class="description">
									<a href="macro://utility/infoDialog@lib:it.aldinucci.piero.bed.maptool.ruleset//Impersonated?MDR">MDR</a>
								</td>
								<td class="table-data">[r: round(calcPercentMod(Mod_Danno_in)*100,1)+"%"]</td>
							</tr>
							<tr class="evenRow">
								<td class="description">
									<a href="macro://utility/infoDialog@lib:it.aldinucci.piero.bed.maptool.ruleset//Impersonated?MCG">MCG</a>
								</td>
								[h, macro("core/getMCGPerc@this"): source]
								<td class="table-data">[r: round(calcPercentMod(macro.return)*100,1)+"%"]</td>
							</tr>
							<tr class="oddRow">
								<td class="description">
									<a href="macro://utility/infoDialog@lib:it.aldinucci.piero.bed.maptool.ruleset//Impersonated?MCR">MCR</a>
								</td>
								<td class="table-data">[r: round(calcPercentMod(Mod_Cura_in)*100,1)+"%"]</td>
							</tr>
							<tr class="evenRow">
								<td class="description">Tempo</td>
								<td class="table-data">[r: round(calcPercentMod(-getVA(source)/100)*100,1)+"%"]</td>
							</tr>
							<!-- Not useful
							<tr class="oddRow" title="Fattore Rigenerazione Mana">
								<td class="description">
									<a href="macro://utility/infoDialog@lib:it.aldinucci.piero.bed.maptool.ruleset//Impersonated?FRM">FRM</a>
								</td>
								<td class="table-data">[r: round(getFRM(source)*100,1)+"%"]</td>
							</tr>
							-->
						</tbody>		
					</table>
				</div>
				<div>
					<table class="center" style="width:100%">
						<thead>
							<tr class="genericTable">
								<th colspan=2>Riposo Breve</th>
							</tr>
						</thead>
						<tbody>
							<tr class="evenRow">
								<td class="description">Mana</td>
								[h, macro("mobs/getManaRiposoBreve@this"): json.append(source,"useFRM")]
								<td class="table-data">[r: macro.return]</td>
							</tr>
							<tr class="oddRow">
								<td class="description">PF</td>
								[h, macro("mobs/getPFRiposoBreve@this"): source]
								<td class="table-data">[r: macro.return]</td>
							</tr>
							<tr class="evenRow">
								<td class="description">Rimasti</td>
								[h, macro("mobs/getNumRiposoBreve@this"): source]
								<td class="table-data">[r: macro.return]</td>
							</tr>							
						</tbody>		
					</table>
					<table class="center" style="width:100%; margin-top:1rem;">
						<thead>
							<tr class="genericTable">
								<th colspan=2>Riposo Lungo</th>
							</tr>
						</thead>
						<tbody>
							<tr class="evenRow">
								<td class="description">PV</td>
								[h, macro("mobs/getPVRiposoLungo@this"): source]
								<td class="table-data">[r: macro.return]</td>
							</tr>
						</tbody>		
					</table>
				</div>
				<div>
					<table class="center">
						<thead>
							<tr class="genericTable">
								<th colspan=2>Azioni e Poteri</th>
							</tr>
						</thead>
						<tbody>
							<tr class="evenRow" title="Il tiro iniziativa di effettua all'inizio di ogni round">
								<td class="description">Iniziativa</td>
								<td class="table-data">[r: strformat("1d24%+d",Tiro_Iniziativa)]</td>
							</tr>
							<tr class="oddRow" title="Tempo richeisto per eseguire un'azione di Movimento">
								<td class="description">Tempo Mov.</td>
								<td class="table-data">[r: getMoveTime(source)]</td>
							</tr>
							<tr class="evenRow" title="La CD dell'avversario per inrrompere un potere">
								<td class="description">Concentrazione</td>
								<td class="table-data">[r: getConcentrazionePoteri(source)]</td>
							</tr>
							<tr class="oddRow" title="Il tiro per interrompere un potere di un avversario">
								<td class="description">Perturbazione</td>
								<td class="table-data">[r: strformat("1d100%+d",getPerturbazionePoteri(source))]</td>
							</tr>
						</tbody>		
					</table>
				</div>
			</div>
		</div>
	</div>

	<!-- Tabella Capacità -->

	<div class="sectionbox">
		[h, macro("core/getListaCapacita@this"): 0]
		[h: listCap = macro.return]
		<form method="json" id="form-capacita" action   = '[r: macroLinkText("gui/rollCapacita@lib:it.aldinucci.piero.bed.maptool.ruleset")]'>
		<div class="sectionTitle">Capacità</div>
		<div style="display:flex; align-items:center; justify-content:center; font-size:95%">
			<label style="margin-right:5px;">Tiro segreto</label><input type="checkbox" name="bSecretRoll" value=1>
			<label style="margin-left:10px; margin-right:5px;">Mod. Circostanza</label><input type="text" name="modCircostanza" style="width:2em;"/>
		</div>
		<table class="center" >
			<thead>
				<tr class="genericTable"> 
					<th class="tabHeaderLink" colspan=4>[r:sGradoModLink]</th>
				</tr>
			</thead>
			<tbody>
			[h: sClassType = "oddRow"]
			[h: iCount = floor(listCount(listCap)/2)]
			[r, for (i,0,iCount,1,""), code:{
				[h: sCap = listGet(listCap,i)]
				[h: sClassType = if(sClassType=="oddRow","evenRow","oddRow")]
				<tr class="[r: sClassType]">
					<td class="description"><a href="#" onclick="rollCapacita('[r: sCap]')">[r: sCap]</a></td>
					<td class="table-data" style="padding-right:10px">[r: getProperty(sCap)]</td>
					[h: sCap = listGet(listCap,i+iCount)]
					<td class="description" style="border-left:1px solid; padding-left:10px;"><a href="#" onclick="rollCapacita('[r: sCap]')">[r: sCap]</a></td>
					<td class="table-data">[r: getProperty(sCap)]</td>
				</tr>
			}]
			</tbody>
		</table>
		<input type="hidden" name="target" value="[r:source]"/>
		<input type="hidden" id="input-capacita" name="capacita" value="" />
		</form>
	</div>

</div>
	<script type="text/javascript">
	[r: "
	    function toggle_and_save(id) {
	        var eDisplay = document.getElementById(id);
	        var eSave = document.getElementById('id_component_value');
	        var eComponente = document.getElementById('id_component_field');
	        if (eDisplay.style.display == 'block'){
	            eSave.setAttribute('value','display:none;');
	            eDisplay.style.display = 'none';
	        }
	        else{
	            eSave.setAttribute('value','display:block;');
	            eDisplay.style.display = 'block';
	        }
	        eComponente.setAttribute('value',id);
	        var eForm = document.getElementById('savePreferenceForm');
	        eForm.submit();
	    }
	
	    function toggle_difesa(){
	    	var eLabel = document.getElementById('tipo_difesa_usata');
	    	if (eLabel.innerHTML == 'Schivare')
	    		eLabel.innerHTML = 'Parare';
	    	else {
	        	if (eLabel.innerHTML == 'Parare')
		    		eLabel.innerHTML = 'Auto';
		    	else
	   	    		eLabel.innerHTML = 'Schivare';
	    	}
	 	    document.getElementById('id_component_value').setAttribute('value',eLabel.innerHTML);
	        document.getElementById('id_component_field').setAttribute('value','difesa_fisica_in_uso');
	    	document.getElementById('id_group_type').setAttribute('value','Combattimento');
			document.getElementById('savePreferenceForm').submit();
	    }

	    function rollCapacita(sCap){
	    	document.getElementById('input-capacita').setAttribute('value',sCap);
	    	document.getElementById('form-capacita').submit();
	    }
	"]
</script>
</body>
</html>
}]