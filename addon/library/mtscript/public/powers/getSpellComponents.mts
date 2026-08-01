[h: source = json.get(macro.args,0)]
[h: spellName = json.get(macro.args,1)]

[h: sComponenti =getLibProperty("componenti",spellName)]

<!-- Qua da mettere il controllo su vocalizzare o altri effetti che toglono o aggiungono componenti -->

[h: macro.return = sComponenti]