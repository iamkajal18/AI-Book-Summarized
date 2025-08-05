import Link from 'next/link';

const categories = ['Fiction', 'Non-Fiction', 'Mystery', 'Sci-Fi', 'Biography'];

export default function Categories() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Book Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map(category => (
          <Link 
            key={category} 
            href={`/categories/${category.toLowerCase()}`} 
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold text-center">{category}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}