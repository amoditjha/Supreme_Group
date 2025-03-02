import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-100 text-gray-700 py-10 px-6 md:px-24">
      <div className="container mx-auto flex flex-col items-center md:items-start">
        {/* Logo */}
        <div className="mb-8 md:mb-12">
          
          <Image
            src="/logo.jpg"
            alt="supremelogo"
            className="h-full !cursor-pointer"
            loading="eager"
            height={41}
            width={148}
          />
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full text-sm text-center md:text-left">
          <div>
            <h4 className="font-bold mb-2">APPLICATIONS</h4>
            <ul>
              <li className="pt-3">Apparel</li>
              <li className="pt-3">Automotive</li>
              <li className="pt-3">Filtration</li>
              <li className="pt-3">Customized Nonwoven</li>
              <li className="pt-3">Commercial Vehicle</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">COMPANY</h4>
            <ul>
              <li className="pt-3">Who We Are</li>
              <li className="pt-3">Global Competency</li>
              <li className="pt-3">Innovation</li>
              <li className="pt-3">ESG Impact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">MORE</h4>
            <ul>
              <li className="pt-3">Contact Us</li>
              <li className="pt-3">Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">FOLLOW US</h4>
            <ul>
              <li className="pt-3">LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-sm text-center md:text-left">
        <p>©2024. All Rights Reserved.</p>
        <p>Supreme House, 110, 16th Road, Chembur, Mumbai - 400071.</p>
      </div>
    </footer>
  );
}
