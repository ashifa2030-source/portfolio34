import locationIcon from "../icons/location.jpeg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-100 py-24 px-4"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          {/* Heading */}
          <div>
            <span className="text-purple-600 center font-medium uppercase tracking-wider">
              Get In Touch
            </span>

            <h2 className="text-4xl font-semibold text-gray-900 mt-2 mb-4">
              Let’s discuss your Project
            </h2>

            <p className="text-gray-500">
              Feel free to reach out through any of these channels.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4">

            {/* Address */}
            <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-600 rounded-md">
                <img src={locationIcon} alt="Location" className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium text-gray-900">
                  Bahawalpur , Punjab, Pakistan
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-600 rounded-md">
                📧
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900">
                  asmaf12305@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-600 rounded-md">
                📞
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-gray-900">
                  +92 301 8619078
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-medium text-gray-900 mb-3">Let’s connect</p>
            <div className="flex gap-3">
              {["🌐", "🐦", "📘", "📸", "💼"].map((icon, i) => (
                <div
                  key={i}
                  className="w-12 h-12 flex items-center justify-center rounded-md bg-white shadow hover:bg-purple-600 hover:text-white transition cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="space-y-6">

          <form className="space-y-6">

            <input
              placeholder="Your Name"
              className="w-full border-b-2 border-gray-200 focus:border-purple-600 outline-none py-2"
            />

            <input
              placeholder="Phone"
              className="w-full border-b-2 border-gray-200 focus:border-purple-600 outline-none py-2"
            />

            <input
              placeholder="Email"
              className="w-full border-b-2 border-gray-200 focus:border-purple-600 outline-none py-2"
            />

            <input
              placeholder="Subject"
              className="w-full border-b-2 border-gray-200 focus:border-purple-600 outline-none py-2"
            />

            <textarea
              placeholder="Message"
              rows="3"
              className="w-full border-b-2 border-gray-200 focus:border-purple-600 outline-none py-2"
            />

            <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}
