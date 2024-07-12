import ContractFrom from "../components/ContractFrom/ContractFrom";
import ViewContract from "../components/ContractFrom/ViewContract";
import HeroArea from "../components/HeroArea";

const ContractUs = () => {
  const isAdmin = false;
  const isStudent = true;
  return (
    <>
      <div>
        <HeroArea
          title="Contract Us"
          description="We are always connected with you and ready to help. Feel free to ask anything"
        />
      </div>
      <div>
        {isAdmin && <ViewContract />}

        {isStudent && <ContractFrom />}
      </div>
    </>
  );
};

export default ContractUs;
