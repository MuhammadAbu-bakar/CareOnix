import React, { useState, useEffect } from "react";
import FileView from "./FileView";


export default function DisplayFiles () {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  // Fetch list of files (for demonstration purposes)
  const fetchFiles = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/files"); // Assume this route lists all files
      if (!response.ok) {
        throw new Error("Failed to fetch files");
      }
      const data = await response.json(); // Assuming response is an object with a 'files' array
      setFiles(data.files); // Assuming response contains a list of file names in 'files'
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div>
      <h1 style={{ color: "black" }}>Admin Management</h1>
      <table>
        <thead style={{ color: "black" }}>
          <tr style={{ color: "black" }}>
            <th>File Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr style={{ color: "black" }} key={file}>
              <td>{file}</td>
              <td>
                <button
                  style={{ color: "black" }}
                  onClick={() => setSelectedFile(file)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Conditionally render file viewer if a file is selected */}
      {selectedFile && (
        <div>
          <h2 style={{ color: "black" }}>Viewing File: {selectedFile}</h2>
          <FileView style={{ color: "black" }} fileName={selectedFile} />
        </div>
      )}
    </div>
  );
};

