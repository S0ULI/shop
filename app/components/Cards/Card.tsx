// ------------------ Type -------------------
import { Product } from "@prisma/client"

// -------------------------------------------
// ---------------- Component ----------------
// -------------------------------------------
const Card = ({data}: {data: Product}) => {
  return (
    <div>{data.title}</div>
  )
}

export default Card