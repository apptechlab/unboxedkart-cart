import Image from 'next/image';
import React from 'react'
import Layout from '../../components/layout/layout'
import payAtStoreImage from '../../../public/assets/images/more-info/pay-at-store.png'; 
import payAtStoreImage2 from '../../../public/assets/images/3r.png'; 

export default function PayAtStore() {
    return (
        <div>
            <Image
                src={payAtStoreImage2}
                alt='know more about pay at store'
                height={1000}
                width={1000}
                className={"self-center"}
            />
        </div>
    );
}

// export default PayAtStore
PayAtStore.Layout = Layout;