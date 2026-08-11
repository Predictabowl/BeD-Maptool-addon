<!-- DEPRECATED -->
[h: oToken = arg(0)]

[h, macro("combat/getStile@this"): oToken]
[h: sStileOld = macro.return]

[h, macro("combat/getStileList@this"):0]
[h: sListaStili = macro.return]

[h: sReturn = strformat("
	<div class='div-stile titleFont' onclick='toggle_show_list();' style='cursor:grabbing;' id='currentStyleId' data-stile='%{sStileOld}'>
		%{sStileOld}
	</div>
	<div id='dropdown-list' onclick='toggle_show_list();' class='div-list-window' style='display:none; margin-left:auto; margin-right:auto; left:390; right:60;'>
")]


[h, foreach(sKey, sListaStili), code:{
	[sLink = macroLinkText("gui/changeStileFromDialog@lib:it.aldinucci.piero.bed.maptool.ruleset","none",json.append(oToken,sKey))]
	[sReturn = strformat("%{sReturn}
				<a href='%{sLink}'><div class='div-list-item titleFont'>%{sKey}</div></a>
	")]
}]

[h: sReturn = strformat("%{sReturn}</div>")]

[r: sReturn]