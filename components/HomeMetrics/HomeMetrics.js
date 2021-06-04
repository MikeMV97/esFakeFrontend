import { HomeMetricsGrid, MetricDescription } from "./styles";
import Image from "next/image";
import { MetricName } from "../MetricName";

export const HomeMetrics = () => (
  <HomeMetricsGrid>
    <div className="image">
      <Image
        src="/homeMetrics.png"
        width={658}
        height={439}
        layout="responsive"
      />
    </div>
    <div>
      <h3>Conoce nuestras métricas</h3>
      <p>
        ¡No todo es arte de magia! A través de algoritmos de Machine Learning y
        técnicas de ciencia de datos medimos que tan veráz es una noticia.
        Conoce qué factores tomamos en cuenta para ello.
      </p>
      <MetricDescription>
        <MetricName name="Métrica 1" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quod debitis molestiae fuga doloremque, inventore porro, distinctio
            tempore vero dolorem ipsa nam quis illum a incidunt sequi aut
            repellat iusto.
          </p>
        </div>
      </MetricDescription>
      <MetricDescription>
        <MetricName name="Métrica 2" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quod debitis molestiae fuga doloremque, inventore porro, distinctio
            tempore vero dolorem ipsa nam quis illum a incidunt sequi aut
            repellat iusto.
          </p>
        </div>
      </MetricDescription>
      <MetricDescription>
        <MetricName name="Métrica 3" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quod debitis molestiae fuga doloremque, inventore porro, distinctio
            tempore vero dolorem ipsa nam quis illum a incidunt sequi aut
            repellat iusto.
          </p>
        </div>
      </MetricDescription>
    </div>
  </HomeMetricsGrid>
);
