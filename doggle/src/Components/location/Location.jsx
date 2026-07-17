import { useState } from "react";

function Location() {
  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState(null);

  const [formData, setFormData] = useState({
    house: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const saveManualAddress = () => {

    const fullAddress =
      `${formData.house}, ${formData.area}, ${formData.landmark}, ${formData.city}, ${formData.state} - ${formData.pincode}`;


    setAddress(fullAddress);


    localStorage.setItem(
      "deliveryAddress",
      fullAddress
    );


    // Address confirmed
    localStorage.setItem(
      "addressSaved",
      "true"
    );


    window.dispatchEvent(
      new Event("storage")
    );


    alert("Address Saved Successfully!");

  };



  const getCurrentLocation = () => {

    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      return;
    }


    navigator.geolocation.getCurrentPosition(

      async (position) => {

        const lat = position.coords.latitude;
        const lng = position.coords.longitude;


        setCoords({
          lat,
          lng
        });


        try {

          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
          );


          const data = await response.json();


          const fullAddress =
            data.display_name;


          setAddress(fullAddress);


          localStorage.setItem(
            "deliveryAddress",
            fullAddress
          );


          localStorage.setItem(
            "addressSaved",
            "true"
          );


          window.dispatchEvent(
            new Event("storage")
          );


        }
        catch(error){

          console.log(error);

        }

      },


      () => {
        alert("Location permission denied");
      }

    );

  };



  return (

    <div className="max-w-2xl mx-auto mt-10 p-5">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Select Delivery Address
      </h1>



      <div className="bg-white shadow-md rounded-xl p-6 space-y-4">


        <input
          type="text"
          name="house"
          placeholder="House / Flat No."
          value={formData.house}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />


        <input
          type="text"
          name="area"
          placeholder="Street / Area"
          value={formData.area}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />


        <input
          type="text"
          name="landmark"
          placeholder="Landmark (Optional)"
          value={formData.landmark}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />


        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />


        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />


        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />



        <button
          onClick={saveManualAddress}
          className="
          w-full 
          bg-red-500 
          hover:bg-red-600 
          text-white 
          py-3 
          rounded-lg 
          font-semibold
          "
        >
          Save Address
        </button>


      </div>



      <div className="flex items-center my-8">

        <div className="flex-1 border-t"></div>

        <span className="px-4 text-gray-500">
          OR
        </span>

        <div className="flex-1 border-t"></div>

      </div>




      <button
        onClick={getCurrentLocation}
        className="
        w-full 
        border-2 
        border-red-500 
        text-red-500 
        hover:bg-red-50 
        py-3 
        rounded-lg 
        font-semibold
        "
      >
        📍 Use Current Location
      </button>





      {address && (

        <div className="
        mt-6 
        p-4 
        border 
        rounded-lg 
        bg-gray-50
        ">

          <h3 className="font-semibold mb-2">
            Selected Address:
          </h3>

          <p>
            {address}
          </p>


        </div>

      )}





      {coords && (

        <iframe
          title="map"
          width="100%"
          height="350"
          className="mt-6 rounded-lg shadow"
          src={`https://maps.google.com/maps?q=${coords.lat},${coords.lng}&z=15&output=embed`}
        />

      )}


    </div>

  );
}


export default Location;