// app/(frontend)/news/[slug]/page.tsx
import NewsDetail from '@/components/news/NewsDetail';

interface PageProps {
    params: {
        slug: string;
    };
}

export default function NewsPage({ params }: PageProps) {
    return <NewsDetail id={params.slug} />;
}
