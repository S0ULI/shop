// ----------------- Custom ------------------
import Card from './Card'
// ------------------ Type -------------------
import { Product } from '@prisma/client'


// -------------------------------------------
// ---------------- Component ----------------
// -------------------------------------------
const Cards = ({data}: { data: Product[] }) => {
  return (
    <div>
        {
            data.map(item => {
                return (
                    <Card key={item.id} data={item}/>
                )
            })
        }
    </div>
  )
}

export default Cards