import Image from "next/image";

export default function Project() {
  return (
    <>
      <section className="sectionProject">
        <div className="container">
          <div className="row">
            <div className="flex">
              <Image
                src={"/images/img-iasd.jpg"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="Imagem com logo iasd"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
