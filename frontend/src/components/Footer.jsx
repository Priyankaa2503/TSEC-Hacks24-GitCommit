import { Link } from "react-router-dom";
import logo from "../../assets/asian-paints.png";

export default function Footer() {
  return (
    <footer className="text-center h-12 sm:h-20 w-full sm:pt-2 border-t mt-4 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-gray-500">
      <div className="text-gray-500 flex gap-2 items-center">
        <span className="text-gray-500">Made with 💚{" "} by</span>
        <span className="text-green-600">Git Commit </span> 
      </div>
      
    </footer>
  );
}
