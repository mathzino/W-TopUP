import React from "react";
import Image from "next/image";
import Illustration from "./illustration";

export default function MainBanner() {
  return (
    <>
      <section className="header pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="row gap-lg-0 gap-5">
            <div className="col-lg-6 col-12 my-auto">
              <p className="text-support text-lg color-palette-2">Halo gamers,</p>
              <h1 className="header-title color-palette-1 fw-bold">
                Topup & Get <span className="d-sm-inline d-none">a</span>
                <span className="d-sm-none d-inline">a</span>
                <span className="underline-blue"> New</span> <br className="d-sm-block d-none" /> <span className="underline-blue">Experience</span> in Gaming
              </h1>
              <p className="mt-30 mb-40 text-lg color-palette-1">
                Kami menyediakan jutaan cara untuk membantu
                <br className="d-md-block d-none" /> players menjadi pemenang sejati
              </p>
              <div className="d-flex flex-lg-row flex-column gap-4">
                <a className="btn btn-get text-lg text-white rounded-pill" href="#feature" role="button">
                  Get Started
                </a>
                <a className="btn-learn text-lg color-palette-1 my-auto text-center" href="#" role="button">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 d-lg-block d-none">
              <div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
                <div className="position-relative" data-aos="zoom-in">
                  <img src="/img/Header-1.png" className="img-fluid" alt="tes" />
                  <div className="card left-card position-absolute border-0">
                    <div className="d-flex align-items-center mb-16 gap-3">
                      <Image src="/img/Header-2.png" width={40} height={40} className="rounded-pill" alt="" />
                      <div>
                        <p className="text-sm fw-medium color-palette-1 m-0">Shayna Anne</p>
                        <p className="text-xs fw-light color-palette-2 m-0">Professional Gamer</p>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <Image src="/icon/star.svg" height={22} width={24} />
                      <Image src="/icon/star.svg" height={22} width={24} />
                      <Image src="/icon/star.svg" height={22} width={24} />
                      <Image src="/icon/star.svg" height={22} width={24} />
                      <Image src="/icon/star.svg" height={22} width={24} />
                    </div>
                  </div>
                  <Illustration />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
