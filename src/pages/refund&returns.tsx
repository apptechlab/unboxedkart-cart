import React from 'react'
import Layout from '../components/layout/layout';

// const privacy = () => {
//   return (
//     <div>privacy</div>
//   )
// }

// export default privacy

function Privacy() {
    return (
        <div>
            <div className="bg-white mx-2 py-12 px-2 rounded-2xl">
                <p className="text-5xl font-bold text-black">Refund & Returns</p>
                <p className="text-lg font-semibold text-black pl-1">
                    {" "}
                    We always look forward to help you.
                </p>
            </div>
            <div className='m-2 bg-white p-4 rounded-2xl'>
                <p><b>Refund Eligibility</b></p>
                <p>We want you to be completely satisfied with your purchase. If you are not satisfied with your pre-owned item, you may be eligible for a refund or exchange subject to the conditions outlined below.</p>

                <p><b>Returns</b></p>
                <p>You have 3 days from the date of delivery to initiate a return for eligible items. To be eligible for a return, the item must be in its original condition, unused, and in the same packaging as received. Please note that certain items may not be eligible for return due to hygiene reasons or other restrictions as specified in the product description.</p>

                <p><b>Return Process</b></p>
                <p>To initiate a return, please contact our customer support team at +91 850-8484848 with your order details and reason for the return. Our team will provide you with instructions on how to return the item. Please do not return items without contacting us first.</p>

                <p><b>Refunds</b></p>
                <p>Once your returned item is received and inspected, we will notify you of the approval or rejection of your refund. If approved, the refund will be processed to the original payment method used for the purchase within 2 business days. Please note that shipping costs are non-refundable, and you will be responsible for return shipping expenses unless the return is due to an error on our part.</p>

                <p><b>Exchanges</b></p>
                <p>If you wish to exchange an item for a different color, or model, please contact our customer support team to arrange the exchange. The exchanged item will be shipped to you once the original item is returned and processed.</p>

                <p><b>Damaged or Defective Items</b></p>
                <p>If you receive a damaged or defective item, please contact us immediately with photos of the damaged item and packaging. We will assess the situation and provide instructions on how to proceed with a return, exchange, or refund.</p>

                <p><b>Non-Returnable Items</b></p>
                <p>Certain items may not be eligible for return due to various reasons, copyright restrictions, or other legal limitations. Please refer to the product description for any specific return restrictions applicable to the item you purchased.</p>

                <p><b>Customer Support</b></p>
                <p>If you have any questions or need assistance with a return or refund, please contact our customer support team at +91 850-8484848. Our team is available to assist you during our business hours 10 a.m to 6 p.m.</p>

                <p><b>Policy Updates</b></p>
                <p>We reserve the right to update our Refund & Return policy as needed. Any changes to our policy will be communicated to customers through our website or email notifications.</p>

            </div>
        </div>
    )

}

export default Privacy;
Privacy.Layout = Layout;