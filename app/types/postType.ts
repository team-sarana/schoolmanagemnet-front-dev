type Post = {
    id: number
    slug: string
    title: {
        rendered: string
    }
    acf: {
        image: {
            url: string
            alt: string
        }
        short_description: string
    }
}