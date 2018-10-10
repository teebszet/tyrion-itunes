const Grid = ({items = [], handleSelect, isOverlayVisible}) => (
  <div className={isOverlayVisible ? 'grid-container is-hidden' : 'grid-container'}>
    <ul className='grid'>
    { items.map(({src, title, value}, id) => (
      <li key={id} onClick={handleSelect} value={value}>
        <div className='img__frame'>
          <img src={src} />
        </div>
        <h4>{title}</h4>
      </li>
    ))}
    </ul>
    <style jsx>{`
      .grid-container {
        position: absolute;
        z-index: 2;
      }
      .is-hidden {
        opacity: 0.2;
        transition: 2s ease opacity;
      }
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
        width: auto;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        max-width: 200px;
        max-height: 200px;
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
