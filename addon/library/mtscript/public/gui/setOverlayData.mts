[h: sKey = arg(0)]
[h: oData = arg(1)]

[h: oOverlayData = getDatiGiocatore("Overlay")]
[h: oOverlayData = json.set(oOverlayData, sKey, oData)]
[h: setDatiGiocatore("Overlay", oOverlayData)]