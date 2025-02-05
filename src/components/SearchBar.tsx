interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative mb-8 flex justify-center items-center">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Rechercher dans la FAQ..."
        className="text-sm
        w-[40rem]
          p-2
          bg-neutral-50
          border
          border-neutral-500
          focus:outline-none
          focus:ring-neutral-400
          rounded-sm"
      />
    </div>
  );
}
