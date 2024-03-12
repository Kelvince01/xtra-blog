import Image from 'next/image';
import { createClient } from '@/utils/supabase/server';
import { Article } from '@/data/types/article.type';
import Link from 'next/link';

export default async function Home() {
    const supabase = createClient();

    const {
        data: { user }
    } = await supabase.auth.getUser();

    let articles: Article[] = [
        {
            id: 1,
            slug: 'style-guide-101',
            title: 'Style Guide 101',
            description: 'Style Guide 101',
            content: 'Incididunt cupidatat eiusmod consequat amet et id reprehenderit aute fugiat officia. Est cupidatat ipsum esse sit ut. Ipsum ullamco ex aute ut. Magna ullamco esse sint consectetur. Et minim cillum commodo dolore.',
            category: 'CATEGORY'
        },
        {
            id: 2,
            slug: 'welcome-to-nextjs-blog',
            title: 'Welcome to Next.js blog!',
            description: 'Welcome to Next.js blog!',
            content: '<p><b>Hello world</b>, this is my first Next.js blog post and it is written in markdown.</p>\n' + '\n' + '<p>I hope you like it!</p>',
            category: 'CATEGORY'
        }
    ];

    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome to the Xtra Blog</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                    </div>
                </div>
            </section>

            <h4 className="flex justify-center p-0 m-0">Articles:</h4>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {articles.map(function (article, idx) {
                            return (
                                <div className="p-4 lg:w-1/3" key={idx}>
                                    <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{article.category}</h2>
                                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{article.title}</h1>
                                        <p className="leading-relaxed mb-3">{article.description}</p>
                                        <Link className="text-purple-500 inline-flex items-center" href={'/blog/' + article.slug}>
                                            Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                        <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                                1.2K
                                            </span>
                                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                                6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
