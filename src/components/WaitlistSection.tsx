import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { Mail, Check } from "lucide-react";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would connect to Shopify's email marketing or a service like Klaviyo
    console.log("Email submitted:", email);
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="text-white" size={32} />
              </div>
              
              <h2 className="text-3xl md:text-4xl mb-4 text-primary">Join the Movement</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Be the first to know about new episodes, exclusive travel experiences, limited edition 
                drops, and behind-the-scenes content. Plus, get early access to all our offerings.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 bg-white border-primary/20 focus:border-primary"
                    />
                    <Button 
                      type="submit" 
                      size="lg"
                      className="bg-accent hover:bg-accent/90 whitespace-nowrap"
                    >
                      Join Waitlist
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    No spam, ever. Unsubscribe anytime.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="max-w-md mx-auto"
                >
                  <div className="flex items-center justify-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="text-white" size={20} />
                    </div>
                    <p className="text-green-700">You're on the list! Check your inbox.</p>
                  </div>
                </motion.div>
              )}

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span>Early Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Exclusive Content</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span>Member Perks</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// Card component wrapper for this section
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-card rounded-2xl border border-border ${className}`}>
      {children}
    </div>
  );
}
