let currentLanguage = 'nl';

// Vertalingen voor Nederlands en Engels
const translations = {
    nl: {
        // --- Algemeen & Navigatie ---
        navPortfolio: "Portfolio",
        navHome: "Home",
        navProjects: "Projecten",
        navContact: "Contact",
        toggleButton: "EN",
        footerCopyright: "© 2024 Nathaniël. Alle rechten voorbehouden.",

        // --- Knoppen & Links ---
        viewProjectsBtn: "Bekijk Projecten",
        sendEmailBtn: "Stuur een E-mail",
        projectDetailsLink: "Meer details",
        viewGitHubBtn: "Bekijk op GitHub",
        // Voeg hier eventueel knoppen toe voor live demo's etc.
        // viewDemoBtn: "Bekijk Live Demo",

        // --- index.html ---
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

        // --- projects.html ---
        projectsTitle: "Mijn Projecten",
        // Beschrijvingen voor projectkaarten (optioneel, kan ook statisch blijven)
        projectCardDescOpenHiring: "Een sollicitatieplatform zonder drempels, met focus op lokale connecties.",
        projectCardDescEcoJourney: "Een mobiele webapp om producten te scannen en hun duurzaamheid te ontdekken.",
        projectCardDescAmericanDream: "Een VR-game ontwikkeld in Unreal Engine.",
        projectCardDescTypeRacer: "Een in browser Type Racer.",
        projectCardDescExcalibur: "Een Excalibur javascript Ritme spel.",


        // --- Project Detail Paginas (Algemene Secties) ---
        projectOverviewTitle: "Project Overzicht",
        projectRoleTitle: "Mijn Rol & Bijdrage",
        projectTechTitle: "Gebruikte Technologieën",
        projectFeaturesTitle: "Kernfunctionaliteiten & Uitdagingen",
        projectLearningTitle: "Leerresultaten",

        // --- EcoJourney.html Specifiek ---
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

        // --- AmericanDream.html Specifiek ---
        projectTitleAmericanDream: "Project: American Dream (Unreal Engine)",
        projectDescAmericanDream: "\"American Dream\" is een immersieve Virtual Reality (VR) game ontwikkeld in Unreal Engine. Het project verkent [bijv. een specifiek thema, verhaal, of gameplay-concept gerelateerd aan de 'American Dream']. Spelers worden ondergedompeld in een interactieve wereld waar ze [bijv. keuzes moeten maken, puzzels oplossen, een verhaal ervaren].",
        projectRoleAmericanDream: "[Beschrijf hier specifiek wat JIJ hebt gedaan. Bijvoorbeeld: Als onderdeel van het ontwikkelteam heb ik mij gericht op gameplay programmering met Blueprints/C++, het ontwerpen en implementeren van VR-interacties, level design en -opbouw, integratie van 3D assets en animaties, optimalisatie voor VR-performance. Ik was verantwoordelijk voor de implementatie van het core movement system, de interactie met specifieke objecten, het opzetten van de game logic voor een bepaald level.]",
        projectTechListAmericanDream: `<li><span class="font-semibold">Game Engine:</span> Unreal Engine 4/5</li>
                                       <li><span class="font-semibold">Programming:</span> Blueprints, C++ (indien gebruikt)</li>
                                       <li><span class="font-semibold">Platform:</span> VR (bijv. Oculus Rift/Quest, HTC Vive)</li>
                                       <li><span class="font-semibold">Software:</span> Unreal Engine Editor, [Bijv. Blender, Maya voor asset creatie/aanpassing], Git/Perforce</li>
                                       <li><span class="font-semibold">Concepten:</span> VR Interaction Design, Level Design, Game Optimization</li>`,
        projectFeaturesListAmericanDream: `<li>Immersieve VR-ervaring met [bijv. hand tracking, room-scale movement].</li>
                                           <li>Interactieve omgevingen en objecten.</li>
                                           <li>[Bijv. Verhalende elementen, Puzzelmechanics, Combat system].</li>
                                           <li><span class="font-semibold">Uitdaging:</span> [Bijv. Het behalen van een stabiele hoge framerate in VR om motion sickness te voorkomen.]</li>
                                           <li><span class="font-semibold">Oplossing:</span> [Bijv. Agressieve optimalisatietechnieken zoals level streaming, LOD's (Level of Detail) en culling.]</li>`,
        projectLearningAmericanDream: "Dit project was een diepe duik in de wereld van game development met Unreal Engine en VR. Ik heb praktische ervaring opgedaan met [bijv. Blueprints scripting, VR development workflows, performance profiling en optimalisatie]. Het was fascinerend om te werken aan het creëren van een echt immersieve ervaring.",

        // --- OpenHiring.html Specifiek ---
        projectTitleOpenHiring: "Project: Open Hiring Platform",
        projectDescOpenHiring: "Dit project, in samenwerking voor IO Digital, betrof de ontwikkeling van een innovatief sollicitatieplatform gebaseerd op het 'Open Hiring' principe. Het doel was om drempels in het sollicitatieproces weg te nemen door kandidaten aan te nemen op volgorde van aanmelding, in plaats van op basis van CV's of sollicitatiegesprekken, met een sterke focus op het verbinden van lokaal talent met lokale bedrijven.",
        projectRoleOpenHiring: "In dit project was ik verantwoordelijk als WCAG-/toegankelijkheidsexpert. Ik voerde uitgebreide toegankelijkheidstesten uit bij mijn mede-studenten en heb talrijke pagina's aangepast van niet-toegankelijk naar WCAG AA, en in sommige gevallen zelfs naar WCAG AAA. Daarnaast ontwikkelde ik een feature die het mogelijk maakt om lokale bedrijven in de buurt van de gebruikerslocatie weer te geven in de app. Hiermee heb ik bijgedragen aan een inclusievere en gebruiksvriendelijkere ervaring voor alle gebruikers.",
        projectTechListOpenHiring: `<li><span class="font-semibold">Backend:</span> PHP, Laravel Framework</li>
                                    <li><span class="font-semibold">Frontend:</span> HTML, CSS met Tailwind CSS, JavaScript</li>`,
        projectFeaturesListOpenHiring: `<li>Registratie en profielbeheer voor werkzoekenden en werkgevers.</li>
                                        <li>Plaatsen en beheren van vacatures met locatiegegevens.</li>
                                        <li>Aanmeldingssysteem op basis van 'first come, first served' (Open Hiring principe).</li>`,
        projectLearningOpenHiring: "Door dit project heb ik diepgaande ervaring opgedaan met het Laravel framework, met aandacht voor toegankelijkheid (WCAG). De samenwerking met IO Digital gaf mij niet alleen inzicht in klantvereisten en projectmanagement, maar leerde mij ook hoe een bedrijf projecten aanpakt, waarbij het verschil in professionaliteit tussen mijn schoolprojecten en dit project duidelijk naar voren kwam. IO Digital heeft alle nodige documentatie geleverd en mij veel waardevolle tips uit de praktijk meegegeven.",

        // --- TypeRacer.html Specifiek ---
        projectTitleTypeRacer: "Project: Type Racer",
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

        // --- Excalibur.html Specifiek ---
        projectTitleExcalibur: "Project: Excalibur JS Ritme Spel",
        projectDescExcalibur: "Excalibur is een browser-based ritmespel, ontwikkeld met JavaScript. Geïnspireerd door [bijv. populaire ritmespellen zoals Guitar Hero of Osu!], daagt het spelers uit om op het juiste moment toetsen in te drukken op de maat van de muziek. Het spel heeft een [bijv. middeleeuws/fantasy] thema, gecentreerd rond de legende van Excalibur.",
        projectRoleExcalibur: "[Beschrijf hier specifiek wat JIJ hebt gedaan. Bijvoorbeeld: Als enige ontwikkelaar van dit project was ik verantwoordelijk voor alle aspecten: het conceptualiseren van de gameplay, het programmeren van de game loop en ritme-mechanics met JavaScript, het synchroniseren van de visuals met de audio, het implementeren van een score-systeem, en het creëren van de eenvoudige graphics en UI-elementen.]",
        projectTechListExcalibur: `<li><span class="font-semibold">Core:</span> HTML5, CSS3, Vanilla JavaScript</li>
                                   <li><span class="font-semibold">Graphics:</span> [Bijv. HTML5 Canvas API, CSS Animations, of eenvoudige DOM elementen]</li>
                                   <li><span class="font-semibold">Audio:</span> Web Audio API (voor precieze timing en playback)</li>
                                   <li><span class="font-semibold">Concepten:</span> Game Loop, Collision Detection (voor notenhits), Audio Synchronization, State Management</li>
                                   <li><span class="font-semibold">Tools:</span> VS Code, Git, Browser DevTools</li>`,
        projectFeaturesListExcalibur: `<li>Visuele weergave van naderende noten op verschillende 'lanes'.</li>
                                       <li>Detectie van toetsaanslagen op het juiste moment ('timing windows').</li>
                                       <li>Feedback aan de speler (bijv. 'Perfect', 'Good', 'Miss').</li>
                                       <li>Scoreberekening en combo-systeem.</li>
                                       <li>Synchronisatie van gameplay-elementen met achtergrondmuziek.</li>
                                       <li><span class="font-semibold">Uitdaging:</span> [Bijv. Het nauwkeurig synchroniseren van de visuele noten met de audio beat, wat cruciaal is voor een ritmespel.]</li>
                                       <li><span class="font-semibold">Oplossing:</span> [Bijv. Gebruik van de Web Audio API voor precieze timing en het baseren van de noten-animatie op de audio context tijd.]</li>`,
        projectLearningExcalibur: "Excalibur was een leerzaam project waarbij ik mijn JavaScript-vaardigheden heb verdiept, met name op het gebied van animatie, timing-kritische operaties en het werken met de Web Audio API. Het ontwikkelen van een game, zelfs een relatief eenvoudige, gaf inzicht in concepten als game state management en de game loop.",
    },
    en: {
        // --- Algemeen & Navigatie ---
        navPortfolio: "Portfolio",
        navHome: "Home",
        navProjects: "Projects",
        navContact: "Contact",
        toggleButton: "NL",
        footerCopyright: "© 2024 Nathaniël. All rights reserved.",

        // --- Knoppen & Links ---
        viewProjectsBtn: "View Projects",
        sendEmailBtn: "Send an Email",
        projectDetailsLink: "More details",
        viewGitHubBtn: "View on GitHub",
        // viewDemoBtn: "View Live Demo",

        // --- index.html ---
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

        // --- projects.html ---
        projectsTitle: "My Projects",
        // Beschrijvingen voor projectkaarten (optioneel)
        projectCardDescOpenHiring: "An accessible application platform focused on local connections.",
        projectCardDescEcoJourney: "A mobile web app to scan products and discover their sustainability.",
        projectCardDescAmericanDream: "A VR game developed in Unreal Engine.",
        projectCardDescTypeRacer: "An in-browser Type Racer game.",
        projectCardDescExcalibur: "An Excalibur JavaScript rhythm game.",

        // --- Project Detail Paginas (Algemene Secties) ---
        projectOverviewTitle: "Project Overview",
        projectRoleTitle: "My Role & Contribution",
        projectTechTitle: "Technologies Used",
        projectFeaturesTitle: "Core Features & Challenges",
        projectLearningTitle: "Learning Outcomes",

        // --- EcoJourney.html Specifiek ---
        projectTitleEcoJourney: "Project: EcoJourney",
        projectDescEcoJourney: "EcoJourney is a mobile web application designed to help consumers make more sustainable choices while shopping. By simply scanning a product's barcode, users get instant insights into its sustainability score and environmental impact.",
        projectRoleEcoJourney: "[Describe your specific contributions here. Example: In this project, I was responsible for designing and implementing the frontend, setting up the backend logic, integrating an external API for product data, and implementing the scanning functionality. I collaborated closely with team members to ensure the application was both functional and user-friendly, paying special attention to mobile loading times and accessibility (WCAG).]",
        projectTechListEcoJourney: `<li><span class="font-semibold">Frontend:</span> JavaScript, HTML5, CSS3 (possibly a framework like React/Vue?)</li>
                                    <li><span class="font-semibold">Backend:</span> [e.g., Node.js, PHP/Laravel, Python/Django]</li>
                                    <li><span class="font-semibold">Database:</span> [e.g., MySQL, PostgreSQL, MongoDB]</li>
                                    <li><span class="font-semibold">APIs:</span> [e.g., Open Food Facts API, Barcode Scanning Library]</li>
                                    <li><span class="font-semibold">Tools:</span> Git, VS Code, [Other relevant tools]</li>`,
        projectFeaturesListEcoJourney: `<li>Barcode scanning via the smartphone's camera.</li>
                                        <li>Fetching product information and sustainability data via an API.</li>
                                        <li>Presenting a clear sustainability score and alternatives.</li>
                                        <li><span class="font-semibold">Challenge:</span> [e.g., Accurately mapping barcodes to the correct product data and sustainability information.]</li>
                                        <li><span class="font-semibold">Solution:</span> [e.g., Implementation of fallback mechanisms and data validation.]</li>`,
        projectLearningEcoJourney: "This project strengthened my skills in [e.g., mobile web development, API integration, frontend design]. I also learned a lot about [e.g., the importance of accurate data in consumer apps, the challenges surrounding sustainability metrics].",

        // --- AmericanDream.html Specifiek ---
        projectTitleAmericanDream: "Project: American Dream (Unreal Engine)",
        projectDescAmericanDream: "\"American Dream\" is an immersive Virtual Reality (VR) game developed in Unreal Engine. The project explores [e.g., a specific theme, story, or gameplay concept related to the 'American Dream']. Players are immersed in an interactive world where they [e.g., make choices, solve puzzles, experience a narrative].",
        projectRoleAmericanDream: "[Describe your specific contributions here. Example: As part of the development team, I focused on gameplay programming using Blueprints/C++, designing and implementing VR interactions, level design and setup, integrating 3D assets and animations, and optimizing for VR performance. I was responsible for implementing the core movement system, interaction with specific objects, and setting up the game logic for a particular level.]",
        projectTechListAmericanDream: `<li><span class="font-semibold">Game Engine:</span> Unreal Engine 4/5</li>
                                       <li><span class="font-semibold">Programming:</span> Blueprints, C++ (if used)</li>
                                       <li><span class="font-semibold">Platform:</span> VR (e.g., Oculus Rift/Quest, HTC Vive)</li>
                                       <li><span class="font-semibold">Software:</span> Unreal Engine Editor, [e.g., Blender, Maya for asset creation/modification], Git/Perforce</li>
                                       <li><span class="font-semibold">Concepts:</span> VR Interaction Design, Level Design, Game Optimization</li>`,
        projectFeaturesListAmericanDream: `<li>Immersive VR experience with [e.g., hand tracking, room-scale movement].</li>
                                           <li>Interactive environments and objects.</li>
                                           <li>[e.g., Narrative elements, Puzzle mechanics, Combat system].</li>
                                           <li><span class="font-semibold">Challenge:</span> [e.g., Achieving a stable high framerate in VR to prevent motion sickness.]</li>
                                           <li><span class="font-semibold">Solution:</span> [e.g., Aggressive optimization techniques like level streaming, LODs (Level of Detail), and culling.]</li>`,
        projectLearningAmericanDream: "This project was a deep dive into the world of game development with Unreal Engine and VR. I gained practical experience with [e.g., Blueprints scripting, VR development workflows, performance profiling, and optimization]. It was fascinating to work on creating a truly immersive experience.",

        // --- OpenHiring.html Specifiek ---
        projectTitleOpenHiring: "Project: Open Hiring Platform",
        projectDescOpenHiring: "This project, in collaboration with or for IO Digital, involved developing an innovative application platform based on the 'Open Hiring' principle. The goal was to remove barriers in the application process by hiring candidates in order of application, rather than based on resumes or interviews, with a strong focus on connecting local talent with local companies.",
        projectRoleOpenHiring: "[Describe your specific contributions here. Example: As a full-stack developer on this project, I was responsible for designing the database structure, developing the backend logic with Laravel to manage job listings and applications, building the frontend user interface with React/Blade, and implementing map functionality for local matching. I specifically worked on the waiting list functionality, the employer dashboard, integration with an external map API, and ensured compliance with WCAG guidelines for accessibility.]",
        projectTechListOpenHiring: `<li><span class="font-semibold">Backend:</span> PHP, Laravel Framework</li>
                                    <li><span class="font-semibold">Frontend:</span> HTML5, CSS3 (Tailwind CSS?), JavaScript (React/Vue/Blade?)</li>
                                    <li><span class="font-semibold">Database:</span> MySQL / PostgreSQL</li>
                                    <li><span class="font-semibold">APIs:</span> [e.g., Google Maps API, Mapbox API] (if used)</li>
                                    <li><span class="font-semibold">Principles:</span> RESTful APIs, MVC Architecture, WCAG</li>
                                    <li><span class="font-semibold">Tools:</span> Git, Composer, npm/yarn, VS Code, Docker (if used)</li>`,
        projectFeaturesListOpenHiring: `<li>Registration and profile management for job seekers and employers.</li>
                                        <li>Posting and managing job listings with location data.</li>
                                        <li>Application system based on 'first come, first served' (Open Hiring principle).</li>
                                        <li>Map integration for visualizing local jobs/candidates.</li>
                                        <li><span class="font-semibold">Challenge:</span> [e.g., Ensuring fairness and transparency in the waiting list system, effective location-based matching.]</li>
                                        <li><span class="font-semibold">Solution:</span> [e.g., Clear logging of applications, use of geocoding and radius search.]</li>`,
        projectLearningOpenHiring: "Through this project, I gained in-depth experience with the Laravel framework and building complex web applications. I learned how to set up a full-stack application from database to UI, focusing on scalability and accessibility (WCAG). The collaboration with IO Digital provided insights into [e.g., client requirements, project management].",

        // --- TypeRacer.html Specifiek ---
        projectTitleTypeRacer: "Project: Type Racer",
        projectDescTypeRacer: "Type Racer is a web-based game that challenges players to test and improve their typing speed and accuracy. Users are presented with a text passage they must type as quickly and accurately as possible, either within a time limit or until the text is completed.",
        projectRoleTypeRacer: "[Describe your specific contributions here. Example: I developed this project from start to finish as a personal project/school assignment. My responsibilities included designing the user interface, implementing the core game logic with vanilla JavaScript, including tracking user input, calculating words per minute (WPM) and accuracy, and providing visual feedback to the player.]",
        projectTechListTypeRacer: `<li><span class="font-semibold">Frontend:</span> HTML5, CSS3, Vanilla JavaScript</li>
                                   <li><span class="font-semibold">Concepts:</span> DOM Manipulation, Event Listeners, Timing Events (setTimeout/setInterval)</li>
                                   <li><span class="font-semibold">Tools:</span> VS Code, Git, Web Browser DevTools</li>`,
        projectFeaturesListTypeRacer: `<li>Display of a text snippet to be typed.</li>
                                       <li>Real-time tracking of typed characters and comparison with the source text.</li>
                                       <li>Visual indication of correct and incorrect keystrokes.</li>
                                       <li>Calculation and display of WPM and accuracy upon completion.</li>
                                       <li>Timer functionality.</li>
                                       <li><span class="font-semibold">Challenge:</span> [e.g., Accurately measuring WPM, considering user errors and corrections.]</li>
                                       <li><span class="font-semibold">Solution:</span> [e.g., Implementation of a specific WPM calculation formula normalized for errors, and dynamic score updates.]</li>`,
        projectLearningTypeRacer: "This project was an excellent exercise in frontend JavaScript development, particularly in DOM manipulation and event handling. I learned how to build an interactive user experience using pure web technologies and how to implement game-like logic, such as score calculation and timing, in the browser.",

        // --- Excalibur.html Specifiek ---
        projectTitleExcalibur: "Project: Excalibur JS Rhythm Game",
        projectDescExcalibur: "Excalibur is a browser-based rhythm game developed with JavaScript. Inspired by [e.g., popular rhythm games like Guitar Hero or Osu!], it challenges players to press keys at the right moment in time with the music. The game features a [e.g., medieval/fantasy] theme centered around the legend of Excalibur.",
        projectRoleExcalibur: "[Describe your specific contributions here. Example: As the sole developer of this project, I was responsible for all aspects: conceptualizing the gameplay, programming the game loop and rhythm mechanics with JavaScript, synchronizing visuals with audio, implementing a scoring system, and creating the simple graphics and UI elements.]",
        projectTechListExcalibur: `<li><span class="font-semibold">Core:</span> HTML5, CSS3, Vanilla JavaScript</li>
                                   <li><span class="font-semibold">Graphics:</span> [e.g., HTML5 Canvas API, CSS Animations, or simple DOM elements]</li>
                                   <li><span class="font-semibold">Audio:</span> Web Audio API (for precise timing and playback)</li>
                                   <li><span class="font-semibold">Concepts:</span> Game Loop, Collision Detection (for note hits), Audio Synchronization, State Management</li>
                                   <li><span class="font-semibold">Tools:</span> VS Code, Git, Browser DevTools</li>`,
        projectFeaturesListExcalibur: `<li>Visual representation of approaching notes on different 'lanes'.</li>
                                       <li>Detection of key presses at the correct timing ('timing windows').</li>
                                       <li>Player feedback (e.g., 'Perfect', 'Good', 'Miss').</li>
                                       <li>Score calculation and combo system.</li>
                                       <li>Synchronization of gameplay elements with background music.</li>
                                       <li><span class="font-semibold">Challenge:</span> [e.g., Accurately synchronizing visual notes with the audio beat, crucial for a rhythm game.]</li>
                                       <li><span class="font-semibold">Solution:</span> [e.g., Using the Web Audio API for precise timing and basing note animation on the audio context time.]</li>`,
        projectLearningExcalibur: "Excalibur was an instructive project where I deepened my JavaScript skills, particularly in animation, time-critical operations, and working with the Web Audio API. Developing a game, even a relatively simple one, provided insights into concepts like game state management and the game loop.",
    }
};

// --- Hulpfunctie voor het veilig instellen van innerHTML ---
function setElementHTML(element, htmlContent) {
    // Basic sanitization (example - consider a robust library like DOMPurify for production)
    // This example allows span, p, br, b, i, strong, em, ul, li tags. Adjust as needed.
    const allowedTags = ['span', 'p', 'br', 'b', 'i', 'strong', 'em', 'ul', 'li'];
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;

    // Remove disallowed tags and attributes (very basic example)
    tempDiv.querySelectorAll('*').forEach(el => {
        if (!allowedTags.includes(el.tagName.toLowerCase())) {
            el.parentNode.removeChild(el);
        } else {
            // Remove potentially harmful attributes (like onclick, onerror, etc.)
            Array.from(el.attributes).forEach(attr => {
                if (attr.name.startsWith('on')) { // Remove on* event handlers
                    el.removeAttribute(attr.name);
                }
                // Add more attribute checks if needed (e.g., for 'style', 'href' with javascript:)
                if (attr.name === 'style') el.removeAttribute(attr.name); // Disallow inline styles for now
                if (attr.name === 'href' && attr.value.startsWith('javascript:')) el.removeAttribute(attr.name);
            });
        }
    });

    element.innerHTML = tempDiv.innerHTML;
}


// --- Functie om de taal te wisselen en de pagina bij te werken ---
function switchLanguage(lang) {
    currentLanguage = lang;
    const langTranslations = translations[lang];

    if (!langTranslations) {
        console.error(`Translations not found for language: ${lang}`);
        return; // Stop if translations for the language don't exist
    }

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (langTranslations[key] !== undefined) {
            // Keys known to contain HTML (adjust this list as needed)
            const htmlKeys = [
                'indexAboutMeContent',
                'footerCopyright',
                'projectTechListEcoJourney', 'projectFeaturesListEcoJourney',
                'projectTechListAmericanDream', 'projectFeaturesListAmericanDream',
                'projectTechListOpenHiring', 'projectFeaturesListOpenHiring',
                'projectTechListTypeRacer', 'projectFeaturesListTypeRacer',
                'projectTechListExcalibur', 'projectFeaturesListExcalibur'
                // Add other keys containing list items or formatting tags
            ];

            if (htmlKeys.includes(key)) {
                // Use the safer function for HTML content
                setElementHTML(element, langTranslations[key]);
                // Alternatively, for trusted content: element.innerHTML = langTranslations[key];
            } else {
                // For plain text content
                element.textContent = langTranslations[key];
            }
        } else {
            // Optionally leave the original text or show a placeholder
            console.warn(`Translation key "${key}" not found for language "${lang}".`);
            // element.textContent = `[${key}]`; // Placeholder for missing translation
        }
    });

    // Update the language toggle button text specifically
    const toggleButton = document.getElementById('language-toggle');
    if (toggleButton) {
        toggleButton.textContent = langTranslations.toggleButton || (lang === 'nl' ? 'EN' : 'NL');
    }

    // Update html lang attribute
    document.documentElement.lang = lang;
}

// --- Event listener voor de taalwisselknop ---
document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'language-toggle') {
        const newLang = currentLanguage === 'nl' ? 'en' : 'nl';
        switchLanguage(newLang);
    }
});

// --- Initiële taal instellen bij laden van de pagina ---
document.addEventListener('DOMContentLoaded', () => {
    // Optional: Detect browser language or load preference from localStorage
    // let preferredLang = localStorage.getItem('preferredLanguage') || navigator.language.split('-')[0];
    // if (translations[preferredLang]) {
    //     currentLanguage = preferredLang;
    // } // else default to 'nl'

    // Apply the initial language translations
    switchLanguage(currentLanguage);

    // --- Special handling for projects.html dynamic content ---
    // Re-apply translations if project cards are added after initial load
    const projectsContainer = document.getElementById('projects');
    if (projectsContainer) {
        // Use MutationObserver to detect when cards are added
        const observer = new MutationObserver((mutationsList, observer) => {
            for(const mutation of mutationsList) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    // Re-apply translations to the newly added elements and their children
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) { // Check if it's an element
                            node.querySelectorAll('[data-translate]').forEach(el => {
                                const key = el.dataset.translate;
                                if(translations[currentLanguage][key]){
                                    if (key === 'projectDetailsLink'){ // Example specific key check
                                        el.textContent = translations[currentLanguage][key];
                                    }
                                    // Add other specific updates if needed
                                }
                            });
                            // Apply to the node itself if it has the attribute
                            if (node.hasAttribute('data-translate')) {
                                const key = node.dataset.translate;
                                if(translations[currentLanguage][key]){
                                    if (key === 'projectDetailsLink'){ // Example specific key check
                                        node.textContent = translations[currentLanguage][key];
                                    }
                                    // Add other specific updates if needed
                                }
                            }
                        }
                    });
                    // Optional: Disconnect observer if you only expect one batch of additions
                    // observer.disconnect();
                }
            }
        });

        // Start observing the projects container for child node additions
        observer.observe(projectsContainer, { childList: true, subtree: false }); // Observe direct children
    }
});