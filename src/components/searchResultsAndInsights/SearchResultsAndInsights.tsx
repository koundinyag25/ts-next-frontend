import { Spin } from "antd";
import { memo } from "react";
import Markdown from "react-markdown";
import SearchResults from "@/components/searchResults";
import { CVE } from "../cveCard/types";

const SearchResultsAndInsights = ({
  insights,
  cves,
  loading,
}: {
  insights: string;
  cves: CVE[];
  loading: boolean;
}) => {
  return (
    <div className="p-4 h-[80vh] w-full gap-4 flex">
      {loading ? (
        <div className="flex flex-col gap-4 w-[70%] overflow-y-auto h-full bg-gray-100 rounded-lg p-4 gap-4">
          <div className="flex flex-col gap-4 w-full h-full align-center justify-center">
            <Spin />
            <div className="text-center">
              Please wait while we fetch the data
            </div>
          </div>
        </div>
      ) : (
        <SearchResults cves={cves} />
      )}

      <div className="w-[30%] h-full bg-gray-100 rounded-lg">
        <div className="text-sm font-bold p-2 w-full text-center">Insights</div>
        <div className="flex justify-center items-center flex-col gap-2">
          <div className="flex justify-center items-center h-[70vh] block overflow-y-auto">
            {loading ? (
              <div className="flex flex-col gap-4 w-full h-full align-center justify-center">
                <Spin />
                Please wait while we fetch the insights
              </div>
            ) : insights && cves.length > 0 ? (
              <div className="w-[80%] h-[80%] block overflow-y-auto">
                <Markdown className="prose">{insights}</Markdown>
              </div>
            ) : (
              <div className="flex justify-center items-center h-[60vh] align-center text-center">
                Fetch data to get insights
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SearchResultsAndInsights);
