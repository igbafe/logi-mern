import { useState } from "react";
import axios from "axios";
import Barcode from "../Components/Barcode";
import { BsGlobe2 } from "react-icons/bs";

function TrackingGoods() {
  const [code, setCode] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{8}$/.test(code)) {
      setError("Please enter a valid 8-digit tracking number.");
      return;
    }

    try {
      const res = await axios.get(`http://localhost:5000/api/barcode/${code}`);
      if (res.data.success) {
        setData(res.data.data);
        setError("");
        console.log("Tracking data:", res.data.data);
      } else {
        setError(res.data.message);
        setData(null);
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching tracking information.");
      setData(null);
    }
  };

  return (
    <div>
      <section>
        <div className="text-center items-center justify-center flex flex-col min-h-screen p-4 gap-4">
          <h1 className="text-3xl font-bold">Tracking Goods</h1>
          <p>
            Track your goods in real-time with our advanced tracking system.
          </p>

          <form className="tracking-form" onSubmit={handleSubmit}>
            <div className="w-[400px] flex justify-center bg-white h-[53px] rounded-xl shadow-md">
              <input
                type="text"
                id="tracking-number"
                name="tracking-number"
                className="w-[300px] bg-none outline-none flex-2 p-2"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                placeholder="Enter 8-digit Tracking Number"
              />
              <button
                className="bg-customBlue text-white flex-1 rounded-lg w-full"
                type="submit"
              >
                Track
              </button>
            </div>
          </form>

          {error && <p className="text-red-500">{error}</p>}

          {data && (

            <div className="mt-6 border px-24 py-10 rounded shadow-lg max-w-5xl w-full">
              <div className="items-center justify-center flex flex-col mb-4">
                <BsGlobe2 className="w-10 h-10 text-[#1e3a8a]" />
                <Barcode code={data.code} />
              </div>
              <div className="flex justify-between gap-x-4 mb-10 text-gray-400">
                <div className="w-full text-left flex flex-col gap-2">
                  <h2 className="border-b-2 border-gray-400 text-left mb-6">Shipper Information</h2>
                  <p> {data.shipper.name}</p>
                  <p> {data.shipper.address}</p>
                  <p> {data.shipper.phone}</p>
                  <p> {data.shipper.email}</p>
                </div>
                <div className="w-full text-right flex flex-col gap-2">
                  <h2 className="border-b-2 border-gray-400 text-right mb-6">Receiver Information</h2>
                  <p>{data.receiver.name}</p>
                  <p> {data.receiver.address}</p>
                  <p> {data.receiver.phone}</p>
                  <p> {data.receiver.email}</p>
                </div>
              </div>
              <div className="w-full text-left flex flex-col  text-gray-400 gap-2">
                <h2 className="border-b-2 border-gray-400 text-left mb-6">Shippment Information</h2>
                <div className="flex justify-between">
                  <div className="w-full flex  flex-col gap-2">
                    <div>
                      <p className="font-bold">Carrier</p>
                      <p>{data.shipment.carrier}</p>
                    </div>
                    <div>
                      <p className="font-bold">Carrier ID</p>
                      <p>{data.shipment.carrierId}</p>
                    </div>
                    <div>
                      <p className="font-bold">Destination</p>
                      <p>{data.shipment.destination}</p>
                    </div>
                    <div>
                      <p className="font-bold">Mode</p>
                      <p>{data.shipment.mode}</p>
                    </div>
                    <div>
                      <p className="font-bold">Origin</p>
                      <p>{data.shipment.origin}</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <div>
                      <p className="font-bold">Payment Mode</p>
                      <p>{data.shipment.paymentMode}</p>
                    </div>
                    <div>
                      <p className="font-bold">Product</p>
                      <p>{data.shipment.product}</p>
                    </div>
                    <div>
                      <p className="font-bold">Pickup Date</p>
                      <p>{data.shipment.pickupDate}</p>
                    </div>
                    <div>
                      <p className="font-bold">Pickup Time</p>
                      <p>{data.shipment.pickupTime}</p>
                    </div>
                    <div>
                      <p className="font-bold">Quantity</p>
                      <p>{data.shipment.quantity}</p>
                    </div>
                  </div>
                  <div>
                      <p className="font-bold">Weight</p>
                      <p>{data.shipment.weight}</p>
                    </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default TrackingGoods;
