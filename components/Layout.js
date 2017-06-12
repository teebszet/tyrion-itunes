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
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      selectedItem: null,
      isOverlayVisible: null,
    }
  }
  handleSelect(e) {
    e.preventDefault()
    this.setState({
      selectedItem: e.currentTarget.value,
      isOverlayVisible: true,
    })
  }
  handleClose(e) {
    e.preventDefault()
    this.setState({
      isOverlayVisible: false,
    })
  }
  render() {
    const overlayProps = _find(gridItems(this.props.results),
      {value: this.state.selectedItem})
    return (
      <div className='body'>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1 minimum-scale=1" />
        </Head>
        <nav>
          <Filter items={filterItems()} selected={this.props.selectedFilter}/>
          <Search/>
        </nav>
        <Overlay {...overlayProps}
          isOverlayVisible={this.state.isOverlayVisible}
          handleClose={this.handleClose}/>
        <main>
          <Grid
            items={gridItems(this.props.results)}
            handleSelect={this.handleSelect}
            isOverlayVisible={this.state.isOverlayVisible}
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
