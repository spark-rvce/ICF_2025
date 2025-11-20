export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Tailwind CSS Test</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Card 1</h2>
            <p className="text-gray-600">This is a test card to verify Tailwind CSS is working.</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Test Button
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Card 2</h2>
            <p className="text-gray-600">If you can see styled cards, Tailwind is working!</p>
            <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Success
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Card 3</h2>
            <p className="text-gray-600">Responsive grid layout test.</p>
            <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
              Purple
            </button>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-yellow-100 border border-yellow-400 rounded">
          <p className="text-yellow-800">
            <strong>Note:</strong> If you see unstyled HTML, Tailwind CSS is not loading properly.
            If you see styled cards with colors, shadows, and proper spacing, Tailwind is working!
          </p>
        </div>
      </div>
    </div>
  )
}
