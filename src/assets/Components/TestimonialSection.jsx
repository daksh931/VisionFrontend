"use client";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    description:
      "This platform has completely transformed my learning experience. Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    description:
      "An amazing service with great support. I love how intuitive the platform is!",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    description:
      "Excellent experience! The team is super responsive and the quality is top-notch.",
  },
  {
    id: 4,
    name: "Sophia Johnson",
    email: "sophia@example.com",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    description:
      "Really impressed with the service. I’ve never had such a smooth experience before!",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david@example.com",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    description:
      "I love the attention to detail and the great customer support provided.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Users Say
        </h2>
        <p className="text-gray-600 mt-2">
          Real experiences from our satisfied users.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto relative">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="p-4"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
                className="  p-6 text-center flex flex-col justify-center items-center h-[250px] transition-all duration-300"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-2 border-blue-500 shadow-md"
                />
                <h3 className="text-lg font-semibold text-gray-800 mt-3">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.email}</p>
                <p className="text-gray-700 text-sm mt-2 line-clamp-3">
                  {testimonial.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
