[h: oItem = arg(0)]

[h, if(json.isEmpty(oItem)): return(0, "")]

[h, macro("gui/buildDisplayDataFromItem@this"): oItem]
[h: displayItem = macro.return]

<img class="item-icon" src="[r: json.path.read(displayItem, "displayData.iconAsset")]"
        alt="[r: json.get(displayItem, 'nome')]"
        data-jsonoggetto='[r: displayItem]' ondragstart='initDrag(this)'
        onclick="openItemDock(this)" onmouseenter="showSlotTooltip(this)" onmouseleave="hideSlotTooltip()"
        ondragend="handleDragEnd(this)">