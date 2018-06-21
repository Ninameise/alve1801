var tim = 400;
var chef = 'https://corporate.1804-ci-staging-cms-3.coremedia.vm/corporate'
function testsize(site, shotname=''){
	describe('testing different screen sizes', function(){it('whatever', function(){
		cy.visit(site)
		cy.wait(1000) // ur server too slow
		cy.get('#cm-header').invoke('css', 'position', 'absolute')
		cy.viewport(410, 1000)
		cy.wait(tim)
		cy.screenshot(shotname+'phone')
		cy.viewport(760, 1000)
		cy.wait(tim)
		cy.screenshot(shotname+'tablet')
		cy.viewport(1020, 1000)
		cy.wait(tim)
		cy.screenshot(shotname+'desktop')
		cy.viewport(1190, 1000)
		cy.wait(tim)
		cy.screenshot(shotname+'overflow')
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
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/resource/blob/648/0a2908e04eb032713138147de1f9dae5/chefwave-hd-large-datasheet-pdf-download-data.pdf",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/resource/blob/652/625a5a5eab07d28c2ef267ed79b19f87/chefwave-hd-small-datasheet-pdf-download-data.pdf",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/resource/blob/654/47b232a9ee5f4764338c446206122128/chefwave-hd-large-eu-compliance-pdf-download-data.pdf",
"https://corporate.1804-ci-staging-cms-4.coremedia.vm/resource/blob/656/0575d65eac4df29923df2355f521d556/chefwave-hd-small-eu-compliance-pdf-download-data.pdf",
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

var i=0;

sites.forEach((item) => {testsize(item, i.toString());i++;});





function snaptree(site){
	describe('creating snapshots of all links', function(){it('whatever', function(){
		cy.visit(site)
		// goto site
		//.screenshot() // commented out to speed up testing
		// make a screenshot of it ('/')
		.get('a').each(($el) => 
		{cy.wrap($el).should('have.attr','href').then(
			(href) => {cy.visit(site+href).screenshot()} // make sure it only takes new sites (and not scrolls)
		)}) // eventually to be replaced by snapsite
		// make screenshots of all linked sites '/*'
		})
	})
}

snaptree(chef);
//describe('wtf', function(){it('whatever', function(){cy.visit('https://xkcd.com/').visit('2008')})})






