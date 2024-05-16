import "./App.css";

function App() {
  return (
    <>
      <h1>CV Builder</h1>
      /** Select for sections to include could use a checkbox section*/
      <div>
        <input type="checkbox" name="section" value="Personal Details" />
        <label>Personal Details</label>
        <input
          type="checkbox"
          name="section"
          value="Education and Qualifications"
        />
        <label>Education and Qualifications</label>
        <input type="checkbox" name="section" value="EMPLOYMENT HISTORY" />
        <label>EMPLOYMENT HISTORY</label>
        <input type="checkbox" name="section" value="CLINICAL EXPERIENCE" />
        <label>CLINICAL EXPERIENCE</label>
        <input type="checkbox" name="section" value="CERTIFICATION" />
        <label>CERTIFICATION</label>
        <input type="checkbox" name="section" value="ACHIEVEMENTS" />
        <label>ACHIEVEMENTS</label>
        <input type="checkbox" name="section" value="HOBBIES" />
        <label>HOBBIES</label>
        <input type="checkbox" name="section" value="REFERENCES" />
        <label>REFERENCES</label>
      </div>
      <div>Personal Details</div>
      <div>Education and Qualifications</div>
      <div>EMPLOYMENT HISTORY</div>
      <div>CLINICAL EXPERIENCE</div>
      <div>CERTIFICATION</div>
      <div>ACHIEVEMENTS</div>
      <div>HOBBIES</div>
      <div>REFERENCES</div>
      /** select for file format */
      <select>
        <option value="pdf">PDF</option>
        <option value="doc">DOC</option>
      </select>
      /** ok <button>Print</button> */
    </>
  );
}

export default App;
