import { useParams } from "react-router-dom";

export function Recipe() {
  const { id } = useParams();

  return (
    <div>
      <h1>Recette {id}</h1>
    </div>
  );
}
