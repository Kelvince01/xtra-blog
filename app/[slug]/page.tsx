import Link from 'next/link';
import Head from 'next/head';

export default function Post(props: any) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
            </Head>
            <article>
                <h1>{props.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: props.content }} />
                <div>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
            </article>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -mx-4 -my-8">
                        <div className="py-8 px-4 lg:w-1/3">
                            <div className="h-full flex items-start">
                                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                                    <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                                </div>
                                <div className="flex-grow pl-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-purple-500 mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">The 400 Blows</h1>
                                    <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <a className="inline-flex items-center">
                                        <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span className="flex-grow flex flex-col pl-3">
                                            <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
