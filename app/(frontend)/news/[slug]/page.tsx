
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import React from 'react'

// SSR
const getDetailsPostBySlug = async (slug: string): Promise<Post | null> => {
    try {
        const res = await axios.get(
            `http://sits.local/wp-json/wp/v2/posts?slug=${slug}`
        );
        return res.data[0] ?? null;
    } catch (err) {
        console.error("Failed to fetch post:", err);
        return null;
    }
};

type Props = {
    params:
    Promise<{ slug: string }>;
};

export default async function DetailPost(props: Props) {
    // const router = useRouter();
    const { params } = props;
    const post = await getDetailsPostBySlug((await params).slug);

    if (!post) return notFound;

    return (
        <>
            <div className='section-padding'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-8">
                            <div>
                                <Image
                                    width={600}
                                    height={300}
                                    src={post.acf?.image?.url}
                                    alt={post.acf?.image?.alt || post.title.rendered}
                                    className="w-full h-auto rounded-lg mb-6"
                                />
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    {post.title.rendered}
                                </h1>
                                <p className="text-gray-600 mb-4">{post.acf?.short_description}</p>
                                <div className="text-gray-800 leading-relaxed">
                                    {post.acf?.short_description}
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <h4 className='mb-3'>Related News</h4>
                            <Link href={`news/${post.slug}`} className='row'>
                                <div className='col-5'>
                                    <Image
                                        width={500}
                                        height={300}
                                        src={post.acf?.image?.url}
                                        alt={post.acf?.image?.alt || post.title.rendered}
                                        className="w-full h-auto rounded-lg mb-6"
                                    />
                                </div>
                                <div className='col-7'>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                        {post.title.rendered}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-desc">{post.acf?.short_description}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


