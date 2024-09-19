import { Link } from "react-router-dom";

export default function Profile()
{
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <input id="wd-username" value="Kyle" placeholder="username" /> <br />
            <input id="wd-password" value="123456" placeholder="password" type="password" /> <br />
            <input id="wd-firstname" value="Kyle" placeholder="First Name" /> <br />
            <input id="wd-lastname" value="Richards" placeholder="Last Name" /> <br />
            <input id="wd-dob" value="2024-01-01" type="date" /> <br />
            <input id="wd-email" value="Kyle@Richards" type="email" /> <br />
            <select id="wd-role">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select> <br />
            <Link to="/Kanbas/Account/Signin">Sign out</Link>
        </div>
    );
}
