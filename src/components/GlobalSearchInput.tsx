const GlobalSearchInput = () => {
  return (
    <input
      type="search"
      id="global-search"
      name="global-search"
      placeholder="Search..."
      className="
      text-sm
        p-2
        bg-gray-50
        border
        border-gray-500
        focus:outline-none
        focus:ring-gray-400
        rounded-sm
        w-full
      "
    />
  );
};

export default GlobalSearchInput;
