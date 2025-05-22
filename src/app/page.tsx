import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/above-the-fold.jpg')]  h-screen flex">
        <div className="w-1/2">
          <div>
            <h1>
              Hi, I'm Christian.<br/>
              I'm a Freelance Shopify Developer
            </h1>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            className="rounded-xl"
            src="/profile-picture-blue-bg.jpg"
            alt="profile picture"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className="bg-[url('/below-the-fold.jpg')] bg-cover h-[1000px]">

      </div>
    </div>
  );
}
