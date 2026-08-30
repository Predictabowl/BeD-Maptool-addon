<!-- DEPRECATED -->
[h: source = arg(0)]

[h: switchToken(source)]


[h: arrayTabella = ""]


[h: element = json.set("","value","Acqua","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",getResistance(json.set("", "target", source, "elemento", "Acqua")),"opzioni","class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: element = json.set("","value","Aria","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",getResistance(json.set("", "target", source, "elemento", "Aria")),"opzioni","class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: element = json.set("","value","Fuoco","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",getResistance(json.set("", "target", source, "elemento", "Fuoco")),"opzioni","class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: element = json.set("","value","Terra","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",getResistance(json.set("", "target", source, "elemento", "Terra")),"opzioni","class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: element = json.set("","value","Arcano","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",getResistance(json.set("", "target", source, "elemento", "Arcano")),"opzioni","class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: element = json.set("","value","Mentale","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",getResistance(json.set("", "target", source, "elemento", "Mentale")),"opzioni","class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: element = json.set("","value","Negativo","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",getResistance(json.set("", "target", source, "elemento", "Negativo")),"opzioni","class='table-data'")]
[h: element = json.set("","value",getProperty("Res_Negativo"),"opzioni","class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: element = json.set("","value","Positivo","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",getResistance(json.set("", "target", source, "elemento", "Positivo")),"opzioni","class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: element = json.set("","value","Fisico","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",getResistance(json.set("", "target", source, "elemento", "Fisico")),"opzioni","class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: macro.return = arrayTabella]