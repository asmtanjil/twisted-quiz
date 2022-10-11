import React from 'react';

const Blog = () => {
  return (
    <div className='mt-8'>
      <div className='my-4 p-4 border-2 rounded-lg border-slate-500 bg-lime-100 mx-8 md:mx-48'>
        <p className='text-2xl font-bold'>Ques:1 <small className='text-2xl font-semibold'>What is the purpose of React Router?</small></p>
        <p className='mt-8'><span className='text-xl font-bold'>Answer: </span>React Router is a standard library for routing in React. React Router is an API for React applications. It uses dynamic routing. React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</p>
      </div>
      <div className='my-4 p-4 border-2 rounded-lg border-slate-500 bg-lime-100 mx-8 md:mx-48'>
        <p className='text-2xl font-bold'>Ques:2 <small className='text-2xl font-semibold'>How does Context API work?</small></p>
        <p className='mt-8'><span className='text-xl font-bold'>Answer: </span>Context provides a way to pass data through the component tree without having to pass props down manually at every level. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
      </div>
      <div className='my-4 p-4 border-2 rounded-lg border-slate-500 bg-lime-100 mx-8 md:mx-48'>
        <p className='text-2xl font-bold'>Ques:3 <small className='text-2xl font-semibold'>Write something about useRef</small></p>
        <p className='mt-8'><span className='text-xl font-bold'>Answer: </span>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
          The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
        </p>
      </div>
    </div>
  );
};

export default Blog;