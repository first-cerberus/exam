type Product = { id: number; title: string; price: number }

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <>
    <h3>Products</h3>
    <ul>
      {products.map(product => <li key={product.id}>{product.title} — {product.price} грн</li>)}
    </ul>
    </>
  )
}
