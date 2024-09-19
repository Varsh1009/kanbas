export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><b>Assignment Name</b></label><br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <td align="right" valign="top">
          <label htmlFor="wd-group">Assignment Group</label>
        </td>
        <td>
          {/* <input id="wd-points" value={100} /> */}
          <select name="wd-assignment-group" id="wd-group">
            <option value="assignment_1">Assignment 1</option>
          </select>
        </td>
        <tr>
          <td>
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select name="wd-display-grade-as" id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select name="wd-submission-type" id="wd-submission-type">
              <option value="online">Online</option>
            </select>
            <br />
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td>
            <label htmlFor="none">Online Entry Options</label>
            <br />
            <input
              type="checkbox"
              name="wd-online-entry-options"
              id="wd-text-entry"
              value="text-entry"
            />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input
              type="checkbox"
              name="wd-online-entry-options"
              id="wd-website-url"
              value="website-url"
            />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="wd-online-entry-options"
              id="wd-media-recordings"
              value="media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="wd-online-entry-options"
              id="wd-student-annotation"
              value="student-annotation"
            />
            <label htmlFor="wd-website-url">Student Annotation</label>
            <br />
            <input
              type="checkbox"
              name="wd-online-entry-options"
              id="wd-file-upload"
              value="file-uploads"
            />
            <label htmlFor="wd-website-url">File Uploads</label>
            <br />
            <br />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to"></label>Assign
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label> <br />
            <input
              type="text"
              name="wd-assign-to-name"
              id="wd-assign-to"
              value="Everyone"
            />
          </td>
          <br />
          <br />
        </tr>
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-due-date">Due</label> <br />
            <input
              type="date"
              name="wd-due-name"
              id="wd-due-date"
              value="2024-05-13"
            />
            <br />
            <br />
            <table>
              <tr>
                <td>
                  <label htmlFor="wd-available-from">Available From</label>
                  <br />

                  <input
                    type="date"
                    name="wd-available-from-date-name"
                    id="wd-available-from"
                    value="2024-05-06"
                  />
                </td>
                <td>
                  <label htmlFor="wd-available-until">Until</label>
                  <br />
                  <input
                    type="date"
                    name="wd-until-date-name"
                    id="wd-available-until"
                    value="2024-05-20"
                  />
                </td>
              </tr>
            </table>
            <br />
          </td>
        </tr>
        {/* Complete on your own */}
      </table>
      <hr />
      <div style={{ float: "right" }}>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}
