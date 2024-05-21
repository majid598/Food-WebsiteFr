import { Country, State, City } from "country-state-city";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../redux/reducers/cartReducer";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const [countrySelected, setCountrySelected] = useState("");
  const [shippingInfo, setShippingInfo] = useState({
    houseNumber: "",
    city: "",
    country: "",
    state: "",
    pinCode: "",
    phoneNumber: "",
  });
  const changeHandler = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingInfo(shippingInfo));
    setShippingInfo({
      houseNumber: "",
      city: "",
      country: "",
      state: "",
      pinCode: "",
      phoneNumber: "",
    });
    navigate("/order/confrim");
  };

  useEffect(() => {
    if (items.length < 1) return navigate("/cart");
  }, []);

  return (
    <div className="shipping w-full h-[calc(100vh-5rem)] bg-pink-200">
      <main className="max-w-[900px] bg-white mx-auto p-24 h-full">
        <h1 className="text-5xl font-light text-center uppercase text-zinc-600">
          Shipping Details
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center mt-10 gap-5"
        >
          <div className="flex items-center justify-between w-full">
            <label>H.No.</label>
            <input
              type="text"
              className="w-[450px] p-2 border-[1px] border-black/30 rounded-md outline-none"
              placeholder="Enter House No."
              name="houseNumber"
              value={shippingInfo.houseNumber}
              onChange={changeHandler}
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <label>City</label>
            <input
              type="text"
              className="w-[450px] p-2 border-[1px] border-black/30 rounded-md outline-none"
              placeholder="Enter City"
              name="city"
              value={shippingInfo.city}
              onChange={changeHandler}
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <label>Country</label>
            <select
              name="country"
              value={shippingInfo.country}
              onChange={changeHandler}
              className="w-[450px] p-2 border-[1px] border-black/30 rounded-md outline-none"
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option
                    value={i.isoCode}
                    onClick={() => setCountrySelected(i.name)}
                    key={i.isoCode}
                  >
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex items-center justify-between w-full">
            <label>State</label>

            <select
              name="state"
              value={shippingInfo.state}
              onChange={changeHandler}
              className="w-[450px] p-2 border-[1px] border-black/30 rounded-md outline-none"
            >
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry(countrySelected).map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex items-center justify-between w-full">
            <label>Pin Code</label>
            <input
              type="number"
              className="w-[450px] p-2 border-[1px] border-black/30 rounded-md outline-none"
              placeholder="Enter Pincode"
              name="pinCode"
              value={shippingInfo.pinCode}
              onChange={changeHandler}
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <label>Phone No.</label>
            <input
              type="number"
              className="w-[450px] p-2 border-[1px] border-black/30 rounded-md outline-none"
              placeholder="Enter Phone No."
              name="phoneNumber"
              value={shippingInfo.phoneNumber}
              onChange={changeHandler}
            />
          </div>
          <button
            type="submit"
            className="w-2/5 p-3 bg-pink-600 rounded-md font-bold text-xl text-white"
          >
            Confirm Order
          </button>
        </form>
      </main>
    </div>
  );
};

export default Shipping;
