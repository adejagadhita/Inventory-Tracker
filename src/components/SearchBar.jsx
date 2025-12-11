import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-6 flex items-center gap-3 bg-brand-panel border border-white-700 rounded-full px-4 sm:px-6 py-2 sm:py-3 max-w-full sm:max-w-xs shadow-lg">
      <Search size={20} className="text-white shrink-0" />
      <input
        type="text"
        placeholder="Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-transparent text-brand-text placeholder:text-white outline-none flex-1 text-sm sm:text-base"
      />
    </div>
  );
};

export default SearchBar;
