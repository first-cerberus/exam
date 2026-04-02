export default function Dashboard() {
  const users = [
    { id: 1, name: 'Аліна', email: 'alina@gmail.com' },
    { id: 2, name: 'Богдан', email: 'bohdan@gmail.com' },
  ]

  const products = [
    { id: 1, title: 'Ноутбук', price: 28000 },
    { id: 2, title: 'Миша', price: 1800 },
  ]

  return (
    <div>
      <h3>Users</h3>
      <ul>
        {users.map(user => <li key={user.id}>{user.name} — {user.email}</li>)}
      </ul>

      <h3>Products</h3>
      <ul>
        {products.map(product => <li key={product.id}>{product.title} — {product.price} грн</li>)}
      </ul>
    </div>
  )
}
