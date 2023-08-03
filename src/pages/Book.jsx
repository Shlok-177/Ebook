import BookCard from "../components/global/Book/BookCard";
const data = [
  {
    title: "Animal Farm",
    price: 1999,
    author: "George Orwell",
    rating: 5,
    img: "https://cdn.kobo.com/book-images/55e6b5f0-dd1f-4aa8-b63a-e187dd5a852b/353/569/90/False/animal-farm-nineteen-eighty-four.jpg"
  },
  {
    title: "Doglapan",
    price: 299,
    author: "Ashneer",
    rating: 3,
    img: "https://th.bing.com/th/id/OIP.Xj1q9tI2TILctGRLLwLPvAHaL6?pid=ImgDet&rs=1",
  },
  {
    title: "Rich Dad poor Dad",
    price: 200,
    author: "Robert Kiyosaki",
    rating: 1,
    img: "https://th.bing.com/th/id/OIP.ztAUYljdHqvc6XktUBA-agHaLG?pid=ImgDet&rs=1",
  },
];

const Book = () => {
  return (
    <>
    <h1 className="font-bold text-5xl text-center mt-10">Books</h1>
    <div className="flex w-[80%] m-auto justify-between my-10 flex-wrap">
        {data.map((ele) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <BookCard
            title={ele.title}
              price={ele.price}
              author={ele.author}
              img={ele.img}
              rating={ele.rating}
            />
          );
        })}
    </div>

 </>
  );
};

export default Book;
