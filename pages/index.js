const Filter = ({items = []}) => (
  <ul>
    { items.map(({value, label}) => (<li>{label}</li>)) }
  </ul>
)

const Search = () => (
  <input placeholder='search'/>
)

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

export const Index = () => (
  <div>
    <Grid items={gridItems()}/>
    <Search/>
    <Filter items={filterItems()}/>
    <style jsx global>{`
      * {
        list-style: none;
        padding: 0;
        margin: 0;
      }
    `}</style>
  </div>
)
export default Index

// TODO move to redux state and props?
const filterItems = () => ([
  {value: 'movie', label: 'Movie'},
  {value: 'podcast', label: 'Podcast'},
  {value: 'music', label: 'Music'},
  {value: 'music-video', label: 'Music Video'},
])

const gridItems = () => ([
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
  {src: 'http://placehold.it/150x100', title: 'Hulk'},
])

