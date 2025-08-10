// next.config.js
module.exports = {
    i18n: {
        locales: ['en', 'km'], // List of languages
        defaultLocale: 'en', // Default language
    },

    images: {
        // domains: ['sits.local'],
        domains: ['127.0.0.1', 'localhost'], // add all hostnames your images come from
    }
}
