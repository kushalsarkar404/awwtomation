"use client"
import { useState } from "react"
import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CalModal } from "@/components/cal-modal"
import {
  PenTool,
  FileText,
  Youtube,
  Twitter,
  ChevronRight,
  ChevronLeft,
  Instagram,
  Linkedin,
  BookOpen,
  TrendingUp,
  Users,
  Zap,
  Target,
  BarChart3,
  Home,
  Building2,
} from "lucide-react"

// Sample blog data
const blogSamples = {
  "General Blog Agent": [
    {
      title: "10 Essential Tips for Remote Work Success",
      content: `
        <div class="blog-content">
          <h2 class="text-2xl font-bold mb-4">Transform Your Home Into a Productivity Powerhouse</h2>
          <p class="mb-4">The shift to remote work has fundamentally changed how we approach productivity and work-life balance. Whether you're a seasoned remote worker or just starting your work-from-home journey, these essential tips will help you maximize your efficiency and maintain your sanity.</p>
          
          <h3 class="text-xl font-semibold mb-3">1. Create a Dedicated Workspace</h3>
          <p class="mb-4">Your environment significantly impacts your productivity. Designate a specific area in your home exclusively for work. This physical boundary helps your brain switch into "work mode" and signals to others that you're in a professional setting.</p>
          
          
          <h3 class="text-xl font-semibold mb-3">2. Establish Clear Boundaries</h3>
          <p class="mb-4">Set specific work hours and communicate them to your family, friends, and colleagues. Just because you're home doesn't mean you're available for personal tasks during work hours.</p>
          
          <h3 class="text-xl font-semibold mb-3">3. Invest in Quality Technology</h3>
          <p class="mb-4">Reliable internet, a good webcam, and noise-canceling headphones are not luxuries—they're necessities for remote work success. Poor technology can lead to frustration and decreased productivity.</p>
          
          <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">
            "The key to successful remote work is treating it with the same professionalism as office work, while leveraging the unique advantages of your home environment."
          </blockquote>
          
          <p class="mb-4">Remember, remote work success isn't just about productivity—it's about creating a sustainable lifestyle that allows you to thrive both professionally and personally.</p>
        </div>
      `,
      category: "Productivity",
    },
    {
      title: "The Future of Artificial Intelligence in Business",
      content: `
        <div class="blog-content">
          <h2 class="text-2xl font-bold mb-4">How AI is Reshaping the Business Landscape</h2>
          <p class="mb-4">Artificial Intelligence is no longer a futuristic concept—it's a present reality transforming businesses across every industry. From automating routine tasks to providing deep insights through data analysis, AI is becoming an indispensable tool for competitive advantage.</p>
          
          <h3 class="text-xl font-semibold mb-3">Current AI Applications in Business</h3>
          <ul class="list-disc pl-6 mb-4">
            <li class="mb-2"><strong>Customer Service:</strong> Chatbots and virtual assistants handling 24/7 customer inquiries</li>
            <li class="mb-2"><strong>Data Analysis:</strong> Predictive analytics for better decision-making</li>
            <li class="mb-2"><strong>Marketing:</strong> Personalized content and targeted advertising</li>
            <li class="mb-2"><strong>Operations:</strong> Supply chain optimization and inventory management</li>
          </ul>
          
          
          <h3 class="text-xl font-semibold mb-3">The Road Ahead</h3>
          <p class="mb-4">As AI technology continues to evolve, businesses that embrace these tools early will have a significant advantage. The key is not to replace human workers, but to augment human capabilities and free up time for more strategic, creative work.</p>
          
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h4 class="font-semibold text-blue-800 mb-2">Key Takeaway</h4>
            <p class="text-blue-700">The businesses that will thrive in the AI era are those that view artificial intelligence as a collaborative partner, not a replacement for human intelligence.</p>
          </div>
        </div>
      `,
      category: "Technology",
    },
    // Add more full content samples...
  ],
  "Real Estate Blog Agent": [
    {
      title: "First-Time Homebuyer's Complete Guide",
      content: `
        <div class="blog-content">
          <h2 class="text-2xl font-bold mb-4">Your Journey to Homeownership Starts Here</h2>
          <p class="mb-4">Buying your first home is one of life's most significant milestones. It's exciting, overwhelming, and filled with important decisions that will impact your financial future. This comprehensive guide will walk you through every step of the process.</p>
          
          <h3 class="text-xl font-semibold mb-3">Step 1: Assess Your Financial Readiness</h3>
          <p class="mb-4">Before you start browsing listings, take a honest look at your finances. Calculate your debt-to-income ratio, check your credit score, and determine how much you can realistically afford for a monthly mortgage payment.</p>
          
          <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <h4 class="font-semibold text-green-800 mb-2">Financial Checklist</h4>
            <ul class="text-green-700 list-disc pl-4">
              <li>Credit score of 620 or higher (ideal: 740+)</li>
              <li>Stable employment history (2+ years)</li>
              <li>Down payment saved (3-20% of home price)</li>
              <li>Emergency fund for closing costs and repairs</li>
            </ul>
          </div>
          
          
          <h3 class="text-xl font-semibold mb-3">Step 2: Get Pre-Approved for a Mortgage</h3>
          <p class="mb-4">A pre-approval letter shows sellers you're a serious buyer and gives you a clear budget. Shop around with multiple lenders to find the best rates and terms.</p>
          
          <h3 class="text-xl font-semibold mb-3">Step 3: Find the Right Real Estate Agent</h3>
          <p class="mb-4">A good agent will be your guide, advocate, and negotiator. Look for someone with local market knowledge, strong communication skills, and a track record of helping first-time buyers.</p>
          
          <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4">
            "The best time to buy a house is when you're financially ready and have found the right property in the right location for your lifestyle."
          </blockquote>
        </div>
      `,
      category: "Home Buying",
    },
    // Add more real estate content...
  ],
}

export default function BlogAutomationPage() {
  const [calModalOpen, setCalModalOpen] = useState(false)
  const [selectedCalLink, setSelectedCalLink] = useState("awwtomation/awwtomation-consultation")
  const [blogModalOpen, setBlogModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0)
  const [formData, setFormData] = useState({
    blog:"",
    name: "",
    email: "",
    company: "",
    title: "",
    points: "",
    highlights: "",
    tone: "",
    style: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateBusinessEmail = (email: string) => {
    const businessDomains = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com"]
    const domain = email.split("@")[1]?.toLowerCase()
    return domain && !businessDomains.includes(domain)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateBusinessEmail(formData.email)) {
      alert("Please use a business email address (not Gmail, Hotmail, or Outlook)")
      return
    }

    setIsSubmitting(true)

    try {
      const payload = {
        ...formData
      }

      const response = await fetch("https://n8n.awwtomation.com/webhook/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        alert("Form submitted successfully!")
        setFormData({
          blog:"",
          name: "",
          email: "",
          company: "",
          title: "",
          points: "",
          highlights: "",
          tone: "",
          style: "",
        })
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const openBlogModal = (category: string) => {
    setSelectedCategory(category)
    setCurrentBlogIndex(0)
    setBlogModalOpen(true)
  }

  const nextBlog = () => {
    const blogs = blogSamples[selectedCategory as keyof typeof blogSamples] || []
    setCurrentBlogIndex((prev) => (prev + 1) % blogs.length)
  }

  const prevBlog = () => {
    const blogs = blogSamples[selectedCategory as keyof typeof blogSamples] || []
    setCurrentBlogIndex((prev) => (prev - 1 + blogs.length) % blogs.length)
  }

  const currentBlogs = blogSamples[selectedCategory as keyof typeof blogSamples] || []
  const currentBlog = currentBlogs[currentBlogIndex]

  return (
    <div className="flex min-h-[100dvh] flex-col px-4 md:px-12">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/full-logo.svg"
                  alt="Awwtomation Logo"
                  fill={false}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-auto cursor-pointer"
                  priority
                />
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex gap-6">
            <Link href="/#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="/#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              size="lg"
              className="hover:bg-blue-700"
              onClick={() => {
                setSelectedCalLink("awwtomation/awwtomation-consultation")
                setCalModalOpen(true)
              }}
            >
              Automate Now
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Form */}
      <section className="w-full min-h-[90vh] flex items-center py-20 px-4 md:px-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Floating Blog Icons */}
        <div className="absolute inset-0 z-0">
          <div className="absolute floating-icon floating-icon-1" style={{ top: "15%", left: "10%" }}>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
              <PenTool className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </div>
          <div className="absolute floating-icon floating-icon-2" style={{ top: "25%", right: "15%" }}>
            <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
              <FileText className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </div>
          </div>
          <div className="absolute floating-icon floating-icon-3" style={{ top: "60%", left: "8%" }}>
            <div className="w-11 h-11 md:w-15 md:h-15 bg-green-600 rounded-xl flex items-center justify-center shadow-lg opacity-20 hover:opacity-40 transition-opacity">
              <BookOpen className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </div>
          </div>
          <div className="absolute floating-icon floating-icon-4" style={{ top: "40%", right: "8%" }}>
            <div className="w-13 h-13 md:w-17 md:h-17 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg opacity-25 hover:opacity-45 transition-opacity">
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </div>
        </div>

        <div className="z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-white/90 text-slate-700 border-slate-200 shadow-sm">
              Blog Automation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
              AI-Powered Blog Content Creation & Automation
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              Transform your content strategy with intelligent blog automation. Generate high-quality, SEO-optimized
              articles that engage your audience and drive results.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Get Your Custom Blog Content</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

            <div>
                <Label htmlFor="Blog" className="mb-1">
                  Type *
                </Label>
                <Select
                  value={formData.blog}
                  onValueChange={(value) => setFormData({ ...formData, blog: value })}
                  required
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="General Blog Agent">General Blog Agent</SelectItem>
                    <SelectItem value="Real Estate Blog Agent">Real Estate Blog Agent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="name" className="mb-1">
                  Name *
                </Label>
                <Input
                  id="name"
                  className="mt-2"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="mb-1">
                  Business Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="mt-2"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">Business emails only (no Gmail, Hotmail, Outlook)</p>
              </div>

              <div>
                <Label htmlFor="company" className="mb-1">
                  Company *
                </Label>
                <Input
                  id="company"
                  className="mt-2"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="title" className="mb-1">
                  Title *
                </Label>
                <Input
                  id="title"
                  className="mt-2"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Blog post title or topic"
                  required
                />
              </div>


              <div>
                <Label htmlFor="points" className="mb-1">
                  Key Points
                </Label>
                <Textarea
                  id="points"
                  className="mt-2"
                  value={formData.points}
                  onChange={(e) => setFormData({ ...formData, points: e.target.value })}
                  placeholder="Main points to cover in the blog post"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="highlights" className="mb-1">
                  Highlights
                </Label>
                <Textarea
                  id="highlights"
                  className="mt-2"
                  value={formData.highlights}
                  onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
                  placeholder="Important highlights or key takeaways"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="tone" className="mb-1">
                  Tone *
                </Label>
                <Select
                  value={formData.tone}
                  onValueChange={(value) => setFormData({ ...formData, tone: value })}
                  required
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Professional">Professional</SelectItem>
                    <SelectItem value="Conversational">Conversational</SelectItem>
                    <SelectItem value="Persuasive">Persuasive</SelectItem>
                    <SelectItem value="Inspirational">Inspirational</SelectItem>
                    <SelectItem value="Informative">Informative</SelectItem>
                    <SelectItem value="Authoritative">Authoritative</SelectItem>
                    <SelectItem value="Friendly">Friendly</SelectItem>
                    <SelectItem value="Formal">Formal</SelectItem>
                    <SelectItem value="Empathetic">Empathetic</SelectItem>
                    <SelectItem value="Optimistic">Optimistic</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="style" className="mb-1">
                  Style *
                </Label>
                <Select
                  value={formData.style}
                  onValueChange={(value) => setFormData({ ...formData, style: value })}
                  required
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="informative">Informative/Educational</SelectItem>
                    <SelectItem value="listicle">Listicle</SelectItem>
                    <SelectItem value="how_to_step_by_step_guide">How-To/Step-by-Step Guide</SelectItem>
                    <SelectItem value="market_analysis_trend_report">Market Analysis/Trend Report</SelectItem>
                    <SelectItem value="case_study_success_story">Case Study/Success Story</SelectItem>
                    <SelectItem value="opinion_thought_leadership">Opinion/Thought Leadership</SelectItem>
                    <SelectItem value="interview_profile">Interview/Profile</SelectItem>
                    <SelectItem value="comparison_review">Comparison/Review</SelectItem>
                    <SelectItem value="news_update">News Update</SelectItem>
                    <SelectItem value="storytelling_narrative">Storytelling/Narrative</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                <p className="text-sm text-green-700 font-medium">
                  🎉 First blog generation is FREE - No credit card required!
                </p>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Generate Blog Content"}
              </Button>
            </form>
          </div>
        </div>

        <style jsx>{`
          @keyframes float1 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25% { transform: translateY(-20px) translateX(10px) rotate(5deg); }
            50% { transform: translateY(-10px) translateX(-15px) rotate(-3deg); }
            75% { transform: translateY(-25px) translateX(5px) rotate(2deg); }
          }

          @keyframes float2 {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            33% { transform: translateY(-15px) translateX(-20px) rotate(-4deg); }
            66% { transform: translateY(-30px) translateX(10px) rotate(6deg); }
          }

          .floating-icon-1 { animation: float1 12s ease-in-out infinite; }
          .floating-icon-2 { animation: float2 15s ease-in-out infinite; }
          .floating-icon-3 { animation: float1 18s ease-in-out infinite reverse; }
          .floating-icon-4 { animation: float2 14s ease-in-out infinite reverse; }

          .floating-icon {
            filter: blur(0.5px);
          }

          .floating-icon:hover {
            filter: blur(0px);
          }
        `}</style>
      </section>

      {/* Blog Samples Section */}
      <section className="py-20 px-4 md:px-12 bg-muted/50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Sample Blog Categories</h2>
            <p className="text-muted-foreground md:text-xl">
              Explore our AI-generated blog samples across different industries and niches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* General Blog Agent */}
            <Card
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => openBlogModal("General Blog Agent")}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle>General Blog Agent</CardTitle>
                    <CardDescription>Versatile content for any industry</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Multi-purpose blog content covering business, technology, lifestyle, and more.
                </p>
              </CardContent>
            </Card>

            {/* Real Estate Blog Agent */}
            <Card
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => openBlogModal("Real Estate Blog Agent")}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle>Real Estate Blog Agent</CardTitle>
                    <CardDescription>Property and market insights</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Specialized content for real estate professionals, buyers, and sellers.
                </p>
              </CardContent>
            </Card>

            {/* Placeholder Categories */}
            {[
              { title: "E-commerce Blog Agent", desc: "Product and sales content", icon: BarChart3, color: "orange" },
              { title: "Healthcare Blog Agent", desc: "Medical and wellness topics", icon: Users, color: "red" },
              { title: "Technology Blog Agent", desc: "Tech trends and innovations", icon: Zap, color: "orange" },
              { title: "Finance Blog Agent", desc: "Financial advice and insights", icon: Target, color: "indigo" },
            ].map((category, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow opacity-60">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.desc}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Coming soon - Specialized content for this industry.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What is Blog Automation */}
      <section className="py-20 px-4 md:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">What is Blog Automation?</h2>
          <p className="text-muted-foreground md:text-xl">
            AI-powered content creation that generates high-quality, SEO-optimized blog posts tailored to your brand
            voice, industry, and audience. Save time while maintaining consistent, engaging content that drives traffic
            and conversions.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 md:px-12 bg-muted/50">
        <div className="max-w-6xl mx-auto space-y-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: PenTool,
                title: "AI Content Generation",
                description:
                  "Advanced AI creates original, engaging content tailored to your specifications and brand voice.",
              },
              {
                icon: Target,
                title: "SEO Optimization",
                description: "Built-in SEO best practices ensure your content ranks well and drives organic traffic.",
              },
              {
                icon: Users,
                title: "Multi-Industry Support",
                description: "Specialized agents for different industries with deep domain knowledge and expertise.",
              },
              {
                icon: Zap,
                title: "Fast Turnaround",
                description: "Generate high-quality blog posts in minutes, not hours or days.",
              },
              {
                icon: BarChart3,
                title: "Performance Tracking",
                description: "Monitor content performance and optimize based on engagement metrics.",
              },
              {
                icon: Building2,
                title: "Brand Consistency",
                description: "Maintain consistent tone, style, and messaging across all your content.",
              },
            ].map((feature, index) => (
              <div key={index} className="space-y-2 border p-6 rounded-lg bg-background shadow-sm">
                <div className="flex items-center gap-2">
                  <feature.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/full-logo.svg"
                    alt="Awwtomation Logo"
                    fill={false}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto w-auto"
                    priority
                  />
                </div>
                <p className="text-sm text-muted-foreground">Automate. Accelerate. Assert.</p>
                <div className="flex gap-4">
                <Link
  href="https://www.instagram.com/awwtomation/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-muted-foreground hover:text-foreground"
>
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
  href="https://www.linkedin.com/company/awwtomation/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-muted-foreground hover:text-foreground"
>
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
  href="https://youtube.com/@Awwtomation"
  target="_blank"
  rel="noopener noreferrer"
  className="text-muted-foreground hover:text-foreground"
>
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </Link>
                  <Link
  href="https://x.com/awwtomation"
  target="_blank"
  rel="noopener noreferrer"
  className="text-muted-foreground hover:text-foreground"
>
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">X</span>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/services/blog-automation" className="text-muted-foreground hover:text-foreground">
                      Blog Agent
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/social-media-automation" className="text-muted-foreground hover:text-foreground">
                      Social Media Automation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      SEO Reporting
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Custom Dashboards
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="mailto:contact@awwtomation.com" className="text-muted-foreground hover:text-foreground">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-muted-foreground">© 2025 Awwtomation. All rights reserved.</p>

              <div className="flex gap-4 text-xs text-muted-foreground">
                <Link href="#" className="hover:text-foreground">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>

      {/* Blog Samples Modal */}
      <Dialog open={blogModalOpen} onOpenChange={setBlogModalOpen}>
      <DialogContent className="max-w-5xl w-full max-h-[90vh] overflow-y-auto">

          <DialogHeader className="pb-4">
            <DialogTitle className="flex items-center justify-between pr-8">
              <span>{selectedCategory} Samples</span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>
                  {currentBlogIndex + 1} of {currentBlogs.length}
                </span>
              </div>
            </DialogTitle>
          </DialogHeader>

          {currentBlog && (
            <div className="space-y-6 px-2">
              <div className="space-y-3">
                <Badge variant="outline">{currentBlog.category}</Badge>
                <h3 className="text-2xl font-bold">{currentBlog.title}</h3>
                <div
                  className="prose prose-sm max-w-none text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: currentBlog.content }}
                />
              </div>

              <div className="flex justify-between items-center pt-6 border-t">
                <Button variant="outline" onClick={prevBlog} disabled={currentBlogs.length <= 1}>
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>

                <Button variant="outline" onClick={nextBlog} disabled={currentBlogs.length <= 1}>
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <CalModal open={calModalOpen} onOpenChange={setCalModalOpen} calLink={selectedCalLink} />
    </div>
  )
}
