import Image from "next/image";
import '../../assets/global.css';


export default function Home() {
  return (
    <div>
      <div style={{ height: '95vh' }} className="bg-[url('/above-the-fold.jpg')] flex">
        <div className="w-1/2 flex justify-center items-center">
          <div className="headline-container rounded p-4">
            <h1 className="align-center">
              Hi, I'm Christian.<br/>
              I'm a Freelance Shopify Developer
            </h1>
            <h2>
              I help e-commerce brands and agencies build, customize and improve the user experience of the Storefronts
            </h2>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image
            className="rounded-xl"
            src="/profile-picture-blue-bg.jpg"
            alt="profile picture"
            width={400}
            height={400}
          />
        </div>
      </div>

      <div className="below-the-fold bg-[url('/below-the-fold.jpg')] bg-cover h-fit w-[100%]">
        <div className="flex justify-center items-center h-40">
          <h1>How I can help you</h1>
        </div>
        <div className="services w-[100%] flex flex-col gap-20 items-center">
          <div className="card w-200 flex rounded-xl">
            <div>
              <Image
                className="rounded-xl object-cover"
                src="/design-to-production.jpg"
                alt="design to production"
                width={400}
                height={300}
              />
            </div>
            <div className="content">
              <h2>Design to Production</h2>
              <p>Turn your Figma or design mockups into a fast, clean, and fully responsive Shopify Store.</p>
            </div>
          </div>

          <div className="card w-200 flex rounded-xl">
            <div>
              <Image
                className="rounded-xl object-cover"
                src="/store-setup.jpg"
                alt="store setup"
                width={400}
                height={300}
              />
            </div>
            <div className="content">
              <h2>Store Setup</h2>
              <p>Complete Shopify setup tailored to your business.</p>
            </div>
          </div>

          <div className="card w-200 flex rounded-xl">
            <div>
              <Image
                className="rounded-xl object-cover"
                src="/development-support.jpg"
                alt="ongoing development support"
                width={400}
                height={300}
              />
            </div>
            <div className="content">
              <h2>Ongoing Development Support</h2>
              <p>Shopify Theme Development support for e-commerce brands and agencies.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center h-40">
          <p className="contact">Contact me at christiancarbonari9@gmail.com</p>
        </div>


      </div>
      <div className="projects">
        <div>
          <div className="projects-title flex justify-center items-center h-30">
            <h2>Some of my past projects</h2>
          </div>
          <div className="project-card flex">
            <div className="media">
              <video
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/custom-slider-mobile.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="content">
              <div>
                <h3>Custom Testimonial Slider</h3>
                <p>Built a custom testimonial slider section for a Shopify Store. Store owners can showcase customer reviews in an automated, clean carousel.</p>
              </div>
            </div>
          </div>

          <div className="project-card flex">
            <div className="content">
              <div className="pl-[130px]">
                <h3>Product Quiz</h3>
                <p>Built a custom quiz page to guide customers toward the right product based on their answers.</p>
              </div>
            </div>
            <div className="media">
              <video
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/product-quiz-mobile.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="project-card flex" style={{marginBottom: '0px', paddingBottom: '150px' }}>
            <div className="media">
              <video
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/product-comparison-mobile.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="content">
              <div>
                <h3>Custom Product Comparison Page</h3>
                <p>Built a custom product comparison page where users can select specific products, view their features side by side, and add items directly to the cart.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-me flex flex-col justify-center items-center">
        <div>
          <div className="flex flex-col justify-center items-center gap-[40px] pt-[40px]">
            <h2>About Me</h2>
            <h3>From Powerline Electrician to Shopify Developer</h3>
          </div>
          <div className="content px-[100px] pt-[20px]">
            <p>Originally from Italy, I worked for five years as a powerline electrician and, motivated by a passion for technology and the desire of exploring new opportunities abroad,
              in January 2024 I moved to Australia and completed an intensive 6-month bootcamp in Full-Stack Web Development.<br/><br/>
              After graduating, I worked as a Designer for a B2B food e-commerce business—an experience that sparked my interest in the e-commerce space and led me to specialize in it.<br/><br/>
              Today, I work as a Freelance Shopify Developer, focusing on theme development.<br/>
              If you want to work together, feel free to reach out on Linkedin or by email at <strong>christiancarbonari9@gmail.com.</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}
