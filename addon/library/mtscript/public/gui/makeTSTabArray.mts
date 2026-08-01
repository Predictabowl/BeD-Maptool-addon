[h: source = arg(0)]

[h: switchToken(source)]


[h: arrayTabella = ""]

[h: element = json.set("","value","Riflessi","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",getTSRiflessi(source),"opzioni","class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: element = json.set("","value","Tempra","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",getTSTempra(source),"opzioni","class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: element = json.set("","value","Volontà","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",getTSVolonta(source),"opzioni","class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]


[h: macro.return = arrayTabella]