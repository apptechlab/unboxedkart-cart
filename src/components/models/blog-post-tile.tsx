import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { BlogPostType } from '../../types/blog-post.type'

interface BlogPostProps {
    blogPost: BlogPostType;
}


const BlogPostTile = (props: BlogPostProps) => {
    const router = useRouter();
    const postId = router.query.id;

    return (
        <div className='rounded-2xl bg-white p-4 m-2 bg-red w-200 h-300'>
            <div>{postId}</div>
            <Image
                src={"assets/images/iphone-14.png"}
                height={200}
                width={200}
                className={"self-center"}
                alt={props.blogPost.title}
            />
            <div className='h-2'></div>
            {/* <p>About Unboxed</p> */}
            <div className='h-5'></div>
            <div className='hover:font-underline'>
                <p className='font-bold text-2xl'>{props.blogPost.title}</p>
            </div>

        </div>

    )
}

export default BlogPostTile