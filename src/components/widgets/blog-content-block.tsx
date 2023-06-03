import Link from 'next/link'
import React from 'react'
import { BlogPostContentType } from '../../types/blog-post.type'

const BlogContentBlock = (props: BlogPostContentType) => {
    return (
        <div className='mx-2 my-0 p-2'>
            {
                props.linkTo != null ? 
                (<Link href={props.linkTo != null ? props.linkTo : ''}>
                    <p className={`
            ${props.isBold ? 'font-bold' : ''} 
            ${props.isItalic ? 'font-italic' : ''}
            ${props.isUnderline ? 'underline' : ''}
            ${props.linkTo != null ? 'underline' : ''}
            ${props.fontSize > 12 ? 'text-md' : ''}
            `}>
                        {props.content}
                    </p>
                </Link>) :
                 (<p className={`
            ${props.isBold ? 'font-bold' : ''} 
            ${props.isItalic ? 'font-italic' : ''}
            ${props.isUnderline ? 'underline' : ''}
            ${props.linkTo != null ? 'underline' : ''}
            `}>
                    {props.content}
                </p>)
            }


        </div >
    )
}

export default BlogContentBlock