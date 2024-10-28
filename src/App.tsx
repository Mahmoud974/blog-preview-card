export default function App() {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] border-[1px] border-black rounded-lg max-w-xs p-6 relative">
        <div className="bg-yellow-400 h-32 w-full rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src="/public/assets/images/illustration-article.png"
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-4">
          <span className="bg-yellow-500 text-black font-bold text-sm px-2 py-1 rounded">
            Learning
          </span>
          <p className="text-gray-500 text-[0.80rem] mt-2">
            Published 21 Dec 2024
          </p>
          <h2 className="text-lg font-bold mt-2">HTML & CSS foundations</h2>
          <p className="text-gray-600 mt-1 text-sm">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>

        <div className="mt-4 flex items-center">
          <img
            src="/public/assets/images/image-avatar.webp"
            alt="Author Image"
            className="h-10 w-10 rounded-full mr-3"
          />
          <p className="text-gray-800 font-bold">Greg Hooper</p>
        </div>
      </div>
    </section>
  );
}
