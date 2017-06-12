import Head from 'next/head'
import _find from 'lodash/find'
import Filter from '../components/Filter'
import Search from '../components/Search'
import Overlay from '../components/Overlay'
import Grid from '../components/Grid'
import layoutStyle from '../styles/layout'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      selectedItem: null,
    }
  }
  handleSelect(e) {
    e.preventDefault()
    console.log(e.currentTarget.value)
    this.setState({selectedItem: e.currentTarget.value})
  }
  render() {
    const overlayProps = _find(this.props.results, {value: this.state.selectedItem})
    console.log(overlayProps)
    return (
      <div className='body'>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1 minimum-scale=1" />
        </Head>
        <nav>
          <Filter items={filterItems()} selected={this.props.selectedFilter}/>
          <Search/>
        </nav>
        <main>
          <Overlay {...overlayProps}/>
          <Grid
            items={gridItems(this.props.results)}
            handleSelect={this.handleSelect}
          />
        </main>
        <style jsx>{layoutStyle}</style>
      </div>
    )
  }
}
export default Layout

// TODO move to redux state and props?
export const filterItems = () => ([
  {value: 'movie', label: 'Movie'},
  {value: 'podcast', label: 'Podcast'},
  {value: 'music', label: 'Music'},
  {value: 'musicVideo', label: 'Music Video'},
])

const gridItems = (results = []) => (
  results.map(item => ({
    value: item.trackId,
    src: item.artworkUrl100,
    title: item.trackName,
    description: item.longDescription,
    buyUrl: item.trackViewUrl,
  }))
)
