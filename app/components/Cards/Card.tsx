import { Product } from "@prisma/client"

const Card = ({data}: {data: Product}) => {
  return (
    <div>{data.title}</div>
  )
}

export default Card