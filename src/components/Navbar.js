"use client"; 

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
     
      router.push(`/search?q=${query}`);
      setQuery('');
    }
  };

  return (
    <nav style={{ padding: '20px', background: '#0878f8', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
        Películas App SSR
      </Link>
      
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar películas..."
          style={{ background:'#d8e1ec', padding: '8px', borderRadius: '4px', color: 'blue' }}
        />
        <button type="submit" style={{ marginLeft: '10px', padding: '8px 15px', cursor: 'pointer' }}>
          Buscar
        </button>
      </form>
    </nav>
  );
}