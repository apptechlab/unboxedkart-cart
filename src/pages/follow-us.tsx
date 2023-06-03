import React from 'react'
import { IoIosApps, IoLogoFacebook, IoLogoGoogle, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoMdCall, IoMdContact, IoMdMore, IoMdPhonePortrait } from 'react-icons/io';
import { IoAccessibility, IoAddSharp, IoBook, IoCallOutline, IoCallSharp, IoGlobe, IoList, IoLogoWebComponent, IoMail, IoPhoneLandscape, IoPhoneLandscapeOutline, IoReader, IoStar, IoStorefront } from 'react-icons/io5';
import ListTile from '../components/common/list-tile';
import Layout from '../components/layout/layout';

export default function FollowUs() {
    return (
        <div>
            <ListTile
                icon={<IoLogoInstagram className="h-5 w-5 text-unboxedkartBlue" />}
                title="Follow us on Instagram"
                description="It will help us keep with you updated with latest offers and discounts."
                link='/download-us' />
            <ListTile
                icon={<IoLogoFacebook className="h-5 w-5 text-unboxedkartBlue" />}
                title="Follow us on Facebook"
                description="It will help us keep with you updated with latest offers and discounts."
                link='/stores' />
            <ListTile
                icon={<IoLogoTwitter className="h-5 w-5 text-unboxedkartBlue" />}
                title="Follow us on Twitter"
                description="It will help us keep with you updated with latest offers and discounts."
                link='/stores' />
            <ListTile
                icon={<IoLogoLinkedin className="h-5 w-5 text-unboxedkartBlue" />}
                title="Follow us on LinkedIn"
                description="It will help us keep with you updated with latest offers and discounts."
                link='/stores' />
        </div>
    );
}

FollowUs.Layout = Layout;
