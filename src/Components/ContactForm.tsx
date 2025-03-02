export default function ContactForm() {
    return (
      <div className="bg-[#0067B1] text-white flex flex-col md:flex-row items-center justify-between md:py-25 md:px-50 p-10">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold">Get in touch</h2>
          <div className="w-16 h-1 bg-white my-4"></div>
          <p className="text-lg mb-4">For general enquiries</p>
          <p className="text-lg"><strong>Address :</strong><br/>110, 16th Road, Chembur, Mumbai - 400071</p>
          <p className="text-lg mt-4"><strong>Phone :</strong><br/>+91 22 25208822</p>
          <p className="text-lg mt-4"><strong>Email :</strong><br/><a href="mailto:info@supremegroup.co.in" className="underline">info@supremegroup.co.in</a></p>
        </div>
        
        {/* Right Section - Contact Form */}
        <div className="md:w-1/2 w-full ">
          <form className="flex flex-col space-y-6 text-white">
            <input type="text" placeholder="Full name" className="bg-transparent border-b border-white outline-none py-2 w-full" />
            <input type="email" placeholder="Email" className="bg-transparent border-b border-white outline-none py-2 w-full" />
            <input type="text" placeholder="Company" className="bg-transparent border-b border-white outline-none py-2 w-full" />
            <textarea placeholder="Message" className="bg-transparent border-b border-white outline-none py-2 w-full h-20"></textarea>
            <button type="submit" className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition w-fit">Send</button>
          </form>
        </div>
      </div>
    );
  }
  