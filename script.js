const elements = [
    { number: 1, symbol: "H", name: "Hydrogen" },
    { number: 2, symbol: "He", name: "Helium" },
    { number: 3, symbol: "Li", name: "Lithium" },
    { number: 4, symbol: "Be", name: "Beryllium" },
    { number: 5, symbol: "B", name: "Boron" },
    { number: 6, symbol: "C", name: "Carbon" },
    { number: 7, symbol: "N", name: "Nitrogen" },
    { number: 8, symbol: "O", name: "Oxygen" },
    { number: 9, symbol: "F", name: "Fluorine" },
    { number: 10, symbol: "Ne", name: "Neon" },
    { number: 11, symbol: "Na", name: "Sodium" },
    { number: 12, symbol: "Mg", name: "Magnesium" },
    { number: 13, symbol: "Al", name: "Aluminum" },
    { number: 14, symbol: "Si", name: "Silicon" },
    { number: 15, symbol: "P", name: "Phosphorus" },
    { number: 16, symbol: "S", name: "Sulfur" },
    { number: 17, symbol: "Cl", name: "Chlorine" },
    { number: 18, symbol: "Ar", name: "Argon" },
    { number: 19, symbol: "K", name: "Potassium" },
    { number: 20, symbol: "Ca", name: "Calcium" },
    { number: 21, symbol: "Sc", name: "Scandium" },
    { number: 22, symbol: "Ti", name: "Titanium" },
    { number: 23, symbol: "V", name: "Vanadium" },
    { number: 24, symbol: "Cr", name: "Chromium" },
    { number: 25, symbol: "Mn", name: "Manganese" },
    { number: 26, symbol: "Fe", name: "Iron" },
    { number: 27, symbol: "Co", name: "Cobalt" },
    { number: 28, symbol: "Ni", name: "Nickel" },
    { number: 29, symbol: "Cu", name: "Copper" },
    { number: 30, symbol: "Zn", name: "Zinc" },
    { number: 31, symbol: "Ga", name: "Gallium" },
    { number: 32, symbol: "Ge", name: "Germanium" },
    { number: 33, symbol: "As", name: "Arsenic" },
    { number: 34, symbol: "Se", name: "Selenium" },
    { number: 35, symbol: "Br", name: "Bromine" },
    { number: 36, symbol: "Kr", name: "Krypton" },
    { number: 37, symbol: "Rb", name: "Rubidium" },
    { number: 38, symbol: "Sr", name: "Strontium" },
    { number: 39, symbol: "Y", name: "Yttrium" },
    { number: 40, symbol: "Zr", name: "Zirconium" },
    { number: 41, symbol: "Nb", name: "Niobium" },
    { number: 42, symbol: "Mo", name: "Molybdenum" },
    { number: 43, symbol: "Tc", name: "Technetium" },
    { number: 44, symbol: "Ru", name: "Ruthenium" },
    { number: 45, symbol: "Rh", name: "Rhodium" },
    { number: 46, symbol: "Pd", name: "Palladium" },
    { number: 47, symbol: "Ag", name: "Silver" },
    { number: 48, symbol: "Cd", name: "Cadmium" },
    { number: 49, symbol: "In", name: "Indium" },
    { number: 50, symbol: "Sn", name: "Tin" },
    { number: 51, symbol: "Sb", name: "Antimony" },
    { number: 52, symbol: "Te", name: "Tellurium" },
    { number: 53, symbol: "I", name: "Iodine" },
    { number: 54, symbol: "Xe", name: "Xenon" },
    { number: 55, symbol: "Cs", name: "Cesium" },
    { number: 56, symbol: "Ba", name: "Barium" },
    { number: 57, symbol: "La", name: "Lanthanum" },
    { number: 58, symbol: "Ce", name: "Cerium" },
    { number: 59, symbol: "Pr", name: "Praseodymium" },
    { number: 60, symbol: "Nd", name: "Neodymium" },
    { number: 61, symbol: "Pm", name: "Promethium" },
    { number: 62, symbol: "Sm", name: "Samarium" },
    { number: 63, symbol: "Eu", name: "Europium" },
    { number: 64, symbol: "Gd", name: "Gadolinium" },
    { number: 65, symbol: "Tb", name: "Terbium" },
    { number: 66, symbol: "Dy", name: "Dysprosium" },
    { number: 67, symbol: "Ho", name: "Holmium" },
    { number: 68, symbol: "Er", name: "Erbium" },
    { number: 69, symbol: "Tm", name: "Thulium" },
    { number: 70, symbol: "Yb", name: "Ytterbium" },
    { number: 71, symbol: "Lu", name: "Lutetium" },
    { number: 72, symbol: "Hf", name: "Hafnium" },
    { number: 73, symbol: "Ta", name: "Tantalum" },
    { number: 74, symbol: "W", name: "Tungsten" },
    { number: 75, symbol: "Re", name: "Rhenium" },
    { number: 76, symbol: "Os", name: "Osmium" },
    { number: 77, symbol: "Ir", name: "Iridium" },
    { number: 78, symbol: "Pt", name: "Platinum" },
    { number: 79, symbol: "Au", name: "Gold" },
    { number: 80, symbol: "Hg", name: "Mercury" },
    { number: 81, symbol: "Tl", name: "Thallium" },
    { number: 82, symbol: "Pb", name: "Lead" },
    { number: 83, symbol: "Bi", name: "Bismuth" },
    { number: 84, symbol: "Po", name: "Polonium" },
    { number: 85, symbol: "At", name: "Astatine" },
    { number: 86, symbol: "Rn", name: "Radon" },
    { number: 87, symbol: "Fr", name: "Francium" },
    { number: 88, symbol: "Ra", name: "Radium" },
    { number: 89, symbol: "Ac", name: "Actinium" },
    { number: 90, symbol: "Th", name: "Thorium" },
    { number: 91, symbol: "Pa", name: "Protactinium" },
    { number: 92, symbol: "U", name: "Uranium" },
    { number: 93, symbol: "Np", name: "Neptunium" },
    { number: 94, symbol: "Pu", name: "Plutonium" },
    { number: 95, symbol: "Am", name: "Americium" },
    { number: 96, symbol: "Cm", name: "Curium" },
    { number: 97, symbol: "Bk", name: "Berkelium" },
    { number: 98, symbol: "Cf", name: "Californium" },
    { number: 99, symbol: "Es", name: "Einsteinium" },
    { number: 100, symbol: "Fm", name: "Fermium" },
    { number: 101, symbol: "Md", name: "Mendelevium" },
    { number: 102, symbol: "No", name: "Nobelium" },
    { number: 103, symbol: "Lr", name: "Lawrencium" },
    { number: 104, symbol: "Rf", name: "Rutherfordium" },
    { number: 105, symbol: "Db", name: "Dubnium" },
    { number: 106, symbol: "Sg", name: "Seaborgium" },
    { number: 107, symbol: "Bh", name: "Bohrium" },
    { number: 108, symbol: "Hs", name: "Hassium" },
    { number: 109, symbol: "Mt", name: "Meitnerium" },
    { number: 110, symbol: "Ds", name: "Darmstadtium" },
    { number: 111, symbol: "Rg", name: "Roentgenium" },
    { number: 112, symbol: "Cn", name: "Copernicium" },
    { number: 113, symbol: "Nh", name: "Nihonium" },
    { number: 114, symbol: "Fl", name: "Flerovium" },
    { number: 115, symbol: "Mc", name: "Moscovium" },
    { number: 116, symbol: "Lv", name: "Livermorium" },
    { number: 117, symbol: "Ts", name: "Tennessine" },
    { number: 118, symbol: "Og", name: "Oganesson" }
];

const knownCombinations = {
    "H|O": {
        productName: "Water (H2O)",
        productType: "Covalent molecular compound",
        reactionEquation: "2H2 + O2 → 2H2O",
        newElementStatus: "No",
        atomBehavior: "Hydrogen and oxygen atoms share electrons to form stable O-H bonds.",
        energyBehavior: "Strongly exothermic once ignition starts.",
        observableResult: "Blue flame/explosion risk in mixed gas; water vapor or liquid forms.",
        conditions: "Needs activation energy (spark/flame) and correct gas ratio.",
        safetyNotes: "Hydrogen-oxygen mixtures can detonate.",
        commonUses: "Water is essential for biology, cooling, solvents, and industry.",
        fullExplanation: "No new element is created. The same H and O atoms are rearranged into water molecules by chemical bonding."
    },
    "Na|Cl": {
        productName: "Sodium chloride (NaCl)",
        productType: "Ionic compound",
        reactionEquation: "2Na + Cl2 → 2NaCl",
        newElementStatus: "No",
        atomBehavior: "Sodium transfers one electron to chlorine, forming Na+ and Cl- ions.",
        energyBehavior: "Exothermic; ionic lattice formation releases energy.",
        observableResult: "Bright reaction and white crystalline solid (salt).",
        conditions: "Occurs readily when reactive sodium meets chlorine gas.",
        safetyNotes: "Sodium and chlorine are hazardous in pure forms.",
        commonUses: "Food seasoning, preservation, chemical feedstock.",
        fullExplanation: "Atoms stay the same elements, but electron transfer changes bonding and creates an ionic crystal."
    },
    "Fe|C": {
        productName: "Steel (Fe-C alloy)",
        productType: "Alloy / interstitial solid solution",
        reactionEquation: "Fe + C → Fe-C alloy (process dependent)",
        newElementStatus: "No",
        atomBehavior: "Small carbon atoms fit between iron atoms in the metal structure.",
        energyBehavior: "Requires high-temperature processing; properties depend on cooling.",
        observableResult: "Harder and stronger material than pure iron.",
        conditions: "Smelting/furnace conditions with controlled carbon percentage.",
        safetyNotes: "High-temperature metal processing hazards.",
        commonUses: "Buildings, tools, vehicles, machinery.",
        fullExplanation: "This is mostly a physical/metallurgical combination rather than a single fixed molecule."
    },
    "Cu|Zn": {
        productName: "Brass",
        productType: "Substitutional alloy",
        reactionEquation: "Cu + Zn → Brass (composition dependent)",
        newElementStatus: "No",
        atomBehavior: "Copper and zinc atoms occupy positions within one metallic crystal network.",
        energyBehavior: "Formed by melting and solidifying; no single reaction equation dominates.",
        observableResult: "Yellow-gold colored workable metal.",
        conditions: "Controlled melt composition and cooling.",
        safetyNotes: "Molten metal and zinc vapor risks at high heat.",
        commonUses: "Valves, fittings, instruments, decorative hardware.",
        fullExplanation: "No new element forms; alloying changes bulk properties such as hardness and corrosion behavior."
    },
    "He|Na": {
        productName: "Sodium helium phase (Na2He)",
        productType: "High-pressure inclusion compound",
        reactionEquation: "2Na + He → Na2He (at extreme pressure)",
        newElementStatus: "No",
        atomBehavior: "Helium does not normally bond; under huge pressure it stabilizes inside sodium lattice voids.",
        energyBehavior: "Requires extremely high pressure to exist.",
        observableResult: "Exotic solid phase in specialized experiments.",
        conditions: "Very high pressure, far beyond normal lab/room conditions.",
        safetyNotes: "Only studied in advanced high-pressure equipment.",
        commonUses: "Fundamental materials research.",
        fullExplanation: "This is not fusion and not a new element; it is an unusual solid-state compound phase."
    },
    "Al|O": {
        productName: "Aluminum oxide (Al2O3)",
        productType: "Ionic/covalent network oxide",
        reactionEquation: "4Al + 3O2 → 2Al2O3",
        newElementStatus: "No",
        atomBehavior: "Aluminum atoms lose electrons and oxygen gains them; strong oxide layer forms.",
        energyBehavior: "Highly exothermic overall.",
        observableResult: "Thin protective oxide film forms on aluminum surface.",
        conditions: "Occurs spontaneously in air at surface.",
        safetyNotes: "Fine aluminum powder can burn rapidly.",
        commonUses: "Ceramics, abrasives, catalyst supports, corrosion protection.",
        fullExplanation: "A self-limiting oxide layer explains why bulk aluminum resists further corrosion."
    },
    "C|O": {
        productName: "Carbon dioxide (CO2) or carbon monoxide (CO)",
        productType: "Covalent oxide products",
        reactionEquation: "C + O2 → CO2 (excess oxygen); 2C + O2 → 2CO (limited oxygen)",
        newElementStatus: "No",
        atomBehavior: "Carbon bonds with oxygen; product depends on oxygen availability.",
        energyBehavior: "Combustion is exothermic.",
        observableResult: "Heat and gas formation.",
        conditions: "Ignition required; oxygen ratio controls final product.",
        safetyNotes: "CO is toxic and dangerous in enclosed spaces.",
        commonUses: "CO2 in beverages/fire suppression; CO in metallurgy.",
        fullExplanation: "Same atoms rearrange into different molecules based on reaction conditions."
    },
    "H|N": {
        productName: "Ammonia (NH3)",
        productType: "Covalent molecular compound",
        reactionEquation: "N2 + 3H2 ⇌ 2NH3",
        newElementStatus: "No",
        atomBehavior: "Nitrogen and hydrogen share electrons; catalyst helps break strong N≡N bond.",
        energyBehavior: "Exothermic equilibrium reaction.",
        observableResult: "Colorless pungent gas.",
        conditions: "High pressure, moderate-high temperature, iron catalyst (Haber process).",
        safetyNotes: "Ammonia is irritating/corrosive at high concentration.",
        commonUses: "Fertilizers, refrigeration, chemical synthesis.",
        fullExplanation: "Industrial synthesis optimizes rate and equilibrium yield rather than creating new elements."
    },
    "Ag|Cl": {
        productName: "Silver chloride (AgCl)",
        productType: "Ionic solid",
        reactionEquation: "Ag+ + Cl- → AgCl(s)",
        newElementStatus: "No",
        atomBehavior: "Silver and chloride ions form an insoluble lattice.",
        energyBehavior: "Precipitation driven by low solubility.",
        observableResult: "White precipitate that darkens in light.",
        conditions: "Occurs in aqueous solution containing Ag+ and Cl- ions.",
        safetyNotes: "Handle silver salts with lab precautions.",
        commonUses: "Photography history, reference electrodes, analytical chemistry.",
        fullExplanation: "A classic precipitation reaction where ions recombine into a solid salt."
    },
    "Mg|O": {
        productName: "Magnesium oxide (MgO)",
        productType: "Ionic oxide",
        reactionEquation: "2Mg + O2 → 2MgO",
        newElementStatus: "No",
        atomBehavior: "Magnesium donates electrons to oxygen and forms a stable ionic lattice.",
        energyBehavior: "Strongly exothermic.",
        observableResult: "Intense bright white flame and white powder.",
        conditions: "Magnesium ignition in oxygen/air.",
        safetyNotes: "Very bright light can damage eyes.",
        commonUses: "Refractory materials, antacid formulations, ceramics.",
        fullExplanation: "The high lattice stability of MgO drives the energetic oxidation process."
    }
};

const nobleGases = ["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"];
const halogens = ["F", "Cl", "Br", "I", "At", "Ts"];
const alkaliMetals = ["Li", "Na", "K", "Rb", "Cs", "Fr"];
const alkalineEarthMetals = ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"];
const nonMetals = ["H", "C", "N", "O", "P", "S", "Se"];
const metalloids = ["B", "Si", "Ge", "As", "Sb", "Te"];
const lanthanides = ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"];
const actinides = ["Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"];
const postTransitionMetals = ["Al", "Ga", "In", "Sn", "Tl", "Pb", "Bi", "Po", "Nh", "Fl", "Mc", "Lv"];

const elementA = document.getElementById("elementA");
const elementB = document.getElementById("elementB");
const combineBtn = document.getElementById("combineBtn");
const elementsList = document.getElementById("elementsList");
const ambientLayer = document.getElementById("ambientLayer");

const inputPair = document.getElementById("inputPair");
const productName = document.getElementById("productName");
const productType = document.getElementById("productType");
const reactionEquation = document.getElementById("reactionEquation");
const newElementStatus = document.getElementById("newElementStatus");
const atomBehavior = document.getElementById("atomBehavior");
const energyBehavior = document.getElementById("energyBehavior");
const observableResult = document.getElementById("observableResult");
const productConditions = document.getElementById("productConditions");
const safetyNotes = document.getElementById("safetyNotes");
const commonUses = document.getElementById("commonUses");
const fullExplanation = document.getElementById("fullExplanation");
const referenceLink = document.getElementById("referenceLink");
const openResultPopupBtn = document.getElementById("openResultPopupBtn");
const resultModal = document.getElementById("resultModal");
const resultBackBtn = document.getElementById("resultBackBtn");

const popupInputPair = document.getElementById("popupInputPair");
const popupProductName = document.getElementById("popupProductName");
const popupProductType = document.getElementById("popupProductType");
const popupReactionEquation = document.getElementById("popupReactionEquation");
const popupNewElementStatus = document.getElementById("popupNewElementStatus");
const popupAtomBehavior = document.getElementById("popupAtomBehavior");
const popupEnergyBehavior = document.getElementById("popupEnergyBehavior");
const popupObservableResult = document.getElementById("popupObservableResult");
const popupProductConditions = document.getElementById("popupProductConditions");
const popupSafetyNotes = document.getElementById("popupSafetyNotes");
const popupCommonUses = document.getElementById("popupCommonUses");
const popupFullExplanation = document.getElementById("popupFullExplanation");
const popupReferenceLink = document.getElementById("popupReferenceLink");
const detailModelNumber = document.getElementById("detailModelNumber");
const detailAtomicNumber = document.getElementById("detailAtomicNumber");
const detailModelName = document.getElementById("detailModelName");
const detailSymbol = document.getElementById("detailSymbol");
const detailType = document.getElementById("detailType");
const detailImportant = document.getElementById("detailImportant");
const detailDiscoveryWhen = document.getElementById("detailDiscoveryWhen");
const detailDiscoveryWhy = document.getElementById("detailDiscoveryWhy");
const detailDiscoveryContext = document.getElementById("detailDiscoveryContext");
const detailsBackBtn = document.getElementById("detailsBackBtn");

const fallbackReference = {
    label: "Google Scholar: chemical bonding and element reactions",
    url: "https://scholar.google.com/scholar?q=chemical+bonding+element+reactions"
};

const elementHighlights = {
    H: "Lightest element; key fuel candidate and part of water and many organic compounds.",
    He: "Noble gas used in cryogenics and leak detection; very low reactivity.",
    C: "Foundation of organic chemistry; appears in diamond, graphite, and many biomolecules.",
    N: "Major part of air (N2); crucial in ammonia production and fertilizers.",
    O: "Essential for respiration and combustion; strongly supports oxidation reactions.",
    Na: "Highly reactive alkali metal; forms many salts such as sodium chloride.",
    Cl: "Reactive halogen used in disinfectants and PVC production.",
    Fe: "Core structural metal; forms steels and is vital in industrial alloys.",
    Cu: "Excellent electrical conductor used in wiring, motors, and electronics.",
    Zn: "Commonly used for galvanizing steel to reduce corrosion.",
    Ag: "Highly conductive precious metal used in electronics and specialized chemistry.",
    Au: "Chemically resistant precious metal used in electronics and finance.",
    U: "Radioactive actinide used in nuclear fuel cycles.",
    Si: "Metalloid central to semiconductors, glass, and silicon-based materials."
};

const elementDiscoveryNotes = {
    H: {
        when: "1766",
        why: "Scientists studying flammable gases wanted to understand combustion and acids.",
        context: "Henry Cavendish characterized hydrogen as a distinct gas."
    },
    He: {
        when: "1868 (Sun spectrum), 1895 (isolated on Earth)",
        why: "Astronomers were mapping unknown spectral lines, and chemists later isolated the gas.",
        context: "First identified in solar spectra, then isolated from uranium minerals."
    },
    C: {
        when: "Known since antiquity",
        why: "Charcoal, soot, and diamond were long-used materials tied to fire and metallurgy.",
        context: "Later recognized as one element with multiple allotropes."
    },
    N: {
        when: "1772",
        why: "Air composition studies aimed to separate breathable and non-breathable parts.",
        context: "Daniel Rutherford identified the non-supportive component of air."
    },
    O: {
        when: "1770s",
        why: "Researchers investigated why some gases support burning and respiration.",
        context: "Work by Scheele and Priestley, interpreted in modern form by Lavoisier."
    },
    Na: {
        when: "1807",
        why: "Chemists used electrolysis to isolate reactive metals from compounds.",
        context: "Humphry Davy isolated sodium from molten sodium hydroxide."
    },
    Cl: {
        when: "1774 (observed), 1810 (recognized as element)",
        why: "Scientists studied bleaching and acidic reactive gases.",
        context: "Scheele produced chlorine; Davy established it as an element."
    },
    Fe: {
        when: "Known since antiquity",
        why: "Iron ores were central to tools, weapons, and construction.",
        context: "Widespread metallurgical use long before modern atomic theory."
    },
    Cu: {
        when: "Known since antiquity",
        why: "Early humans used native copper for tools and ornaments.",
        context: "Important in Bronze Age alloys and early metallurgy."
    },
    Zn: {
        when: "1746 (isolated as metal)",
        why: "Refining brass-making knowledge required separating zinc clearly.",
        context: "Andreas Marggraf isolated metallic zinc."
    },
    Ag: {
        when: "Known since antiquity",
        why: "Valuable for currency, jewelry, and trade.",
        context: "Mined and refined for thousands of years."
    },
    Au: {
        when: "Known since antiquity",
        why: "Highly valued due to rarity, luster, and low corrosion.",
        context: "Used in art, currency, and ritual across ancient civilizations."
    },
    Si: {
        when: "1824",
        why: "Chemists studied silica and silicate minerals to isolate the base element.",
        context: "Jons Jacob Berzelius prepared impure silicon and established its identity."
    },
    U: {
        when: "1789",
        why: "Mineral analysis sought to identify new heavy constituents in pitchblende.",
        context: "Martin Heinrich Klaproth identified uranium in ore samples."
    },
    Tc: {
        when: "1937",
        why: "Predicted periodic table gaps motivated targeted searches for missing elements.",
        context: "First element produced artificially, confirming a missing slot."
    },
    Pm: {
        when: "1945",
        why: "Fission-product analysis during nuclear research revealed new isotopic signatures.",
        context: "Identified among reactor-related fission products."
    },
    Fr: {
        when: "1939",
        why: "Radioactive decay-chain studies searched for short-lived products.",
        context: "Marguerite Perey discovered francium from actinium decay."
    },
    Np: {
        when: "1940",
        why: "Nuclear bombardment experiments explored elements beyond uranium.",
        context: "First transuranium element produced in the laboratory."
    },
    Pu: {
        when: "1940",
        why: "Research into fissile materials and neutron capture pathways.",
        context: "Synthesized at Berkeley from uranium irradiation products."
    },
    Am: {
        when: "1944",
        why: "Continuation of transuranium chemistry in nuclear programs.",
        context: "Produced in neutron irradiation studies."
    },
    Cm: {
        when: "1944",
        why: "Heavy-element creation experiments aimed to extend the periodic table.",
        context: "Synthesized by alpha-particle bombardment routes."
    },
    Bk: {
        when: "1949",
        why: "Investigators pursued new actinides for nuclear structure research.",
        context: "Created in cyclotron bombardment experiments."
    },
    Cf: {
        when: "1950",
        why: "To map actinide chemistry and explore heavy nuclei stability.",
        context: "Produced via alpha bombardment of curium targets."
    },
    Es: {
        when: "1952",
        why: "Nuclear test debris analysis exposed formation of very heavy elements.",
        context: "First identified in thermonuclear explosion byproducts."
    },
    Fm: {
        when: "1952",
        why: "Same heavy-nuclei studies that revealed einsteinium.",
        context: "Detected in high-neutron-flux nuclear event debris."
    },
    Md: {
        when: "1955",
        why: "Accelerator experiments targeted one-by-one extension of actinides.",
        context: "Synthesized by bombarding einsteinium with alpha particles."
    },
    No: {
        when: "1958-1966",
        why: "Competing labs investigated superheavy production pathways.",
        context: "Confirmed through repeated accelerator synthesis."
    },
    Lr: {
        when: "1961",
        why: "Finalizing actinide-series extension with accelerator-made nuclei.",
        context: "Created from heavy-target ion bombardment."
    },
    Rf: {
        when: "1964-1969",
        why: "Exploration of transactinide chemistry and nuclear shell effects.",
        context: "Produced in both Soviet and US heavy-ion experiments."
    },
    Db: {
        when: "1968-1970",
        why: "To probe synthesis routes for higher atomic numbers.",
        context: "Detected in accelerator collision products."
    },
    Sg: {
        when: "1974",
        why: "Superheavy research tested models of nuclear stability.",
        context: "Created by fusing lighter nuclei in accelerators."
    },
    Bh: {
        when: "1981",
        why: "Continuation of transactinide discovery campaigns.",
        context: "Observed at GSI in Darmstadt through fusion reactions."
    },
    Hs: {
        when: "1984",
        why: "To investigate heavy-element decay chains and lifetimes.",
        context: "Synthesized and identified by characteristic decay signatures."
    },
    Mt: {
        when: "1982",
        why: "Nuclear physics programs sought new odd-Z superheavy nuclei.",
        context: "Produced in very low-yield heavy-ion fusion events."
    },
    Ds: {
        when: "1994",
        why: "To extend known superheavy sequence and test decay predictions.",
        context: "Detected from fusion products at GSI."
    },
    Rg: {
        when: "1994",
        why: "Part of systematic superheavy-element synthesis research.",
        context: "Identified from short-lived alpha-decay chains."
    },
    Cn: {
        when: "1996",
        why: "To map behavior of elements near the end of known table.",
        context: "Made by heavy-ion fusion and identified by decay traces."
    },
    Nh: {
        when: "2004",
        why: "Pursuit of new confirmed elements in the superheavy region.",
        context: "Produced in Japan and validated through decay-chain evidence."
    },
    Fl: {
        when: "1998-1999",
        why: "Testing predictions near proposed island of stability.",
        context: "Synthesized in Dubna heavy-ion experiments."
    },
    Mc: {
        when: "2003",
        why: "Further exploration of odd-proton superheavy nuclei.",
        context: "Observed from fusion reaction products and decays."
    },
    Lv: {
        when: "2000",
        why: "To investigate stability trends among very heavy elements.",
        context: "Identified from alpha-decay sequences in fusion runs."
    },
    Ts: {
        when: "2010",
        why: "To complete heavier halogen group extension.",
        context: "Detected in collaborative superheavy synthesis experiments."
    },
    Og: {
        when: "2002-2005",
        why: "To reach the next noble-gas position at atomic number 118.",
        context: "Created atom-by-atom in fusion experiments with calcium beams."
    }
};

function populateSelect(selectEl) {
    elements.forEach((element) => {
        const option = document.createElement("option");
        option.value = element.symbol;
        option.textContent = `${element.number}. ${element.name} (${element.symbol})`;
        selectEl.appendChild(option);
    });
}

function renderElementsList() {
    elements.forEach((element) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "element-item";
        item.dataset.symbol = element.symbol;
        item.textContent = `${element.number}. ${element.name} (${element.symbol})`;
        item.addEventListener("click", () => showElementDetails(element.symbol));
        elementsList.appendChild(item);
    });
}

function getElementName(symbol) {
    const found = elements.find((element) => element.symbol === symbol);
    return found ? found.name : symbol;
}

function getCombinationKey(a, b) {
    return [a, b].sort().join("|");
}

function isMetal(symbol) {
    return alkaliMetals.includes(symbol)
        || alkalineEarthMetals.includes(symbol)
        || lanthanides.includes(symbol)
        || actinides.includes(symbol)
        || postTransitionMetals.includes(symbol)
        || (!nonMetals.includes(symbol) && !halogens.includes(symbol) && !metalloids.includes(symbol) && !nobleGases.includes(symbol));
}

function classifyElement(symbol) {
    if (nobleGases.includes(symbol)) return "noble gas";
    if (halogens.includes(symbol)) return "halogen";
    if (alkaliMetals.includes(symbol)) return "alkali metal";
    if (alkalineEarthMetals.includes(symbol)) return "alkaline earth metal";
    if (metalloids.includes(symbol)) return "metalloid";
    if (nonMetals.includes(symbol)) return "nonmetal";
    if (lanthanides.includes(symbol)) return "lanthanide";
    if (actinides.includes(symbol)) return "actinide";
    if (postTransitionMetals.includes(symbol)) return "post-transition metal";
    return "transition metal";
}

function getElementImportantDetails(symbol, elementType) {
    if (elementHighlights[symbol]) {
        return elementHighlights[symbol];
    }

    if (elementType === "noble gas") {
        return "Very low chemical reactivity because of a filled valence shell.";
    }

    if (elementType === "halogen") {
        return "Reactive nonmetal family that often forms salts with metals.";
    }

    if (elementType.includes("metal")) {
        return "Metallic element often used in alloys, structures, or electrical/industrial applications.";
    }

    if (elementType === "metalloid") {
        return "Shows mixed metal/nonmetal behavior; often important in electronics and materials science.";
    }

    return "Chemically significant element with behavior that depends on bonding and reaction conditions.";
}

function getDiscoveryFallback(element, elementType) {
    const number = element.number;

    if (["C", "S", "Fe", "Cu", "Ag", "Sn", "Sb", "Au", "Hg", "Pb"].includes(element.symbol)) {
        return {
            when: "Known since antiquity",
            why: "Used early for tools, pigments, medicine, trade, or metallurgy.",
            context: "Documented in ancient materials and later formalized by modern chemistry."
        };
    }

    if (nobleGases.includes(element.symbol) && number <= 86) {
        return {
            when: "Late 19th to early 20th century",
            why: "Scientists analyzing air and spectra identified previously unknown inert gases.",
            context: "Discovered through spectroscopy and gas-separation techniques."
        };
    }

    if (lanthanides.includes(element.symbol)) {
        return {
            when: "19th to early 20th century",
            why: "Rare-earth mineral studies sought to separate very similar components.",
            context: "Identified through repeated fractionation and spectroscopy."
        };
    }

    if (number >= 93) {
        return {
            when: "20th to 21st century",
            why: "Nuclear research programs intentionally created heavier-than-uranium nuclei.",
            context: "Synthesized in reactors or particle accelerators and identified via decay chains."
        };
    }

    if (actinides.includes(element.symbol)) {
        return {
            when: "19th to 20th century",
            why: "Radioactivity and heavy-mineral research revealed new heavy elements.",
            context: "Identified through spectroscopy, decay studies, and isolation chemistry."
        };
    }

    if (elementType.includes("metal")) {
        return {
            when: "18th to 20th century",
            why: "Industrial metallurgy and electrochemistry separated elements from ores and salts.",
            context: "Established by isolation experiments and improved analytical methods."
        };
    }

    return {
        when: "18th to 20th century",
        why: "Researchers investigating gases, minerals, and reactions identified distinct elemental behavior.",
        context: "Characterized by chemical analysis and, later, spectroscopic confirmation."
    };
}

function getElementDiscoveryInfo(element, elementType) {
    return elementDiscoveryNotes[element.symbol] || getDiscoveryFallback(element, elementType);
}

function showElementDetails(symbol) {
    const element = elements.find((entry) => entry.symbol === symbol);
    if (!element) {
        return;
    }

    const elementTypeValue = classifyElement(symbol);
    detailModelNumber.textContent = String(element.number);
    detailAtomicNumber.textContent = String(element.number);
    detailModelName.textContent = element.name;
    detailSymbol.textContent = element.symbol;
    detailType.textContent = elementTypeValue;
    detailImportant.textContent = getElementImportantDetails(symbol, elementTypeValue);

    const discovery = getElementDiscoveryInfo(element, elementTypeValue);
    detailDiscoveryWhen.textContent = discovery.when;
    detailDiscoveryWhy.textContent = discovery.why;
    detailDiscoveryContext.textContent = discovery.context;

    const cards = elementsList.querySelectorAll(".element-item");
    cards.forEach((card) => {
        card.classList.toggle("is-active", card.dataset.symbol === symbol);
    });

    elementDetails.classList.remove("hidden");
    elementDetails.setAttribute("aria-hidden", "false");
}

function hideElementDetails() {
    elementDetails.classList.add("hidden");
    elementDetails.setAttribute("aria-hidden", "true");
}

function showResultModal() {
    if (!resultModal) {
        return;
    }

    resultModal.classList.remove("hidden");
    resultModal.setAttribute("aria-hidden", "false");
}

function hideResultModal() {
    if (!resultModal) {
        return;
    }

    resultModal.classList.add("hidden");
    resultModal.setAttribute("aria-hidden", "true");
}

function buildScholarReference(aName, bName, detail) {
    const terms = `${aName} ${bName} ${detail.productName} chemical reaction`;
    const query = encodeURIComponent(terms);
    return {
        label: `Google Scholar: ${aName} + ${bName} reaction research`,
        url: `https://scholar.google.com/scholar?q=${query}`
    };
}

function buildGenericExplanation(a, b, aName, bName) {
    const aClass = classifyElement(a);
    const bClass = classifyElement(b);
    const aMetal = isMetal(a);
    const bMetal = isMetal(b);

    if (a === b) {
        return {
            productName: `${aName} (${a})`,
            productType: "Same-element system",
            reactionEquation: `${a} + ${b} → ${a} (no new substance by simple mixing)`,
            newElementStatus: "No",
            atomBehavior: "Atoms are the same element and usually remain that element unless external reactants are added.",
            energyBehavior: "No major chemical energy release from simple mixing.",
            observableResult: "Usually just the original element sample.",
            conditions: "May change phase with temperature/pressure but not identity.",
            safetyNotes: "Follow safety rules specific to this element.",
            commonUses: "Depends on the selected element.",
            fullExplanation: "Chemical reactions create new compounds from existing elements; they do not create new elements under normal conditions."
        };
    }

    if (nobleGases.includes(a) || nobleGases.includes(b)) {
        return {
            productName: "Usually no stable product at normal conditions",
            productType: "Low reactivity pair",
            reactionEquation: "No significant reaction (typical room conditions)",
            newElementStatus: "No",
            atomBehavior: "At least one atom is a noble gas with a filled valence shell, so it resists bonding.",
            energyBehavior: "No major energy change in typical conditions.",
            observableResult: "No visible reaction in most normal setups.",
            conditions: "Some exceptions exist at extreme pressure, strong plasma, or highly specialized chemistry.",
            safetyNotes: "Inert gas can displace oxygen in closed spaces.",
            commonUses: "Shielding gas, lighting, cryogenics, inert atmospheres.",
            fullExplanation: `${aName} (${aClass}) and ${bName} (${bClass}) generally do not form a stable product at everyday conditions.`
        };
    }

    if ((alkaliMetals.includes(a) && halogens.includes(b)) || (alkaliMetals.includes(b) && halogens.includes(a))) {
        return {
            productName: "Likely alkali halide salt",
            productType: "Ionic compound",
            reactionEquation: "Metal + halogen → ionic salt",
            newElementStatus: "No",
            atomBehavior: "Alkali metal donates one electron; halogen accepts one electron.",
            energyBehavior: "Typically exothermic and potentially vigorous.",
            observableResult: "Salt formation, often with heat/light during reaction.",
            conditions: "Can react rapidly, especially with pure reactants.",
            safetyNotes: "Potentially dangerous reactivity; requires proper lab control.",
            commonUses: "Many salts are used in industry, electronics, and chemistry.",
            fullExplanation: "Electron transfer drives ionic bonding and crystal formation."
        };
    }

    if (aMetal && bMetal) {
        return {
            productName: "Possible alloy",
            productType: "Metallic mixture/alloy",
            reactionEquation: "Metal A + Metal B → alloy (composition dependent)",
            newElementStatus: "No",
            atomBehavior: "Metal atoms share a delocalized electron sea in a mixed crystal.",
            energyBehavior: "Depends on phase diagram and processing temperature.",
            observableResult: "Material properties change (hardness, color, conductivity).",
            conditions: "Usually requires melting/sintering and controlled cooling.",
            safetyNotes: "High-temperature metal processing risks.",
            commonUses: "Structural materials, tools, electronics, corrosion-resistant parts.",
            fullExplanation: `${aName} and ${bName} are more likely to alloy than form a single simple molecule.`
        };
    }

    if ((aMetal && !bMetal) || (!aMetal && bMetal)) {
        return {
            productName: "Likely ionic or mixed-bond compound",
            productType: "Metal-nonmetal reaction",
            reactionEquation: "Metal + nonmetal → compound (stoichiometry varies)",
            newElementStatus: "No",
            atomBehavior: "Metal tends to lose electrons; nonmetal tends to gain or share electrons.",
            energyBehavior: "Often exothermic once reaction begins.",
            observableResult: "Solid product, heat, color change, or gas evolution depending on system.",
            conditions: "Controlled temperature and reactant ratio are usually needed.",
            safetyNotes: "Some metal-nonmetal pairs react violently.",
            commonUses: "Salts, ceramics, catalysts, battery materials.",
            fullExplanation: "The most likely outcome is a compound with new bonding, not a new element."
        };
    }

    return {
        productName: "Likely covalent molecular/network product or weak reactivity",
        productType: "Nonmetal/nonmetal or metalloid chemistry",
        reactionEquation: "A + B → product depends strongly on conditions",
        newElementStatus: "No",
        atomBehavior: "Atoms mostly share electrons; specific structures depend on valence and environment.",
        energyBehavior: "Can be endothermic or exothermic based on pathway.",
        observableResult: "May produce gas, liquid, or solid compounds, or no obvious reaction.",
        conditions: "Pressure, temperature, catalyst, and medium strongly affect outcome.",
        safetyNotes: "Some nonmetal compounds are corrosive, toxic, or flammable.",
        commonUses: "Polymers, gases, acids, semiconductors, specialty chemicals.",
        fullExplanation: `${aName} (${aClass}) with ${bName} (${bClass}) can have multiple valid chemical outcomes depending on setup.`
    };
}

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function createAmbientAnimation(beanCount = 34) {
    if (!ambientLayer) {
        return;
    }

    ambientLayer.innerHTML = "";

    for (let index = 0; index < beanCount; index += 1) {
        const bean = document.createElement("span");
        bean.className = "coffee-bean";

        const size = randomBetween(8, 20);
        const xStart = `${randomBetween(-8, 100)}vw`;
        const xEnd = `${randomBetween(-8, 100)}vw`;
        const driftDuration = `${randomBetween(10, 24)}s`;
        const spinDuration = `${randomBetween(3, 6)}s`;
        const driftDelay = `${randomBetween(-24, 0)}s`;
        const spinDelay = `${randomBetween(-6, 0)}s`;
        const opacity = randomBetween(0.08, 0.25).toFixed(2);

        bean.style.setProperty("--bean-size", `${size}px`);
        bean.style.setProperty("--x-start", xStart);
        bean.style.setProperty("--x-end", xEnd);
        bean.style.setProperty("--drift-duration", driftDuration);
        bean.style.setProperty("--spin-duration", spinDuration);
        bean.style.setProperty("--drift-delay", driftDelay);
        bean.style.setProperty("--spin-delay", spinDelay);
        bean.style.setProperty("--bean-opacity", opacity);

        ambientLayer.appendChild(bean);
    }
}

function combineElements() {
    const a = elementA.value;
    const b = elementB.value;

    if (!a || !b) {
        return;
    }

    const aName = getElementName(a);
    const bName = getElementName(b);
    const inputLabel = `${aName} (${a}) + ${bName} (${b})`;
    inputPair.textContent = inputLabel;

    const key = getCombinationKey(a, b);
    const match = knownCombinations[key];
    const detail = match || buildGenericExplanation(a, b, aName, bName);

    productName.textContent = detail.productName;
    productType.textContent = detail.productType;
    reactionEquation.textContent = detail.reactionEquation;
    newElementStatus.textContent = detail.newElementStatus;
    atomBehavior.textContent = detail.atomBehavior;
    energyBehavior.textContent = detail.energyBehavior;
    observableResult.textContent = detail.observableResult;
    productConditions.textContent = detail.conditions;
    safetyNotes.textContent = detail.safetyNotes;
    commonUses.textContent = detail.commonUses;
    fullExplanation.textContent = detail.fullExplanation;

    const reference = buildScholarReference(aName, bName, detail) || fallbackReference;
    referenceLink.textContent = reference.label;
    referenceLink.href = reference.url;

    popupInputPair.textContent = inputLabel;
    popupProductName.textContent = detail.productName;
    popupProductType.textContent = detail.productType;
    popupReactionEquation.textContent = detail.reactionEquation;
    popupNewElementStatus.textContent = detail.newElementStatus;
    popupAtomBehavior.textContent = detail.atomBehavior;
    popupEnergyBehavior.textContent = detail.energyBehavior;
    popupObservableResult.textContent = detail.observableResult;
    popupProductConditions.textContent = detail.conditions;
    popupSafetyNotes.textContent = detail.safetyNotes;
    popupCommonUses.textContent = detail.commonUses;
    popupFullExplanation.textContent = detail.fullExplanation;
    popupReferenceLink.textContent = reference.label;
    popupReferenceLink.href = reference.url;

    showResultModal();
}

populateSelect(elementA);
populateSelect(elementB);
renderElementsList();
createAmbientAnimation();

combineBtn.addEventListener("click", combineElements);
window.addEventListener("resize", () => createAmbientAnimation());

if (detailsBackBtn) {
    detailsBackBtn.addEventListener("click", hideElementDetails);
}

if (resultBackBtn) {
    resultBackBtn.addEventListener("click", hideResultModal);
}

if (openResultPopupBtn) {
    openResultPopupBtn.addEventListener("click", showResultModal);
}

if (elementDetails) {
    elementDetails.addEventListener("click", (event) => {
        if (event.target === elementDetails) {
            hideElementDetails();
        }
    });
}

if (resultModal) {
    resultModal.addEventListener("click", (event) => {
        if (event.target === resultModal) {
            hideResultModal();
        }
    });
}

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        hideElementDetails();
        hideResultModal();
    }
});

if (elements.length > 0) {
    elementA.value = "He";
    elementB.value = "Na";
    combineElements();
}
