"use client"

import { useEffect, useState } from "react"

const WHATSAPP_NUMBER = "5512988075372"
const MESSAGE =
  "Olá! Vim pelo site da Vale Designer e gostaria de um orçamento."

const LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  MESSAGE
)}`

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkScreen()
    window.addEventListener("resize", checkScreen)

    const timer = setTimeout(() => {
      setOpen(true)
    }, 1500)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", checkScreen)
    }
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        right: isMobile ? "14px" : "18px",
        bottom: isMobile ? "14px" : "18px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "12px",
      }}
    >
      {!isMobile && open && (
        <div
          style={{
            width: "330px",
            maxWidth: "calc(100vw - 24px)",
            background: "#f4f4f4",
            borderRadius: "18px",
            padding: "18px",
            boxShadow: "0 18px 50px rgba(0,0,0,0.18)",
            position: "relative",
            animation: "fadeUpChat .35s ease",
            border: "1px solid rgba(0,0,0,0.04)",
          }}
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar chat"
            title="Fechar"
            style={{
              position: "absolute",
              right: "12px",
              top: "10px",
              border: "none",
              background: "transparent",
              fontSize: "22px",
              cursor: "pointer",
              color: "#777",
              lineHeight: 1,
            }}
          >
            ×
          </button>

          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
              paddingRight: "20px",
            }}
          >
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#0f1f3a",
                  border: "1px solid rgba(0,0,0,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/logo.png"
                  alt="Vale Designer"
                  style={{
                    width: "34px",
                    height: "34px",
                    objectFit: "contain",
                  }}
                />
              </div>

              <span
                style={{
                  position: "absolute",
                  right: "0",
                  bottom: "2px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#2ecc71",
                  border: "2px solid #f4f4f4",
                }}
              />
            </div>

            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "17px",
                  color: "#1f2937",
                  lineHeight: 1.15,
                }}
              >
                Vale Designer
              </div>

              <div
                style={{
                  fontSize: "13px",
                  color: "#777",
                  marginBottom: "6px",
                  lineHeight: 1.2,
                }}
              >
                atendimento online
              </div>

              <div
                style={{
                  fontSize: "15px",
                  color: "#444",
                  lineHeight: "1.5",
                }}
              >
                Olá! Bem-vindo(a) à Vale Designer. Como posso ajudar hoje?
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              right: "40px",
              bottom: "-8px",
              width: "16px",
              height: "16px",
              background: "#f4f4f4",
              transform: "rotate(45deg)",
              borderRight: "1px solid rgba(0,0,0,0.04)",
              borderBottom: "1px solid rgba(0,0,0,0.04)",
            }}
          />
        </div>
      )}

      <a
        href={LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar Agora no WhatsApp"
        title="Falar Agora no WhatsApp"
        style={{
          background: "linear-gradient(180deg,#31d766,#21c45a)",
          color: "#fff",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? "0" : "10px",
          boxShadow: "0 14px 34px rgba(37,211,102,.3)",
          animation: "fadeUpChat .35s ease",
          ...(isMobile
            ? {
                width: "58px",
                height: "58px",
                borderRadius: "999px",
              }
            : {
                padding: "14px 24px",
                borderRadius: "999px",
                fontWeight: 700,
                fontSize: "15px",
                minHeight: "50px",
                minWidth: "255px",
                maxWidth: "calc(100vw - 24px)",
                textAlign: "center" as const,
              }),
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={isMobile ? "26" : "18"}
          height={isMobile ? "26" : "18"}
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.21c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.15-.19.29-.74.94-.91 1.13-.17.19-.33.22-.62.07-.29-.14-1.2-.44-2.29-1.41-.84-.75-1.41-1.67-1.58-1.95-.17-.29-.02-.44.13-.58.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.45 0 1.44 1.05 2.83 1.2 3.02.14.19 2.07 3.16 5.01 4.43.7.3 1.24.48 1.66.61.7.22 1.34.19 1.84.12.56-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.33Z" />
          <path d="M16.02 3.2C9.03 3.2 3.36 8.86 3.36 15.85c0 2.22.58 4.39 1.69 6.31L3.2 28.8l6.79-1.78a12.6 12.6 0 0 0 6.03 1.54h.01c6.99 0 12.66-5.67 12.66-12.66 0-3.39-1.32-6.58-3.71-8.97A12.59 12.59 0 0 0 16.02 3.2Z" />
        </svg>

        {!isMobile && "Falar Agora no WhatsApp"}
      </a>
    </div>
  )
}