type ProductProps = {
  id: number,
  name: string,
  price: number,
  imgUrl: string
}

const ProductCard = ({id,name,price,imgUrl}:ProductProps) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
       <div className="rounded-t-lg"><img src={imgUrl} height="200" style={{objectFit: "cover"}}></img></div>
       <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</div>
       <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">{price}</div>
    </div>
  )
}

export default ProductCard