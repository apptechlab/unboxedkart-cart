import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BlogPostType } from '../../types/blog-post.type'
import BlogContentBlock from '../widgets/blog-content-block';

interface BlogPostProps {
    blogPost: BlogPostType;
}


const BlogPostVertical = (props: BlogPostProps) => {
    return (
        <Link href={'/blog-posts/' + props.blogPost.postId}>
            <div className='rounded-2xl bg-white p-4 m-2 bg-red w-200 h-300 self-center w-120 h-300'>
                {/* <Image
                    src={"assets/images/unboxedkart_certified.png"}
                    height={120}
                    width={300}
                    className={"self-center"}
                /> */}
                <div className='h-2'></div>
                <p className='text-black underline'>About Unboxed</p>
                <div className='h-2'></div>
                <div className='hover:font-underline'>
                    <p className='font-bold text-2xl hover:underline'>{props.blogPost.title}</p>
                </div>
                {/* <BlogContentBlock content={props.blogPost.content[0].content} fontSize={props.blogPost.content[0].fontSize} isBold={props.blogPost.content[0].isBold} isItalic={props.blogPost.content[0].isBold} isUnderline={props.blogPost.content[0].isUnderline} linkTo={props.blogPost.content[0].linkTo} /> */}
            </div>
        </Link>


    )
}

export default BlogPostVertical