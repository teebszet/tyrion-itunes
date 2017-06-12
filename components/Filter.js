import Link from 'next/link'

const Filter = ({items = [], selected}) => (
  <div>
    <ul>
      { items.map(({value, label}) => (
        <li key={value} className={value === selected ? 'selected' : ''}>
          <Link href={`/${value}`}>
            <a>{label}</a>
          </Link>
        </li>
      )) }
    </ul>
    <style jsx>{`
      div {
        width: 100%;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 26em;
        padding: 0.25em;
      }
      li {
        font-size: 1.1rem;
        display: flex;
        justify-content: center;
        align-items: middle;
        padding: 0.5em 0.25em 0.25em 0.25em;
        margin-bottom: 0.25em;
      }
      a {
        text-decoration: none;
        color: #222;
      }
      a:hover {
        opacity: 0.8;
      }
      .selected {
        border-bottom: 3px solid #4285f4;
      }
      .selected a {
        color: #4285f4
      }
    `}</style>
  </div>
)

export default Filter;
