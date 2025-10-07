import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { useState } from "react";
import { ChevronRight, ChevronLeft, Sparkles, Globe, Plane, Users, Check, X } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface FormData {
  // Step 1: Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  
  // Step 2: Professional Background
  occupation: string;
  company: string;
  industry: string;
  
  // Step 3: Travel & Cultural Interests
  travelFrequency: string;
  travelStyle: string[];
  culturalInterests: string[];
  favoriteDestinations: string;
  
  // Step 4: Club Alignment
  whyJoin: string;
  howHeard: string;
  referralCode: string;
  instagram: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  country: "",
  occupation: "",
  company: "",
  industry: "",
  travelFrequency: "",
  travelStyle: [],
  culturalInterests: [],
  favoriteDestinations: "",
  whyJoin: "",
  howHeard: "",
  referralCode: "",
  instagram: "",
};

interface ClubApplicationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ClubApplicationDialog({ open, onOpenChange }: ClubApplicationDialogProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const totalSteps = 4;

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field: keyof FormData, value: string) => {
    const currentArray = formData[field] as string[];
    if (currentArray.includes(value)) {
      updateFormData(field, currentArray.filter(item => item !== value));
    } else {
      updateFormData(field, [...currentArray, value]);
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.city || !formData.country) {
          toast.error("Please fill in all required fields");
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          toast.error("Please enter a valid email address");
          return false;
        }
        return true;
      case 2:
        if (!formData.occupation || !formData.industry) {
          toast.error("Please fill in all required fields");
          return false;
        }
        return true;
      case 3:
        if (!formData.travelFrequency || formData.travelStyle.length === 0 || formData.culturalInterests.length === 0) {
          toast.error("Please complete all required selections");
          return false;
        }
        return true;
      case 4:
        if (!formData.whyJoin || !formData.howHeard) {
          toast.error("Please fill in all required fields");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) {
      return;
    }

    // TODO: Connect to your backend/Klaviyo/Shopify for application processing
    console.log("Club Application Submitted:", formData);
    
    toast.success("Application submitted successfully!");
    setSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form after a delay to avoid visual glitch
    setTimeout(() => {
      setCurrentStep(1);
      setFormData(initialFormData);
      setSubmitted(false);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check className="text-white" size={40} />
            </motion.div>

            <h2 className="text-3xl mb-4 text-primary">Application Received</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Thank you for your interest in joining Bantu Ants Travel Club. We've received your application and our membership committee will review it carefully.
            </p>
            
            <div className="bg-muted/50 rounded-xl p-6 mb-8">
              <p className="text-sm text-foreground mb-4">
                <strong>What happens next?</strong>
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Our team will review your application within 5-7 business days</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>You'll receive an email confirmation shortly</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span>If accepted, you'll receive an exclusive invitation link</span>
                </li>
              </ul>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Questions? Email us at <a href="mailto:club@bantuants.com" className="text-primary hover:underline">club@bantuants.com</a>
            </p>

            <Button onClick={handleClose} className="bg-primary hover:bg-primary/90">
              Close
            </Button>
          </motion.div>
        ) : (
          <>
            <DialogHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary via-accent to-secondary rounded-xl flex items-center justify-center">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl text-primary">Apply for Membership</DialogTitle>
                    <DialogDescription className="text-sm text-accent mt-1">
                      Invite-only • Limited spaces
                    </DialogDescription>
                  </div>
                </div>
              </div>
            </DialogHeader>

            {/* Progress Indicator */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center flex-1">
                    <div className="flex flex-col items-center flex-1">
                      <motion.div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors text-sm ${
                          currentStep >= step
                            ? "bg-primary border-primary text-white"
                            : "bg-background border-border text-muted-foreground"
                        }`}
                        animate={{ scale: currentStep === step ? 1.1 : 1 }}
                      >
                        {step}
                      </motion.div>
                      <span className="text-xs mt-1 hidden sm:block text-center">
                        {step === 1 && "Personal"}
                        {step === 2 && "Professional"}
                        {step === 3 && "Interests"}
                        {step === 4 && "About You"}
                      </span>
                    </div>
                    {step < 4 && (
                      <div className={`h-0.5 flex-1 mx-2 ${currentStep > step ? "bg-primary" : "bg-border"}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="text-primary" size={20} />
                      <h3 className="text-lg text-primary">Personal Information</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => updateFormData("firstName", e.target.value)}
                            className="mt-1.5"
                            placeholder="Enter your first name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => updateFormData("lastName", e.target.value)}
                            className="mt-1.5"
                            placeholder="Enter your last name"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData("email", e.target.value)}
                          className="mt-1.5"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData("phone", e.target.value)}
                          className="mt-1.5"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => updateFormData("city", e.target.value)}
                            className="mt-1.5"
                            placeholder="Your city"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="country">Country *</Label>
                          <Input
                            id="country"
                            value={formData.country}
                            onChange={(e) => updateFormData("country", e.target.value)}
                            className="mt-1.5"
                            placeholder="Your country"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Professional Background */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="text-primary" size={20} />
                      <h3 className="text-lg text-primary">Professional Background</h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="occupation">Occupation *</Label>
                        <Input
                          id="occupation"
                          value={formData.occupation}
                          onChange={(e) => updateFormData("occupation", e.target.value)}
                          className="mt-1.5"
                          placeholder="e.g., Creative Director, Entrepreneur"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Company / Organization</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => updateFormData("company", e.target.value)}
                          className="mt-1.5"
                          placeholder="Where do you work?"
                        />
                      </div>

                      <div>
                        <Label htmlFor="industry">Industry *</Label>
                        <Select value={formData.industry} onValueChange={(value) => updateFormData("industry", value)}>
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="creative">Creative & Design</SelectItem>
                            <SelectItem value="tech">Technology</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="media">Media & Entertainment</SelectItem>
                            <SelectItem value="hospitality">Hospitality & Tourism</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="consulting">Consulting</SelectItem>
                            <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                            <SelectItem value="nonprofit">Non-Profit</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Travel & Cultural Interests */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Plane className="text-primary" size={20} />
                      <h3 className="text-lg text-primary">Travel & Cultural Interests</h3>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <Label htmlFor="travelFrequency">How often do you travel internationally? *</Label>
                        <Select value={formData.travelFrequency} onValueChange={(value) => updateFormData("travelFrequency", value)}>
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly (3-4 times/year)</SelectItem>
                            <SelectItem value="biannually">Twice a year</SelectItem>
                            <SelectItem value="annually">Once a year</SelectItem>
                            <SelectItem value="occasionally">Occasionally</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>What's your travel style? (Select all that apply) *</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                          {["Luxury & Comfort", "Adventure & Exploration", "Cultural Immersion", "Wellness & Relaxation", "Nightlife & Social", "Solo Travel"].map((style) => (
                            <div key={style} className="flex items-center space-x-2">
                              <Checkbox
                                id={`style-${style}`}
                                checked={formData.travelStyle.includes(style)}
                                onCheckedChange={() => toggleArrayValue("travelStyle", style)}
                              />
                              <label htmlFor={`style-${style}`} className="text-sm cursor-pointer">
                                {style}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label>Cultural interests (Select all that apply) *</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                          {["Animation & Film", "Music & Performance", "Visual Arts", "Fashion & Design", "History & Heritage", "Food & Cuisine"].map((interest) => (
                            <div key={interest} className="flex items-center space-x-2">
                              <Checkbox
                                id={`interest-${interest}`}
                                checked={formData.culturalInterests.includes(interest)}
                                onCheckedChange={() => toggleArrayValue("culturalInterests", interest)}
                              />
                              <label htmlFor={`interest-${interest}`} className="text-sm cursor-pointer">
                                {interest}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="favoriteDestinations">Favorite destinations in Africa or the diaspora</Label>
                        <Textarea
                          id="favoriteDestinations"
                          value={formData.favoriteDestinations}
                          onChange={(e) => updateFormData("favoriteDestinations", e.target.value)}
                          className="mt-1.5"
                          placeholder="Tell us about places you've loved or dream of visiting..."
                          rows={3}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Club Alignment */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="text-primary" size={20} />
                      <h3 className="text-lg text-primary">Tell Us About You</h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="whyJoin">Why do you want to join Bantu Ants Travel Club? *</Label>
                        <Textarea
                          id="whyJoin"
                          value={formData.whyJoin}
                          onChange={(e) => updateFormData("whyJoin", e.target.value)}
                          className="mt-1.5"
                          placeholder="Share what excites you about our community and experiences..."
                          rows={4}
                          required
                        />
                        <p className="text-xs text-muted-foreground mt-1.5">
                          Tell us about your interest in African culture, travel experiences, or what you hope to gain from membership.
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="howHeard">How did you hear about us? *</Label>
                        <Select value={formData.howHeard} onValueChange={(value) => updateFormData("howHeard", value)}>
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="referral">Referred by a member</SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="event">Event or Conference</SelectItem>
                            <SelectItem value="press">Press / Article</SelectItem>
                            <SelectItem value="search">Web Search</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="referralCode">Referral / Invitation Code</Label>
                        <Input
                          id="referralCode"
                          value={formData.referralCode}
                          onChange={(e) => updateFormData("referralCode", e.target.value)}
                          className="mt-1.5"
                          placeholder="Enter code if you were invited"
                        />
                        <p className="text-xs text-muted-foreground mt-1.5">
                          If you were invited by a current member, enter their referral code here.
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="instagram">Instagram Handle (Optional)</Label>
                        <Input
                          id="instagram"
                          value={formData.instagram}
                          onChange={(e) => updateFormData("instagram", e.target.value)}
                          className="mt-1.5"
                          placeholder="@yourusername"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="gap-2"
                >
                  <ChevronLeft size={16} />
                  Back
                </Button>

                <div className="text-sm text-muted-foreground">
                  Step {currentStep} of {totalSteps}
                </div>

                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="bg-primary hover:bg-primary/90 gap-2"
                  >
                    Next
                    <ChevronRight size={16} />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-accent hover:bg-accent/90 gap-2"
                  >
                    Submit Application
                    <Check size={16} />
                  </Button>
                )}
              </div>
            </form>

            <p className="text-xs text-center text-muted-foreground mt-4">
              By submitting this application, you agree to our Terms of Service and Privacy Policy.
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
