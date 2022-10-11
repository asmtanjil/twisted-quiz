import image from "../../images/mac.jpg"
import Topics from "../Topics/Topics";

const Home = () => {
  return (
    <div>

      <div className='flex flex-col justify-between md:flex-row gap-4 mx-8 md:mx-48 my-12 md:my-20 py-2 border-2 border-slate-500 rounded-lg'>
        <img className='m-4 h-32 md:h-40' src={image} alt="" />
        <div className='m-4 '>
          <p className='text-xl font-semibold p-4 text-center'>As you learn the fundamentals of web development and look to enhance your knowledge, it's important to scour the internet to see what other people are doing and saying. While it's great to stay up-to-date on trends through magazines and books, web development blogs provide you with an abundance of fresh, free content. Blogs have become increasingly more popular over the years and even though sports and fashion blogs led the charge at first, it's now very likely that every topic out there has at least one blog dedicated to it.</p>
        </div>
      </div>
      <Topics></Topics>

    </div>
  );
};

export default Home;