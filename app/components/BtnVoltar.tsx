"use client"

import { useRouter } from "next/navigation"

export default function BtnVoltar() {
  const router = useRouter()

  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        onClick={() => router.back()}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 16px",
          background: "#fff",
          border: "1px solid rgba(15,23,42,.10)",
          borderRadius: "12px",
          fontWeight: 800,
          fontSize: "14px",
          cursor: "pointer",
          boxShadow: "0 8px 20px rgba(15,23,42,.06)"
        }}
      >
        ← Voltar
      </button>
    </div>
  )
}