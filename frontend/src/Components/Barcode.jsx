import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';

const Barcode = ({ code }) => {
  const ref = useRef();

  useEffect(() => {
    if (code) {
      JsBarcode(ref.current, code, {
        format: "CODE128",
        width: 2,
        height: 40,
        displayValue: true,
      });
    }
  }, [code]);

  return <svg ref={ref}></svg>;
};

export default Barcode;
