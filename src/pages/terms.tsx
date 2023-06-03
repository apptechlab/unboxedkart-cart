import React from 'react'
import Layout from '../components/layout/layout';

function Terms() {
    return (
        <div>
            <div className="bg-white rounded-2xl mx-2 py-12 px-2">
                <p className="text-5xl font-bold text-black">Terms and Conditions</p>
                <p className="text-lg font-semibold text-black pl-1">
                    {" "}
                    This outline the rules and regulations
                </p>
            </div>
            <div className='bg-white rounded-2xl py-12 px-2 m-2'>
                <p>
                    1. Free gifts are not exchangeable, replaceable, or covered by any warranty
                </p>
                <p>
                    2. All Prices are inclusive of GST and other statutory levies.
                </p>
                <p>
                    3. Other terms and conditions are applicable and can  be found in the store, on the invoice, or the  product details page. 
                </p>
                <p>
                    4. For warranty information on the product, please  refer to the invoice. 
                </p>
                <p>5. The warranty of the product will be void, in case of any external repairs.
                </p>
                <p>6. Unboxedkart reserves its right to ask the customers for identification/payment information.
                </p>
                <p>7. Please check the item you purchased before you leave the store. </p>
                <p>
                    8. In case of any dispute, the jurisdiction will be in the court of Andhra Pradesh.</p>
            </div>
        </div>
    )

}

export default Terms;
Terms.Layout = Layout;
