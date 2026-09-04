function getDmgTypeIcon(dmgType) {
    switch(dmgType){
        case "T":
            return "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/slash_icon.png";
        case "B":
            return "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/crush_icon.png";
        case "P":
            return "lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/pierce_icon.png";
        default:
            return null;
    }
}