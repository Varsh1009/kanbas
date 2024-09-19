import { Navigate, Route, Routes } from 'react-router';
import Lab1 from './Lab1'
import TOC from './TOC';
import Lab2 from './Lab2';
import Lab3 from './Lab3';
export default function Labs()
{
    return (
        <div>
        <h1>Labs</h1>
        <h3> Name : Shrivarshini Narayanan <br />
          <h4>Section 3</h4>
        </h3>
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3" element={<Lab3 />} />
          
          
        </Routes>
      </div>
    );
  
}
