import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './Components/Home/Home';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Quiz from './Components/Quiz/Quiz';
import Error from './Components/Error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/home",
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
          path: "/topics",
          element: <Topics></Topics>
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
      element: <Error></Error>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
