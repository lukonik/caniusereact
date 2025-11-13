import { useState } from "react";
import ApiItem from "./ApiItem";
import apisData from "./apis.json";
import "./App.css";
import EmptyResult from "./EmptyResult";
import SearchInput from "./SearchInput";

function App() {
  const [search, setSearch] = useState<string | undefined>("");
  const filteredApis = apisData.filter((api) =>
    search ? api.name.toLowerCase().includes(search.toLowerCase()) : true
  );

  function handleSearchChange(value: string) {
    setSearch(value);
  }

  return (
    <div className="container mx-auto">
      <SearchInput search={search} onChange={handleSearchChange} />
      {filteredApis.map((api) => (
        <ApiItem key={api.name} item={api} />
      ))}
      {filteredApis.length === 0 && <EmptyResult />}

      {/* <ApiList /> */}
    </div>
  );
}

export default App;
