import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import CabinTableOperations from "../features/cabins/CabinTableOperations";


function Cabins() {


  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row type="vertical" >
        <CabinTable />
        <AddCabin />

      </Row>
    </>
  );
}

export default Cabins;
