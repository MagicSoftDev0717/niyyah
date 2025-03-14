const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            {/* Column 1: Logo */}
            <div>
              <img src="/Logo/Logo_Niyyah.svg" alt="Logo" className="mx-auto md:mx-0" />
            </div>
  
            {/* Column 2: Links */}
            {/* <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400">Contact Us</a>
            </div> */}
  
            {/* Column 3: Social Icons */}
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#"><img src="/assets/Footer/facebook.svg" alt="Facebook" width={36} height={36} /></a>
              <a href="#"><img src="/assets/Footer/instagram.svg" alt="instagram" width={36} height={36} /></a>
              <a href="#"><img src="/assets/Footer/youtube.svg" alt="LinkedIn" width={36} height={36} /></a>
            </div>
          </div>
          <p className="text-center text-sm mt-6">&copy; 2025 NIYYAH ENTREPRENRUE. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  