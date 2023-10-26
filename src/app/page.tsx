import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="mainHome">
        <div className="container">
          <div className="row">
            <div className="flex">
              <div className="wrapper_value">
                <p>Doe o valor de R$10,00 acessando o link</p>
                <a href="https://picpay.me/nelson.ribeiro.costa/10.0">
                  Doar R$10,00 com o aplicativo <span>picpay</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_bg">
        <Image
          src={"/images/body.webp"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="Imagem com logo iasd"
        />
      </section>
    </>
  );
}
