import React, {useState} from 'react'; 
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import PostTask from './PostTask';
import './tasksheet.css';

function App() {

  return (
    <div>
      <Navbar
        name = "iService"
        posttask = "Post a task"
        expert = "Become an expert"
        findtask = "Find tasks"
        howitworks = "How it works"
        signin = "Sign in"
      />
      <PostTask
      />
      
      <Footer 
        newsletter = "Sign up for our Newsletter"
        connect = "Connect with us"
      />
    </div>
  );
}

export default App;
