describe('URLs test with final URL', () => {
  it('should test a list of URLs and log their final URLs', function () {
    const username = 'abus';
    const password = 'r9z+Dr-6';

    cy.fixture('urls.txt').then((urls) => {
      // Split the URLs into an array
      const urlArray = urls.split('\n');
      // Remove any empty lines
      const filteredUrls = urlArray.filter((url) => url !== '');

      // Test each URL
      filteredUrls.forEach((url) => {
        cy.request({
          url: 'https://' + url, // Provide the full URL with the protocol
          auth: {
            username: username,
            password: password
          },
          followRedirect: false // Do not follow redirects
        }).then((response) => {
          if (response.status === 301 || response.status === 302) { // Check if there is a redirect
            const redirectUrl = response.headers['location']; // Get the redirect URL
            cy.request({
              url: 'https://' + redirectUrl, // Provide the full redirect URL with the protocol
              auth: {
                username: username,
                password: password
              },
              followRedirect: false // Do not follow redirects
            }).then((redirectResponse) => {
              // Log the final URL
              cy.log(`${url} redirects to ${redirectResponse.url}`);
            });
          } else {
            // Log the URL if there is no redirect
            cy.log(`${url} has no redirect`);
          }
        });
      });
    });
  });
});
