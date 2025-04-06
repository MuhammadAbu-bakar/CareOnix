import React, { useState, useEffect } from "react";

const FileView = ({ fileName }) => {
  const [fileUrl, setFileUrl] = useState(null);

  // Function to fetch the file URL from the backend
  const fetchFileUrl = async () => {
    try {
      // Fetch file as a Blob (binary data)
      const response = await fetch(
        `http://localhost:5000/api/file/${fileName}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch file");
      }

      // Convert response to Blob (binary data)
      const fileBlob = await response.blob();
      const fileUrl = URL.createObjectURL(fileBlob); // Create an object URL for the file

      setFileUrl(fileUrl); // Set the file URL to display the file
    } catch (error) {
      console.error("Error fetching file:", error);
    }
  };

  // Trigger fetching the file URL when the component mounts or fileName changes
  useEffect(() => {
    if (fileName) {
      fetchFileUrl();
    }
  }, [fileName]);

  return (
    <div>
      {fileUrl ? (
        <div>
          {/* Display the file based on its type */}
          {fileUrl.endsWith(".jpg") ||
          fileUrl.endsWith(".png") ||
          fileUrl.endsWith(".jpeg") ? (
            <img
              src={fileUrl}
              alt="Uploaded File"
              style={{ width: "100%", height: "auto", maxHeight: "500px" }}
            />
          ) : fileUrl.endsWith(".pdf") ? (
            <iframe
              src={fileUrl}
              style={{ width: "100%", height: "500px" }}
              frameBorder="0"
              title="File Viewer"
            />
          ) : (
            <a
              style={{ color: "black" }}
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View File
            </a> // For other file types (e.g., DOCX)
          )}
        </div>
      ) : (
        <p style={{ color: "black" }}>Loading file...</p>
      )}
    </div>
  );
};

export default FileView;
