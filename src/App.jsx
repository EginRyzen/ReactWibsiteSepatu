import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";

export default function App() {
  return (
    <>
      <div className="main-header">
        <Navbar />
      </div>
      <div className="main">
        <div className="container">
          <div id="about">
            <div className="box-image">
              <img src="./img/sigglepixture.jpg" alt="" />
            </div>
            <div className="box-deskripsi">
              <h2>Hello Word</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non eaque repellendus unde consequatur assumenda voluptatibus, libero commodi laudantium consequuntur, laboriosam quas iste perferendis fugiat sequi veritatis
                alias. Neque deleniti deserunt reprehenderit similique, doloribus soluta quasi voluptate enim quos molestias placeat minus, quidem maiores odit alias vitae. Asperiores, quod quam?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non eaque repellendus unde consequatur assumenda voluptatibus, libero commodi laudantium consequuntur, laboriosam quas iste perferendis fugiat sequi veritatis
                alias. Neque deleniti deserunt reprehenderit similique, doloribus soluta quasi voluptate enim quos molestias placeat minus, quidem maiores odit alias vitae. Asperiores, quod quam?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non eaque repellendus unde consequatur assumenda voluptatibus, libero commodi laudantium consequuntur, laboriosam quas iste perferendis fugiat sequi veritatis
                alias. Neque deleniti deserunt reprehenderit similique, doloribus soluta quasi voluptate enim quos molestias placeat minus, quidem maiores odit alias vitae. Asperiores, quod quam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
