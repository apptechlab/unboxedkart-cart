import Link from 'next/link'
import React from 'react'

interface listTileProps {
    title: string;
    description: string;
    link: string;
    icon : any;
}


const ListTile = (props: listTileProps) => {
    return (
        <div className='my-3'>
            <Link href={props.link}>
                <div className="bg-white p-4 my-0 md:my-2 mx-2 rounded-2xl">
                    {props.icon}
                    <div className='h-2'></div>
                    <h2 className="text-unboxedkartBlue text-l font-bold">{props.title}</h2>
                    <h3 className='text-sm py-1'>{props.description}</h3>
                </div>
            </Link>

        </div>

    )
}

export default ListTile