# Item info Dialog

This is for a RPG in italian, you can reply in italian or english I don't care, but what we design will contain only italian inside.

Let's design a dialog (or whatever element is more appropriate to use) to show a single RPG item.
This dialog will be use as link in chat (clicking the link will open this dialog), and probably will be used also in the charatecter equipment screen. For now let's design a standalon to open when cliked in chat, later will see if I can use it inside a page.

We'll make a exmaple html, that should work standalone so I can see it and adjust it before i plug in the actual values. PAge will be create with dynamic values of course.

It will use the basic css:

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Gabriela&family=Homemade+Apple&family=Macondo&family=New+Rocker&display=swap" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/GlobalCss.css?cachelib=true">

new fonts can be added if needed, but I don't think it will.

## Infos to show
I'll list all the info to show, in no particular order, so these must be arranged in an appealing way, and it's not needed to be show in the order i present them.

The dialog should show these infos about the item:

* name
* possibly its icon, but it's optional, if we put the icon let be know that the source icon is square 64x64 px png, and it have included a border (dark gray)
* Ingombro: integer - can be missing, some items simply don't have any ingombro (like accessories)

### Only if it's a weapon

at least one of these, sometimes both

* 1 handed damage: if the value is 0 or "" it means it cannot be use 1 handed
* 2 handed damage: if the value is 0 or "" it means it cannot be use 2 handed

near every damage there will be icons for the damage type, at least 1, sometimes 2, very very rarely 3. These icons are natively png of 18x18 pixels.
here there are, in order of appereance:
src="../../addon/library/public/icons/gui/slash_icon.png"
src="../../addon/library/public/icons/gui/crush_icon.png"
src="../../addon/library/public/icons/gui/pierce_icon.png"

#### Other weapon info

* Caratteristica Arma: choosen between Agile, Massiccia, Bilanciata, Mana
* Portata: integer

### Weapon Attributes

Items attributes are modifiers applied only when actively attaccking with the weapon, like Critico, LA, Potenza Critico, CD...
The list is artibtraty long and all are {key:value}
Can be empty

### Other Attributes

A list of attributes that apply passively when wearing the item, is exactly like Weapon Attributes {key:value}, but it should use something to differentiate them, possibly a different color.
Can be Empty

### Runes

The items can have runes that let him cast spell with a limited amount of charges. Each rune will have:

* A spell icon, the same icon type used by item themselves (64x64 square), of course will need to be less relevant that the one of the ojbect if present.
* Spell name: this will be a link, clicking it will open the spell detail panel, which already exists, so in the example there's no need to be a functioning link
* Livello: integer
* Cariche: the remaining charges and the maximum charges. If it have maximum charges it recharge itself every day, if the maximum is 0 it means it never recharges, so maybe maximum can be omitted?
  
### Description

The description is entirely optional, and can have 2 sections (both optional), both come in arrays, with a paragraph for each element.
The sections are
* flavour: a flavour phrase or text generally will use --font-book font
* description: more grounded description, standard font.
