"use client"

import { useState } from "react"
import emailjs from "emailjs-com"

export default function Contact() {

  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const [status,setStatus] = useState("")

  const sendEmail = (e:any)=>{
    e.preventDefault()

    emailjs.send(
      "service_svs0lcs",
      "template_6yehcmh",
      {
        from_email: email,
        message: message
      },
      "z05XEXCZRegt5GVYc"
    ).then(()=>{
      setStatus("Message sent!")
      setEmail("")
      setMessage("")
    }).catch(()=>{
      setStatus("Failed to send message")
    })
  }

  return (
    <section style={{textAlign:"center", marginTop:"40px"}}>

      <h2>Contact Us</h2>

      <form
        onSubmit={sendEmail}
        style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          gap:"10px",
          marginTop:"20px"
        }}
      >

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          style={{
            width:"350px",
            padding:"10px",
            borderRadius:"6px",
            border:"1px solid #555"
          }}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          required
          rows={5}
          style={{
            width:"350px",
            padding:"10px",
            borderRadius:"6px",
            border:"1px solid #555",
            resize:"vertical"
          }}
        />

        <button
          type="submit"
          style={{
            width:"350px",
            padding:"10px",
            borderRadius:"6px",
            border:"none",
            background:"#6c5ce7",
            color:"white",
            cursor:"pointer"
          }}
        >
          Send Message
        </button>

      </form>

      <p>{status}</p>

    </section>
  )
}