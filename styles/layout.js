export default `
  nav {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 60em;
    position: fixed;
    top: 0;
    z-index: 3;
    background-color: #fafafa;
    color: #222;
    box-shadow: 1px 1px 10px lightgrey;
  }
  main {
    width: 100%;
    height: auto;
    margin-top: 7em;
    padding: 0.1em;
    z-index: 1;
    position: relative;
  }
  .body {
    font-family: sans-serif;
    width: 100%;
    max-width: 60em;
    margin-left: auto;
    margin-right: auto;
  }
`
