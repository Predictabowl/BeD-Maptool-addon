[h: sFile = arg(0)]
[h, if(sFile == ""): sFile = "public/db/sortilegi/sortilegi.json"]
[h: textData = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", sFile)]
[h: macro.return = textData]