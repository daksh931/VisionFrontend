import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../../../store/Slices/cartSlice";
import { cartActions } from "../../../store/Slices/cartSlice";
import { toast } from "react-toastify";

export default function Course(props) {
  // console.log(props)
  const dispatch = useDispatch();

  const { token, userData } = useSelector((state) => state.auth);

  const addToCartHandler = () => {
    if (!token || token == null || !userData || userData == null) {
      alert("login First");
    }
    const { id, name, description, image, price } = props;
    // console.log(id, name, description, image, price)
    // const item={ id, name, description, image, price}

    dispatch(
      cartActions.addItemToCart({ id, name, description, image, price })
    );
    toast.success("Item added to Cart Successfully!");
  };

  return (
    <>
      <div
        className="w-[85vw] max-w-96 sm:max-w-72 p-1 flex flex-col justify-between 
                    shadow-lg hover:shadow-2xl rounded-xl bg-transparent  border border-black/10
                    transition-all duration-300 transform hover:scale-105"
      >
        {/* Course Image */}
        <img
          className="rounded-lg object-cover h-56 w-full"
          src={props.image}
          alt="Course Image"
        />

        {/* Course Details */}
        <div className="flex flex-col mt-3 space-y-2 p-4">
          <h2 className="text-xl font-semibold text-gray-800">{props.name}</h2>
          <p className="text-gray-600 text-sm">{props.description}</p>
          <p className="text-lg font-medium text-blue-600">{`Price - ₹${props.price}`}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between gap-2 mt-4 p-4">
          <button
            className="w-1/2 bg-gray-200 text-gray-700 py-2 rounded-lg
                           hover:bg-gray-300 transition duration-300"
          >
            Add to Cart
          </button>
          <button
            className="w-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg 
                           hover:from-blue-600 hover:to-blue-800 transition duration-300"
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}
