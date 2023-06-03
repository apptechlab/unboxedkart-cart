// function BlogPostHorizontal() {
//     return (
//         <div>
//             Hello blog horizontal
//         </div>
//     )

// }

// export default BlogPostHorizontal;

import React from 'react'
import { BlogPostType } from '../../types/blog-post.type'

interface BlogPostProps {
    blogPost: BlogPostType;
}


const BlogPostHorizontal = (props: BlogPostProps) => {
    const blogPost = props.blogPost;
    return (
        <div className='rounded-2xl bg-white p-2 m-2'>
            {/* <p className='font-bold'>Hello world</p> */}
            <p className='font-bold'>{props.blogPost.title}</p>
            {/* <p className=''>{props.content[0]}</p> */}
        </div>

    )
}

export default BlogPostHorizontal