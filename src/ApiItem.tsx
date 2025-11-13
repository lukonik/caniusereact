import type { ApiItemModel } from "./types";

function ApiItemVersion({ item }: { item: ApiItemModel }) {
  let modeClass = "";
  if (item.mode === "stable") {
    modeClass = "bg-green-500 text-white font-bold rounded-md px-2 py-1";
  }
  return (
    <span className={`text-sm font-medium ${modeClass}`}>v{item.version}</span>
  );
}

export default function ApiItem({ item }: { item: ApiItemModel }) {
  return (
    <div className="rounded-md shadow-md p-4 mt-4 border border-gray-200">
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-left font-bold mb-2">{item.name}</h2>
        <ApiItemVersion item={item} />
      </div>
    </div>
  );
}
