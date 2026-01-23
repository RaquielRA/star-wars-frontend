import React, { useState } from 'react';
import './App.css';

const API_URL_BASE = 'http://localhost:8080';
const ENDPOINT_PATH = '/api/films/search?title=';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const buscarFilmes = async () => {
    if (!searchTerm) {
      setError("Por favor, digite um título.");
      setResults(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const urlCompleta = `${API_URL_BASE}${ENDPOINT_PATH}${encodeURIComponent(searchTerm)}`;
      const resposta = await fetch(urlCompleta);

      if (!resposta.ok) throw new Error(`Status: ${resposta.status}`);

      const dados = await resposta.json();
      setResults(dados.results);
    } catch (err) {
      setError(`Erro ao conectar com o Backend: ${err.message}`);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">STAR WARS <span>EXPLORER</span></h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Ex: A New Hope..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && buscarFilmes()}
          />
          <button onClick={buscarFilmes} disabled={loading}>
            {loading ? '...' : 'BUSCAR'}
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </header>

      <main className="content">
        {results && results.length > 0 ? (
          <div className="grid-results">
            {results.map((filme, index) => (
              <div key={index} className="film-card">
                <div className="card-decorator"></div>
                <h2>{filme.title}</h2>
                <span className="release-year">
                  {filme.release_date ? filme.release_date.substring(0, 4) : 'N/A'}
                </span>
                <p>Que a força esteja com você.</p>
              </div>
            ))}
          </div>
        ) : (
          results && !loading && <p className="no-results">Nenhum filme encontrado.</p>
        )}
      </main>
    </div>
  );
}

export default App;