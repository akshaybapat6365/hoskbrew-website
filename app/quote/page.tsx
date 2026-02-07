"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Check, Send } from "lucide-react";

const steps = [
  { id: 1, title: "Contact Info", description: "Your details" },
  { id: 2, title: "Game Details", description: "Platform & quantity" },
  { id: 3, title: "Packaging", description: "Box & add-ons" },
  { id: 4, title: "Timeline", description: "Delivery & notes" },
];

const platforms = [
  "NES",
  "SNES",
  "Game Boy",
  "Game Boy Color",
  "Game Boy Advance",
  "Sega Genesis",
  "Sega Master System",
  "Atari 2600",
  "Other",
];

const packagingOptions = [
  {
    id: "cart-only",
    label: "Cartridge Only",
    description: "Just the cart, no packaging",
  },
  { id: "boxed", label: "Boxed", description: "Cartridge in custom box" },
  {
    id: "cib",
    label: "Complete In Box (CIB)",
    description: "Box, manual, inserts, and all",
  },
];

const addOns = [
  { id: "manual", label: "Instruction Manual" },
  { id: "insert", label: "Promotional Insert" },
  { id: "sticker", label: "Holographic Sticker" },
  { id: "protector", label: "Box Protector" },
  { id: "pcb-design", label: "Custom PCB Design" },
];

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studio: "",
    gameTitle: "",
    platform: "",
    quantity: "",
    packaging: "",
    addOns: [] as string[],
    timeline: "",
    country: "",
    fileLink: "",
    notes: "",
  });

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleAddOn = (addOnId: string) => {
    setFormData((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(addOnId)
        ? prev.addOns.filter((id) => id !== addOnId)
        : [...prev.addOns, addOnId],
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-20">
          <Card className="max-w-md w-full mx-4">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Quote Request Received!
              </h2>
              <p className="text-muted-foreground mb-6">
                Thanks for reaching out, {formData.name}. We will review your
                project details and get back to you within 24 hours.
              </p>
              <Button onClick={() => (window.location.href = "/")}>
                Back to Home
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Request a Quote
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tell us about your project and we will provide a detailed
              estimate. Most quotes are delivered within 24 hours.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between overflow-x-auto">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex items-center flex-1 last:flex-none"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                        currentStep >= step.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {currentStep > step.id ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        step.id
                      )}
                    </div>
                    <span className="text-xs mt-2 hidden sm:block">
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-px flex-1 mx-4 ${
                        currentStep > step.id ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{steps[currentStep - 1].title}</CardTitle>
              <CardDescription>
                {steps[currentStep - 1].description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              updateFormData("name", e.target.value)
                            }
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              updateFormData("email", e.target.value)
                            }
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="studio">Studio / Publisher Name</Label>
                        <Input
                          id="studio"
                          value={formData.studio}
                          onChange={(e) =>
                            updateFormData("studio", e.target.value)
                          }
                          placeholder="Indie Game Studio"
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="gameTitle">Game Title</Label>
                        <Input
                          id="gameTitle"
                          value={formData.gameTitle}
                          onChange={(e) =>
                            updateFormData("gameTitle", e.target.value)
                          }
                          placeholder="My Awesome Game"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="platform">Platform *</Label>
                          <Select
                            value={formData.platform}
                            onValueChange={(value) =>
                              updateFormData("platform", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select platform" />
                            </SelectTrigger>
                            <SelectContent>
                              {platforms.map((platform) => (
                                <SelectItem key={platform} value={platform}>
                                  {platform}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="quantity">Quantity *</Label>
                          <Select
                            value={formData.quantity}
                            onValueChange={(value) =>
                              updateFormData("quantity", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select quantity" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="100">100 (Minimum)</SelectItem>
                              <SelectItem value="250">250</SelectItem>
                              <SelectItem value="500">500</SelectItem>
                              <SelectItem value="1000">1,000</SelectItem>
                              <SelectItem value="more">
                                More than 1,000
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label>Packaging Type *</Label>
                        <div className="grid sm:grid-cols-3 gap-4">
                          {packagingOptions.map((option) => (
                            <div
                              key={option.id}
                              onClick={() =>
                                updateFormData("packaging", option.id)
                              }
                              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                formData.packaging === option.id
                                  ? "border-primary bg-primary/5"
                                  : "border-muted hover:border-muted-foreground/50"
                              }`}
                            >
                              <div className="font-semibold mb-1">
                                {option.label}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {option.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Add-ons</Label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {addOns.map((addOn) => (
                            <div
                              key={addOn.id}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={addOn.id}
                                checked={formData.addOns.includes(addOn.id)}
                                onCheckedChange={() => toggleAddOn(addOn.id)}
                              />
                              <Label
                                htmlFor={addOn.id}
                                className="cursor-pointer"
                              >
                                {addOn.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="timeline">
                            When do you need them?
                          </Label>
                          <Select
                            value={formData.timeline}
                            onValueChange={(value) =>
                              updateFormData("timeline", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">ASAP (Rush)</SelectItem>
                              <SelectItem value="1month">
                                Within 1 month
                              </SelectItem>
                              <SelectItem value="2months">
                                1-2 months
                              </SelectItem>
                              <SelectItem value="3months">
                                2-3 months
                              </SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Shipping Country *</Label>
                          <Input
                            id="country"
                            value={formData.country}
                            onChange={(e) =>
                              updateFormData("country", e.target.value)
                            }
                            placeholder="United States"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fileLink">
                          Link to Files (Optional)
                        </Label>
                        <Input
                          id="fileLink"
                          value={formData.fileLink}
                          onChange={(e) =>
                            updateFormData("fileLink", e.target.value)
                          }
                          placeholder="Dropbox, Google Drive, etc."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes</Label>
                        <Textarea
                          id="notes"
                          value={formData.notes}
                          onChange={(e) =>
                            updateFormData("notes", e.target.value)
                          }
                          placeholder="Tell us more about your project, special requirements, questions..."
                          rows={4}
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                {currentStep < steps.length ? (
                  <Button onClick={handleNext}>
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-primary"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Request
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
