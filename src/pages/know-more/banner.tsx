import React from 'react'
import { IoIosApps, IoLogoFacebook, IoLogoGoogle, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoMdCall, IoMdContact, IoMdMore, IoMdPhonePortrait } from 'react-icons/io';
import { IoAccessibility, IoAddSharp, IoBook, IoCallOutline, IoCallSharp, IoGlobe, IoList, IoLogoWebComponent, IoMail, IoPhoneLandscape, IoPhoneLandscapeOutline, IoReader, IoStar, IoStorefront } from 'react-icons/io5';
import ListTile from '../../components/common/list-tile';
import Layout from '../../components/layout/layout';

export default function FollowUs() {
    return (
        <div>
            <ListTile
                icon={<IoGlobe className="h-5 w-5 text-unboxedkartBlue" />}
                title="Visit our website"
                description="This will direct you to UnboxedKart's official website."
                link='/download-us' />
            <ListTile
                icon={<IoMdPhonePortrait className="h-5 w-5 text-unboxedkartBlue" />}
                title="Download our Mobile Application"
                description="This will direct you to UnboxedKart's official website."
                link='/download-us' />
            <div className='grid grid-cols-2'>
                <ListTile
                    icon={<IoCallSharp className="h-5 w-5 text-unboxedkartBlue" />}
                    title="Call Vinay B (+91 7097070707)"
                    description="Click here to call Vinay B (Unboxedkart)"
                    link={"tel:+91-7097070707"} />
                <ListTile
                    icon={<IoCallSharp className="h-5 w-5 text-unboxedkartBlue" />}
                    title="Call Unboxedkart (+91 850-8484848)"
                    description="Click here to save call Unboxedkart"
                    link={"tel:+91-8508484848"} />
            </div>
            <div className='grid grid-cols-2'>
                <ListTile
                    icon={<IoMdContact className="h-5 w-5 text-unboxedkartBlue" />}
                    title="Save Vinay B's Contact Info"
                    description="Click here to save"
                    link={"https://unboxedkart-india.s3.ap-south-1.amazonaws.com/contacts/vinay.vcf"} />
                <ListTile
                    icon={<IoMdContact className="h-5 w-5 text-unboxedkartBlue" />}
                    title="Save Unboxedkart's Contact Info"
                    description="Click here to save"
                    link={"https://unboxedkart-india.s3.ap-south-1.amazonaws.com/contacts/unboxedkart.vcf"} />
            </div>
            <ListTile
                icon={<IoStorefront className="h-5 w-5 text-unboxedkartBlue" />}
                title="Locate our stores"
                description="This will display where Unboxedkart's actual stores are located."
                link='/stores' />
            <ListTile
                icon={<IoMail className="h-5 w-5 text-unboxedkartBlue" />}
                title="Email Us"
                description="This will enable you to email unboxedkart support directly."
                link={"mailto:enquire@unboxedkart.com"} />

            <ListTile
                icon={<IoReader className="h-5 w-5 text-unboxedkartBlue" />}
                title="Know more about Unboxedkart"
                description="Learn more about unboxedkart."
                link='/about-us' />
            <ListTile
                icon={<IoBook className="h-5 w-5 text-unboxedkartBlue" />}
                title="Visit our blog"
                description="You'll be taken to the Unboxedkart official blog by clicking this."
                link='/blog' />
        </div>
    );
}

FollowUs.Layout = Layout;
