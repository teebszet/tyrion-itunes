const Overlay = ({description = '', buyUrl}) => (
  <section className={description ? 'is-visible' : ''}>
    <img src='/static/icon-close.svg' />
    <p>{description}</p>
    <button>
      <a href={buyUrl}>more</a>
    </button>
    <style jsx>{`
      section {
        width: 100%;
        transform: translateX(-100%);
        position: absolute;
        transition: 1s ease transform;
      }
      section .is-visible {
        transform: translateX(0);
      }
      detail-animation: {
        0% translateX(-100%);
        100% translateX(0);
      }
    `}</style>
  </section>
)
export default Overlay
