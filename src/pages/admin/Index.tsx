import { Link } from "react-router-dom";
import { Button } from "keep-react";

function Index() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1>Aquí va el inicio</h1>
      <Link to={"/"}>
       <Button color="success" variant="outline">
        Regresar
      </Button> 
      </Link>
    </main>
  );
}

export default Index;
