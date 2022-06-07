import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./Home.css";
import HeaderImg from "./header-img.jpg";
const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="header-img">
        <img src={HeaderImg} alt="ubuntu" />
      </div>
      <div className="content-section">
        <div className="body-text">
          <p>
            A palavra Ubuntu tem origem nos idiomas zulu e xhosa do sul do
            continente africano e tem como significado a humanidade para todos.
            Nesse sentido, a Filosofia Ubuntu fundamenta-se em uma ética da
            coletividade, representada principalmente pela convivência
            harmoniosa com o outro e baseada na categoria do “nós”, como membro
            integrante de um todo social. Dessa forma, esse trabalho tem como
            objetivo refletir sobre os fundamentos da Filosofia Ubuntu,
            considerando-a como uma das várias correntes da filosofia africana.
            Assim, será desenvolvido através de uma pesquisa bibliográfica,
            requerendo o uso do método explicativo. A Filosofia Ubuntu resgata a
            essência de ser uma pessoa com consciência de que é parte de algo
            maior e coletivo. Para isso, de acordo com os fundamentos da
            Filosofia Ubuntu, somos pessoas através de outras pessoas e que não
            podemos ser plenamente humanos sozinhos, sendo feitos para a
            interdependência. Nesse contexto, fundamenta-se nas relações entre o
            divino, a comunidade e a natureza. Porém, a Filosofia Ubuntu procura
            resgatar o conceito de Comum para alcançar a democracia, ou seja,
            uma multiplicidade de singularidades. Para tal, tem a igualdade como
            um princípio fundamental e condicional para a existência do outro.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
//
