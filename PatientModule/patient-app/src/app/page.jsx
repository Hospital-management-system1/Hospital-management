"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "./serverComponent/loader";
import Modal from "./component/Modal"

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const images = [
    "https://plus.unsplash.com/premium_photo-1681399991680-b2be2e767b32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683120977710-326a626fd320?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682310231531-148748e7684f?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1453847668862-487637052f8a?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/5998443/pexels-photo-5998443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const interval = setInterval(() => {
      setCurrentImageIndex((preIndex) => (preIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const vedioUrl =
    "https://videos.pexels.com/video-files/7584630/7584630-sd_960_506_25fps.mp4";

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="navbar sticky top-0 z-20 bg-accent text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-compact bg-neutral dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#doctors">Doctors</Link>
              </li>
              <li>
                <Link href="#facilities">Facilities & Services</Link>
              </li>
              <li>
                <Link href="#review">Reviews</Link>
              </li>
              <li>
                <Link href="#contactus">Contact Us</Link>
              </li>
              <li>
                <Link href="#contactus">Login</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" navbar-center text-white hidden lg:flex">
          <Link href="#home" className="btn btn-ghost text-xl">
            Home
          </Link>
          <Link href="#about" className="btn btn-ghost text-xl">
            About
          </Link>
          <Link href="#doctors" className="btn btn-ghost text-xl">
            Doctors
          </Link>
          <Link href="#facilities" className="btn btn-ghost text-xl">
            Faccilities & Services
          </Link>
          <Link href="#review" className="btn btn-ghost text-xl">
            Reviews
          </Link>
          <Link href="#contactus" className="btn btn-ghost text-xl">
            Contact Us
          </Link>
          <button
              onClick={() => router.push("/patientDetail")}
              className="btn btn-ghost text-xl 
             text-white  transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover:bg-accent duration-300"
            >
              Login
            </button>
          
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div className="avatar">
              <div className="mask rounded-xl w-18">
                <img src="https://assets.mayoclinic.org/content/dam/mayoclinic/logos/mayo-clinic-logo.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Home section */}
      <div
       id="home"
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          animation: "slide 15s linear infinite",
          backgroundSize: "100%",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-l">
            <h1 className="mb-5 text-white text-5xl font-bold">
              Transforming your care
            </h1>
            <p className="text-white mb-5">
              <span className="font-semibold text-xl">
                {" "}
                The right answers the first time{" "}
              </span>{" "}
              Effective treatment depends on getting the right diagnosis. Our
              experts diagnose and treat the toughest medical challenges.
            </p>
            {/* <button
              onClick={() => router.push("/appointment")}
              className="btn bg-glass 
             text-white btn-outline transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-accent duration-300"
            >
              Get Appointment
            </button> */}
            <Modal />
          </div>
        </div>
      </div>
      <hr />
      {/* about section */}

      <div className="hero bg-base-100 min-h-screen" id="about">
        <div className="hero-content flex-col lg:flex-row">
          <video
            autoPlay
            muted
            loop
            className="auto max-w-xl border-2 border-accent rounded-lg"
          >
            <source src={vedioUrl} type="video/mp4" />
          </video>
          <div>
            <h1 className="text-5xl mt-5 font-bold ml-5">
              Solving the world's toughest medical problems
            </h1>
            <p className="py-5  text-xl ml-5">
              Mayo Clinic is the largest integrated, not-for-profit medical
              group practice in the world. We're building the future, one where
              the best possible care is available to everyone — and more people
              can heal at home. That's how we inspire hope in those who need it
              most. Our history of innovation dates back almost 150 years, when
              brothers Will and Charlie Mayo pioneered an integrated, team-based
              approach to medicine. Today, that trailblazing spirit drives
              innovations like Mayo Clinic Platform — which powers new
              technologies to change how care is delivered to all.
              <button className="btn rounded-full btn-accent btn-outline btn-xs m-2 ">
                read more
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Doctors section */}
      {/* Carousel */}
      <div className="hero  bg-white min-h-screen" id="doctors">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="carousel border-2 border-accent  carousel-center bg-white rounded-box max-w-md space-x-4 p-4">
            <div className="carousel-item">
              <div className="card  bg-base-100 w-64 shadow-xl">
                <figure>
                  <img
                    src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Ejigayehu, M.D.</h2>
                  <p>Geriatrician, Internist, Palliative Care Specialist</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-accent">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card bg-base-100  w-64 shadow-xl">
                <figure>
                  <img
                    src="https://images.pexels.com/photos/14438787/pexels-photo-14438787.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Corrie R. Bach, M.D.</h2>
                  <p>Comprehensive Cancer Center Radiology</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-accent">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card bg-base-100  w-64 shadow-xl">
                <figure>
                  <img
                    src="https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Jill Adamski, Ph.D.</h2>
                  <p>Cardiologist, Echocardiographer</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-accent">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card bg-base-100  w-64 shadow-xl">
                <figure>
                  <img
                    src="https://images.pexels.com/photos/15962796/pexels-photo-15962796/free-photo-of-doctor-in-scrubs-and-a-stethoscope-around-her-neck.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Helene grils,D.O.</h2>
                  <p>Hematology,nonmalignant hematology</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-accent">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-5xl ml-5 font-bold">
              Our Medical Professionals
            </h1>
            <p className="py-5  text-xl ml-5">
              At mayo hospital, we pride ourselves on having a team of highly
              skilled and compassionate doctors who are committed to providing
              exceptional healthcare services. Our doctors come from diverse
              backgrounds, each bringing a wealth of experience and a unique
              approach to patient care.
            </p>
            <p className="py-5  text-xl ml-5">
              With over 15 years of experience in cardiology, Dr. Jane Smith is
              renowned for her expertise in managing complex heart conditions.
              She is dedicated to using the latest advancements in medical
              technology to offer the best care possible. Dr. Smith believes in
              a patient-centric approach, ensuring that every patient receives
              personalized care tailored to their unique needs.
            </p>
          </div>
        </div>
      </div>

      {/* facilities  */}

      <div id="facilities">
        <h1 className="text-5xl text-center mt-5  font-bold ml-5">
          Facilities & Services
        </h1>

        <div className="hero  bg-white min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              <div className="card border-accent border-2">
                <figure>
                  <img
                    src="https://bansalhospital.com/wp-content/uploads/2020/09/Blood-Bank1.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Blood Bank</h2>

                  <div className="mt-5 card-actions justify-center">
                    <p>Blood Bank at Mayo Clinic</p>
                  </div>
                </div>
              </div>

              <div className="card border-accent border-2">
                <figure>
                  <img
                    src="https://bansalhospital.com/wp-content/uploads/2019/01/cardiology-icon1.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Cardiology</h2>

                  <div className="mt-5 card-actions justify-center">
                    <p>Department of Cardiology at Mayo</p>
                  </div>
                </div>
              </div>

              <div className="card border-accent border-2">
                <figure>
                  <img
                    src="https://bansalhospital.com/wp-content/uploads/2020/09/Cardiothoracic-and-Vascular-Surgery1-icon.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Cardiothoracic And Vascular Surgery
                  </h2>

                  <div className="mt-2 card-actions justify-center">
                    <p>Our vascular and endovascular surgeons…</p>
                  </div>
                </div>
              </div>

              <div className="card border-accent border-2">
                <figure>
                  <img
                    src="https://bansalhospital.com/wp-content/uploads/2020/09/Dental1.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Dental</h2>

                  <div className="mt-5 card-actions justify-center">
                    <p>“Teeth aren’t pearly, until you… </p>
                  </div>
                </div>
              </div>

              <div className="card border-accent border-2">
                <figure>
                  <img
                    src="https://bansalhospital.com/wp-content/uploads/2020/09/Dermatology-Cosmetology1.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Dermatology & Cosmetology</h2>

                  <div className="mt-5 card-actions justify-center">
                    <p>The Department of Dermatology offers…</p>
                  </div>
                </div>
              </div>

              <div className="card border-accent border-2">
                <figure>
                  <img
                    src="https://bansalhospital.com/wp-content/uploads/2021/06/Liver1.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Liver Transplant and Hepato-pancreato-biliary Surgery
                  </h2>

                  <div className="mt-5 card-actions justify-center">
                    <p>The department of Liver transplant…</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews  */}

      <div className="hero mt-5  bg-white min-h-screen" id="review">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl ml-5 font-bold">Reviews</h1>
            <p className="py-5  text-xl ml-5">
              Read what our patients have to say about their experiences at Mayo
              Hospital.
            </p>
          </div>
          <div className="carousel border-2 border-accent   carousel-center bg-white rounded-box max-w-xl space-x-4 p-4">
            <div className="carousel-item">
              <div className="card border-2 border-accent  bg-base-100 w-64 shadow-xl">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1709884735646-897b57461d61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDI%3D"
                    alt="Reviewer Profile"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">John Doe</h2>
                  <p>Rating: 5/5</p>
                  <p>
                    Review: "I had a great experience with the doctors at Mayo
                    Hospital. They were very professional and caring."
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-accent">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card border-2 border-accent bg-base-100  w-64 shadow-xl">
                <figure>
                  <img
                    src="https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Reviewer Profile"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Jane Smith</h2>
                  <p>Rating: 4/5</p>
                  <p>
                    Review: "The doctors at Mayo Hospital were very
                    knowledgeable and helpful. I would definitely recommend
                    them."
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-accent">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card border-2 border-accent bg-base-100  w-64 shadow-xl">
                <figure>
                  <img
                    src="https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Reviewer Profile"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Bob Johnson</h2>
                  <p>Rating: 5/5</p>
                  <p>
                    Review: "I was very impressed with the care I received at
                    Mayo Hospital. The doctors were very friendly and
                    professional."
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-accent">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card border-2 border-accent bg-base-100  w-64 shadow-xl">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1709884732273-c20d3347aa40?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Reviewer Profile"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Alice Brown</h2>
                  <p>Rating: 4/5</p>
                  <p>
                    Review: "The doctors at Mayo Hospital were very helpful and
                    knowledgeable. I would definitely recommend them."
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-accent">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="contactus" className="footer text-white bg-accent p-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <nav>
          <h6 className="footer-title text-xl">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </main>
  );
}
