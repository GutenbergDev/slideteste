import React from 'react';
import styles from './Slide.module.css';

function Slide({ produtos }) {

  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const {width} = contentRef.current.getBoundingClientRect()
    setPosition(-(width * active))
  }, [active])

  function slidePrev() {
    if(active > 0) {
      setActive(active - 1)
    }
  }

  function slideNext() {
    if(active < produtos.length - 1) {
      setActive(active + 1)
    }
  }

 
  return (
    <section className={styles.container}>
      <div 
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {produtos.map(produto =>
          <div key={produtos.id} className={styles.item}>
            <div>
              <p>{produto.nome}</p>
              <img src={produto.image} alt=""/>
              <p>{produto.precoAntigo.toFixed(2)}</p>
              <p style={{ fontSize: '10px' }}>{produto.descricao}</p>
            </div>
          </div>
        )}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
    
  )
}

export default Slide;