import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col items-center justify-center py-2 h-full">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 background-gradient">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl my-12">
          Choose method
        </h1>

        <div>
          <div class="sketchfab-embed-wrapper">
            {" "}
            <iframe
              title="Twokinds Modern Trio Apartment"
              frameborder="0"
              width="900px"
              height="500px"
              allowfullscreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src="https://sketchfab.com/models/86d857ef058b445880d9883b5dfd1b89/embed"
            >
            </iframe>{" "}
          </div>
        </div>
        <div className="flex w-full gap-8 my-12 ">
          <div className="px-20 rounded-xl border-2 border-green-600 bg-green-100/10 shadow-xl hover:scale-105 hover:shadow-green-500/50 transform duration-300 shadow-green-500/25 py-12 flex flex-col items-center gap-8 w-full">
            <h1 className="text-4xl text-green-100 font-semibold">
              Paint selected walls
            </h1>
            <h1 className="mx-auto max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
              Choose wall and color it with our recommended palette
            </h1>
            <button
              onClick={() => navigate("/paint")}
              className="flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-green-600 text-white px-5 py-2 text-xl shadow-md hover:bg-green-400 bg-green-600 font-medium transition"
            >
              Paint Wall
            </button>
          </div>
          <div className="px-20 rounded-xl border-2 border-green-600 bg-green-100/10 shadow-xl hover:scale-105 hover:shadow-green-500/50 transform duration-300 shadow-green-500/25 py-12 flex flex-col items-center gap-8 w-full">
            <h1 className="text-4xl text-green-100 font-semibold">
              Generate using AI
            </h1>
            <h1 className="mx-auto max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
              Use our ControlNet model to generate room based on your theme.
            </h1>
            <button
              onClick={() => navigate("/generate")}
              className="flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-green-600 text-white px-5 py-2 text-xl shadow-md hover:bg-green-400 bg-green-600 font-medium transition"
            >
              Generate room
            </button>
          </div>
        </div>
      </main>
    
    </div>
  );
};

export default Dashboard;
