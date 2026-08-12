<!-- Deprecated -->
[h: target = macro.args]

[macro("gui/blockIfNotOwner@this"):target]

[h: oAbilita = getProperty("Abilita_Classe",target)]
[macro("utility/jsonObjToList@this"):oAbilita]
[h: oListAb = macro.return]
[h: sThis = getMacroLocation()]

[Dialog("FrameManager"):{
<html>
<head>
    <link rel="stylesheet" type="text/css" href="CharSheet_css@[r: getMacroLocation()]">>
    <title> Scheda PG </title>
</head>
<body>
<h2 class="dataCentered">  [r: getName(target)] </h2>
<h3> Finestre di Informazione </h3>
<ul>
<li> [r: macrolink("Valori Attacco","gui/ApriScheda@" + sThis,"none",target)] </li>
<li> [r: macrolink("Livelli di Lancio","gui/MostraPoteri@" + sThis,"none",target)] </li>
<li> [r: macrolink("Lista Poteri","gui/listaPoteriMem@" + sThis,"none",target)] </li>
<li> [r: macrolink("Capacita Generali","gui/SchedaCapacita@" + sThis,"none",target)] </li>
<li> [r: macrolink("Dichiara Azioni","gui/FrameIniziativa@" + sThis,"none",target)] </li>
<li> [r: macrolink("Gestione Risorse","gui/ResourcesFrame@" + sThis,"none",target)] </li>
<li> [r: macrolink("Abilit&agrave; di Classe","gui/listaAbilitaClasse@" + sThis,"none",target)] </li>
<li> [r: macrolink("Apri Tutto","gui/ApriTuttoInfo@" + sThis,"none",target)] </li>
</ul>
<h3> Finestre di Modifica </h3>
<ul>
<li> [r: macrolink("LMM","gui/inputLMM@" + sThis,"none",target)] </li>
<li> [r: macrolink("Capacita Generali","gui/ModificaCapacita@" + sThis,"none",target)] </li>
<li> [r: macrolink("Ordina Abilit&agrave; di Classe","gui/ordinaListDialog@" + sThis,"none",json.append(target,oListAb,"gui/closeOrdinaAbilita@this"))]  </li>
<li> [r: macrolink("Nascondi Abilit&agrave; di Classe","gui/dialogNascondiAbilita@" + sThis,"none",target)]  </li>
</ul>
</body>
</html>
}]