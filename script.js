// a. // MÅL: Räkna ut slutbetyget utifrån provresultat och inlämnade projekt.
// b. // INPUTS: Vilka variabler som kommer till funktionen och vilken typ de
// har – tex: exam: positivt heltal.
// c. // RETURN: Vad ska skickas tillbaka efter beräkning eller behandling av
// inputs och vilken typ har den – tex. result: decimaltal.
// d. // STEG 1: Beskriv nu i tur och ordning (STEG 2, osv.) hur koden logiskt ska
// fungera för att lösa uppgiften - tänk som ett bakrecept – och gör det
// tydligt. Spara allt i GitHub, rotera driver och gå vidare med nästa uppgift!

/* ========================
    Student's Final Grade
===========================*/

// a. // MÅL: Räkna ut slutbetyget utifrån provresultat och inlämnade projekt.
// b. // INPUTS: Det ena är poäng på exam i range 0-100, och det andra är klarade projekt från 0 och uppåt, båda positiva heltal
// c. // RETURN: Om exam är högre än 90 ELLER antal klarade projekt är högre än 10 ska vi returna 100
//              Om exam är högre än 75 OCH antal klarade projekt är minst 5 ska vi returna 90
//               Om exam är högre än 50 OCH om antal projekt är minst 2 ska vi returna 75
//               Om inget av detta uppfylls returnar vi 0
// d.           Vi ställer repespektive argument mot varandra, med att båda eller ena kravet behöver vara
//              uppfyllt för att nå det specifika betyget. Vi börjar med den högsta 100, sedan går vi vidare ner
//              till 0, då vi returnerar 0 om inget tidigare uppfyllts.

/* ========================
    Opposites Attract
===========================*/

// a. // MÅL: Veta om dom är kära utifrån antal blomblad på deras respektive blomma
// b. // INPUTS: Vi får blomma 1 och blomma 2, och antal blomblad de har
// c. // RETURN: Om en är udda samtidigt som en är jämn returnerar vi SANT, dom är kära
//               I alla andra fall returnerar vi FALKST, dom är inte kära
//
// d.            OM vi delar båda med 2 och jämför om kvoten blir samma för båda blommorna
//               är dom antingen båda udda eller båda jämna, vi returnerar då falskt.
//               Om kvoten är olika, är den ena udda och den andra jämn och vi returnerar SANT. LOVE WINS!
//

/* ========================
        Grader;
===========================*/

// a. // MÅL: Lista ut vilket betyg som ska ges utifrån det nummer vi får
// b. // INPUTS: Ett decimaltal och en range på vilka tal som ger respektive betyg
// c. // RETURN: Vi ska returnera ett betyg, vilket i detta fall är A, B, C, D eller F
//
// d. // Steg.1 Vi kollar om decimaltalet vi fått som input är 1 eller högre, eller 6 och lägre, i det fallet returnerar vi F
//       Steg 2. Kolla om talet är 0.9 eller högre, men mindre än 1, om JA returnerar vi A
//       Steg 3. Kolla om talet är 0.8 eller högre, men mindre än 0.9, om JA returnerar vi  B
//       Steg 4. Kolla om talet är 0.7 eller högre, men mindre än 0.8, om JA returnerar vi  C
//       Steg 5. Kolla om talet är 0.6 eller högre, men mindre än 0.7, om JA returnerar vi  D

/* ========================
        Removing Elements
===========================*/
// a. // MÅL: Ta bort varannat element i den givna arrayen, vi börjar med att bort det andra elementet
// b. // INPUTS: En array med okänt antal element, elementen är strings.
// c. // RETURN: Vi ska returnera en array men med korrekt borttagna element
//
// d. Vi vill ta bort alla index med ett udda tal.
//    Vi returnerar en filtrerad arrayen och ser till att endast index med jämnt nummer sparas
//
//
//
