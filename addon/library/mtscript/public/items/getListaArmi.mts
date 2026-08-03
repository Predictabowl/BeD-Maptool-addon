<!-- TODO - check if it's used -->
[h: oArmi = getLibProperty("Armi_Json",getMacroLocation())]

[macro("items/sortJson@this"): json.append(oArmi,"nome")]

