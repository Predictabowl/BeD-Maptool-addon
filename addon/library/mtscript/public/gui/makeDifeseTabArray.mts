[h: source = arg(0)]

[h: switchToken(source)]


[h: arrayTabella = ""]

[h: sSlashDmg = strformat("LD <img src='%s'  title='Taglio'></img>","lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/slash_icon.png")]
[h: element = json.set("","value",sSlashDmg,"opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value", getLD(source, "T"),"opzioni","class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: sCrushDmg = strformat("LD <img src='%s' title='Botta'></img>","lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/crush_icon.png")]
[h: element = json.set("","value", sCrushDmg,"opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",getLD(source, "B"),"opzioni","class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: sPierceDmg = strformat("LD <img src='%s'  title='Punta'></img>","lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/pierce_icon.png")]
[h: element = json.set("","value", sPierceDmg,"opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",getLD(source, "P"),"opzioni","class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]


[h: element = json.set("","value","Schivare &nbsp;","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",strformat("%s%%",round(getSchivareProb(getSchivare(source))*100,1)),"opzioni","class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: element = json.set("","value","Parare","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",strformat("%s%%",round(getParareProb(getParare(source))*100,1)),"opzioni","class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]


[h: macro.return = arrayTabella]