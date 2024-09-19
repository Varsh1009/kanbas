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
                Learn Languages
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
            <img src="/images/spanish.jpg" alt="aws" width={200} />
            <div>
              <h5>CS1111</h5>
              <p className="wd-dashboard-course-title">
                XYZ 
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
            <img src="/images/spanish.jpg"" alt="cpp" width={200} />
            <div>
              <h5>CS2222</h5>
              <p className="wd-dashboard-course-title">
                COURSE2
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
              <h5>CS3333 </h5>
              <p className="wd-dashboard-course-title">
                COURSE3
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
              <h5>CS4444</h5>
              <p className="wd-dashboard-course-title">
                COURSE4
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
              <h5>CS5555</h5>
              <p className="wd-dashboard-course-title">
                COURSE5
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
              <h5>CS6666</h5>
              <p className="wd-dashboard-course-title">
                COURSE6
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
       
      </div>
    </div>
  );
}
