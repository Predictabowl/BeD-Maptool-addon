<!-- TODO - check if it's used -->
[h: oArmi = getLibProperty("Armature_Json",getMacroLocation())]

[h: lArmi = json.fields(oArmi)]
[h: macro.return = listSort(lArmi,"A+")]
