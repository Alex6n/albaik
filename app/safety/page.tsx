import DataCard from "@/components/Landing/DataCard";

const page = () => {
  return (
    <div className="min-h-[53.9vh]">
      <div className="bg-[#CE3737]/90 py-10 text-background font-bold text-center text-7xl">
        Food Safety Policy
      </div>

      <DataCard>
        <h1>ALBAIK Food Safety Policy:</h1>
        <ul>
          <li>
            ALBAIK and its franchisees management and employees shall ensure the
            highest standards of food safety and quality for all meals served at
            all ALBAIK restaurants
          </li>
          <li>
            ALBAIK restaurants are serving meals of fried chicken, seafood,
            sandwiches and other side items following the food process flow
          </li>
          <li>
            ALBAIK and its franchisees shall always guarantee that its FSMS is
            on compliance with all food safety related regulations/legislations
            and ISO 22000:2005 requirements
          </li>
          <li>
            ALBAIK Food Safety Policy shall be reviewed annually to guarantee
            its suitability and its continual goal of customer satisfaction
          </li>
        </ul>
      </DataCard>
    </div>
  );
};

export default page;
