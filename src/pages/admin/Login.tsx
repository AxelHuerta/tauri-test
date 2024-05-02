import { Button, Checkbox, Label } from "keep-react";
import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 to-green-500">
      <div className="w-full max-w-[600px] bg-white/[0.7] flex flex-col justify-center items-center p-8 m-8 rounded-lg shadow">
        <h2 className="text-lime-600 font-bold text-3xl uppercase my-2">
          Inicio de Sesión
        </h2>
        {/* profile picture */}
        <img
          src="https://www.izt.uam.mx/images/sitio/cosib/home/logo_COSIB.png"
          alt="Logo del COSIB"
          width={300}
        />

        {/* form */}
        <form className="w-[80%]">
          <InputForm placeholder="Ingrese número económico" type="text" />
          <InputForm placeholder="Ingrese contraseña" type="password" />
        </form>
        <fieldset className="flex items-center gap-2 justify-around w-full">
          <div className="flex">
            <Checkbox id="checkbox" className="border-black" />
            <Label htmlFor="checkbox">Mantener conectado</Label>
          </div>
          <a href="/">Olvide mi contraseña</a>
        </fieldset>
        <Link to={"/index"}>
          <Button className="uppercase my-4 w-full rounded-full" style={{background: "rgb(87, 165, 25)"}}>
            ingresar
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
