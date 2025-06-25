import { useState } from "react";
import axios from "axios";
import Barcode from "../Components/Barcode";

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
            <div className="mt-6 border p-4 rounded shadow-lg max-w-md w-full text-left">
              <h2 className="text-xl font-bold mb-2">Shipment Info</h2>
              <p>
                <strong>Tracking Code:</strong> {data.code}
              </p>
              <p>
                <strong>Shipper:</strong> {data.shipper.name} -{" "}
                {data.shipper.city}
              </p>
              <p>
                <strong>Receiver:</strong> {data.receiver.name} -{" "}
                {data.receiver.city}
              </p>
              <p>
                <strong>Status:</strong> {data.shipment.status}
              </p>
              <p>
                <strong>Weight:</strong> {data.shipment.weight}
              </p>
              <div className="mt-4">
                <Barcode code={data.code} />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default TrackingGoods;
