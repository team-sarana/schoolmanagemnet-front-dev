import { post } from "@/app/lib/api";
import NewsDetail from "@/components/news/NewsDetail";
import { dehydrate, HydrationBoundary, QueryClient, queryOptions } from "@tanstack/react-query";
import React from "react";

interface PageProps {
    params: {
        slug: string; // dynamic param from folder
    };
}

export default async function NewsPage({ params }: PageProps) {
    const { slug } = params;
    const _slug = slug.split("%26").pop() || null;

    if (!_slug) {
        return <div className="text-center p-8">Invalid news slug</div>;
    }

    const id = Number(_slug);

    const queryClient = new QueryClient();

    // Prefetch news detail
    await queryClient.prefetchQuery(
        queryOptions({
            queryKey: ["news_detail", id],
            queryFn: async () =>
                await post({
                    endpoint: "/news/detail",
                    data: { id },
                }),
        })
    );

    // Prefetch related news
    await queryClient.prefetchQuery(
        queryOptions({
            queryKey: ["news_related", id],
            queryFn: async () =>
                await post({
                    endpoint: "/news/related",
                    data: { id },
                }),
        })
    );

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NewsDetail id={id} />
        </HydrationBoundary>
    );
}
