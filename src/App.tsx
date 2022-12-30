import { useState } from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

function App() {
  const [images, setImages] = useState<Image[]>([]);

  return (
    <main className='flex flex-col p-16 gap-8 bg-gray-900'>
      <h1 className='text-center text-white text-xl'>MixPanel Search Demo</h1>
      <SearchForm setImages={setImages} />
      <SearchResults images={images} />
    </main>
  );
}

export default App;
