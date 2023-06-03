import Image from 'next/image';
import React from 'react'
import Layout from '../../components/layout/layout'
import aboutUnboxedkartImage from '../../../public/assets/images/more-info/pay-at-store.png'; 

export default function AboutUnboxedkart() {
    return (
        <div>
            <p>hello unboxedkart</p>
            <div>
                
            </div>
            <Image
                src={aboutUnboxedkartImage}
                alt='know more about pay at store'
                height={500}
                width={500}
                className={""}
            />
        </div>
    );
}

AboutUnboxedkart.Layout = Layout;