import './App.css'

function App() {
  return (
    <>
      <header className="navbar">
        <h1 className="logo">Mi Sitio</h1>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <section>
          <h2>Bienvenido</h2>
          <p>Esta es una página de ejemplo.</p>
        </section>
      </main>
    </>
  )
}

export default App
