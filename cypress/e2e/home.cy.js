describe('Homepage', () => {
	it('displays login form', () => {
		cy.visit('/');
		cy.contains('h1', 'Message Capsules 5000');
		cy.contains('label', 'username');
		cy.contains('label', 'password');
	});

	it('logins in valid user', () => {
		cy.visit('/');
		cy.get('#username').type('test@example.com');
		cy.get('#passwd').type('password');
		cy.get('button').click();
		cy.contains('h2', 'My Message Capsules');
	});
})
