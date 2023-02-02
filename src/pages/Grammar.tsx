import { useState } from "react";
import { readFile, utils } from "xlsx";
import { SheetRows } from "../components/SheetRows";

const Grammar = () => {

    const [file, setFile] = useState<string[][]>();
    const [sheetData, setSheetData] = useState<string[][]>();
    const [columns, setColumns] = useState<string[]>();
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [translationIndex, setTranslationIndex] = useState<number>(1);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setSheetData(file);
    }

    const handleFileUpload = async (e: any) => {
        const localFile = (e.target.files[0]);
        const data = await localFile.arrayBuffer();
        const workbook = readFile(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData: any = utils.sheet_to_json(worksheet, {
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
                        <select onChange={ (e: any) => setWordIndex(columns.indexOf(e.target.value))}>
                            {columns.map((data: string, index: number) => (
                                <option key={index} value={data}>{data}</option>
                            ))}
                        </select>
                        <select onChange={ (e: any) => setTranslationIndex(columns.indexOf(e.target.value))}>
                            {columns.reverse().map((data: string, index: number) => (
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
                    wordIndex={wordIndex} 
                    translationIndex={translationIndex}
                    />
                }
            </div>
        </main>
    );
}

export default Grammar;