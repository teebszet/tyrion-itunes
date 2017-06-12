const Grid = ({items = []}) => (
  <div>
    <ul className='grid'>
    { items.map(({src, title}, id) => (
      <li key={id}>
        <div className='img__frame'>
          <img src={src} />
        </div>
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
      }
      .img__frame {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        max-width: 100px;
        max-height: 100px;
        width: auto;
        height: auto;
        box-shadow: 1px 1px 5px lightgrey;
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
