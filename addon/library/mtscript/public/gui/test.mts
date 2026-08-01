[h: oToken = getImpersonated()]
[h: sFrame = "TestFrame"]


[frame5(sFrame):{
<html>
<head> 
<link rel="stylesheet" type="text/css" href="CharSheet5_css@[r: getMacroLocation()]">


<form name="risolviAzione" method="json" action="[r:macroLinkText("gui/pulsantiPoteri@this")]">
<input type='image' name='Azione' value='Azione' src='[r: getImage("Image:PulsanteRosso")]' class='image' title='Risolvi azione'/>
<input type='image' name='Attacca' value='Attacca' src='[r: getImage("Image:PulsanteAttacco")]' class='image' title='Attacco base'/>
<input type='image' name='SlotRapidi' value='SlotRapidi' src='[r: getImage("Image:PulsanteInventario")]' class='image' title='Slot Rapidi'/>
<input type="image" name="SelBersagli" value="SelBersagli" src='[r: getImage("Image:TargetingIcon")]' class='image' title='Auto selezione bersagli'/>
<input type='image' name='Aspettare' value='Aspettare' src='[r: getImage("Image:PulsanteAspettare")]' class='image' title='Aspetta'/>
<input type='image' name='Interrompi' value='Interrompi' src='[r: getImage("Image:PulsanteStop")]' class='image' title='Interrompi azione'/>
<input type="hidden" name="target" value="[r: oToken]"/>
<input type="hidden" name="frameName" value="[r: sFrame]"/>
</form>

</body>
</html>
}]
