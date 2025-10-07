import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogFooter
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { 
  Sparkles, 
  Send, 
  CheckCircle2,
  Lightbulb,
  Film,
  Compass,
  BookOpen,
  Upload,
  X
} from "lucide-react";
import { toast } from "sonner@2.0.3";

interface PitchYourStoryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PitchYourStoryDialog({ open, onOpenChange }: PitchYourStoryDialogProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    storyTitle: "",
    category: "",
    synopsis: "",
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    inspiration: "",
    additionalNotes: ""
  });

  const categories = [
    { 
      value: "animation", 
      label: "Animation Concept", 
      icon: Film,
      description: "Original animation story or concept"
    },
    { 
      value: "travel", 
      label: "Travel Experience", 
      icon: Compass,
      description: "Share your African travel journey"
    },
    { 
      value: "cultural", 
      label: "Cultural Insight", 
      icon: BookOpen,
      description: "Cultural stories and traditions"
    },
    { 
      value: "creative", 
      label: "Creative Collaboration", 
      icon: Lightbulb,
      description: "Partnership or creative project idea"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.storyTitle || !formData.category || !formData.synopsis || !formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate submission
    console.log("Pitch submitted:", formData);
    
    // Show success state
    setSubmitted(true);
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({
        storyTitle: "",
        category: "",
        synopsis: "",
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        inspiration: "",
        additionalNotes: ""
      });
      setSubmitted(false);
      onOpenChange(false);
      toast.success("Your story pitch has been submitted successfully!");
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const selectedCategory = categories.find(cat => cat.value === formData.category);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl md:text-3xl">Pitch Your Story</DialogTitle>
                    <DialogDescription className="text-base mt-1">
                      Share your vision with the Bantu Ants community
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                {/* Category Selection */}
                <div className="space-y-3">
                  <Label htmlFor="category" className="text-base">
                    Story Category <span className="text-destructive">*</span>
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      const isSelected = formData.category === category.value;
                      return (
                        <Card
                          key={category.value}
                          className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                            isSelected 
                              ? 'border-2 border-primary bg-primary/5' 
                              : 'border hover:border-primary/50'
                          }`}
                          onClick={() => handleChange('category', category.value)}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              isSelected 
                                ? 'bg-primary text-white' 
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className={isSelected ? 'text-primary' : ''}>
                                  {category.label}
                                </span>
                                {isSelected && (
                                  <CheckCircle2 className="h-4 w-4 text-primary" />
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {category.description}
                              </p>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Story Title */}
                <div className="space-y-2">
                  <Label htmlFor="storyTitle">
                    Story Title <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="storyTitle"
                    placeholder="Give your story a compelling title..."
                    value={formData.storyTitle}
                    onChange={(e) => handleChange('storyTitle', e.target.value)}
                    className="bg-input-background"
                    required
                  />
                </div>

                {/* Synopsis */}
                <div className="space-y-2">
                  <Label htmlFor="synopsis">
                    Story Synopsis <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="synopsis"
                    placeholder="Describe your story, concept, or experience in detail. What makes it unique? What message does it convey?"
                    value={formData.synopsis}
                    onChange={(e) => handleChange('synopsis', e.target.value)}
                    className="min-h-[120px] bg-input-background resize-none"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    {formData.synopsis.length}/500 characters
                  </p>
                </div>

                {/* Inspiration */}
                <div className="space-y-2">
                  <Label htmlFor="inspiration">
                    What Inspired This Story?
                  </Label>
                  <Textarea
                    id="inspiration"
                    placeholder="Share the inspiration behind your idea..."
                    value={formData.inspiration}
                    onChange={(e) => handleChange('inspiration', e.target.value)}
                    className="min-h-[80px] bg-input-background resize-none"
                  />
                </div>

                {/* Personal Information */}
                <div className="pt-4 border-t">
                  <h4 className="mb-4 text-primary">Your Information</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        className="bg-input-background"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="bg-input-background"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone Number (Optional)
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="bg-input-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">
                        Your Background/Experience
                      </Label>
                      <Input
                        id="experience"
                        placeholder="e.g., Filmmaker, Writer, Traveler"
                        value={formData.experience}
                        onChange={(e) => handleChange('experience', e.target.value)}
                        className="bg-input-background"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">
                    Additional Notes (Optional)
                  </Label>
                  <Textarea
                    id="additionalNotes"
                    placeholder="Any other details you'd like to share..."
                    value={formData.additionalNotes}
                    onChange={(e) => handleChange('additionalNotes', e.target.value)}
                    className="min-h-[80px] bg-input-background resize-none"
                  />
                </div>

                {/* Info Card */}
                <Card className="p-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-primary/20">
                  <div className="flex gap-3">
                    <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="mb-2">
                        <strong>What happens next?</strong>
                      </p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Our team reviews your submission within 5-7 business days</li>
                        <li>• Selected stories may be featured on our platform or developed further</li>
                        <li>• You'll receive feedback regardless of selection status</li>
                        <li>• Exceptional pitches may lead to collaboration opportunities</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <DialogFooter className="gap-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => onOpenChange(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-primary via-accent to-secondary text-white hover:opacity-90"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Submit Pitch
                  </Button>
                </DialogFooter>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="py-12 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl mb-3 text-primary">
                Pitch Submitted Successfully!
              </h3>
              
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Thank you for sharing your vision with us. We're excited to review your 
                <strong className="text-foreground"> {selectedCategory?.label.toLowerCase()}</strong> pitch 
                and will be in touch soon.
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <Badge className="bg-primary text-white">
                  {formData.storyTitle}
                </Badge>
                {selectedCategory && (
                  <Badge variant="outline" className="border-primary text-primary">
                    {selectedCategory.label}
                  </Badge>
                )}
              </div>

              <div className="flex gap-3 justify-center">
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      storyTitle: "",
                      category: "",
                      synopsis: "",
                      fullName: "",
                      email: "",
                      phone: "",
                      experience: "",
                      inspiration: "",
                      additionalNotes: ""
                    });
                  }}
                  variant="outline"
                >
                  Submit Another
                </Button>
                <Button
                  onClick={() => onOpenChange(false)}
                  className="bg-primary hover:bg-primary/90"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
