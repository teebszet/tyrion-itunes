const Overlay = ({description = '', buyUrl, handleClose}) => (
  <section className={description ? 'is-visible' : ''}>
    <img value='' src='/static/icon-close.svg' onClick={handleClose}/>
    <p>{description}</p>
    <button>
      <a href={buyUrl}>more</a>
    </button>
    <style jsx>{`
      section {
        z-index: 2;
        width: 100%;
        background-color: #fafafa;
        opacity: 0.9;
        transform: translateX(-100%);
        position: absolute;
        transition: 1s ease transform;
      }
      .is-visible {
        transform: translateX(0);
        transition: 1s ease transform;
      }
      detail-animation: {
        0% translateX(-100%);
        100% translateX(0);
      }
      p {
        font-size: 1rem;
        margin: 3em 2em 0 2em;
      }
      img, button {
        float: right;
        margin: 1em;
      }
      button {
        background-color: #4285f4;
        opacity: 1;
        border: none;
        padding: 0.5em 1em 0.5em 1em;
      }
      a {
        text-decoration: none;
        color: white;
      }
    `}</style>
  </section>
)
export default Overlay
