
class HomePage {
  static homeDetails(role_name,country_name){
    cy.get('#mui-2').type(role_name);
    cy.get('#mui-2-option-0').click();
    cy.get('#mui-4').type(country_name)
    cy.get('#mui-4-option-0').click();

  }
}

export default HomePage;




