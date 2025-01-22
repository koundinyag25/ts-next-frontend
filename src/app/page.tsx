"use client";

import { useState } from "react";
import { postSearchText } from "@/services/cve";
import { CVE } from "@/components/cveCard/types";
import Search from "@/components/search";

import SearchResultsAndInsights from "@/components/searchResultsAndInsights";

const Home = () => {
  const [cves, setCves] = useState<CVE[]>([]);
  const [insights, setInsights] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = (searchText: string) => {
    setLoading(true);
    postSearchText(searchText)
      .then(({ data, insights }) => {
        setCves(data.cves);
        setInsights(insights);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="h-full w-full">
      <div className="flex p-4 gap-2">
        <Search handleSearch={handleSearch} loading={loading} />
      </div>
      <SearchResultsAndInsights
        insights={insights}
        cves={cves}
        loading={loading}
      />
    </div>
  );
};

export default Home;
