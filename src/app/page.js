import Link from 'next/link';
import { getPopularMovies } from '@/lib/api';

export default async function HomePage() {
  const movies = await getPopularMovies(); // Se ejecuta en el servidor

  return (
    <main style={{ padding: '20px' }}>
      <h1>Películas Populares</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ border: '1px solid #ddd', padding: '10px' }}>
            <img 
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
              alt={movie.title} 
            />
            <h3>{movie.title}</h3>
            <Link href={`/movie/${movie.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </main>
  );
}