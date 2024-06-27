import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const vedioUrl =
    "https://videos.pexels.com/video-files/7584630/7584630-sd_960_506_25fps.mp4";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="navbar sticky top-0 z-20 bg-accent text-neutral-content">
        <div className="navbar-start">
          <div className="avatar">
            <div className="mask rounded-xl w-20">
              <img src="https://assets.mayoclinic.org/content/dam/mayoclinic/logos/mayo-clinic-logo.svg" />
            </div>
          </div>
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
                <a>Facilities & Services</a>
              </li>
              <li>
                <a>Reviews</a>
              </li>
              <li>
                <a>Contact Us</a>
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
          <a className="btn btn-ghost text-xl">Facilities & Services</a>
          <a className="btn btn-ghost text-xl">Reviews</a>
          <a className="btn btn-ghost text-xl">Contact Us</a>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <button
              className="btn bg-light 
             text-white btn-outline"
            >
              Appointment
            </button>
          </div>
        </div>
      </div>
      {/* Home section */}
      <div className=" hero bg-base-100 min-h-screen" id="home">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Central India's Leading Health Care Center
            </h1>
            <p className="py-10 text-2xl">
              <span className=" font-bold">
                The right answers the first time{" "}
              </span>{" "}
              <br />
              Effective treatment depends on getting the right diagnosis. Our
              experts diagnose and treat the toughest medical challenges.
              <br />
              <span className=" font-bold"> Top-ranked in the India</span>{" "}
              <br />
              Mayo Clinic has more No. 1 rankings than any other hospital in the
              nation according to India News & World Report.
            </p>
          </div>
        </div>
      </div>
      <hr />
      {/* about section */}
      <div className="hero bg-base-100 min-h-screen" id="about">
        <div className="hero-content flex-col lg:flex-row">
          <video autoPlay muted loop className="auto max-w-xl rounded-lg">
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
            </p>
          </div>
        </div>
      </div>
      {/* Doctors section */}
      <div className=" hero bg-base-100 " id="doctors">
        <div className="hero-content  flex-col lg:flex-row-reverse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-2">
          <div className="card bg-base-100 w-64 shadow-xl">
            <figure>
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Ejigayehu, M.D.</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-accent">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100  w-64 shadow-xl">
            <figure>
              <img
                src="https://images.pexels.com/photos/14438787/pexels-photo-14438787.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Corrie R. Bach, M.D.</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-accent">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100  w-64 shadow-xl">
            <figure>
              <img
                src="https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Jill Adamski, Ph.D.</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-accent">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100  w-64 shadow-xl">
            <figure>
              <img
                src="https://images.pexels.com/photos/15962796/pexels-photo-15962796/free-photo-of-doctor-in-scrubs-and-a-stethoscope-around-her-neck.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Helene grils,D.O.</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-accent">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-2"></div>

      <footer className="footer text-white bg-accent p-10 grid grid-cols-1 md:grid-cols-3 gap-10">
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
