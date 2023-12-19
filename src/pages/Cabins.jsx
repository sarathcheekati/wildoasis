import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    getCabins()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://ppwoiuhkvwbztfzccuhw.supabase.co/storage/v1/object/public/avatars/cabin-001.jpg?t=2023-12-19T14%3A59%3A48.115Z" />
    </Row>
  );
}

export default Cabins;
