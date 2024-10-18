describe('Search Functionality', () => {
  
  beforeEach(() => {
    
    cy.visit('https://vite-react-alpha-lemon.vercel.app'); //visit
  });

  it('Filters tracks based on search input', () =>{
    cy.get('input[id=":r0:"]').type('Summer Breeze'); //search text input

    cy.get("#tracklist > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-4.css-1udb513 > p").each(($el) => {
      cy.wrap($el).should('contain.text', 'Summer Breeze'); //checking if the text is correct
      
    cy.get("#tracklist").first().within(() => {
     cy.get("button").click(); //functional adding to playlist
        });
    
    cy.get('#playlist').should('contain.text', 'Summer Breeze'); // checking if the playlist contains the propper track

    cy.visit('https://vite-react-alpha-lemon.vercel.app'); //back to the main page
    
    cy.get('#tracklist > div > div:nth-child(1) > div.MuiGrid-root.MuiGrid-item.css-1wxaqej > span > input').eq(0).check();
    cy.get('#tracklist > div > div:nth-child(2) > div.MuiGrid-root.MuiGrid-item.css-1wxaqej > span > input').eq(0).check();
    cy.get('#tracklist > div > div:nth-child(3) > div.MuiGrid-root.MuiGrid-item.css-1wxaqej > span > input').eq(0).check(); //selecting tracks

    cy.get('#tracklist > div > button').click(); //functional adding tracks to playlist

    cy.get('#playlist').should('contain.text', 'Summer Breeze');
    cy.get('#playlist').should('contain.text', 'Autumn Leaves');
    cy.get('#playlist').should('contain.text', 'Winter Winds'); //checking if the tracks added correctly
    });
  });
});

