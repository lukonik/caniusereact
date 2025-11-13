import { Search } from "lucide-react";

export default function SearchInput({
  onChange,
  search,
}: {
  onChange?: (value: string) => void;
  search?: string;
}) {
  return (
    <div className="h-12 border border-gray-300 rounded-xl flex px-3 focus-within:border-blue-600 ">
      <Search className="self-center text-gray-500 pr-1" />
      <input
        className="flex-1 outline-none placeholder:text-gray-500"
        placeholder="Type to search API..."
        value={search}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
