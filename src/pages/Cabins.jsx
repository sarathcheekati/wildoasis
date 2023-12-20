import Heading from "../ui/Heading";
import Row from "../ui/Row";

import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";

import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { useState } from "react";

function Cabins() {
  const [showForm, setStateForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filter/sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setStateForm((show) => !show)}>
          Add new Cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
