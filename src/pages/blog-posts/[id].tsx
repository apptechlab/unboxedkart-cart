import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/layout';
import BlogContentBlock from '../../components/widgets/blog-content-block';
import BlogPostAuthor from '../../components/widgets/blog-post-author';
import { fetchSingleBlogPost } from '../../handler-functions/blog-posts/get-single-blog-post';
import { BlogPostType } from '../../types/blog-post.type'
import { blogPosts } from '../../pages/blog';

interface BlogPostProps {
    // blogPost: BlogPostType;
    postId: any
}

export default function BlogPostTile() {
    const router = useRouter();
    const slug = router.query.id;
    // const postId : string= slug != undefined ? router.query.id : 0;
    const [isLoading, setIsLoading] = useState(false);
    // const [blogPost, setBlogPost] = useState<BlogPostType>();

    // async function fetchproduct(pId: String) {
    //     console.log("getting product data");
    //     if (pId != null) {
    //         const data = await fetchSingleBlogPost(pId);
    //         console.log("fetched data", typeof data);
    //         setBlogPost(data);
    //         setIsLoading(false);
    //     }
    // }

    // const sampleBlogPost: BlogPostType = {
    //     "title": "Why should you purchase pre-owned instead of new product?",
    //     "authorDetails": {
    //         "name": "Sunil B",
    //         "url": "https://imsunil.com",
    //         "photoUrl": "/assets/images/iphone-14.png",
    //         "title": "Web & Mobile Application Developer"
    //     },
    //     "imageUrl": "/assets/images/3r.png",
    //     "content": [
    //         {
    //             "content": "Who wouldn’t want to drive a vehicle built by a company who’s sense of fit and finish, its attention to the user’s experience is second to none? A vehicle we could facilely call The iPhone of EVs — although “Apple Car” is a powerful enough monicker.",
    //             "fontSize": 12,
    //             "isBold": false,
    //             "isItalic": false,
    //             "isUnderline": false,

    //         },
    //         {
    //             "content": "That was my conclusion in the August 21 Monday Note, Apple Car: Software and Money. But there’s another side to the story. As the sages insist, we don’t understand a problem, an idea, a case unless we’re able to see, to plead both sides. So, I’ll attempt to argue that the Apple Car is a bad idea",
    //             "fontSize": 12,
    //             "isBold": false,
    //             "isItalic": false,
    //             "isUnderline": false,
    //             "linkTo": "google.com"
    //         },
    //         {
    //             "content": "Who wouldn’t want to drive a vehicle built by a company who’s sense of fit and finish, its attention to the user’s experience is second to none? A vehicle we could facilely call The iPhone of EVs — although “Apple Car” is a powerful enough monicker.",
    //             "fontSize": 12,
    //             "isBold": false,
    //             "isItalic": false,
    //             "isUnderline": true,
    //         },
    //         {
    //             "content": "\"That was my conclusion in the August 21 Monday Note, Apple Car: Software and Money. But there’s another side to the story. As the sages insist, we don’t understand a problem, an idea, a case unless we’re able to see, to plead both sides. So, I’ll attempt to argue that the Apple Car is a bad idea\"",
    //             "fontSize": 12,
    //             "isBold": true,
    //             "isItalic": false,
    //             "isUnderline": false,
    //         },
    //     ]
    // };

    // useEffect(() => {
    // fetchproduct(postId as string);
    // }, []);


    return (
        isLoading ?
            <div>Loading</div> :
            <div>
                <div className='rounded-2xl bg-white p-4 m-2 bg-red w-200 h-300'>
                    <div className='m-4'>
                        <p className='text-left text-2xl font-bold'>{blogPosts[0].title}</p>
                    </div>
                    {/* <div>
                        {
                            blogPosts[parseInt(slug as string)].content?.map((content, index) => (<BlogContentBlock key={index} content={content.content} fontSize={content.fontSize} isBold={content.isBold} isItalic={content.isBold} isUnderline={content.isUnderline} linkTo={content.linkTo} />))

                        }
                    </div> */}
                    {/* <div>
                        <BlogPostAuthor
                            name={blogPosts[parseInt(slug as string)].authorDetails.name}
                            url={blogPosts[parseInt(slug as string)].authorDetails.url}
                            photoUrl={blogPosts[parseInt(slug as string)].authorDetails.photoUrl}
                            title={blogPosts[parseInt(slug as string)].authorDetails.title}
                        />
                    </div> */}

                </div>
            </div>


    )
}

BlogPostTile.Layout = Layout;
