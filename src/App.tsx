import { useState } from "react";
import ApiItem from "./ApiItem";
import apisData from "./apis.json";
import "./App.css";
import EmptyResult from "./EmptyResult";
import Header from "./Header";
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
    <>
      <Header />
      <main className="container mx-auto">
        <section aria-label="Search React APIs">
          <SearchInput search={search} onChange={handleSearchChange} />
        </section>
        <section aria-label="React API Results">
          {filteredApis.map((api) => (
            <ApiItem key={api.name} item={api} />
          ))}
          {filteredApis.length === 0 && <EmptyResult />}
        </section>

        {/* <ApiList /> */}
      </main>
    </>
  );
}

export default App;
