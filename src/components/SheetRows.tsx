import { StyledTable } from "./styles/Import.style";

interface Props {
  sheet: string[][];
}

export const SheetRows = (props: Props) => {

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Word</th>
          <th>Translation</th>
        </tr>
      </thead>
      <tbody>
          {props.sheet.map((data: string[], index: number) => (
            <tr key={index}>
                <td>{data[0]}</td>
                <td>{data[1]}</td>
            </tr>
            ))}
      </tbody>
    </StyledTable>
  )
}