import {
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const ZigZag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="6"
    viewBox="0 0 60 6"
    fill="none"
    className="mt-2"
  >
    <path
      d="M0 3L10 0L20 6L30 0L40 6L50 0L60 3"
      stroke="#FFD33D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Contact = () => {
  return (
    <section className="bg-[#1B1D21] text-white py-24 font-poppins relative overflow-hidden">
      {/* ✅ موجة خلفية */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44C166.69,83.78,0,120,0,120H1200V0S964.54,51.7,803.21,83.43C641.89,115.16,476.1,29.1,321.39,56.44Z"
            fill="#2B2D31"
          ></path>
        </svg>
      </div>

      {/* المحتوى */}
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 relative z-10">
        {/* العمود الأول */}
        <div className="max-w-[379px]">
          <h3 className="text-lg font-semibold mb-2 capitalize relative inline-block">
            Egyptian Space Weather Center
            <ZigZag />
          </h3>

          <p className="text-[16px] leading-[20px] text-white/80 font-normal capitalize mb-6">
            The Egyptian Space Weather Center (ESWC) is the official authority
            responsible for monitoring and forecasting space weather phenomena
            and their impacts on Egypt's infrastructure, satellites, and
            communication systems.
          </p>

          {/* ✅ أيقونات السوشيال كلها صفراء */}
          <div className="flex space-x-3">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center bg-white rounded-full transition hover:scale-110"
              >
                <Icon
                  size={18}
                  stroke="none"
                  fill="#FFD33D"
                  className="text-[#FFD33D]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* العمود الثاني */}
        <div className="pl-8">
          <h3 className="text-lg font-semibold mb-2 capitalize relative inline-block">
            Quick Link
            <ZigZag />
          </h3>

          <ul className="space-y-3 text-[16px] leading-[20px] text-white/80 capitalize mt-4">
            {["Home", "About Us", "Real-Time Data", "Reports"].map((link, i) => (
              <li
                key={i}
                className="flex items-center hover:text-[#FFD33D] transition cursor-pointer"
              >
                <ChevronRight size={16} className="mr-2 text-[#FFD33D]" /> {link}
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الثالث */}
        <div>
          <h3 className="text-lg font-semibold mb-2 capitalize relative inline-block">
            Contact
            <ZigZag />
          </h3>

          <ul className="space-y-3 text-[16px] leading-[20px] text-white/80 capitalize mt-4">
            <li className="flex items-start space-x-2">
              <MapPin size={24} className="text-[#FFD33D] mt-0.5 flex-shrink-0" />
              <span>
                Address: Kilo 6, Middle Ring Road, 5th<br />
                Settlement, In Front Of Al-Fattah Al-Alim<br />
                Mosque, Behind Madinaty, Cairo – Egypt
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={24} className="text-[#FFD33D]" />
              <span>Space.Weather@Egsa.Gov.Eg</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={24} className="text-[#FFD33D]" />
              <span>+20 2 21297950 / 994</span>
            </li>
            <li>
              <span className="text-[#FFD33D] font-semibold">Fax </span>
              <span className="ml-2 text-white/80">+20 2 21297993</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;






