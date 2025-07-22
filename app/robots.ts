
export default async function robots() {
    // const pages = await Api.get('/sitemap/pages');
    // console.log(pages);
    
    return {
        rules: {
            userAgent: '*',
            allow: ['/'],
        },
        sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
    }
}
