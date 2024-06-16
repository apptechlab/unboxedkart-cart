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
                <p className="text-5xl font-bold text-black">Shipping-Policy</p>
                <p className="text-lg font-semibold text-black pl-1">
                    {" "}
                    We always look forward to help you.
                </p>
            </div>
            <div className='m-2 bg-white p-4 rounded-2xl'>
                <p><b>
                    Shipping Methods</b>
                </p>
                <p>We offer several shipping methods for your convenience, including standard shipping, expedited shipping, and international shipping. The available shipping options may vary depending on your location and the items in your order.
                </p>

                <p><b>Shipping Costs</b></p>
                <p>Shipping costs are calculated based on the weight of your order, the shipping method selected, and your delivery address. You can view the shipping costs for your order during the checkout process before making payment.</p>

                <p><b>Delivery Times</b></p>
                <p>Estimated delivery times will be provided during checkout based on the shipping method selected and your location. Please note that delivery times may vary due to factors such as order processing, shipping carrier delays, and destination customs clearance (for international orders).</p>

                <p><b>Order Processing</b></p>
                <p>Orders are typically processed within 1-3 business days after payment is received. Once your order has been processed, you will receive a confirmation email with tracking information to monitor the status of your shipment.</p>

                <p><b>Tracking and Updates</b></p>
                <p>You can track the status of your order by logging into your account on our website or using the tracking information provided in your confirmation email. We will also send email updates to keep you informed about the progress of your shipment.</p>

                <p><b>Shipping Restrictions</b></p>
                <p>We currently ship to addresses within the India. Please note that certain items may be restricted from shipping to certain locations due to legal or logistical reasons. If your order is affected by shipping restrictions, we will notify you promptly and provide alternative options if available.</p>

                <p><b>Returns and Exchanges</b></p>
                <p>For information about our returns and exchanges policy, please refer to our Returns Policy page. If you need assistance with a return or exchange related to a shipped order, please contact our customer support team for assistance.</p>

                <p><b>Customer Support</b></p>
                <p>If you have any questions or need further assistance regarding shipping, please contact our customer support team at support@unboxedkart.com. Our team is available to assist you during our business hours 10 a.m - 6 p.m.</p>

                <p><b>Policy Updates</b></p>
                <p>We reserve the right to update our shipping policy as needed. Any changes to our shipping policy will be communicated to customers through our website or email communications.</p>

                <p></p>
            </div>
        </div>
    )

}

export default Privacy;
Privacy.Layout = Layout;