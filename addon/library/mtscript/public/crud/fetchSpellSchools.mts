[h: allSpells = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/spells/spells.json")]
[h: macro.return = json.unique(json.path.read(allSpells, ".properties.scuola"))]