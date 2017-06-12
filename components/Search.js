const Search = () => (
  <div>
    <form>
      <input className='search'
        type='text'
        autoCapitalize='none'
        placeholder='search'/>
      <button className='submit'>s</button>
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
