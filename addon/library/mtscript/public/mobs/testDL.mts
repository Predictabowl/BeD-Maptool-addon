[h: source = arg(0)]
[h: spellName = arg(1)]

[h:broadcast(strformat("DEPRECATED: %s@%s",getMacroName(),getMacroLocation()))]

[h: iDL = getDL(spellName)]
[h: iControllo = getControlloPoteri(source)]
[h: iRoll = roll(1,20)]
[h, if(iRoll + iControllo >= iDL): bReturn = 1; bReturn = 0]

[h: sMsg = strformat("Tiro Controllo Poteri:<span title='%{iRoll}'>1d20</span>%+d => %{iRoll}%+d = %d [%{iDL}]", iControllo, iControllo, iControllo + iRoll)]
[h: setMessaggio(source,"ControlloPoteri",sMsg)]

[h: switchToken(source)]
[h: Lista_Dati = setStrProp(Lista_Dati,"ultimoTestDL",bReturn)]

[h: macro.return = bReturn]