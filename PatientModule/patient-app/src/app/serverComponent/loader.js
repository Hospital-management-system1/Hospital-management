// "use client"
const Loader = () => {
    return (
      <div className="loader">
        <style jsx>{`
          .loader {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-size: 2em;
          }
        `}</style>
        Loading...
      </div>
    );
  };
  
  export default Loader;
  