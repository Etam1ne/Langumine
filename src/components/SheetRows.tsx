interface Props {
  wordIndex: number;
  translationIndex: number;
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
          {props.sheet
            .filter( (data: string[], index: number) => {
              if (!data[props.wordIndex] || !data[props.translationIndex] ||index === 0) return false
              return true;
            })
            .map((data: string[], index: number) => (
            <tr key={index}>
                <td>{data[props.wordIndex]}</td>
                <td>{data[props.translationIndex]}</td>
            </tr>
            ))}
      </tbody>
    </table>
  )
}