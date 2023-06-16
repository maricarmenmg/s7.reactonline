import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (

    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 p-20 ">
        <div className="py-12 md:py-22 ">
          <div className="max-w-3xl mx-auto text-center  md:pb-10">
            <h2 className="h2 font-sora font-normal ">Nuestros Proyectos</h2>
            <h2 className="text-2xl font-normal  tracking-tight text-gray-900">
              El trabajo que hacemos, y las personas a las que ayudamos.
            </h2>
          </div>

          <div className="card grid grid-cols-3 gap-4 ">
            <div>
              <img
                className="rounded-md"
                src="https://cdn.dribbble.com/userupload/2410001/file/original-9f68d9d9cbf9e4185680cafbe983be2e.png?compress=1&resize=2048x1536"
                alt="01"
              />
            </div>
            <div>
              <img
                className="rounded-md"
                src="https://cdn.dribbble.com/userupload/7449433/file/original-a564adccb6e5b5f47968a1722945a168.png?compress=1&resize=2048x1536"
                alt="02"
              />
            </div>
            <div>
              <img
                className="rounded-md"
                src="https://cdn.dribbble.com/userupload/7402783/file/original-9d457846efb4d2fd47423ea451f1f6f3.png?compress=1&resize=2048x1536"
                alt="Burger"
              />
            </div>
            <div>
              <img
                className="rounded-md"
                src="https://cdn.dribbble.com/userupload/7087771/file/original-f3f5318cc6c0078dc890ae030ab7796f.png?compress=1&resize=2048x1536"
                alt="Burger"
              />
            </div>
            <div>
              <img
                className="rounded-md"
                src="https://cdn.dribbble.com/userupload/3992155/file/original-e4d4c362a880c6d8dabeba7e9edc6474.png?compress=1&resize=2048x1505"
                alt="Burger"
              />
            </div>
            <div>
              <img
                className="rounded-md"
                src="https://cdn.dribbble.com/userupload/3789159/file/original-99c75189bd5914666b07ece6b617ebcf.png?compress=1&resize=2048x1536"
                alt="Burger"
              />
            </div>
          </div>
          
        </div>
      
          <div className="max-w-3xl mx-auto text-center  md:pb-10">
            <h3 className="h3 font-sora font-normal ">Comencemos un proyecto juntos</h3>
          </div>

          {/* Buttons */}
          <div className="max-w-xs mx-auto text-center  md:pb-10">
                <div>
                  <Link className="btn text-white bg-project-500 hover:bg-blue-600 w-full shadow-sm" to="/budget">
                    Solicita tu presupuesto
                  </Link>
                </div>
  
              </div>
      </div>


      
    </section>
  );
}
