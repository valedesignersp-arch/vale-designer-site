"use client"

import { useMemo, useState } from "react"
import Image from "next/image"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

type Item = {
  src: string
  alt: string
}

export default function PortfolioCarousel({
  items,
}: {
  items: Item[]
}) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<Item | null>(null)

  const slides = useMemo(() => items ?? [], [items])

  const onOpen = (item: Item) => {
    setActive(item)
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
    setActive(null)
  }

  return (
    <>
      <style>{`
        .pfCard{
          position:relative;
          border-radius:16px;
          overflow:hidden;
          background:#fff;
          box-shadow:0 10px 30px rgba(15,23,42,.10);
          border:1px solid rgba(15,23,42,.08);
          cursor:pointer;
        }
        .pfImg{
          position:relative;
          width:100%;
          height:160px;
        }
        @media (min-width: 768px){
          .pfImg{ height:190px; }
        }
        .pfOverlay{
          position:absolute; inset:0;
          background:linear-gradient(to top, rgba(0,0,0,.25), rgba(0,0,0,0));
          opacity:0;
          transition:opacity .25s ease;
        }
        .pfCard:hover .pfOverlay{ opacity:1; }

        /* Lightbox */
        .lbBack{
          position:fixed; inset:0;
          background:rgba(0,0,0,.78);
          z-index:9999;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:18px;
        }
        .lbBox{
          width:min(1100px, 96vw);
          max-height:88vh;
          background:#0b1220;
          border-radius:18px;
          overflow:hidden;
          border:1px solid rgba(255,255,255,.10);
          box-shadow:0 30px 80px rgba(0,0,0,.55);
          position:relative;
        }
        .lbImg{
          position:relative;
          width:100%;
          height:min(88vh, 720px);
        }
        .lbClose{
          position:absolute;
          top:10px; right:10px;
          width:42px; height:42px;
          border-radius:999px;
          background:rgba(255,255,255,.12);
          border:1px solid rgba(255,255,255,.18);
          color:#fff;
          font-size:22px;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          z-index:2;
        }
        .lbClose:hover{ background:rgba(255,255,255,.18); }
      `}</style>

      <Swiper
        modules={[Autoplay]}
        loop
        spaceBetween={18}
        slidesPerView={2}
        autoplay={{ delay: 2200, disableOnInteraction: false }}
        speed={650}
        breakpoints={{
          640: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {slides.map((it, idx) => (
          <SwiperSlide key={`${it.src}-${idx}`}>
            <div className="pfCard" onClick={() => onOpen(it)} role="button" tabIndex={0}>
              <div className="pfImg">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  style={{ objectFit: "cover" }}
                  priority={idx < 4}
                />
                <div className="pfOverlay" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {open && active && (
        <div className="lbBack" onClick={onClose}>
          <div className="lbBox" onClick={(e) => e.stopPropagation()}>
            <button className="lbClose" onClick={onClose} aria-label="Fechar">
              ×
            </button>

            <div className="lbImg">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="90vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}