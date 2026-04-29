import { getMovieDetails } from '@/lib/api';

export default async function MovieDetailPage({ params }) {
  const { id } = await params; 
  // Llamamos a la API 
  const movie = await getMovieDetails(id);

  return (
    <main style={{ padding: '40px', display: 'flex', gap: '40px' }}>
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title}
        style={{ borderRadius: '15px', maxWidth: '400px' }}
      />
      <div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{movie.title}</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '20px' }}>
          {movie.overview}
        </p>
        <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '8px' }}>
          <p><strong>Calificación:</strong> ⭐ {movie.vote_average.toFixed(1)} / 10</p>
          <p><strong>Fecha de lanzamiento:</strong> {movie.release_date}</p>
        </div>
      </div>
    </main>
  );
}