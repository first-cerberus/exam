import AntipatternPage from './SRP/antipattern/AntipatternPage'
import RefactoredPage from './SRP/refactored/RefactoredPage'

export default function App() {
  return (
    <div>
      <h1>SOLID — Single Responsibility Principle</h1>
      <section>
        <h2>Антипатерн</h2>
        <AntipatternPage />
      </section>
      <section>
        <h2>Рефакторинг (SRP)</h2>
        <RefactoredPage />
      </section>
    </div>
  )
}
