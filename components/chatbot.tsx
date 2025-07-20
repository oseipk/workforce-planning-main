"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import  {useFAQ, FAQItem}  from "@/context/FAQContext"

interface Message {
  sender: "bot" | "user"
  text: string
}

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const faqs: FAQItem[] = useFAQ() || []
  const bottomRef = useRef<HTMLDivElement>(null)

  // Introduce the assistant when opened
  useEffect(() => {
    if (open) {
      setMessages([
        {
          sender: "bot",
          text: "Hello, I'm SWP Assistant, how can I help you today?",
        },
      ])
    } else {
      setMessages([])
      setInput("")
    }
  }, [open])

  // Auto scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = () => {
    const trimmed = input.trim()
    if (!trimmed) return

    const userMessage: Message = { sender: "user", text: trimmed }

    const matchedFAQ = faqs.find(
      (faq) =>
        faq?.question?.toLowerCase().includes(trimmed.toLowerCase())
    )

    const botMessage: Message = {
      sender: "bot",
      text: matchedFAQ?.answer
        ? matchedFAQ.answer
        : "Contact the Global People Analytics team for any support",
    }

    setMessages((prev) => [...prev, userMessage, botMessage])
    setInput("")
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="rounded-full p-3 shadow-md"
          onClick={() => setOpen((prev) => !prev)}
          variant="default"
        >
          <MessageCircle className="w-5 h-5" />
        </Button>
      </div>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-[320px]">
          <Card className="flex flex-col p-3 max-h-[500px] h-[500px] shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-semibold">SWP Assistant</h3>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X className="w-4 h-4 text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto space-y-2 mb-3 pr-1">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[85%] px-3 py-2 rounded-lg text-sm ${
                    msg.sender === "bot"
                      ? "bg-gray-100 text-left self-start"
                      : "bg-blue-500 text-white ml-auto text-right"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input Bar */}
            <div className="flex gap-2">
              <Input
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="text-sm"
              />
              <Button onClick={handleSend}>Send</Button>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}
