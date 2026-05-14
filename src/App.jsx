import { documentosFaseI } from './data/documents';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>Sistema de Inventario GPON (SIGPON)</h1>
        <p className="subtitle">Portafolio Digital</p>
        <div className="project-meta">
          <p><strong>Empresa:</strong> CANTV, Gerencia General de Proyectos Mayores</p>
          <p><strong>Tutor Empresarial (PO):</strong> Dr. Msc. Ing. Rodolfo Pacheco Hellal</p>
          <p><strong>Desarrollador & Scrum Master:</strong> Emmanuel Sierra Pacheco / CI 11048546</p>
          <p><strong>Profesor:</strong> Luis Antonio Rivas Algueida</p>
        </div>
      </header>

      <div className="titulos-fases">
        <h2>Fase I de Desarrollo</h2>
      </div>

      <main className="documents-grid">
        {documentosFaseI.map((doc) => (
          <article key={doc.id} className={`document-card ${doc.estado === 'en_proceso' ? 'pending' : ''}`}>
            <div className="card-header">
              <span className="doc-id">#{doc.id}</span>
              <span className={`status-badge ${doc.estado}`}>
                {doc.estado === 'completado' ? 'Completado' : 'En Proceso'}
              </span>
            </div>
            <h2 className="doc-title">{doc.nombre}</h2>
            <a
              href={doc.ruta}
              target="_blank"
              rel="noopener noreferrer"
              className="doc-link"
              aria-label={`Ver documento ${doc.nombre}`}
              download={doc.estado === 'completado' ? '' : undefined}
            >
              {doc.estado === 'completado' ? 'Descargar / Visualizar' : 'Documento en desarrollo'}
            </a>
          </article>
        ))}
      </main>

      <footer className="footer">
        <p>Proyecto Sociotecnológico - Ingeniería en Informática | Desplegado en Netlify</p>
        <p className="year">© {new Date().getFullYear()} Emmanuel Sierra</p>
      </footer>
    </div>
  );
}

export default App;