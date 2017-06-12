const Search = () => (
  <div>
    {/* TODO more validation */}
    <form>
      <input className='search'
        name='search'
        type='text'
        autoCapitalize='none'/>
      <button className='submit'>
        <img src='/static/icon-search.svg' />
      </button>
    </form>
    <style jsx>{`
      div {
        width: 100%;
      }
      form {
        width: inherit;
        position: relative;
      }
      .submit {
        font-size: 1.2rem;
        padding: 0.5em;
        position: absolute;
        right: 0;
        background-color: rgba(255, 255, 255, 0);
        border: none;
        margin: 2px;
        color: #222;
        cursor: pointer;
      }
      .submit:hover {
        opacity: 0.8;
      }
      .search {
        width: 100%;
        font-size: 1.2rem;
        padding: 0.5em;
        padding-right: 5em;
      }
    `}</style>
  </div>
)
export default Search;
