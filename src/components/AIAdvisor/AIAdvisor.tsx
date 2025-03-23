
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Send, Bot } from "lucide-react";
import { toast } from "sonner";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIAdvisor = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Call updated Gemini API endpoint
      const response = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": "AIzaSyDPNaPRosTeIAYYoNIlP3YFc67Kz8tr_eU",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: "You are an AI energy trading advisor for EnergiX platform. Answer questions about renewable energy trading, market trends, and optimization strategies. Keep responses brief and focused on energy markets. Now respond to this query: " + userMessage.content,
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
          },
        }),
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || "API Error");
      }
      
      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        const aiMessage: Message = {
          role: "assistant",
          content: data.candidates[0].content.parts[0].text,
        };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        throw new Error("Invalid response format from AI");
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      toast.error("Failed to get a response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-energy-blue to-energy-green shadow-lg hover:shadow-xl transition-all duration-300 text-white z-50"
        aria-label="AI Advisor"
      >
        <Sparkles className="w-6 h-6" />
      </button>

      {/* AI Advisor Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px] max-h-[85vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-energy-blue" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-energy-blue to-energy-green">
                EnergiX AI Advisor
              </span>
            </DialogTitle>
            <DialogDescription>
              Ask me anything about energy trading, market insights, or optimization strategies.
            </DialogDescription>
          </DialogHeader>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-[400px] px-1">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[200px] text-muted-foreground">
                <Bot className="h-12 w-12 mb-4 text-muted-foreground/50" />
                <p>No messages yet. Ask me anything about energy trading!</p>
              </div>
            ) : (
              messages.map((message, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-muted ml-12 mr-1"
                      : "bg-gradient-to-r from-energy-blue/10 to-energy-green/10 mr-12 ml-1"
                  }`}
                >
                  {message.content}
                </div>
              ))
            )}
            {loading && (
              <div className="p-3 rounded-lg bg-gradient-to-r from-energy-blue/10 to-energy-green/10 mr-12 ml-1">
                <div className="flex space-x-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-energy-blue animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-energy-blue animate-pulse delay-75"></div>
                  <div className="w-2 h-2 rounded-full bg-energy-blue animate-pulse delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="flex items-end gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about energy trading..."
              className="resize-none min-h-[80px]"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <Button 
              type="submit" 
              disabled={loading || !input.trim()}
              className="h-10 w-10 p-0"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AIAdvisor;
