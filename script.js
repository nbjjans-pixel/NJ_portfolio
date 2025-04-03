// globale variabele blijft bestaan
let currentLanguage = 'nl'; // Default language

// Vertalingen object (blijft hetzelfde)
const translations = {
    nl: {
        // ... al je Nederlandse vertalingen ...
        navPortfolio: "Portfolio",
        navHome: "Home",
        navProjects: "Projecten",
        navContact: "Contact",
        toggleButton: "EN",
        footerCopyright: "© 2024 Nathaniël. Alle rechten voorbehouden.",
        viewProjectsBtn: "Bekijk Projecten",
        sendEmailBtn: "Stuur een E-mail",
        projectDetailsLink: "Meer details",
        viewGitHubBtn: "Showcase pagina",
        indexWelcome: "Welkom op mijn Portfolio",
        indexDescription: "🎓 CMGT Student | 💻 Laravel, PHP, JavaScript, HTML, CSS, React, RESTful APIs, WCAG | 🎮 C#, Python, Unity",
        indexAboutMeTitle: "Over Mij",
        indexAboutMeContent: `Hallo! Ik ben Nathaniël 👋<br><br>
                              Als creatieve CMGT-student en fullstack developer combineer ik mijn passie voor programmeren met game development.<br><br>
                              Ik bouw graag aan vernieuwende webapplicaties met <span class="text-blue-400">💻 PHP, JavaScript, RESTful APIs, HTML en Css en samen met frameworks zoals Laravel, React, React Native</span>, altijd met aandacht voor toegankelijkheid (<span class="font-semibold">WCAG</span>).<br><br>
                              Daarnaast duik ik in de wereld van <span class="text-blue-400">🎮 game development</span> met Unity, C# en Python, waar ik mijn kennis in creativiteit en code samen toepas.<br><br>
                              <p class="bg-gray-700 p-4 rounded-lg">
                                Momenteel zoek ik een <span class="font-semibold text-blue-400">stageplek van september 2025 t/m februari 2026</span> om mijn expertise te verdiepen in een team dat waarde hecht aan oplossingen vinden, creativiteit en toegankelijkheid.
                              </p>`,
        indexContactTitle: "Contact",
        indexContactDescription: "Neem gerust contact met mij op voor samenwerkingen of vragen!",
        projectsTitle: "Mijn Projecten",
        projectsIntro: "Hier is een selectie van projecten waaraan ik heb gewerkt, variërend van webapplicaties tot game development. Klik op een project voor meer details.",
        projectCardDescOpenHiring: "Een sollicitatieplatform zonder drempels, met focus op lokale connecties.",
        projectCardDescEcoJourney: "Een mobiele webapp om producten te scannen en hun duurzaamheid te ontdekken.",
        projectCardDescAmericanDream: "Een VR-game ontwikkeld in Unreal Engine.",
        projectCardDescTypeRacer: "Een in browser Type Racer.",
        projectCardDescExcalibur: "Een Excalibur javascript Ritme spel.",
        projectOverviewTitle: "Project Overzicht",
        projectRoleTitle: "Mijn Rol & Bijdrage",
        projectTechTitle: "Gebruikte Technologieën",
        projectFeaturesTitle: "Uitdagingen", // Of "Kernfunctionaliteiten & Uitdagingen"
        projectLearningTitle: "Leerresultaten",
        projectTitleEcoJourney: "EcoJourney",
        projectDescEcoJourney: "EcoJourney is een mobiele webapplicatie ontworpen om consumenten te helpen duurzamere keuzes te maken tijdens het winkelen. Door simpelweg de barcode van een product te scannen, krijgen gebruikers direct inzicht in de duurzaamheidsscore en de milieu-impact van het product.",
        projectRoleEcoJourney: "In het begin van het project ben ik gestart met uitgebreid gebruikersonderzoek. Hierdoor ontdekte ik onder andere de OpenFoodFacts API, die gedurende het hele project een cruciale rol heeft gespeeld. Daarnaast heb ik gewerkt aan de laadanimatie die zichtbaar is tussen het succesvol scannen en het tonen van de pagina. Verder implementeerde ik functionaliteiten zoals accounts, vrienden en gamificatie, waarbij gebruikers punten ontvangen voor elk uniek gescand product.",
        projectTechListEcoJourney: `<li><span class="font-semibold">Frontend:</span> JavaScript, HTML, CSS</li>
                                    <li><span class="font-semibold">Database:</span> SQLite</li>
                                    <li><span class="font-semibold">API's:</span> Open Food Facts API</li>`,
        projectFeaturesListEcoJourney: `<li>Barcode scannen via de camera van de smartphone.</li>
                                        <li>Opzoeken van productinformatie en duurzaamheidsdata via een API.</li>
                                        <li>Presenteren van een duidelijke duurzaamheidsscore en alternatieven.</li>`,
        projectLearningEcoJourney: "Dit project heeft mijn vaardigheden in API-integratie en gamification versterkt.",
        projectTitleAmericanDream: "American Dream (Unreal Engine)",
        projectDescAmericanDream: "American Dream is een VR horror game ontwikkeld in Unreal Engine. Het vertelt het verhaal over de \"horror\" achter een 9-tot-5 baan vol deadlines en druk, waarin je letterlijk uit de dagelijkse routine breekt, maar vervolgens wordt achtervolgd door je baas terwijl je herinneringen van je familie verzamelt,zodat je kan ontsnappen.",
        projectRoleAmericanDream: "Door hardwarelimieten kon ik niet aan de blueprints werken in de game. Daarom heb ik mij gericht op UX, voice acting, textures, animaties, gebruikte assets, het verhaal en de gameplayloop.",
        projectTechListAmericanDream: `<li><span class="font-semibold">Game Engine:</span> Unreal Engine 5</li>
                               <li><span class="font-semibold">Platform:</span> VR</li>
                               <li><span class="font-semibold">Software:</span> Unreal Engine Editor, Blender</li>`,
        projectLearningAmericanDream: "Dit project was een diepe duik in VR-game development met Unreal Engine. Ik heb geleerd hoe ik een meeslepende en samenhangende ervaring kan creëren, ondanks technische beperkingen, door me te richten op andere onderdelen zoals de gebruikerservaring en het verhaal.",
        projectTitleOpenHiring: "Open Hiring Platform",
        projectDescOpenHiring: "Dit project, in samenwerking voor IO Digital, betrof de ontwikkeling van een innovatief sollicitatieplatform gebaseerd op het 'Open Hiring' principe. Het doel was om drempels in het sollicitatieproces weg te nemen door kandidaten aan te nemen op volgorde van aanmelding, in plaats van op basis van CV's of sollicitatiegesprekken, met een sterke focus op het verbinden van lokaal talent met lokale bedrijven.",
        projectRoleOpenHiring: "In dit project was ik verantwoordelijk als WCAG-/toegankelijkheidsexpert. Ik voerde uitgebreide toegankelijkheidstesten uit bij mijn mede-studenten en heb talrijke pagina's aangepast van niet-toegankelijk naar WCAG AA, en in sommige gevallen zelfs naar WCAG AAA. Daarnaast ontwikkelde ik een feature die het mogelijk maakt om lokale bedrijven in de buurt van de gebruikerslocatie weer te geven in de app.",
        projectTechListOpenHiring: `<li><span class="font-semibold">Backend:</span> PHP, Laravel Framework</li>
                                    <li><span class="font-semibold">Frontend:</span> HTML, CSS met Tailwind CSS, JavaScript</li>`,
        projectFeaturesListOpenHiring: `<li>Registratie en profielbeheer voor werkzoekenden en werkgevers.</li>
                                        <li>Plaatsen en beheren van vacatures met locatiegegevens.</li>
                                        <li>Aanmeldingssysteem op basis van 'first come, first served' (Open Hiring principe).</li>`,
        projectLearningOpenHiring: "Door dit project heb ik diepgaande ervaring opgedaan met het Laravel framework, met aandacht voor toegankelijkheid (WCAG). De samenwerking met IO Digital gaf mij niet alleen inzicht in klantvereisten en projectmanagement, maar leerde mij ook hoe een bedrijf projecten aanpakt, waarbij het verschil in professionaliteit tussen mijn schoolprojecten en dit project duidelijk naar voren kwam. IO Digital heeft alle nodige documentatie geleverd en mij veel waardevolle tips uit de praktijk meegegeven.",
        projectTitleTypeRacer: "Type Racer",
        projectDescTypeRacer: "Type Racer is een webgebaseerd spel dat spelers uitdaagt om hun typesnelheid en nauwkeurigheid te testen en verbeteren. Dit is een klein projectje dat ik in mijn vrije tijd heb gemaakt, geïnspireerd door het Donald Duck typespel waar ik als kind leerde typen.",
        projectRoleTypeRacer: "In dit project heb ik het spel van begin tot eind ontwikkeld als een persoonlijk project. Ik ontwierp de gebruikersinterface en implementeerde de core game logic met vanilla JavaScript, waaronder het volgen van gebruikersinvoer, het berekenen van woorden per minuut (WPM) en nauwkeurigheid, en het geven van visuele feedback aan de speler. Daarnaast was dit project een waardevolle oefening in het toepassen van mijn passie voor webdevelopment in mijn vrije tijd.",
        projectTechListTypeRacer: `<li><span class="font-semibold">Frontend:</span> HTML, CSS, JavaScript</li>
                                   <li><span class="font-semibold">Concepten:</span> DOM Manipulatie, Event Listeners, Timing Events</li>`,
        projectFeaturesListTypeRacer: `<li>Weergave van een te typen tekstfragment.</li>
                                       <li>Real-time tracking van getypte tekens en vergelijking met de brontekst.</li>
                                       <li>Visuele indicatie van correcte en incorrecte toetsaanslagen.</li>
                                       <li>Berekening en weergave van WPM en nauwkeurigheid na voltooiing.</li>
                                       <li>Locaal opgeslagen leaderboard.</li>`,
        projectLearningTypeRacer: "Dit project was een uitstekende oefening in frontend JavaScript-ontwikkeling, met name in DOM-manipulatie en event handling. Ik heb geleerd hoe je een interactieve gebruikerservaring kunt bouwen met pure webtechnologieën en hoe je game-achtige logica, zoals scoreberekening en timing, implementeert in de browser.",
        projectTitleExcalibur: "Shiba Rythm Birthday Fiesta",
        projectDescExcalibur: "Shiba Rythm Birthday Fiesta is een browser-based ritmespel, ontwikkeld met JavaScript. Geïnspireerd door eenvoudige ritmespellen, daagt het spelers uit om op het juiste moment toetsen in te drukken op de maat van de muziek. Het spel draait om de verjaardag van een Shiba en heeft een speels, luchtig thema.",
        projectRoleExcalibur: "Dit was mijn eerste spel dat ik heb gemaakt in Excalibur JavaScript. Ik heb het spel van begin tot eind ontwikkeld.",
        projectTechListExcalibur: `<li><span class="font-semibold">Core:</span> HTML, CSS, JavaScript, Excalibur.js</li>`,
        projectFeaturesListExcalibur: `<li>Visuele weergave van naderende noten op verschillende 'lanes'.</li>
                               <li>Detectie van toetsaanslagen op het juiste moment.</li>`,
        projectLearningExcalibur: "Shiba Rythm Birthday Fiesta was een leerzaam project waarbij ik mijn JavaScript-vaardigheden heb verdiept, met name op het gebied van animatie. Het ontwikkelen van dit eerste spel gaf mij inzicht in game state management en de game loop, en was een waardevolle eerste stap."

    },
    en: {
        // ... al je Engelse vertalingen ...
        navPortfolio: "Portfolio",
        navHome: "Home",
        navProjects: "Projects",
        navContact: "Contact",
        toggleButton: "NL",
        footerCopyright: "© 2024 Nathaniël. All rights reserved.",
        viewProjectsBtn: "View Projects",
        sendEmailBtn: "Send an Email",
        projectDetailsLink: "More details",
        viewGitHubBtn: "Showcase page",
        indexWelcome: "Welcome to my Portfolio",
        indexDescription: "🎓 CMGT Student | 💻 Laravel, PHP, JavaScript, HTML, CSS, React, RESTful APIs, WCAG | 🎮 C#, Python, Unity",
        indexAboutMeTitle: "About Me",
        indexAboutMeContent: `Hello! I'm Nathaniël 👋<br><br>
                              As a creative CMGT student and full-stack developer, I combine my passion for programming with game development.<br><br>
                              I enjoy working on innovative web applications using <span class="text-blue-400">💻 PHP, JavaScript, RESTful APIs, HTML, and CSS, along with frameworks like Laravel, React, React Native</span>, always with a focus on accessibility (<span class="font-semibold">WCAG</span>).<br><br>
                              Additionally, I delve into the world of <span class="text-blue-400">🎮 game development</span> with Unity, C#, and Python, where I apply my knowledge in creativity and code together.<br><br>
                              <p class="bg-gray-700 p-4 rounded-lg">
                                Currently, I am seeking an <span class="font-semibold text-blue-400">internship from September 2025 to February 2026</span> to deepen my expertise in a team that values problem-solving, creativity, and accessibility.
                              </p>`,
        indexContactTitle: "Contact",
        indexContactDescription: "Feel free to contact me for collaborations or questions!",
        projectsTitle: "My Projects",
        projectsIntro: "Here is a selection of projects I have worked on, ranging from web applications to game development. Click on a project for more details.",
        projectCardDescOpenHiring: "An application platform without barriers, focusing on local connections.",
        projectCardDescEcoJourney: "A mobile web app to scan products and discover their sustainability.",
        projectCardDescAmericanDream: "A VR game developed in Unreal Engine.",
        projectCardDescTypeRacer: "An in-browser Type Racer.",
        projectCardDescExcalibur: "An Excalibur JavaScript Rhythm game.",
        projectOverviewTitle: "Project Overview",
        projectRoleTitle: "My Role & Contribution",
        projectTechTitle: "Technologies Used",
        projectFeaturesTitle: "Core Features & Challenges",
        projectLearningTitle: "Learning Outcomes",
        projectTitleEcoJourney: "EcoJourney",
        projectDescEcoJourney: "EcoJourney is a mobile web application designed to help consumers make more sustainable choices while shopping. By simply scanning a product's barcode, users get instant insights into its sustainability score and environmental impact.",
        projectRoleEcoJourney: "At the start of the project, I began with extensive user research. This led me to discover the OpenFoodFacts API, among other things, which played a crucial role throughout the project. Additionally, I worked on the loading animation visible between successful scanning and displaying the page. Furthermore, I implemented functionalities such as accounts, friends, and gamification, where users receive points for each unique product scanned.",
        projectTechListEcoJourney: `<li><span class="font-semibold">Frontend:</span> JavaScript, HTML, CSS</li>
                                    <li><span class="font-semibold">Database:</span> SQLite</li>
                                    <li><span class="font-semibold">APIs:</span> Open Food Facts API</li>`,
        projectFeaturesListEcoJourney: `<li>Barcode scanning via the smartphone's camera.</li>
                                        <li>Looking up product information and sustainability data via an API.</li>
                                        <li>Presenting a clear sustainability score and alternatives.</li>`,
        projectLearningEcoJourney: "This project strengthened my skills in API integration and gamification.",
        projectTitleAmericanDream: "American Dream (Unreal Engine)",
        projectDescAmericanDream: "American Dream is a VR horror game developed in Unreal Engine. It tells the story of the \"horror\" behind a 9-to-5 job filled with deadlines and pressure, where you literally break out of the daily routine, but are then chased by your boss while collecting memories of your family to escape.",
        projectRoleAmericanDream: "Due to hardware limitations, I couldn't work on the blueprints in the game. Therefore, I focused on UX, voice acting, textures, animations, used assets, the story, and the gameplay loop.",
        projectTechListAmericanDream: `<li><span class="font-semibold">Game Engine:</span> Unreal Engine 5</li>
                                       <li><span class="font-semibold">Platform:</span> VR</li>
                                       <li><span class="font-semibold">Software:</span> Unreal Engine Editor, Blender</li>`,
        projectFeaturesListAmericanDream: `<li>Immersive VR experience with [e.g., hand tracking, room-scale movement].</li>
                                           <li>Interactive environments and objects.</li>
                                           <li>[e.g., Narrative elements, Puzzle mechanics, Horror elements].</li>
                                           <li><span class="font-semibold">Challenge:</span> [e.g., Working around hardware limitations affecting direct Blueprint work.]</li>
                                           <li><span class="font-semibold">Solution:</span> [e.g., Focusing contributions on aspects not requiring direct engine interaction like UX, assets, narrative.]</li>`,
        projectLearningAmericanDream: "This project was a deep dive into VR game development with Unreal Engine. I learned how to create an immersive and cohesive experience, despite technical constraints, by focusing on other components such as user experience and story.",
        projectTitleOpenHiring: "Open Hiring Platform",
        projectDescOpenHiring: "This project, in collaboration with IO Digital, involved the development of an innovative application platform based on the 'Open Hiring' principle. The goal was to remove barriers in the application process by hiring candidates in order of application, rather than based on resumes or interviews, with a strong focus on connecting local talent with local companies.",
        projectRoleOpenHiring: "In this project, I was responsible as the WCAG/accessibility expert. I conducted extensive accessibility tests with my fellow students and adapted numerous pages from non-accessible to WCAG AA, and in some cases, even to WCAG AAA. Additionally, I developed a feature that allows displaying local companies near the user's location in the app. With this, I contributed to a more inclusive and user-friendly experience for all users.",
        projectTechListOpenHiring: `<li><span class="font-semibold">Backend:</span> PHP, Laravel Framework</li>
                                    <li><span class="font-semibold">Frontend:</span> HTML, CSS with Tailwind CSS, JavaScript</li>`,
        projectFeaturesListOpenHiring: `<li>Registration and profile management for job seekers and employers.</li>
                                        <li>Posting and managing job listings with location data.</li>
                                        <li>Application system based on 'first come, first served' (Open Hiring principle).</li>`,
        projectLearningOpenHiring: "Through this project, I gained in-depth experience with the Laravel framework, focusing on accessibility (WCAG). The collaboration with IO Digital not only gave me insight into client requirements and project management but also taught me how a company approaches projects, clearly highlighting the difference in professionalism between my school projects and this one. IO Digital provided all necessary documentation and gave me many valuable practical tips.",
        projectTitleTypeRacer: "Type Racer",
        projectDescTypeRacer: "Type Racer is a web-based game that challenges players to test and improve their typing speed and accuracy. This is a small project I created in my spare time, inspired by the Donald Duck typing game where I learned to type as a child.",
        projectRoleTypeRacer: "In this project, I developed the game from start to finish as a personal project. I designed the user interface and implemented the core game logic with vanilla JavaScript, including tracking user input, calculating words per minute (WPM) and accuracy, and providing visual feedback to the player. Additionally, this project was a valuable exercise in applying my passion for web development in my free time.",
        projectTechListTypeRacer: `<li><span class="font-semibold">Frontend:</span> HTML, CSS, JavaScript</li>
                                   <li><span class="font-semibold">Concepts:</span> DOM Manipulation, Event Listeners, Timing Events</li>`,
        projectFeaturesListTypeRacer: `<li>Display of a text snippet to be typed.</li>
                                       <li>Real-time tracking of typed characters and comparison with the source text.</li>
                                       <li>Visual indication of correct and incorrect keystrokes.</li>
                                       <li>Calculation and display of WPM and accuracy upon completion.</li>
                                       <li>Locally stored leaderboard.</li>`,
        projectLearningTypeRacer: "This project was an excellent exercise in frontend JavaScript development, particularly in DOM manipulation and event handling. I learned how to build an interactive user experience using pure web technologies and how to implement game-like logic, such as score calculation and timing, in the browser.",
        projectTitleExcalibur: "Shiba Rythm Birthday Fiesta",
        projectDescExcalibur: "Shiba Rythm Birthday Fiesta is a browser-based rhythm game, developed with JavaScript. Inspired by simple rhythm games, it challenges players to press keys at the right moment to the beat of the music. The game revolves around a Shiba's birthday and has a playful, lighthearted theme.",
        projectRoleExcalibur: "This was my first game that I created in Excalibur JavaScript. I developed the game from start to finish.",
        projectTechListExcalibur: `<li><span class="font-semibold">Core:</span> HTML, CSS, JavaScript, Excalibur.js</li>`,
        projectFeaturesListExcalibur: `<li>Visual representation of approaching notes on different 'lanes'.</li>
                                       <li>Detection of key presses at the correct moment.</li>`,
        projectLearningExcalibur: "Shiba Rythm Birthday Fiesta was an instructive project where I deepened my JavaScript skills, especially in the area of animation. Developing this first game gave me insight into game state management and the game loop, and was a valuable first step."
    }
};

// Hulpfunctie voor veilig instellen van innerHTML (blijft hetzelfde)
function setElementHTML(element, htmlContent) {
    const allowedTags = ['span', 'p', 'br', 'b', 'i', 'strong', 'em', 'ul', 'li'];
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;

    tempDiv.querySelectorAll('*').forEach(el => {
        if (!allowedTags.includes(el.tagName.toLowerCase())) {
            el.parentNode.removeChild(el);
        } else {
            Array.from(el.attributes).forEach(attr => {
                if (attr.name.startsWith('on')) {
                    el.removeAttribute(attr.name);
                }
                if (attr.name === 'style') el.removeAttribute(attr.name);
                if (attr.name === 'href' && attr.value.startsWith('javascript:')) el.removeAttribute(attr.name);
            });
        }
    });

    element.innerHTML = tempDiv.innerHTML;
}

// Functie om taal te wisselen en pagina bij te werken
function switchLanguage(lang) {
    // --- NIEUW: Sla de gekozen taal op ---
    try {
        localStorage.setItem('preferredLanguage', lang);
    } catch (e) {
        console.error("Kon taalvoorkeur niet opslaan in localStorage:", e);
        // Optioneel: Informeer de gebruiker dat de voorkeur niet opgeslagen kan worden
    }

    // Update de globale variabele
    currentLanguage = lang;
    const langTranslations = translations[lang];

    if (!langTranslations) {
        console.error(`Translations not found for language: ${lang}`);
        return;
    }

    // Update alle elementen (blijft grotendeels hetzelfde)
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (langTranslations[key] !== undefined) {
            const htmlKeys = [
                'indexAboutMeContent', 'footerCopyright',
                'projectTechListEcoJourney', 'projectFeaturesListEcoJourney',
                'projectTechListAmericanDream', 'projectFeaturesListAmericanDream',
                'projectTechListOpenHiring', 'projectFeaturesListOpenHiring',
                'projectTechListTypeRacer', 'projectFeaturesListTypeRacer',
                'projectTechListExcalibur', 'projectFeaturesListExcalibur'
                // Voeg andere keys toe die HTML bevatten indien nodig
            ];

            if (htmlKeys.includes(key)) {
                setElementHTML(element, langTranslations[key]);
            } else {
                element.textContent = langTranslations[key];
            }
        } else {
            console.warn(`Translation key "${key}" not found for language "${lang}".`);
        }
    });

    // Update knoptekst
    const toggleButton = document.getElementById('language-toggle');
    if (toggleButton) {
        toggleButton.textContent = langTranslations.toggleButton || (lang === 'nl' ? 'EN' : 'NL');
    }

    // Update html lang attribute
    document.documentElement.lang = lang;

    // --- Specifiek voor projects.html ---
    // Als de projectkaarten dynamisch worden geladen, moeten ze mogelijk opnieuw vertaald worden
    // Dit deel is een beetje afhankelijk van *wanneer* de projecten worden geladen.
    // Als ze al in de HTML staan bij DOMContentLoaded, is dit niet nodig.
    // Als ze later worden toegevoegd (zoals in je projects.html code), moet je
    // de vertalingen opnieuw toepassen *nadat* ze zijn toegevoegd.
    // De code in projects.html lijkt dit al te doen bij het maken van de kaarten.
    // Een extra check hier kan geen kwaad, maar is mogelijk dubbelop.
    const projectsContainer = document.getElementById('projects');
    if (projectsContainer && typeof projectsData !== 'undefined') { // Check of projectsData bestaat
        const detailLinkText = langTranslations['projectDetailsLink'] || "More details";
        projectsContainer.querySelectorAll('a[data-translate="projectDetailsLink"]').forEach(link => {
            link.textContent = detailLinkText;
        });
        // Ook de beschrijvingen bijwerken als ze via data-translate gaan
        projectsContainer.querySelectorAll('p[data-translate^="projectCardDesc"]').forEach(p => {
            const descKey = p.dataset.translate;
            if (langTranslations[descKey]) {
                p.textContent = langTranslations[descKey];
            }
        });
    }
}

// Event listener voor de taalwisselknop (blijft hetzelfde)
document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'language-toggle') {
        const newLang = currentLanguage === 'nl' ? 'en' : 'nl';
        switchLanguage(newLang);
    }
});

// --- AANGEPAST: Initiële taal instellen bij laden ---
document.addEventListener('DOMContentLoaded', () => {
    let initialLang = 'nl'; // Standaard taal

    // --- NIEUW: Controleer localStorage voor opgeslagen voorkeur ---
    try {
        const savedLang = localStorage.getItem('preferredLanguage');
        // Controleer of de opgeslagen taal een geldige optie is
        if (savedLang && translations[savedLang]) {
            initialLang = savedLang;
        }
    } catch (e) {
        console.error("Kon taalvoorkeur niet lezen uit localStorage:", e);
        // Ga door met de standaardtaal
    }

    // Pas de initiële (opgeslagen of standaard) taal toe
    // Belangrijk: stel currentLanguage in *voordat* je switchLanguage aanroept
    currentLanguage = initialLang;
    switchLanguage(currentLanguage);

    // --- Special handling for projects.html dynamic content ---
    // De MutationObserver in je vorige code is goed, maar moet misschien
    // ook de juiste taal gebruiken bij de initiële creatie.
    // De code in projects.html die de kaarten maakt, moet OOK de
    // currentLanguage variabele respecteren die hierboven is ingesteld.
    // Zorg ervoor dat `projects.html` de `currentLanguage` variabele gebruikt
    // die *na* de localStorage check is ingesteld.

    // (De rest van je DOMContentLoaded code, zoals de MutationObserver voor projects.html, blijft hier)
    const projectsContainer = document.getElementById('projects');
    if (projectsContainer) {
        const observer = new MutationObserver((mutationsList) => {
            for(const mutation of mutationsList) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            // Vertalingen toepassen op nieuwe nodes gebaseerd op HUIDIGE taal
                            node.querySelectorAll('[data-translate]').forEach(el => {
                                const key = el.dataset.translate;
                                if (translations[currentLanguage] && translations[currentLanguage][key]) {
                                    // Gebruik dezelfde logica als in switchLanguage voor HTML vs Text
                                    const htmlKeys = [ /* ... je lijst met HTML keys ... */ ];
                                    if (htmlKeys.includes(key)) {
                                        setElementHTML(el, translations[currentLanguage][key]);
                                    } else {
                                        el.textContent = translations[currentLanguage][key];
                                    }
                                }
                            });
                            if (node.hasAttribute('data-translate')) {
                                const key = node.dataset.translate;
                                if (translations[currentLanguage] && translations[currentLanguage][key]) {
                                    // Gebruik dezelfde logica als in switchLanguage voor HTML vs Text
                                    const htmlKeys = [ /* ... je lijst met HTML keys ... */ ];
                                    if (htmlKeys.includes(key)) {
                                        setElementHTML(node, translations[currentLanguage][key]);
                                    } else {
                                        node.textContent = translations[currentLanguage][key];
                                    }
                                }
                            }
                        }
                    });
                }
            }
        });
        observer.observe(projectsContainer, { childList: true, subtree: false });
    }
}); // Einde DOMContentLoaded