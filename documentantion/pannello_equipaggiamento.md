# Pannello Equipaggiamento

## Premessa

Bisogna considerare che sono in grado di:

* Chiamare una macro che risiede sul backend (Maptool) da jascript usando delle fetch
* Dal backend posso lanciare una funziona Javascript all'interno di frame o dialog (o anche overlay) conoscendo il nome del frame e della funzione (che in questo caso conosce sempre perché sono costanti). Passandogli anche parametri se necessario.

Questo vuol dire che, ad esempio, quando il Master dichiara combattimento è possibile chiudere il pannello equipaggiamento, oppure lanciare una funzione javascript al suo interno per bloccare l'accesso ad azioni interdette durante il combattimento.

Esiste un json completo con tutti i dati degli stili, comrpesi l'iD di ciascuno e il loro nome da visualizzare. Il backend può inserirlo in un dataset leggibile oppure il frontend può chiamare il backend per avere direttametne tali dati con una fetch. Purtroppo non ci sono molti altri metodi per passare tali dati a javascript (esistono ma preferisco non affidarmi al `value` di Maptool che ogni dialog ha, perché ci inserico informazioni utili al backend quando deve interagire don il dialog stesso).

## Componenti Visuali

* Paperdoll
* Armi Rapide
* Equipaggiamento o Invetario
* Stile di Comattimento
* Ingombro
* Addestramento Armature
* Descrizione Oggetto
* Oggetti Equipaggiabili
* Pulsanti (sicuramente uno di conferma, forse anche un pulsante per annullare senza confermare)

## Paperdoll

Questa zona è sempre accessibile.
La paperdoll è composta da:

* Background
* 12 slot oggetti

### Background

Il background è l'immagine "handout" del personaggio, che è generalmente l'iimagine a corpo completo scelta dal giocatore per il personaggio. Non hanno tutte le solite proporzioni, ma ci possiamo aspettare che siano un rettangolo alto e non molto largo, di un personaggio a figura intera. Quel che conta è che sia ben visibile al centro, se poi l'immagine non è abbastabza larga per coprire i lati della paperdoll poco importa.

### Slot oggetti

Ogni slot può contenere un oggetto equipaggiabile.
Gli slot oggetti sono idealmente 6 per lato del background e quindi occupano i lati della paperdoll. Forse è possibile trovare altre posizioni oltre che 6 per lato, ma credo che porle direttametne sopra il background non sia molto bello visualmente, anche perché le icone degli oggetti devono essere opachi, altrimenti diventano difficili da vedere.
Tutti gli slot vuoti hanno un immagine di background (nativamente 56x56, ma la dimensione finale sarà decisa a seconda dello spazio), tutte le immagini si trovano in

lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/`imagename`
Ma nel caso dell'esempio per la preview useremo un percorso relativo, e quindi:
../../addon/library/public/icons/gui/`imagename`

Gli slot sono, con background image tra parentesi, sul lato sinistro dall'altro verso il basso:

* Elmo (ElmoBG.png)
* Armatura (ArmaturaBG.png)
* Guanti (GuantiBG.png)
* Arma Primaria (variabile fra ArmaBG.png e ArcoBG.png, gvedi sotto)
* Contura (CinturaBG.png)
* Stivali (StivaliBG.png)

Slot lato destro:

* Amuleto (AmuletoBG.png)
* Mantello (MantelloBG.png)
* Bracciali (BraccialiBG.png)
* Mano/Arma Secondaria (variabile fra ArmaBG.png ScudoBG.png LancioBG.png oppure bloccata tramite css style, vedi sotto)
* Anello 1 (AnelloBG.png)
* Anello 2 (AnelloBG.png)

Le immagini di background attuali hanno un opacità del 60%, ma se necessario posso sotituirle con quelle con opacità 100% ed usare il css per alterarne l'opacità.

Le immagini sulla Mano primaria e secondaria cambiavano a seconda dello stile di combattimento in uso, per indicare quale tipo di arma veniva accettata, ma in questa nuova versione non sarà più possibile scegliere lo stile, e questo verrà automaticamente inferito a seconda delle armi equipaggiate in ciascuna mano (ho dovuto togliere una combinazione possibile stile-arma impugnata per renderlo automaticamente deducibile). Penso quindi che forse avrebbe senso cambiare i BG delle armi con delle icone delle mani vuote e non cambiarle mai, al momento mi mancano tali immagini ma le farò se necessario, per il nostro esempio useremo ArmaBG.png.

La mano primaria può tenere armi ad 1 mano, 2 mani ed armi da tiro (che sono sempre a 2 mani). La mano secondaria può tenere lo scudo, armi impugnabili ad 1 mano e armi da lancio, inoltre se la mano principale contiene un'arma impugnabile esclusivamente a 2 mani la mano secondaria deve essere bloccata, ben visibile.
Oltre alle armi, che sono un po' più complicate, ogni oggetto ha una categoria specifica e va solamente nello slot designato, provate a inserire un oggetto in uno slot diverso dal suo deve dare un feedback ben visibile.

#### Trasferimenti

Tramite drag e drop è possibile spostare un oggetto equipaggiabile nella zona Inventario oppure nella zona delle Armi Rapide. Vedi le rispettive zone per dettagli.

### Armi Rapide

La zona delle armi rapide contiene oggetti equipaggiabili esclusivamente di categoria "arma" o "scudo". Non può contenere nient'altro!
Questa zona è sempre accessibile.
Inserire armi in questa zona permette di poter accedere ad armi diverse durante il combattimento, tutto quello con contiene contribuisce all'ingombro, ne consegue che generalmente conterrà veramente pochi oggetti. Per quanto sia possibile metterne a volontà, un giocatore sano di mente metterà qua al massimo 2 o 3 oggetti, ma direi di stare su 4 per essere sicuri, la dimensione della zona quindi dovrebbe riflettere questo senza però bloccare il giocatore o forzarlo a scegliere.

### Equipaggiamento o Invernario

Nome da decidere.
Questa zona è accessibile esclusivamente fuori combattimento.
Contiene tutti gli oggetti equipaggiabili del personaggio, i quali non constribuiscono all'ingombro, si considera come se fossero "oggetti accessibili" e non necessariamente addosso alla propria persona. Di conseguenza può contenere una vasta quantità di oggetti equipaggiabili.
Tutti gli oggetti possono essere interiti in questa zona, ma solo fuori combattimento.
Dato che questa è l'unica zona dove poter spostare oggetti equipaggiabili che non siano armi o scudi, bloccandola o nascondendola in combattimento effettivamente blocchiamo la possibilità del personaggio ti rimuovere qualsiasi oggetti non compreso fra i suddetti, i quali possono essere spostati nella zona delle Armi Rapide.

### Stile di Comattimento

Un informazione che indica lo stile di combattimento applciato, in modo che il giocatore abbia un feedback sul suo attuare setup, dato che ad ogni stile corrispondono specifici bonus e penalità (non è necessario mostrare tali modificatori qua, almeno per ora).
Quando un'arma o scudo viene spostato da o dentro la paperdoll, verra ricalcolato ed aggiornato.

### Ingombro

L'ingombro si calcola sommando gli ingombri diei seguenti oggetti:

* Armi
* Scudi
* Armatura
* Consumabili

Ognuno ha un suo valore, tranne i consumabili che valgono tutti 1 ingombro, ma i consumabili non sono accessibili da questa schermata, quindi il giocatore vedrà l'ingombro corrente ed il massimo già calcolato, se necessario possiamo aggiungere anche l'informazione di quanto ingombro è effettivamente impegnato da consumabili.

### Addestramento Armature

Ogni giocatore ha un valore di addestramento armature, questo è solo un indicatore visuale. Se il personaggio indossa un oggetto che ha addestramento superiore al valore del personaggio, subirà delle penalità (solo scudi e armature hanno questo valore). Il giocatore può vedere il valore di addestramento richiesto dentro la descrizione dell'oggetto stesso.

### Descrizione Oggetto

Abbiamo già uan componente per visualizzare la descrizione degli oggetti, la integreremo dentro il pannello in una docked zone che può essere aperta e chiusa, sufficientemente grande da contenere la descrizione (è comunque scrollabile), la cui altezza può variare molto a seconda dell'oggetto iospezionato.

### Oggetti Equipaggiabili

Gli oggetti equipaggiabili sono icone dell'oggetto che rappresentano (nativamente 64x64, ma qua le adatteremo alla dimensione scelta per gli slot). Ogni elemento conterrà un dataset che contiene il full json con tutte le informazioni dell'oggetto, forse un overkill perché non tutte serve ma il json non sarà eccessivamente grande. Considerando le molte funzioni che potrebbero essere chiamate ritengo che sia meglio portarsi dietro tutte le informazioni. Conterra inoltre un'altro dataset che contiene l'ID dell'oggetto, in modo che sia possibile poi, quando il pannello viene chiuso, indicare le modifiche al backend.

### Pulsanti

Tutte le modifiche effettuate dal giocatore rimandono esclusivamente sul frontend, solamente quando preme il pulsante di conferma allora verranno mandati i dati al backend, il quale si occuperà di effettuare le modifiche e tutti i controlli necessari per assicurarsi che siano modifiche valide. In linea teorica non dovrebbe mai restituire un errore, se ciò accade vuol dire che ho sbagliato a programmare le condizioni sul frontend.