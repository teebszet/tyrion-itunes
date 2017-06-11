const Filter = ({items = []}) => (
  <div>
    <ul>
      { items.map(({value, label}) => (
        <li key={value}>{label}</li>
      )) }
    </ul>
    <style jsx>{`
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 26em;
        padding: 0.25em;
        background-color: grey;
      }
      li {
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: middle;
        padding: 0.5em 0.25em;
      }
    `}</style>
  </div>
)

export default Filter;
