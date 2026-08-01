[h: target = json.get(macro.args,0)]

[h, if(getOverride(target,"InventarioBloccato")), code:{
	[broadcast("Non è possibile accedere all'inventario in questo momento",getPlayerName())]
	[return(0,0)]
}]

[h: switchToken(target)]

[h: sDialog = "EquipConsumabili"]

[macro("mobs/getNumSlotVeloci@this"): target]
[h: iSlotTotali = macro.return]

[h: iNumSlots = countSlotVeloceItems(target)]
[h: sSlotVeloci = "<select size=20 id='id-slotVeloci'>"]
[h, for(i,0,iNumSlots,1), CODE:{
	[h: oOggetto = getFromSlotVeloce(target,i)]
	[h: iLiv = json.get(oOggetto,"livello")]
	[h: spellName = json.get(oOggetto,"libName")]
	[h: sNome = getLibProperty("nome_decorativo",spellName)]
	
	[sSlotVeloci = strformat("%{sSlotVeloci}<option value='%{i}'>
		%{sNome}, Liv: %{iLiv}
		</option>")]
}]
[h: sSlotVeloci = strformat("%{sSlotVeloci}</select>")]

[h: sConsumabili = "<select size='20' id='id-consumabili'>"]
[h: iNumItems = json.length(Consumabili)]
[h, for(i,0,iNumItems,1), code:{
	[oItem = json.get(Consumabili,i)]
	[h: iLiv = json.get(oItem,"livello")]
	[h: spellName = json.get(oItem,"libName")]
	[h: sNome = getLibProperty("nome_decorativo",spellName)]
	
	[sConsumabili = strformat("%{sConsumabili}<option value='%{i}'>
		%{sNome}, Liv: %{iLiv}
		</option>")]
}]
[h: sConsumabili = strformat("%{sConsumabili}</select>")]


[macro("mobs/getNumSlotVeloci@this"): target]
[h: iSlotMax = macro.return]
[h: iSlotUsati = countSlotVeloceItems(target)]
[h, if(iSlotUsati > iSlotMax): sSlotClass = "class='warning'"; sSlotClass = ""]

[dialog5(sDialog,strformat("temporary=1; width=500; height=500; closebutton=0")):{
	<html>
	<script>
	[r:"
		function toConsumabili(){
			var domSlots = document.getElementById('id-slotVeloci');
			var index = domSlots.selectedIndex;
			if (index<0) return false;
			document.getElementById('item-index').setAttribute('value',index);
			document.getElementById('toSlot').setAttribute('value',0);
			document.getElementById('form_update_items').submit();
		}

		function toSlotVeloci(){
			var domConsum = document.getElementById('id-consumabili');
			var index = domConsum.selectedIndex;
			if (index<0) return false;
			document.getElementById('item-index').setAttribute('value',index);
			document.getElementById('toSlot').setAttribute('value',1);
			document.getElementById('form_update_items').submit();
		}

		function confirm(){
			var domSlots = document.getElementById('id-slotVeloci');
			var domConsum = document.getElementById('id-consumabili');
		}
	"]
	</script>
	<head> 
	<link rel="stylesheet" type="text/css" href="lib://Scheda/macro/CharSheet5_css">
	<title> Consumabili </title> 
	</head>
	<body  align="center">
		<div style="display:grid; grid-template-columns: auto auto auto; justify-items:center; align-items:center; gap: 5px;">
			<div>
				<div>Slot Veloci: [r: iNumSlots]/[r: iSlotTotali]</div>
				[r: sSlotVeloci]
			</div>
			<div>
				<div>
					<button type="button" onclick="toSlotVeloci();"><</button>
				</div>
				<div>
					<button type="button" onclick="toConsumabili();">></button>
				</div>
			</div>
			<div>
				<div>Zaino</div>
				[r: sConsumabili]
			</div>
		</div>
		
		<form id="form_update_items" method="json" action="[r:macroLinkText("gui/updateSlotVeloci@this")]">
		<input type='hidden' name='source' value='[r:target]'/>
		<input id='toSlot' type='hidden' name='toSlot' value=''/>
		<input id='item-index' type='hidden' name='item-index' value=''/>		
		</form>

		<form method="json" action="[r:macroLinkText("gui/transitionDialogSlotVeloci@this")]">
		<input type='hidden' name='source' value='[r:target]'/>
		<input type='hidden' name='toSlots' value='toSlots'/>
		<input type="submit" value='Indietro'/>		
		</form>
	
	</body>
	</html>
}]