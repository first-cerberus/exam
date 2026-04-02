import UserList from './UserList'
import ProductList from './ProductList'


const users = [
  { id: 1, name: 'Аліна', email: 'alina@mail.com' },
  { id: 2, name: 'Богдан', email: 'bohdan@mail.com' },
]

const products = [
  { id: 1, title: 'Ноутбук', price: 28000 },
  { id: 2, title: 'Миша', price: 1800 },
]

export default function RefactoredPage() {
  return (
    <>
      <UserList users={users} />
      <ProductList products={products} />
    </>
  )
}
