const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeEvents() {
    try {
        // Fetch webpage HTML
        const response = await axios.get('https://allevents.in/org/%C5%A0tudentski-%C5%BDuri-ljubljana/357874');
        const html = response.data;

        // Load HTML into cheerio
        const $ = cheerio.load(html);

        // Initialize array to store events
        const events = [];

        
        // Iterate over each event element
        $('.event-card').each((index, element) => {
            const event = {};

            // Extract event details
            event.title = $(element).find('.title h3').text().trim();
            event.date = $(element).find('.date').text().trim();
            event.location = $(element).find('.subtitle').text().trim();
            event.link = $(element).attr('data-link');

            // Push event to events array
            events.push(event);
        });

        // Log events
        console.log(events);

    } catch (error) {
        console.error('Error scraping events:', error);
    }
}

// Call scrapeEvents function
scrapeEvents();
