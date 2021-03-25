import React from "react";
import { usePaystackPayment } from "react-paystack";
import {Button} from '@material-ui/core'



const PaystackPaymentPopUp = ({price}) => {
  const config = {
    reference: new Date().getTime(),
    email: "kmbawuike@gmail.com",
    amount: price * 100,
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
    label: 'Afri Stiches',
    metadata: {
        item: 'Book'
    }
  };
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <Button
      style={{fontSize: '10px'}}
        variant="contained"
        size={'small'}
        onClick={() => {
          initializePayment();
        }}
      >
        BUY
      </Button>
    </div>
  );
};

export default PaystackPaymentPopUp;
