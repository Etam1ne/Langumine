interface Props {
  sheet: string[][];
}

export const SheetRows = (props: Props) => {

  return (
    <table>
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
    </table>
  )
}