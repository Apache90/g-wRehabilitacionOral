import React from 'react';
import { FiChevronsRight } from "react-icons/fi";

const BlogCard = ({ img, title, desc, link }) => {
  return (
    <div className='w-full bg-blue-400/5 rounded-xl overflow-hidden'>
        <img src={img} alt="" className="w-full aspect-video object-cover object-center" />
        <div className="p-3 space-y-4">
            <div className="space-y-2">
                <h2 className='text-xl text-neutral-700 font-semibold'>
                    {title}
                </h2>
                <p className="text-sm text-neutral-500 font-normal line-clamp-2">
                    {desc}
                </p>
            </div>
            <a
              href={link} // Usamos el enlace externo
              target="_blank" // Abre el enlace en una nueva pestaña
              rel="noopener noreferrer" // Buenas prácticas de seguridad
              className="w-fit py-2 text-xl text-blue-700 hover:text-blue-500 font-normal flex items-center gap-x-1.5 ease-in-out duration-300"
            >
                Leer
                <FiChevronsRight className="text-base pt-0.5" />
            </a>
        </div>
    </div>
  );
};

export default BlogCard;