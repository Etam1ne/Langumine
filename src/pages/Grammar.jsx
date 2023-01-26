import { useState } from "react";
import { readFile, utils } from "xlsx";
import { SheetRows } from "../components/SheetRows";

const Grammar = () => {

    const [file, setFile] = useState();
    const [sheetData, setSheetData] = useState();
    const [columns, setColumns] = useState();
    const [wordIndex, setWordIndex] = useState(0);
    const [translationIndex, setTranslationIndex] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSheetData(file);
    }

    const handleFileUpload = async (e) => {

        const localFile = e.target.files[0];
        const data = await localFile.arrayBuffer();
        const workbook = readFile(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = utils.sheet_to_json(worksheet, {
            header: 1
        })
        setFile(jsonData)
        setColumns(jsonData[0]);
    }
    
    return (
        <main>
            <div id="uploadContainer">
                <form onSubmit={e => handleSubmit(e)}>

                    <h1>Data importing</h1>

                    <label className="buttonClass" htmlFor="file">
                        Upload xlsx
                    </label>
                    <input 
                    type="file"
                    id="file"
                    accept=".xlsx"
                    onChange={(e) => handleFileUpload(e)}
                    />

                    {columns === undefined ? <></>:
                    <div id="selectContainer">
                        <select onChange={e => setWordIndex(columns.indexOf(e.target.value))}>
                            {columns.map((data, index) => (
                                <option key={index} value={data}>{data}</option>
                            ))}
                        </select>
                        <select onChange={e => setTranslationIndex(columns.indexOf(e.target.value))}>
                            {columns.reverse().map((data, index) => (
                                <option key={index} value={data}>{data}</option>
                            ))}
                        </select>
                    </div>
                    }
                    <input className="buttonClass" type="submit" value="Generate" />
                </form>

                {sheetData === undefined ? <></>:
                    <SheetRows 
                    sheet={sheetData} 
                    word={wordIndex} 
                    translation={translationIndex}
                    />
                }
            </div>
        </main>
    );
}

export default Grammar;