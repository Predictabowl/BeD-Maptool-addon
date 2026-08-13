[h: oToken = arg(0)]

<!-- TODO - DEPRECATED? -->
[h: sReturn = strformat("
	<div class='overlay-list-trigger'>
	<a onclick='toggle_show_list();' href='#'><img src='%s' class='pulsanteTondo' title='Altre Azioni'/>
	</a>
	<div id='dropdown-list' onclick='toggle_show_list();' class='overlay-list-window' style='margin-left:auto; margin-right:auto; left:390; right:60;'>",
"lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/other_actions.png")]


[h: sAlzarsi = macroLinkText("mobs/iniziaAlzarsi@lib:it.aldinucci.piero.bed.maptool.ruleset","none",oToken)]
[h: sReturn = strformat("%{sReturn}
				<a href='%{sAlzarsi}'><div class='div-list-item'>Alzarsi</div></a>")]

[h: sMovTattico = macroLinkText("movement/toggleMovTattico@lib:it.aldinucci.piero.bed.maptool.ruleset","none",oToken)]
[h: sReturn = strformat("%{sReturn}
				<a href='%{sMovTattico}'><div class='div-list-item'>Movimento Tattico</div></a>")]

[h: sNascondersi = macroLinkText("mobs/iniziaNascondersi@lib:it.aldinucci.piero.bed.maptool.ruleset","none",oToken)]
[h: sReturn = strformat("%{sReturn}
				<a href='%{sNascondersi}'><div class='div-list-item'>Nascondersi</div></a>")]								


[h: sReturn = strformat("%{sReturn}</div></div>")]

[r: sReturn]