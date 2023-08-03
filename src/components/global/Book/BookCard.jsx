import Star from "./Star";

// eslint-disable-next-line react/prop-types
const BookCard = ({ title, price, author, img  , rating}) => {

  const MAX_RATING = 5;

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:cursor-pointer m-2">
      <div className="w-70 h-60 overflow-hidden p-2">
          <img
            className=" object-contain w-full h-full bg-blue-200 p-2 transition-all duration-500 hover:p-0 hover:scale-110"
            src={img}
            alt="product image"
          />
         </div>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {title}
          </h5>{" "}
          <br />
        </a>
        <div className="flex items-center mt-2.5 mb-5">

        {Array.from({ length: MAX_RATING }).map((_, index) => (
        <Star key={index} isActive={index < rating} />
      ))}

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 ml-2 px-2.5 py-0.5 rounded">
          {rating}
          </span>
        </div>
        <h6 className="text-sm font-semibold tracking-tight text-gray-900">
          By {author}
        </h6>{" "}
        <br />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">₹{price}</span>
          <a
            href="#"
            className="text-white bg-[#1976d2] hover:bg-[#1076dc] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
