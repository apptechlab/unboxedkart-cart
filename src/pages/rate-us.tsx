import React from 'react'
import { IoIosApps, IoLogoGoogle, IoMdCall, IoMdContact, IoMdMore, IoMdPhonePortrait } from 'react-icons/io';
import { IoAccessibility, IoAddSharp, IoBook, IoCallOutline, IoCallSharp, IoGlobe, IoList, IoLogoWebComponent, IoMail, IoPhoneLandscape, IoPhoneLandscapeOutline, IoReader, IoStar, IoStorefront } from 'react-icons/io5';
import ListTile from '../components/common/list-tile';
import Layout from '../components/layout/layout';

export default function RateOurService() {
    return (
        <div>
            <ListTile
                icon={<IoStorefront className="h-5 w-5 text-unboxedkartBlue" />}
                title="Rate Us on Google Maps"
                description="On Android and iOS, you can download our mobile application."
                link='/download-us' />
            <ListTile
                icon={<IoStar className="h-5 w-5 text-unboxedkartBlue" />}
                title="Rate Us on Trust Pilot"
                description="This will display where Unboxedkart's actual stores are located."
                link='/stores' />


        </div>
    );
}

RateOurService.Layout = Layout;
