import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  console.log(id);
  return (
    <>
      <h1>This is Detail Page for {id} </h1>
    </>
  );
}

export default ProductDetail;
