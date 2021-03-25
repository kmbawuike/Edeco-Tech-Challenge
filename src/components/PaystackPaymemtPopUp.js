import React from "react";
import { usePaystackPayment } from "react-paystack";
import {Button} from '@material-ui/core'



const PaystackPaymentPopUp = ({price}) => {

  const config = {
    reference: new Date().getTime(),
    email: "kmbawuike@gmail.com",
    amount: price * 100,
    publicKey: "pk_test_001ce9e4e5a636f5fecf0e8ad88452bc43ce2e68",
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
