var tim = 1000;
var chef = 'https://corporate.1804-ci-staging-cms-3.coremedia.vm/corporate'

function testen(site, shotname=''){
	describe('testing English sites', function(){it('', function(){
		cy.visit(site)
		cy.get('#cm-header').invoke('css', 'position', 'absolute') // solves the shiding header issue
		cy.viewport(410, 1000)
		cy.wait(tim)
		//.then(($a) => {debugger}) // oldschool; doesn't work
		//.debug() // newschool; doesn't work
		// maybe use F8 and modify per hand? can't find anything smarter rn . . .
		cy.screenshot(shotname+'-phone')
		cy.viewport(760, 1000)
		cy.wait(tim)
		cy.screenshot(shotname+'-tablet')
		cy.viewport(1020, 1000)
		cy.wait(tim)
		cy.screenshot(shotname+'-desktop')
		cy.viewport(1190, 1000)
		cy.wait(tim)
		cy.screenshot(shotname+'-overflow')
		})
	})
}

function testde(site, size=1020, shotname=''){
	shotname+='_de';
	describe('testing German sites', function(){it('', function(){
		cy.visit(site)
		cy.get('#cm-header').invoke('css', 'position', 'absolute')
		cy.viewport(410, 1000)
		cy.wait(tim)
		cy.screenshot(shotname+'-phone')
		cy.viewport(760, 1000)
		cy.wait(tim)
		cy.screenshot(shotname+'-tablet')
		cy.viewport(1020, 1000)
		cy.wait(tim)
		cy.screenshot(shotname+'-desktop')
		cy.viewport(1190, 1000)
		cy.wait(tim)
		cy.screenshot(shotname+'-overflow')
		})
	})
}

var sites = ["https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/about",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/about/chef-corp-s-mission-1122",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/about/chef-corp-worldwide-1124",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/about/learn-more-about-chef-corp--1126",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/about/management-board-1134",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/about/learn-more-about-chef-corp-s-business-1480",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/asset-download-portal",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/careers",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/careers/open-positions-1158",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/corporate-video",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-contacts",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-events/annual-report-on-the-fiscal-year-2011-with-press-conference-and-investor-and-analyst-conference-call-1238",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-events/annual-report-on-the-fiscal-year-2012-with-press-conference-and-investor-and-analyst-conference-call-1242",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-events/annual-report-on-the-fiscal-year-2013-with-press-conference-and-investor-and-analyst-conference-call-1246",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-events/annual-report-on-the-fiscal-year-2014-with-press-conference-and-investor-and-analyst-conference-call-1252",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-events/2015-annual-general-meeting-1254",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-events/2015-dividend-payment-1258",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-events/interim-report-on-the-first-quarter-of-2015-with-investor-and-analyst-conference-call-1262",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-events/interim-report-on-the-second-quarter-of-2015-with-investor-and-analyst-conference-call-1266",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-events/interim-report-on-the-third-quarter-of-2015-with-investor-and-analyst-conference-call-1270",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-events",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-news/annual-general-meeting-1296",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-news/chef-corp-announces-partnership-with-chinese-manufacturer-chongxing-1298",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-news/chef-corp-announces-record-quarter-1300",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-news/chef-corp-raises-revenue-in-q2-2016-1302",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-news/chef-corp-announces-record-quarter-1308",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-news/chef-corp-announces-record-quarter-1312",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-news/chef-corp-hires-star-chef-maicu-cumberbatch-as-consultant-1316",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations/ir-news",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/investor-relations",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/press/press-contacts/press-contacts-1364",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/press/press-contacts",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/press/events/chef-corp-bbq-cookout-1386",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/press/events/chef-corp-new-headquarter-grand-opening-party-1390",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/press/events/chef-corp-charity-golf-tournament-1392",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/press/events/chef-corp-security-audit-1398",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/press/events",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/press/news/a-look-behind-the-design-of-a-great-kitchen-1422",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/press/news/6000-happy-customers-in-5-years-1424",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/press/news/cold-storage-how-to-do-it-professionally-1426",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/press/news/integrated-technology-for-a-seamless-guest-experience-1428",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/press/news/a-world-s-first-introducing-chefwave-hd-the-chef-corp-high-pressure-deep-frying-microwave-line-1432",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/press/news/new-kitchen-safety-regulations-1436",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/press/news/portuguese-cuisine-the-uncharted-country-of-deliciousness-1442",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/press/news",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/press",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/company/sustainability-1490",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-consumers/aurora-b2c-1502",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-consumers/aurora-b2c",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-consumers",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-consumers/hobby-cooks-rejoice-1508",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/this-is-chris-he-started-his-own-restaurant-in-cape-town-1534",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/fun-is-your-driver-1536",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/fun-is-your-driver-1540",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/fun-is-the-driver-for-everything-1544",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/learn-how-jacob-made-his-cooking-dreams-come-true-1560",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/learn-how-peter-made-his-dream-come-true-1564",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/perfection-is-your-mantra-1570",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/make-your-dream-come-true-1576",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/perfection-is-your-mantra-1580",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/you-are-the-perfect-chef-bring-your-dreams-alive-1582",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/meet-sally-she-runs-a-cafe-in-florence-1586",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/meet-sandra-she-became-a-chef-of-her-own-1590",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/precision-is-a-virtue-1592",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/you-are-the-perfect-chef-1600",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/you-are-the-perfect-chef-1604",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/aurora-b2b-shop-spare-parts-for-kitchen-equipment-and-small-items-for-your-restaurant-1612",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/aurora-b2b",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/enjoy-your-passion",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/feel-the-passio",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/services/delivery-1664",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/services/design-1668",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/services/financing-1676",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/services",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/for-professionals-1684",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/serving-the-hospitality-industry-1692",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/search-results",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/corporate-information/contact-us",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/corporate-information/sitemap",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/corporate-information/sitemap-1912",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/corporate-information",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/embedding-test",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/asset-detail",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/topicpage",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/blenders-and-food-processors/browne-bl1300-blender-2294",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/blenders-and-food-processors/browne-bl300-blender-2296",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/blenders-and-food-processors",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/blenders-and-food-processors/browne-bl700-blender-2304",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/blenders-and-food-processors/kanetree-kt4000-mixer-2308",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/blenders-and-food-processors/kitchenette-knc30-mixer-2310",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/chef-wave-fryers/chefwave-hd-large-2314",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/chef-wave-fryers/chefwave-hd-small-2316",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/chef-wave-fryers",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/cooling-and-storage/chef-cold-store-ccs80-freezing-storage-2322",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/cooling-and-storage/chef-cold-store-ccs95-freezing-storage-2324",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/cooling-and-storage",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/hoods-and-extractors/chef-extractor-hood-hd800-built-in-2330",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/hoods-and-extractors/chef-extractor-hood-hd800-super-2332",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/hoods-and-extractors/chef-extractor-hood-hd900-built-in-2334",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/hoods-and-extractors/chef-extractor-hood-hd900-super-2338",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/hoods-and-extractors",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/ranges-and-ovens/chef-range-cr1020-premium-2342",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/ranges-and-ovens/chef-range-cr520-basic-2346",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/ranges-and-ovens/chef-range-cr640-easy-2356",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/ranges-and-ovens/chef-range-cr780-standard-2358",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/ranges-and-ovens/chef-range-cr990-deluxe-2362",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog/ranges-and-ovens",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate/for-professionals/products/catalog"];
var seiten = ["https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/about/erfahren-sie-mehr-ueber-die-chef-gmbh-1130",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/about/chef-corp-weltweit-1132",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/about/die-zutaten-unseres-erfolgs--1136",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/about/unsere-chefs--1140",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/about",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/am-download-portal",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/karriere/offene-positionen-1168",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/karriere",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/image-film",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-contacts",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-events/jahresbericht-geschaeftsjahr-2011-mit-pressegespraech-investoren-und-analystenkonferenz-1250",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-events/jahresbericht-geschaeftsjahr-2012-mit-pressegespraech-investoren-und-analystenkonferenz-1252",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-events/geschaeftsbericht-2013-mit-pressekonferenz-1256",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-events/2015-dividendenzahlung-1260",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-events/2015-hauptversammlung-1264",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-events/geschaeftsbericht-2014-mit-pressekonferenz-1268",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-events/zwischenbericht-1-quartal-2015-mit-investoren-und-analysten-telefonkonferenz-1272",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-events/zwischenbericht-2-quartal-2015-mit-investoren-und-analysten-telefonkonferenz-1276",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-events/zwischenbericht-3-quartal-2015-mit-analysten-telefonkonferenz-1284",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-events",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-finanzberichte/jaehrliche-hauptversammlung-2016-1304",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-finanzberichte/chef-corp-steigert-erneut-umsatz-im-2-quartal-2016-1306",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-finanzberichte/chef-corp-erzielt-rekordergebnis-1310",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-finanzberichte/neue-partnerschaft-mit-dem-chinesischen-hersteller-chongxing-1314",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-finanzberichte/chef-corp-erzielt-rekordquartal-1316",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-finanzberichte/chef-corp-erzielt-rekordquartal-1322",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-finanzberichte/chef-corp-stellt-starkoechin-maicu-cumberbatch-als-beraterin-ein-1332",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations/ir-finanzberichte",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/investor-relations",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/press/press-contacts/pressekontakte-1378",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/press/press-contacts",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/press/veranstaltungen/chef-corp-grill-wettbewerb-1392",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/press/veranstaltungen/chef-corp-benefiz-golf-turnier-1398",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/press/veranstaltungen/chef-corp-buero-eroeffnungsparty-1402",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/press/veranstaltungen/chef-corp-sicherheits-check-1408",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/press/veranstaltungen",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/press/pressemitteilungen/das-geheimrezept-beim-grosskuechen-design-1428",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/press/pressemitteilungen/6-000-glueckliche-kunden-in-fuenf-jahren-1430",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/press/pressemitteilungen/heisse-tipps-fuer-effiziente-kuehlung-1434",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/press/pressemitteilungen/immer-nah-am-gast-dank-integrierter-technologie-1438",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/press/pressemitteilungen/neue-sicherheitsbestimmungen-fuer-professionelle-kuechen-1444",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/press/pressemitteilungen/portugiesische-kueche-das-unentdeckte-land-der-koestlichkeiten-1448",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/press/pressemitteilungen/weltneuheit-chefwave-hd-die-mikrowellen-fritteuse-von-chef-corp--1456",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/press/pressemitteilungen",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/press",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/unser-anspruch-1146",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company/der-chef-kocht-mit--1488",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/company",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-consumers/aurora-b2c-shop-1512",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-consumers/aurora-b2c",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-consumers/sternekuechen-fuer-hobbykoeche--1518",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-consumers",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/das-ist-chris-er-hat-sein-eigenes-restaurant-in-kapstadt-eroeffnet--1558",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/spass-ist-der-treiber-fuer-alles-1562",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/spass-ist-ihr-antrieb-1566",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/spass-ist-ihr-antrieb-1570",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/erfahren-sie-wie-jacob-seine-kochtraeume-wahr-werden-liess--1574",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/perfektion-ist-dein-mantra-1578",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/erfahren-sie-wie-peter-seinen-traum-verwirklicht-hat--1582",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/perfektion-ist-dein-mantra-1584",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/machen-sie-ihren-traum-wahr-1586",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/sie-sind-der-perfekte-koch-bringen-sie-ihre-traeume-zum-leben-1594",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/lernen-sie-sally-kennen-sie-betreibt-ein-caf%C3%A9-in-florenz--1598",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/lernen-sie-sandra-kennen-sie-wurde-ihre-eigene-koechin--1602",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/sie-sind-der-perfekte-koch-1606",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/sie-sind-der-perfekte-koch-1610",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/praezision-ist-eine-tugend-1612",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/aurora-b2b-shop-1624",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/aurora-b2b",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/geniessen-sie-ihre-leidenschaft",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/bringen-sie-ihre-traeume-zum-leben",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/services/lieferung-1670",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/services/design-1672",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/services/finanzierung-1684",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/services",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/fuer-professionals-1692",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/premiumpartner-der-spitzengastronomie-1694",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/search-results",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/corporate-information/contact-us",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/corporate-information/sitemap",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/corporate-information/sitemap-1924",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/corporate-information",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/embedding-test",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/asset-detail",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/topicpage",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/chef-wave-fryers",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/chef-wave-fryers/chefwave-hd-fritteuse-gross-1546",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/chef-wave-fryers/chefwave-hd-fritteuse-klein-2320",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/blenders-and-food-processors",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/blenders-and-food-processors/kitchenette-knc30-mixer-1556",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/blenders-and-food-processors/browne-bl700-blender-2302",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/blenders-and-food-processors/browne-bl1300-blender-2308",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/blenders-and-food-processors/browne-bl300-blender-2310",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/blenders-and-food-processors/kanetree-kt4000-mixer-2312",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/ranges-and-ovens",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/ranges-and-ovens/chef-range-cr1020-premium-herd-1552",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/ranges-and-ovens/chef-range-cr780-standard-2352",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/ranges-and-ovens/chef-range-cr990-deluxe-2356",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/ranges-and-ovens/chef-range-cr640-easy-2358",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/ranges-and-ovens/chef-range-cr520-basic-2362",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/hoods-and-extractors/chef-extractor-hood-hd800-einbau-1550",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/hoods-and-extractors",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/hoods-and-extractors/chef-extractor-hood-hd800-wandmontage-2336",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/hoods-and-extractors/chef-extractor-hood-hd900-einbau-2340",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/hoods-and-extractors/chef-extractor-hood-hd900-wandmontage-2342",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/cooling-and-storage/chef-cold-storage-ccs95-kuehllager-1646",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/cooling-and-storage",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de/cooling-and-storage/chef-cold-storage-ccs80-kuehllager-2326",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/corporate-de-de/for-professionals/products/catalog-de-de"];

function testEnglishSites(){var i=0;sites.forEach((item) => {i++;testen(item, i.toString());});}
function testGermanSites(){var i=0;seiten.forEach((item) => {i++;testde(item, i.toString()+'_de');});}


testEnglishSites();


/*
function compare(file1, file2){
	return(resemble(file).compareTo(file2).onComplete(function(a){return(a);}));	
}

compare('1.png','2.png');
*/





