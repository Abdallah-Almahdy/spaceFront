import {
  Mail,
  Phone,
  MapPin,
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
    <section className="bg-[#1B1D21] text-white py-12 font-poppins relative overflow-hidden">
      
      {/* موجة خلفية أصغر */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44C166.69,83.78,0,120,0,120H1200V0S964.54,51.7,803.21,83.43C641.89,115.16,476.1,29.1,321.39,56.44Z"
            fill="#2B2D31"
          />
        </svg>
      </div>

      {/* المحتوى */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 relative z-10">

        {/* العمود الأول */}
        <div className="max-w-[420px]">
          <h3 className="text-lg font-semibold mb-2 capitalize inline-block">
            Egyptian Space Weather Center
            <ZigZag />
          </h3>

          <p className="text-sm text-white/80 mb-5 leading-relaxed">
            The Egyptian Space Weather Center (ESWC) is the official authority
            responsible for monitoring and forecasting space weather phenomena
            and their impacts on Egypt's infrastructure.
          </p>

          <div className="flex space-x-3">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <div
                key={i}
                className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:scale-110 transition"
              >
                <Icon size={16} stroke="none" fill="#FFD33D" />
              </div>
            ))}
          </div>
        </div>

        {/* العمود الثاني */}
        <div>
          <h3 className="text-lg font-semibold mb-2 capitalize inline-block">
            Contact
            <ZigZag />
          </h3>

          <ul className="space-y-3 text-sm text-white/80 mt-4">
            <li className="flex items-start space-x-2">
              <MapPin size={20} className="text-[#FFD33D] mt-1" />
              <span>
                Kilo 6, Middle Ring Road, 5th Settlement, Cairo – Egypt
              </span>
            </li>

            <li className="flex items-center space-x-2">
              <Mail size={20} className="text-[#FFD33D]" />
              <span>Space.Weather@Egsa.Gov.Eg</span>
            </li>

            <li className="flex items-center space-x-2">
              <Phone size={20} className="text-[#FFD33D]" />
              <span>+20 2 21297950 / 994</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Contact;
