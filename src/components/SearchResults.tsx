import { FC } from 'react';

type SearchResultsProps = {
  images: Image[];
};

const SearchResults: FC<SearchResultsProps> = ({ images }) => {
  return (
    <div className='container mx-auto flex flex-col gap-4'>
      {images.map((image, i) => (
        <div
          key={`image-${i}`}
          className='flex justify-between items-center h-16 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'
        >
          <img className='h-full rounded-l-lg' src={image.url} alt='' />
          <div className='px-4 overflow-hidden'>
            <p className='text-end font-normal text-gray-700 dark:text-gray-400 whitespace-nowrap'>
              {image.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
