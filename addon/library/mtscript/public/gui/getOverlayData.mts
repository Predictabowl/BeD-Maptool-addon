[h: sKey = arg(0)]

[h: oOverlayData = getDatiGiocatore("Overlay")]
[h: macro.return = json.get(oOverlayData, sKey)]
