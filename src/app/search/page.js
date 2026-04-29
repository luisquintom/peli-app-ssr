import Link from 'next/link';
import { searchMovies } from '@/lib/api';

export default async function SearchPage({ searchParams }) {
  const query = (await searchParams).q;
  
  if (!query) {
    return <p>Por favor, escribe el título de una película en el buscador.</p>;
  }
  // función de búsqueda
  const movies = await searchMovies(query);

  return (
    <section>
      <h2>Resultados para: {`"${query}"`}</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '20px',
        marginTop: '20px' 
      }}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
              {movie.poster_path && (
                <img 
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                  alt={movie.title}
                  style={{ width: '100%', borderRadius: '4px' }}
                />
              )}
              <h3 style={{ fontSize: '1rem', margin: '10px 0' }}>{movie.title}</h3>
              <Link href={`/movie/${movie.id}`} style={{ color: '#0070f3', fontWeight: 'bold' }}>
                Ver detalles
              </Link>
            </div>
          ))
        ) : (
          <p>No se encontraron películas para esa búsqueda.</p>
        )}
      </div>
    </section>
  );
}