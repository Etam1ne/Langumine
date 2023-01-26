export const SheetRows = (props) => {

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
            .filter( (data, index) => {
              if (!data[props.word] || !data[props.translation] ||index === 0) return false
              return true;
            })
            .map((data, index) => (
            <tr key={index}>
                <td>{data[props.word]}</td>
                <td>{data[props.translation]}</td>
            </tr>
            ))}
      </tbody>
    </table>
  )
}