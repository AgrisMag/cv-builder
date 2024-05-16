import { useState } from "react";
import "./App.css";
import { Checkbox } from "./components/Checkbox";
import { Panel } from "./components/Panel";

const panelSelectItems = [
  "PERSONAL DETAILS",
  "EDUCATION AND QUALIFICATIONS",
  "EMPLOYMENT HISTORY",
  "CLINICAL EXPERIENCE",
  "CERTIFICATION",
  "ACHIEVEMENTS",
  "HOBBIES",
  "REFERENCES",
];

function App() {
  const [selectedSections, setSelectedSections] = useState<string[]>([]);

  const handleCheckboxChange = (label: string, isChecked: boolean) => {
    setSelectedSections((prev) =>
      isChecked ? [...prev, label] : prev.filter((section) => section !== label)
    );
  };

  return (
    <>
      <h1>CV Builder</h1>
      <Panel>
        {panelSelectItems.map((item) => (
          <Checkbox key={item} label={item} onChange={handleCheckboxChange} />
        ))}
      </Panel>
      {selectedSections.includes("PERSONAL DETAILS") && (
        <div>Personal Details</div>
      )}
      {selectedSections.includes("EDUCATION AND QUALIFICATIONS") && (
        <div>Education and Qualifications</div>
      )}
      {selectedSections.includes("EMPLOYMENT HISTORY") && (
        <div>Employment History</div>
      )}
      {selectedSections.includes("CLINICAL EXPERIENCE") && (
        <div>Clinical Experience</div>
      )}
      {selectedSections.includes("CERTIFICATION") && <div>Certification</div>}
      {selectedSections.includes("ACHIEVEMENTS") && <div>Achievements</div>}
      {selectedSections.includes("HOBBIES") && <div>Hobbies</div>}
      {selectedSections.includes("REFERENCES") && <div>References</div>}
      <select>
        <option value="pdf">PDF</option>
        <option value="doc">DOC</option>
      </select>
      <button>Print</button>
    </>
  );
}

export default App;
