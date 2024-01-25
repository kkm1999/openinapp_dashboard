
import './App.css'
import React, { useRef, useState } from 'react';
import { readExcel } from './readExcel';

const UploadPage = () => {
    const [fileData, setFileData] = useState(null);
    const fileInput = useRef(); // Create a ref for the file input

    const handleUploadClick = () => {
        const file = fileInput.current.files[0];
        readExcel(file).then((data) => {
            setFileData(data);
        });
    };

    return (
        <div className="upload-page">
            {/* <Sidebar /> */}
            <div className="content">
                <h2 style={{ paddingTop: '40px' }}>Upload CSV</h2>
                <div className="upload-box">
                    <input type="file" ref={fileInput} />
                    <p>Drop your excel sheet here or browse</p>
                </div>
                <button onClick={handleUploadClick}>Upload</button>
                {fileData && (
                    <table>
                        <thead>
                            <tr>
                                <th>Sl No.</th>
                                <th>Links</th>
                                <th>Prefix</th>
                                <th>Selected Tags</th>
                                <th>Add Tags</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fileData.map((row, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    {/* <td>{row.links}</td> */}
                                    <td><a href={row.links} target="_blank" rel="noopener noreferrer">{row.links}</a></td>
                                    <td>{row.prefix}</td>
                                    <td>
                                        <select style={{ width: '100%' }}>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                            <option value="E">E</option>
                                            <option value="F">F</option>
                                        </select>
                                    </td>
                                    <td>{row["select tags"]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default UploadPage;