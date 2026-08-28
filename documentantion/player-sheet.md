
I write this in english, but the UI MUST be in Italian.
Each value can be abbreviated only if necessary for better visualization. This document don't explain what they do, how to use them or how to calculate them, this is strictly an UI design.
We can split it into sections.

## Equipment/Gear
this one right now is a separate dialog and I think it should stay like this. So unless it make sense to put it toghter with combat stats I don'tthink it should be done.

## Combat stats

Combat stats are the values relative to combat, these are the build of the player sheet, and a player will need it for reference.


### Weapons

There can be 1 or 2 weapons equipped, depending on the style of combat, the stats can be dependant of the weapon or common to both weapons (if more than one). Right now the system doesn't support more than 2 weapon equipped, and it never was a problem so far, but maybe one day will think a mechanic that would work with  monsters  with many limbs or different attacks, but as of now is ruled out.

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

#### Offensive Not weapon dependant

* VA or Velocità Azioni : integer - it translates in a percentage (with dimishing returns) of time needed, so for example VA 6 qould be 94% time, while VA 53 -> 49.7% time. It would be nice to show the percentage as well since is hard to calculate once you reach soft cap, we can put it as a separate derivate stats or, somehow, near the VA value.
* Mancare: percentage
* Stile : enum [Arma e Scudo, Arma a 2 mani, Arma e mano libera, Due Armi, Arma a distanza]

Not reported right now because it's too technical and players don't really need to see it unless they search for it:

* Moltiplicatore: decimal number, with 0.5 increments (1.5 or 2 for players), used to determine bonus damage as (LA - LD) * Moltiplicatore

### Magic / Technique stats
This is a literal table as it report values for each school the char is trained to, one value is wepapon independent:

* LMM : Livello Maestria Magica, this is the level the player is trained in each school - integer

Then we HAD weapon dependant, these are now also displayed in each spell description:

* LL : Livello Lancio, which is the final value of power of each school and is derived from LMM (school dependant) + general bonus LL + LL bonus given by the wielded weapon (the last 2 are school independent, but since ) so it's dependant of LMM and the weapon - integer
* CD: same context as LL - integer

Given that you need to check the spell description to see the school of the spell, and thus which value for LL and CD to use, and that these values are only useful for spells (powers and techniques are basically spells with diferent names) I think there's no much point to still show them in the player sheet, unless we have room to spare.

### Defenses
Physical defenses

* LD [T] : Livello Difesa - percentage
* LD [B]
* LD [P]
* Schivare : percentage
* Parare: Percentage

Tiri Salvezza
* Riflessi
* Tempra
* Volontà

Resistenze
* Acqua
* Aria
* Fuoco
* Terra
* Arcano
* Mentale
* Negativo
* Positivo
* Fisico

### Modifiers

* MDI : Modificatore Danno Inflitto - percentage
* MDR : Modificatore Danno Ricevuto - percentage
* MCG : Modificatore Cura Generate - percentage
* MCR : Modificatore Cura Ricevuta - percentage

### General Stats

* Iniziativa : string like `1d24+29`
* Tempo Movimento : integer (like Tempo Attacco), this one maybe can be abbreviated if too long
* Concentrazione : integer - target value to interrupt the player when he'scasting a spell
* Perturbazione : string like `1d100+6` - roll to use against enemies `Concentrazione`

## Out Combat Stats
Good to show even if not used directly in combat, these are values for `Riposo Breve`:

* Mana : integer - how much mana the PC recover with a short rest
* PF : integer - how much Punti Fatica the PC recover with a short rest
* Rimanenti : how many short rest the PC can still do today.

and `Riposo Lungo`:

* PV : how many Punti Vita the PC recover with a long rest - integer

a long rest restores all short rests daily usage and recover all mana and PF, plus few Hit points.

### Capacità (skills)

These are exclusively used out of combat, plus, since these need a roll to work, it would be nice to be able to roll one just by clicking.
In the previous sheet this was along all the other previous stuff, but I do think that would be better to put them in a separate frame since are often used out of combat and would be annoying to bring out the whole sheet everytime a player wanna roll a skill. I think is better to have a frame dedicated that can be easily hidden or closed by the player while in combat. Any opinion?
It would also be nice to have a easy way to add modifier before the roll (Modificatore di Circostanza), maybe just one is enough and is applied to the next skill roll made. And also the possibility to toggle secret/public rolls, so to only show to the DM or to both the player and DM (is never show to everyone, this way if a player want it can tell them directly or bluff if he wants). Roll result will be show in chat, I don't know if can also be show somewhere in the frame and if would be nice to do so.

The Capacità are 12 and all are integer values representing the modifier to the roll:
Acrobazia,Arcanologia,Atletica,Autorita,Erudizione,Fitness,Furtivita,Intrattenimento,Lotta,Manualita,Medicina,Percezione,Perspicacia,Persuasione,Resilienza,Sociologia,Sopravvivenza,Tenacia

