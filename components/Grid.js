const Grid = ({items = []}) => (
  <main>
    <ul className='grid'>
    { items.map(({src, title}) => (
      <li>
        <img src={src} />
        <h4>{title}</h4>
      </li>
    ))}
    </ul>
    <style jsx>{`
      .grid {
        display: flex;
        flex-wrap: wrap;
        margin: -0.5em;
      }
      .grid > * {
        flex: 1 0 5em;
        margin: 0.5em;
      }
      li {
        position: relative;
      }
      h4 {
        position: absolute;
        bottom: 0;
      }
    `}</style>
  </main>
)
export default Grid;
