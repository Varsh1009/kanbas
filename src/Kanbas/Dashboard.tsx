import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/reactjs.jpg" alt="reactjs" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2002/Home"
          >
            <img src="/images/spanish.jpg" alt="spanish" width={200} />
            <div>
              <h5>CS2002 Spanish </h5>
              <p className="wd-dashboard-course-title">
                Learn Spanish Language
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/4000/Home"
          >
            <img src="/images/course.jpg" alt="aws" width={200} />
            <div>
              <h5>CS4000 AWS</h5>
              <p className="wd-dashboard-course-title">
                Amazon Web Services 
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1400/Home"
          >
            <img src="/images/c++.jpg" alt="cpp" width={200} />
            <div>
              <h5>CS1400 C++</h5>
              <p className="wd-dashboard-course-title">
                C++ Development for beginners
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2100/Home"
          >
            <img src="/images/1.jpg" alt="cpp" width={200} />
            <div>
              <h5>CS2100 SQL </h5>
              <p className="wd-dashboard-course-title">
                Structured Query Language
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2000/Home"
          >
            <img src="/images/1.jpg" alt="ios" width={200} />
            <div>
              <h5>CS2000 IOS Application Development</h5>
              <p className="wd-dashboard-course-title">
                IOS Developer Course
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1100/Home"
          >
            <img src="/images/reactjs.jpg" alt="kotlin" width={200} />
            <div>
              <h5>CS1100 Kotlin</h5>
              <p className="wd-dashboard-course-title">
                Android Development Course
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1000/Home"
          >
            <img src="/images/reactjs.jpg" alt="java" width={200} />
            <div>
              <h5>CS1000 Java</h5>
              <p className="wd-dashboard-course-title">
                Java - Object Oriented Programming Concepts
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
       
      </div>
    </div>
  );
}
