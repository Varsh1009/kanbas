import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div>
      <div>
        <button>Collapse all</button>
        <button>View Progress</button>
        <select
          name="wd-course-home-selection"
          id="wd-course-home-selection-uniq"
        >
          <option value="publis-all">Publish all</option>
        </select>
        <button>+ Module</button>
      </div>

      <table id="wd-home">
        <tr>
          <td valign="top">
            <Modules />
          </td>
          <td valign="top">
            <CourseStatus />
          </td>
        </tr>
      </table>
    </div>
  );
}
