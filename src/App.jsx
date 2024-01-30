import React from "react";
import Layout from "./components/layout/Layout.jsx";
import About from "./pages/about/about.jsx";
import Techstack from "./pages/TechStack/Techstack.jsx";
import Project from "./pages/Projects/Project.jsx";
import Education from "./pages/Educations/Education.jsx";
import WorkExp from "./pages/workExp/workExp.jsx";
import Contact from "./pages/Contact/Contact.jsx";


function App(){
  return <>
  <Layout></Layout>
  
  <About></About>
  <Education></Education>

<Techstack/>
<Project></Project>
<WorkExp></WorkExp>
<Contact></Contact>

   
  </>
}
export default App;