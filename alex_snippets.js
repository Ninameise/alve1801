var tim = 1000;
var chef = 'https://corporate.1804-ci-staging-cms-3.coremedia.vm/corporate'
function testsizes(site){
  // takes a site and returns snaps of all the different sizes
	describe('testing different screen sizes', function(){it('whatever', function(){
		cy.visit(site)
		cy.viewport(410, 1000)
		cy.wait(tim)
		cy.screenshot('screen1')
		cy.viewport(760, 1000)
		cy.wait(tim)
		cy.screenshot('screen2')
		cy.viewport(1020, 1000)
		cy.wait(tim)
		cy.screenshot('screen3')
		cy.viewport(1190, 1000)
		cy.wait(tim)
		cy.screenshot('screen4')
		})
	})
}

function snaptree(site){
  // working on it . . .
	var sites_var = [];
	describe('creating snapshots of all links', function(){it('whatever', function(){
		sites_var = cy.visit(site).get('a') // I hope
		})
	})
	function snapsite(site){
		describe('snapshotting '+site, function(){it('whatever', function(){cy.visit(site).snapshot()})})
	}
	while(sites_var.length<0){
		csite = sites_var[0];
		sites_var = sites_var.slice(1);
		snapsite(csite);
	}
}

snaptree(chef);
