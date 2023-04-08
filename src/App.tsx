import ListaDeEventos from "./components/ListaDeEventos";
import Formulario from "./components/Formulario";
import Calendario from "./components/Calendario";
import style from "./App.module.scss";
import Card from "./components/Card";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback="Carregando">
        <div className={style.App}>
          <div className={style.Coluna}>
            <Card>
              <Formulario />
            </Card>
            <hr />
            <Card>
              <ListaDeEventos />
            </Card>
          </div>
          <div className={style.Coluna}>
            <Calendario />
          </div>
        </div>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
