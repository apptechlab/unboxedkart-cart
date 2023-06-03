import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BlogPostAuthorDetailsType, BlogPostType } from '../../types/blog-post.type'

const BlogPostAuthor = (props: BlogPostAuthorDetailsType) => {
    return (
        <div className='flex flex-row m-4'>
            <div>
                <Image
                    src={"/assets/images/3r.png"}
                    height={300}
                    width={300}
                    layout={'responsive'}
                    alt={props.title}
                />
            </div>
            <div>
                <Link href={props.url}>
                    <p className='underline font-bold'>{props.name}</p>
                </Link>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default BlogPostAuthor