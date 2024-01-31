import Image from 'next/image';

const Book = ({src, alt, title}) => {
  return (
    <div className="relative overflow-hidden group cursor-pointer shadow-lg">
      <Image 
        src={`/book-covers/${src}.jpg`}
        alt={alt}
        width={100}
        height={200}
        className="w-full h-full object-cover transition-transform transform group-hover:scale-125 group-hover:blur-sm" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-white text-lg text-center">{title}</p>
      </div>
    </div>
  );
}

export default Book;