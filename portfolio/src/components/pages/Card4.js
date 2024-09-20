import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Button = ({ label, onClick, href, target, rel }) => {
  return href ? (
    <a href={href} target={target} rel={rel} className="relative w-24 h-10 text-white bg-transparent border-none rounded-md text-sm font-bold flex items-center justify-center overflow-hidden cursor-pointer group">
      <span className="absolute inset-0 flex items-center justify-center z-10">{label}</span>
      <span className="absolute w-32 h-32 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom" />
      <span className="absolute w-32 h-32 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom" />
      <span className="absolute w-32 h-32 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom" />
    </a>
  ) : (
    <button
      className="relative w-24 h-10 text-white bg-transparent border-none rounded-md text-sm font-bold flex items-center justify-center overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <span className="absolute inset-0 flex items-center justify-center z-10">{label}</span>
      <span className="absolute w-32 h-32 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom" />
      <span className="absolute w-32 h-32 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom" />
      <span className="absolute w-32 h-32 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom" />
    </button>
  );
};

const Card = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [time, setTime] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with actual email sending logic
    alert(`Message sent from ${formData.name} (${formData.email}): ${formData.message}`);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <motion.div
      className="absolute bottom-[10%] left-20 w-[700px] h-[350px] rounded-xl border border-white/30 p-4 overflow-hidden m-4 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <motion.div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            top: mousePosition.y - 300,
            left: mousePosition.x - 300,
            background: '#5D2CA8',
            filter: 'blur(100px)',
            zIndex: 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <div className="absolute bottom-[25%] left-5 text-white">
        <p>Current time (Europe): {formatTime(time)}</p>
      </div>

      <div className="absolute bottom-[10%] left-5 text-white flex space-x-4">
        <Button
          label="View CV"
          href="./cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        />
        <Button
          label="GitHub"
          href="https://github.com/estebanbaigts"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>

      <div className="absolute top-5 right-5 text-white">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="p-2 rounded"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            className="p-2 rounded"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Card;
