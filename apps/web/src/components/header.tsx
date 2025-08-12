export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-5">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Digital Vault</h1>

        <ul className="flex space-x-6">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>

        <div className="flex space-x-2">
          <button className="bg-green-600 hover:bg-green-700 active:bg-green-800 px-4 py-2 rounded text-white font-semibold">
            Login
          </button>
          <button className="bg-blue-800 hover:bg-blue-900 active:bg-blue-950 px-4 py-2 rounded text-white font-semibold">
            Register
          </button>
        </div>
      </nav>
    </header>
  );
}
