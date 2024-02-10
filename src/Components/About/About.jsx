import BoxImage from "./BoxImage";
import BoxDeskripsi from "./BoxDeskripsi";

export default function About() {
  return (
    <div className="container">
      <div id="about">
        <BoxImage />
        <BoxDeskripsi />
      </div>
    </div>
  );
}
