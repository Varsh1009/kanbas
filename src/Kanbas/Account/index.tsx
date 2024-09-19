import { Navigate, Route, Routes } from "react-router";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigateion";

export default function Account() {
  return (
    <div id="wd-account-screen">
      <h2>Account</h2>

      <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/Kanbas/Account/Sigin" />}
              ></Route>
              <Route path="/Sigin" element={<Signin />}></Route>
              <Route path="/Profile" element={<Profile />}></Route>
              <Route path="/Signup" element={<Signup />}></Route>
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
