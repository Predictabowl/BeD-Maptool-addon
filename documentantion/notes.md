# Dev Notes

## Macros

### Naming macros

Try to never ever name 2 macro with the same name even if they are in different folders, that would help a lot.
Right now there are duplicate names but these duplicates are all Deprecated, and should be checked and removed when possible.

### Accepting Spells from other addons

the macros `fetchSpellData` and `fetchConsumableData` are implemented to accept spells from other addons, but right now it won't work because the macro that launch the spell only check in it's own namespace. Maybe will be supported in the future.
Macros to check:

* `powers/iniziaSpellCast`
* `powers/callSpellEffect`
* `crud/getSpellAOE`

it should check the spellId and if it's a composite key (json object) should build the macro name from that.

The format should be consistent in other addons:
`powers/spells/<spellId>/spellEffect@lib:<namespace>`
while other macros used by the same spells all go inside the folder `powers/spells/<spellId>`

so a spellId from another Add-on would looks like

``` json
{
    "id": "<spellId>",
    "namespace": "<namespace>"
}
```

Same for the json file that contains spells data:  `public/db/spells/spells.json`
While this one could be passed as a parameter in the composite key, it costs nothing to keep the same structure and there's less clutter in the parameters and tokens.
