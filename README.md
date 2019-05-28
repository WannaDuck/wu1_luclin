# wu1_luclin
<h2>Dokumentation av arbete</h2>

<h3>Vad var uppgiften?</h3>
Uppgiften var att jag skulle skapa en webbsida som antingen är en blogg eller ett personligt portfolio med undersidor. Som bland annat en contact, about och Internets Historia uppgift som undersidor.


<h3>Genomförande av uppfiften:</h3>
Jag genomförde uppgiften genom att först skissa upp en mockup med hjälp av Adobe XD. Där gjorde jag en skämtsida som skulle ha koll på Donald Trumps aktier fast på Tyska, såklart. Men när vi skulle göra den riktiga hemsidan så kastade jag Trump idén men behöll de färger som jag hade valt och gjorde en spelrecension blogg istället. De färger jag tog över var ljusblått samt spökvit eftersom jag tyckte det var snygga färger som fungerar väl tillsammans + att jag tillhör den målgrupp som jag siktar på. Därefter började jag med att skapa en index.html fil som skulle vara min landingpage samt min webbsidas homepage. Strax efter det så skapade jag master.css som är min sammanhängande styling fil för alla sidor där jag har till exempel en likadan topnav på alla sidor. Sedan efter det så la jag till ett <form> i contact.html så att jag får ett formulär på hemsidan. I verkliga fall så är det bara för uppvisning men med lite mer tid och med hjälp av php så kan jag förmodligen få det att skicka svaren som mail till mig. Men om man hade testat att skicka något så har jag lagt till ett javascript där man får en popup alert där sidan säger att formuläret har skickats. 

Efter det så klistrade jag in uppgiften Internets Historia in i tasks.html eftersom det var ett krav att ha på webbplatsen. Efter jag gjort det så började jag skriva på min about.html. Först skrev jag bara lite skämtsamt “My nama Jeff” men ändrade det kort efter till lite information om mig själv istället. Jag la in en video jag tycker är rolig från YouTube med hjälp av <iframe> samt länkade jag till videon precis under med en anchor tag (<a>). Efter det så började jag jobba mer på min landing page. Först så skrev jag en <*h1*> som det står “Lucas’ game review blog” efter det la jag in en bild på spelet jag skulle ‘recensera’ sedan la jag en <*h3*> som skulle fungera som en rubrik. Sen skrev jag lite text för att till slut fylla ut med Lorem Ipsum. Men tyckte inte det passade bra med att allt var satt åt vänster så jag använde mig av bootstrap. Så jag länkade bootstrap genom att skriva in en <link> i head. Sen använde jag mig av col-md så jag skapade tre columns genom att skapa tre <div> taggar. Först en col-md-3 sen en col-md-6 där jag har min information och till sist en till col-md-3 igen för att det ska bli symmetriskt och för att en viewport är 12 columns bred. Det sista jag gjorde var att styla min topnav så att den skulle vara kvar när man scrollar ned och det gjorde jag genom att skapa två klasser “sticky” och “content” där jag satte topnaven till sticky så den har z-index: 100 för att den ska prioritet över allt och fixar så att topnavens position är fixed. Content taggen satte jag på allt under topnaven i en div för att få ner allting ett snäpp så att inte topnaven slukar texten när sidan fortfarande är längst uppe. Sedan har jag inte publicerat min webbsida ännu.


<h3>Resultat:</h3>
Här är några testbilder

!
Såhär ser webbplatsen ut i Microsofts webbläsare Edge.

!
Såhär ser webbplatsen ut i Google Chrome.

!
Såhär skulle webbplatsen se ut på en vanlig telefon ståendes.

!
Eller i landskapsläge. 

Så man ser så har jag använt mig av tekniker som är anpassade för olika storlekar av skärmar. 









<h4>Bilder på sidan:</h4>

!
index.html: Landingpage och Blogg

!
tasks.html: Internets Historia

!
contact.html: Contact form

!
about.html: Lite information om mig med lite memes där emellan


<h3>Utvärdering:</h3>
Jag testade min hemsida regelbundet efter varje gång jag skriver in ny kod för att se hur det fungerade eller om det förstör något. Jag blev väldigt nöjd med min hemsida för jag tycker den ser tillräckligt bra ut för min smak. Men om det är något jag hade gjort är att lägga till fler färger och kanske mer menyer även om jag gillar simplistiska saker så känns det som att det drar ner betyget. Men, men det är försent nu. Sen om det är något mer jag egentligen ville lägga till är php konfigurationerna för att få det som folk skickar i mitt form skickat till mig genom e-mail, inloggningsfunktion och kommentarsfält, men det kändes för överkurs så jag skippade för hade inte orken/tiden till att göra det.
