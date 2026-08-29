
# Player Combat Sheet

I write this in english, but the UI MUST be in Italian.
Each value can be abbreviated only if necessary for better visualization. This document don't explain what they do, how to use them or how to calculate them, this is strictly an UI design.
We can split it into sections.

On the main page we'll need the player name and its portrait, which is round.

All the chapters contains stats that are related, but this doesn't necessarily translate in a panel for each chapter. Also is possible to move a stat from one panel to another if suit it better.

existing head links
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Gabriela&family=New+Rocker&family=Macondo&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../addon/library/public/css/GlobalCss.css">

## Combat stats

Combat stats are the values relative to combat, these are the build of the player sheet, and a player will need it for reference.

### Weapons

There can be 1 or 2 weapons equipped, depending on the style of combat, the stats can be dependant of the weapon or common to both weapons (if more than one). Right now the system doesn't support more than 2 weapon equipped, and it never was a problem so far, but maybe one day will think a mechanic that would work with  monsters  with many limbs or different attacks, but as of now is ruled out.

We can choose to show them both at the same time or make a toggle

#### Weapon dependant

these vary depending on the equipped weapon, and so they should have a space to report them relative to each weapon:

* Nome : Weapon's name - string
* Danni : weapon's damage - string with near 1 or 2 small icons that represent the damage type it inflicts (Botta, Taglio, Punta). I have the icons already so for example somthink like  `4d6+1 [T][P]` where [T] is the icon for Taglio and [P] for punta [last one would be [B]].
* LA : Livello Attacco, integer
* Penetrazione : integer
* Crit or Critico: we can use both names, percentage
* PCrit or Potenza Critico: percentage
* LA Spalle: integer
* Tempo Attacco: integer
* Portata: integer
* PA Attacco: Punti Azione use by attack - integer

A player can have equipped: a single 2 Handed weapon, 2 weapons, 1 weapon plus something in the second hand, like throwing weapon or a shield or nothing at all. Shield doesn't have the above attack stats, it give passive bonuses plus other things.

The html icons can be linked for example as <img>
<img src="../../addon/library/public/icons/gui/slash_icon.png" alt="Taglio"> (this is red)
<img src="../../addon/library/public/icons/gui/pierce_icon.png" alt="Punta"> (this is green)
<img src="../../addon/library/public/icons/gui/crush_icon.png" alt="Botta"> (this is light blue)

All colors are quite visible both in dark and light mode.

### Not weapon dependant

This must go with weapons or player name

* Stile : enum [Arma e Scudo, Arma a 2 mani, Arma e mano libera, Due Armi, Arma a distanza]

Arma e Scudo: 1 weapon and 1 shield
Arma 2 mani, Arma a distanza: Requeres both hands, only a single weapons nothing in second hand, so it should not be shown
Due Armi, Arma e Mano libera: these could have have a 2nd weapon in the offhand, Due Armi is 2 melee weapons, while Arma e Mano libera let the player use a throwing weapons or a very small range weapon in the offhand.

### Influence actions

These are not strictly offensive, because they apply to almost every action, for this reason they could be moved out from weapons and into general, but are very important also for attacks, so I don't know where is the place to put them for a good visibility

* VA or Velocità Azioni : integer - it translates in a percentage (with dimishing returns) of time needed, so for example VA 6 qould be 94% time, while VA 53 -> 49.7% time. It would be nice to show the percentage as well since is hard to calculate once you reach soft cap, we can put it as a separate derivate stats or, somehow, near the VA value.
* Mancare: percentage

Not reported right now because it's too technical and players don't really need to see it unless they search for it:

* Moltiplicatore: decimal number, with 0.5 increments (1.5 or 2 for players), used to determine bonus damage as (LA - LD) * Moltiplicatore
l number, with 0.5 increments (1.5 or 2 for players), used to determine bonus damage as (LA - LD) * Moltiplicatore

## Powers

This is a literal table as it report values for each school the char is trained to, one value is wepapon independent:

* LMM : Livello Maestria Magica, this is the level the player is trained in each school - integer

The following are weapon dependant, meaning it would be needed a value for each weapon and for each school, making into a natural table:

* LL : Livello Lancio, which is the final value of power of each school and is derived from LMM (school dependant) + general bonus LL + LL bonus given by the wielded weapon (the last 2 are school independent, but since ) so it's dependant of LMM and the weapon - integer
* CD: same context as LL - integer

The fact is that these are also displayed in each spell description, given that you need to check the spell description to see the school of the spell, and thus which value for LL and CD to use, and that these values are only useful for spells (powers and techniques are basically spells with diferent names) I think there's no much point to still show them in the player sheet, unless we have room to spare in the powers section.

## Defenses

I'll group them in subsections, but is not needed to split in the same wayi the sheet as well, so no need of titles and so on (unless it looks cool and there's space). The're divided because each group should be somehow an atomic unit, it would not be acceptable, for example, show LD[P] in a different place than others LDs, possible they should be in the same row/column

### LD (Livello Difesa)

Physical defenses, as always instead of the values in square brackets we'll have an icon (sse example).

* LD [T] : Livello Difesa - integer 
* LD [B]
* LD [P]

#### Mitigation

All these are at core integer values, but when making calculation they will be translated in percentages with a diminishing return formula, so it would be good to have both values so players can clearily see the corrispondence

* Schivare: Chance to avoid a "Material" attack
* Parare: Chance to reduce the effect of "Material" attack to 1/3 of it's original value
* Elusione: Chance to be completely missed by anything (it's added to the "Mancare" of the attacker and there's a single roll to see if it hits)

### Tiri Salvezza

All integers

* Riflessi
* Tempra
* Volontà

### Resistenze

All resistances are integers. Resistences are added to TS when resisting a power, matching the power element, and also will be used to calculated the LP (Livello Potenza) which LP = LL - Resistenza and is used to calculate the final damage of a power

* Acqua
* Aria
* Fuoco
* Terra
* Arcano
* Mentale
* Negativo
* Positivo
* Fisico

## General Stats

* Iniziativa : string like `1d24+29`
* Tempo Movimento : integer (like Tempo Attacco), this one maybe can be abbreviated if too long
* Concentrazione : integer - target value to interrupt the player when he'scasting a spell base value for lvl 1 char is is around 70 and it only increase from there
* Perturbazione : string like `1d100+6` - roll to use against enemies `Concentrazione`, base bonus is +2 for char lvl 1 and increase as fast as concentrazione (of course both depend on how the players spend their points)

### Modifiers

* MDI : Modificatore Danno Inflitto - percentage
* MDR : Modificatore Danno Ricevuto - percentage
* MCG : Modificatore Cura Generate - percentage
* MCR : Modificatore Cura Ricevuta - percentage

## Out Combat Stats

Good to show even if not used directly in combat, these are values for `Riposo Breve`:

* Mana : integer - how much mana the PC recover with a short rest
* PF : integer - how much Punti Fatica the PC recover with a short rest
* Rimanenti : how many short rest the PC can still do today.

and `Riposo Lungo`:

* PV : how many Punti Vita the PC recover with a long rest - integer

a long rest restores all short rests daily usage and recover all mana and PF, plus few Hit points.

## Caratteristiche (Core Stats)

These are the Core stats of the player, but should not be the first visible thing, because these are there only as reminder, since are used to calculate everything else BUT are never used directly, which mean that looking at them won't lead to any combat decision, thus I don't think they should be the first thing shown when the player sheet is opened. They could be needed for other decision (for example which weapon to equip, because different weapons use different core stats)

The core stats are 6 main, each one have 2 sub stats, plus there's a single Derived stats which depend on the class, but should:

### Main and sub stats

The sub stats are ALWAYS derived from their parent stat, they player can choose to put +1 on one, which means the other get -1. For example with Forza 8 a player can put +1 on Muscoli, this maes Muscoli 9 and Vigore 7.

* Forza
  * Muscoli
  * Vigore
* Destrezza
  * Precisione
  * Equilibrio
* Costituzione
  * Salute
  * Resistenza
* Intelligenza
  * Ragione
  * Conoscenza
* Saggezza
  * Volontà
  * Intuizione
* Carisma
  * Presenza
  * Risolutezza

### Derived stat

* Car. Mana : Caratteristica Mana, which is used by spell casters and is derived from main stats depending on the class.

For example a Mago Car. Mana is Intelligenza, and for a Stergone uses min(Carisma, Intelligenza)+2 
No need to write it down, just a space to visualize is enough.