const Grid = ({items = []}) => (
  <div>
    <ul className='grid'>
    { items.map(({src, title}, id) => (
      <li key={id}>
        <img src={src} />
        <h4>{title}</h4>
      </li>
    ))}
    </ul>
    <style jsx>{`
      .grid {
        display: flex;
        flex-wrap: wrap;
        overflow-x: hidden;
        margin: 0.1em;
      }
      .grid > * {
        flex: 1 0 5em;
        margin: 0.5em;
      }
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100px;
      }
      h4 {
        text-align: center;
        padding: 0.5em;
        font-size: 0.5rem;
      }
    `}</style>
  </div>
)
export default Grid;
