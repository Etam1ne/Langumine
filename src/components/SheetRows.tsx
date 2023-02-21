import { StyledTable } from "./styles/Import.style";

interface Props {
  sheet: string[][];
}

export const SheetRows: React.FC<Props> = ({ sheet }) => {

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>#</th>
          <th>Word</th>
          <th>Translation</th>
        </tr>
      </thead>
      <tbody>
          {sheet.map((data: string[], index: number) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{data[0]}</td>
                <td>{data[1]}</td>
            </tr>
            ))}
      </tbody>
    </StyledTable>
  )
}