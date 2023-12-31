import cardstyle from './card.module.css'
export function CardC (prop) {
  return(
    <div  className={cardstyle.container}>
 <div className={cardstyle.cardstyle}>
    {prop.title}
 </div>
 </div>
  )
}

