import BookCard from "../components/global/Book/BookCard";
import Stack from "@mui/material/Stack";
const data = [
  {
    title: "Ramayan",
    price: 1999,
    author: "Sage Valmiki",
    img: "https://rukminim2.flixcart.com/image/416/416/kdlzte80/regionalbooks/f/t/m/shri-ramcharitrmanas-ramayan-extra-large-fornt-by-goswami-original-imafuhbfrnqfds3h.jpeg?q=70"
  },
  {
    title: "Doglapan",
    price: 299,
    author: "Ashneer",
    img: "https://th.bing.com/th/id/OIP.Xj1q9tI2TILctGRLLwLPvAHaL6?pid=ImgDet&rs=1",
  },
  {
    title: "Rich Dad poor Dad",
    price: 200,
    author: "Robert Kiyosaki",
    img: "https://th.bing.com/th/id/OIP.ztAUYljdHqvc6XktUBA-agHaLG?pid=ImgDet&rs=1",
  },
];

const Book = () => {
  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {data.map((ele) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <BookCard
              title={ele.title}
              price={ele.price}
              author={ele.author}
              img={ele.img}
            />
          );
        })}
      </Stack>
    </div>
  );
};

export default Book;
