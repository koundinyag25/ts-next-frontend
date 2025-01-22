import CveCards from "@/components/cveCard";
import { CVE } from "@/components/cveCard/types";

const SearchResults = ({ cves }: { cves: CVE[] }) => {
  return (
    <div className="flex flex-col gap-4 w-[70%] overflow-y-auto h-full bg-gray-100 rounded-lg">
      {cves.length > 0 ? (
        cves.map((cve: CVE, index: number) => (
          <CveCards key={index} cve={cve} />
        ))
      ) : (
        <div className="flex justify-center items-center h-[60vh] align-center text-center">
          Fetch CVEs or search for a different keyword
        </div>
      )}
    </div>
  );
};

export default SearchResults;
