const fs = require('fs');

function updateLocale(file, data) {
  const content = JSON.parse(fs.readFileSync(file, 'utf8'));
  content.landing.why_kenya = data;
  fs.writeFileSync(file, JSON.stringify(content, null, 2));
}

const enData = {
  "title": "WHERE EXCEPTIONAL BEGINS.",
  "desc": "Kenya's highlands create the conditions for coffees with remarkable clarity, complexity and character.",
  "sub": "Altitude. Soil. Climate. Variety.",
  "higher_title": "HIGHER CHANGES EVERYTHING.",
  "higher_p1": "Across Kenya's Central Highlands, coffee grows at elevations where cool temperatures, rich volcanic soils and favourable rainfall create an environment ideally suited to Arabica.",
  "higher_p2": "Murang'a, Nyeri and Kirinyaga sit within this remarkable growing landscape — each producing coffees with its own expression of place.",
  "legacy_title": "A LEGACY OF VARIETY.",
  "legacy_desc": "Kenya's coffee story is also a story of exceptional varieties.",
  "var1": "SL28",
  "var1_desc": "renowned for its complexity and distinctive fruit character.",
  "var2": "SL34",
  "var2_desc": "prized for its depth, structure and ability to thrive.",
  "var3": "Ruiru 11",
  "var3_desc": "brings disease resistance and strong cup potential.",
  "var4": "Batian",
  "var4_desc": "combines resilience with quality.",
  "map_title": "THREE ORIGINS. DIFFERENT EXPRESSIONS.",
  "map_muranga_title": "MURANG'A",
  "map_muranga_desc": "Highland farms, rich soils and a strong smallholder coffee culture.",
  "map_nyeri_title": "NYERI",
  "map_nyeri_desc": "High-elevation coffee known for complexity, vibrant acidity and expressive fruit character.",
  "map_kirinyaga_title": "KIRINYAGA",
  "map_kirinyaga_desc": "Volcanic soils and high-altitude growing conditions producing bright, distinctive coffees.",
  "map_footer": "One country. Many expressions.",
  "forward_title": "KENYA IS MOVING FORWARD.",
  "forward_p1": "Kenya's coffee sector is undergoing significant change. Reforms are creating new opportunities for greater transparency, stronger farmer participation and more direct value at origin.",
  "forward_p2": "For specialty buyers, that means an origin with both an extraordinary coffee heritage and a growing opportunity to build more transparent, relationship-driven supply chains.",
  "bright_title": "BRIGHT. COMPLEX. DISTINCTLY KENYAN.",
  "bright_desc": "Kenyan Arabica is celebrated for its vibrant acidity, full body and fruit-forward character. Varieties such as SL28, SL34, Ruiru 11 and Batian contribute to a remarkable diversity of flavour, while altitude, soil and processing shape the final cup.",
  "card1_title": "Climate & Processing",
  "card2_title": "Volcanic Soils"
};

const frData = {
  "title": "OÙ L'EXCEPTIONNEL COMMENCE.",
  "desc": "Les hauts plateaux du Kenya créent les conditions pour des cafés d'une clarté, d'une complexité et d'un caractère remarquables.",
  "sub": "Altitude. Sol. Climat. Variété.",
  "higher_title": "L'ALTITUDE CHANGE TOUT.",
  "higher_p1": "Dans les hauts plateaux centraux du Kenya, le café pousse à des altitudes où les températures fraîches, les sols volcaniques riches et les précipitations favorables créent un environnement idéalement adapté à l'Arabica.",
  "higher_p2": "Murang'a, Nyeri et Kirinyaga se situent dans ce paysage de culture remarquable — chacun produisant des cafés avec sa propre expression du terroir.",
  "legacy_title": "UN HÉRITAGE DE VARIÉTÉ.",
  "legacy_desc": "L'histoire du café kényan est aussi l'histoire de variétés exceptionnelles.",
  "var1": "SL28",
  "var1_desc": "réputé pour sa complexité et son caractère fruité distinctif.",
  "var2": "SL34",
  "var2_desc": "prisé pour sa profondeur, sa structure et sa capacité à s'épanouir.",
  "var3": "Ruiru 11",
  "var3_desc": "apporte une résistance aux maladies et un fort potentiel en tasse.",
  "var4": "Batian",
  "var4_desc": "combine résilience et qualité.",
  "map_title": "TROIS ORIGINES. DIFFÉRENTES EXPRESSIONS.",
  "map_muranga_title": "MURANG'A",
  "map_muranga_desc": "Fermes d'altitude, sols riches et une forte culture du café de petits producteurs.",
  "map_nyeri_title": "NYERI",
  "map_nyeri_desc": "Café de haute altitude connu pour sa complexité, son acidité vibrante et son caractère fruité expressif.",
  "map_kirinyaga_title": "KIRINYAGA",
  "map_kirinyaga_desc": "Sols volcaniques et conditions de culture en haute altitude produisant des cafés vifs et distinctifs.",
  "map_footer": "Un pays. Plusieurs expressions.",
  "forward_title": "LE KENYA VA DE L'AVANT.",
  "forward_p1": "Le secteur du café kényan subit d'importants changements. Les réformes créent de nouvelles opportunités pour une plus grande transparence, une plus forte participation des agriculteurs et plus de valeur directe à l'origine.",
  "forward_p2": "Pour les acheteurs de spécialité, cela signifie une origine avec à la fois un héritage caféier extraordinaire et une opportunité croissante de construire des chaînes d'approvisionnement plus transparentes et axées sur les relations.",
  "bright_title": "VIF. COMPLEXE. DISTINCTEMENT KÉNYAN.",
  "bright_desc": "L'Arabica kényan est célèbre pour son acidité vibrante, son corps plein et son caractère fruité. Des variétés telles que le SL28, le SL34, le Ruiru 11 et le Batian contribuent à une remarquable diversité de saveurs, tandis que l'altitude, le sol et le traitement façonnent la tasse finale.",
  "card1_title": "Climat et Traitement",
  "card2_title": "Sols Volcaniques"
};

updateLocale('src/locales/en.json', enData);
updateLocale('src/locales/fr.json', frData);
