import React, { useState, useRef } from "react";
import { read, utils } from "xlsx";
import { SheetRows } from "../components/SheetRows";

const Import = () => {

    const [sheetData, setSheetData] = useState<string[][]>([[]]);

    const file1 = useRef<string[][]>([[]]);
    const columns1 = useRef<string[]>([]);
    const wordIndex1 = useRef<number>(0);
    const translationIndex1 = useRef<number>(1);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const filteredSheet: string[][] = file1.current
        .filter( (data: string[], index: number) => {
            if (!data[wordIndex1.current] || !data[translationIndex1.current] ||index === 0) return false
            return true;
          })
        .map((data: string[]) => {
            return [ data[wordIndex1.current], data[translationIndex1.current]]
        });
        setSheetData(filteredSheet);
    }

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const localFile = (e.target.files[0]);
            const data = await localFile.arrayBuffer();
            const workbook = read(data);
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData: string[][] = utils.sheet_to_json(worksheet, {
                header: 1
            })
            file1.current = jsonData
            columns1.current = jsonData[0];
        }
    }

    const handleSelector = (e: React.ChangeEvent<HTMLSelectElement>,column: React.MutableRefObject<number>) => {
        column.current = columns1.current.indexOf(e.target.value);
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

                    {columns1.current.length === 1 &&
                    <div id="selectContainer">
                        <select onChange={ (e: React.ChangeEvent<HTMLSelectElement>) => handleSelector(e, wordIndex1)}>
                            {columns1.current.map((data: string, index: number) => (
                                <option key={index} value={data}>{data}</option>
                            ))}
                        </select>
                        <select onChange={ (e: React.ChangeEvent<HTMLSelectElement>) => handleSelector(e, translationIndex1)}>
                            {columns1.current.map((data: string, index: number) => (
                                <option key={index} value={data}>{data}</option>
                            ))}
                        </select>
                    </div>
                    }
                    <input className="buttonClass" type="submit" value="Generate" />
                </form>

                {sheetData.length === 0 && <SheetRows sheet={sheetData}/>}
            </div>
        </main>
    );
}

export default Import;