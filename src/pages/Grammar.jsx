import { useState } from "react";
import { readFile, utils } from "xlsx";

const Grammar = () => {

    const [sheetData, setSheetData] = useState();

    const handleFile = async (e) => {

        const file = e.target.files[0];
        const data = await file.arrayBuffer();
        const workbook = readFile(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = utils.sheet_to_json(worksheet, {
            header: 1
        })
        setSheetData(jsonData);
    }
    
    return (
        <main>
            <h1>Grammar</h1>
            <input 
            type="file"
            id="wordsSheet"
            accept=".xlsx"
            onChange={(e) => handleFile(e)}
            />
                {sheetData === undefined ? <p>No files</p>:
                <table>
                    <tbody>
                    {sheetData.map((c, index) => (
                        !c[0] ?
                        <></>
                        :
                        <tr key={index}>
                            <td>{c[0]}</td>
                            <td>{c[1]}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                }
        </main>
    );
}

export default Grammar;