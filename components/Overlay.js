const Overlay = ({description = '', buyUrl, handleClose, isOverlayVisible}) => (
  <section className={isOverlayVisible ? 'is-visible' : ''}>
    <img value='' src='/static/icon-close.svg' onClick={handleClose}/>
    <div className='description-container'>
      <p>{description}</p>
    </div>
    <button>
      <a href={buyUrl} target='_blank'>more</a>
    </button>
    <style jsx>{`
      section {
        z-index: 2;
        width: 100%;
        max-width: 26em;
        background-color: #fafafa;
        opacity: 0.9;
        transform: translateX(-100%);
        position: fixed;
        transition: 1s ease transform;
      }
      .is-visible {
        transform: translateX(0);
        transition: 1s ease transform;
      }
      .description-container {
        overflow-y: auto;
        max-height: 50vh;
        width: 100%;
      }
      p {
        font-size: 1rem;
        margin: 0 2em 0 2em;
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
