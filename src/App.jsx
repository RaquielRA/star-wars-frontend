import React, { useState } from 'react';

const API_URL_BASE = 'http://localhost:8080';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const ENDPOINT_PATH = '/api/films/search?title=';

  const buscarFilmes = async () => {
    if (!searchTerm) {
      setError("Por favor, digite um termo de busca.");
      setResults(null);
      return;
    }

    setLoading(true);
    setError(null);
    setResults(null);

    const urlCompleta = API_URL_BASE + ENDPOINT_PATH + encodeURIComponent(searchTerm);
    
    try {
      const resposta = await fetch(urlCompleta);
      
      if (!resposta.ok) {
        throw new Error(`Erro HTTP! Status: ${resposta.status}`);
      }

      const dados = await resposta.json();
      
      setResults(dados.results); 

    } catch (err) {
      setError(`❌ Erro ao conectar com o Backend: ${err.message}. Verifique se o Backend Java está ativo.`);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Busca Flexível de Filmes Star Wars (React)</h1>
      
      <input
        type="text"
        placeholder="Digite parte do título (ex: menace)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={buscarFilmes} disabled={loading}>
        {loading ? 'Buscando...' : 'Buscar Filmes'}
      </button>

      <hr />

      {}
      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
      
      {}
      {results && results.length > 0 && (
        <>
          <h3>{results.length} Resultado(s) Encontrado(s)</h3>
          <ul>
            {results.map((filme, index) => (
              <li key={index} style={{ borderBottom: '1px dotted #ccc', paddingBottom: '10px', marginBottom: '10px' }}>
                <strong>Título:</strong> {filme.title}
                <br />
                <strong>Ano:</strong> {filme.release_date ? filme.release_date.substring(0, 4) : 'N/A'}
              </li>
            ))}
          </ul>
        </>
      )}
      {results && results.length === 0 && <p>Nenhum filme encontrado.</p>}
    </div>
  );
}

export default App;