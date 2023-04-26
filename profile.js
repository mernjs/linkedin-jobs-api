// TypeScript
const { LinkedInProfileScraper } = require('linkedin-profile-scraper');
 
// Plain Javascript
// const { LinkedInProfileScraper } = require('linkedin-profile-scraper')
 
(async() => {
  const scraper = new LinkedInProfileScraper({
    sessionCookieValue: 'LI_AT_COOKIE_VALUE',
  });
 
  // Prepare the scraper
  // Loading it in memory
  await scraper.setup()
 
  const result = await scraper.run('https://www.linkedin.com/in/vprtsingh/')
  
  console.log(result)
})()