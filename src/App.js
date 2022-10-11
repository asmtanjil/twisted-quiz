import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './Components/Home/Home';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Quiz from './Components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: "quizTopic/:quizId",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz></Quiz>

        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: "*",
      element: <div className='text-4xl mt-10 mx-5 py-4 bg-blue-200 rounded-md'>
        <h2>Can't Access this Router</h2>
        <h2>404</h2>
      </div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
