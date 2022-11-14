import '../../styles/catalog.css'
import { CatalogItems } from './components/CatalogItems'
import { Category } from './components/Category'


export const Catalog=()=>{
    return (<main className="main padding_top">
        <div className="container">
            <h1 className='h1_text_title'>Магазин карт</h1>
            <Category />
            <CatalogItems />
        </div>
          
    </main>
    )
}