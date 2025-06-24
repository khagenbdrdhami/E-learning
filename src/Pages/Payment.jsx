import React from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from "crypto-js";


function Payment() {
  const location = useLocation();
  const amount = location.state.totalAmount;
  const taxAmount = +(amount * 0.15).toFixed(2);
  const serviceCharge = 100;
  const totalAmount = amount + taxAmount + serviceCharge;
  const transaction_uuid=uuidv4();


let Message = `total_amount=${totalAmount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`
 var hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
 var signature = CryptoJS.enc.Base64.stringify(hash);
 


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg border-1 border-gray-300">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-2 ">
          Pay with eSewa
        </h2>
        <p className="border-b-1 border-teal-700  mb-4"></p>

        <form
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          method="POST"
          className="space-y-6"
        >
          {/* Base Amount */}
          <div>
            <label htmlFor="amount" className="text-sm font-medium text-gray-700">
              Base Amount
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={amount}
              readOnly
              className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-800"
            />
          </div>

          {/* Tax */}
          <div>
            <label htmlFor="tax_amount" className="text-sm font-medium text-gray-700">
              Tax (15%)
            </label>
            <input
              type="text"
              id="tax_amount"
              name="tax_amount"
              value={taxAmount}
              readOnly
              className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-800"
            />
          </div>

          {/* Service Charge */}
          <div>
            <label htmlFor="product_service_charge" className="text-sm font-medium text-gray-700">
              Service Charge
            </label>
            <input
              type="text"
              id="product_service_charge"
              name="product_service_charge"
              value={serviceCharge}
              readOnly
              className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-800"
            />
          </div>

          {/* Total */}
          <div>
            <label htmlFor="total_amount" className="text-sm font-medium text-gray-700">
              Total Amount
            </label>
            <input
              type="text"
              id="total_amount"
              name="total_amount"
              value={totalAmount}
              readOnly
              className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-700 font-semibold "
            />
          </div>

          {/* Hidden Fields */}
          <div className="flex justify-between items-center">
          
          <input
            type="hidden"
            id="product_delivery_charge"
            name="product_delivery_charge"
            value="0" 
            required
            readOnly
              className="mt-1 w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-700 font-semibold "
          />
        </div>
          <input type="hidden" name="transaction_uuid" value={transaction_uuid} />
          <input type="hidden" name="product_code" value="EPAYTEST" />
          <input
            type="hidden"
            name="success_url"
            value="http://localhost:5173/success"
          />
          <input
            type="hidden"
            name="failure_url"
            value="https://developer.esewa.com.np/failure"
          />
          <input
            type="hidden"
            name="signed_field_names"
            value="total_amount,transaction_uuid,product_code"
          />
          <input
            type="hidden"
            name="signature"
            value={signature}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-3 rounded-md font-semibold hover:bg-teal-800 transition"
          >
            Proceed to Pay
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
