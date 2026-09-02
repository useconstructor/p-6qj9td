"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Menu,
  X,
  ArrowRight,
  Calendar,
  Users,
  BarChart3,
  Zap,
  CheckCircle,
  Clock,
  ChevronDown,
  ChevronUp,
  Star,
  Play,
  FileText,
  Settings,
  Inbox,
  Layout,
  Target,
  TrendingUp,
  Shield,
  Globe,
  Headphones,
  ChevronLeft,
  ChevronRight,
  Check,
  Sparkles
} from "lucide-react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const navLinks = [
    { name: "Product", href: "#features", hasDropdown: true },
    { name: "Features", href: "#features", hasDropdown: false },
    { name: "Solutions", href: "#solutions", hasDropdown: true },
    { name: "Resources", href: "#resources", hasDropdown: true },
    { name: "Pricing", href: "#pricing", hasDropdown: false },
  ]

  const stats = [
    { icon: Users, value: "10K+", label: "Teams trust Orbit PM" },
    { icon: FileText, value: "2.5M+", label: "Projects delivered" },
    { icon: CheckCircle, value: "98.9%", label: "Uptime & reliability" },
    { icon: Clock, value: "< 2min", label: "Average setup time" },
    { icon: TrendingUp, value: "45%", label: "Increase in team productivity" },
    { icon: Headphones, value: "24/7", label: "Expert support" },
  ]

  const features = [
    {
      icon: FileText,
      title: "Smart Project Planning",
      description: "Create project plans in minutes with AI-powered recommendations and smart templates.",
      color: "bg-purple-500/20",
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "Work together seamlessly with live updates, comments, and file sharing across your team.",
      color: "bg-blue-500/20",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get actionable insights with advanced reports and dashboards that drive better decisions.",
      color: "bg-green-500/20",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and workflows to focus on what really matters.",
      color: "bg-orange-500/20",
    },
  ]

  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for individuals and small teams getting started",
      features: [
        "Up to 5 team members",
        "3 active projects",
        "Basic task management",
        "1GB storage",
        "Community support",
      ],
      cta: "Get started free",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$12",
      period: "per user/month",
      description: "For growing teams that need more power and flexibility",
      features: [
        "Unlimited team members",
        "Unlimited projects",
        "Advanced analytics",
        "50GB storage",
        "Priority support",
        "Custom workflows",
        "Time tracking",
      ],
      cta: "Start free trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "For large organizations with advanced security needs",
      features: [
        "Everything in Pro",
        "SSO & SAML",
        "Advanced security",
        "Unlimited storage",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "Onboarding assistance",
      ],
      cta: "Contact sales",
      highlighted: false,
    },
  ]

  const testimonials = [
    {
      quote: "Orbit PM transformed how our team collaborates. We shipped 40% faster within the first month.",
      author: "Engineering Lead",
      company: "Tech Startup",
      rating: 5,
    },
    {
      quote: "The best project management tool we have ever used. The interface is intuitive and powerful.",
      author: "Product Manager",
      company: "SaaS Company",
      rating: 5,
    },
    {
      quote: "Finally, a PM tool that developers actually want to use. The integrations are seamless.",
      author: "CTO",
      company: "Digital Agency",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "How does the free plan work?",
      answer: "Our free plan is perfect for small teams getting started. You get up to 5 team members, 3 active projects, and essential task management features. No credit card required, and you can upgrade anytime.",
    },
    {
      question: "Can I import data from other project management tools?",
      answer: "Yes! Orbit PM supports importing from popular tools like Asana, Trello, Jira, Monday.com, and more. Our migration assistant guides you through the process step by step.",
    },
    {
      question: "What integrations are available?",
      answer: "We integrate with 100+ tools including Slack, GitHub, GitLab, Figma, Google Workspace, Microsoft 365, Zoom, and many more. Enterprise plans also support custom integrations via our API.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption, SOC 2 Type II compliance, and regular security audits. Your data is stored in secure, redundant data centers with 99.9% uptime guarantee.",
    },
    {
      question: "Do you offer discounts for nonprofits or education?",
      answer: "Yes, we offer special pricing for qualified nonprofits, educational institutions, and open source projects. Contact our sales team to learn more about eligibility.",
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D0D12" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{ backgroundColor: "rgba(13, 13, 18, 0.8)", backdropFilter: "blur(20px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#8B5CF6" }}>
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-white">Orbit PM</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/5">
                Sign in
              </Button>
              <Button className="text-white" style={{ backgroundColor: "#8B5CF6" }}>
                Get started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ backgroundColor: "#0D0D12" }}
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full text-gray-400 hover:text-white hover:bg-white/5">
                Sign in
              </Button>
              <Button className="w-full text-white" style={{ backgroundColor: "#8B5CF6" }}>
                Get started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-6 px-4 py-2 text-sm font-medium border-0" style={{ backgroundColor: "rgba(139, 92, 246, 0.2)", color: "#8B5CF6" }}>
                <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: "#8B5CF6" }} />
                Built for high-performing teams
              </Badge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-white">Plan. Build. Launch.</span>
                <br />
                <span style={{ color: "#8B5CF6" }}>All in Orbit.</span>
              </h1>

              <p className="text-lg md:text-xl mb-8 max-w-lg" style={{ color: "#71717A" }}>
                Orbit PM is the modern project management platform that helps teams ship faster, stay aligned, and drive results that matter.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                  size="lg"
                  className="text-white px-6 py-6 text-base font-medium"
                  style={{ backgroundColor: "#8B5CF6" }}
                >
                  Get started — it's free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-6 py-6 text-base font-medium border-white/10 text-white hover:bg-white/5"
                  style={{ backgroundColor: "transparent" }}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a demo
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm" style={{ color: "#71717A" }}>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: "#8B5CF6" }} />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" style={{ color: "#8B5CF6" }} />
                  Setup in under 2 minutes
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div
                className="rounded-xl p-1 shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.1) 100%)",
                  boxShadow: "0 0 80px rgba(139, 92, 246, 0.2)",
                }}
              >
                <div className="rounded-lg overflow-hidden" style={{ backgroundColor: "#1A1A24" }}>
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: "#8B5CF6" }}>
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white text-sm font-medium">Orbit PM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600" />
                    </div>
                  </div>

                  <div className="flex">
                    {/* Sidebar */}
                    <div className="w-48 border-r border-white/5 p-3 hidden sm:block">
                      {[
                        { name: "Overview", icon: Layout, active: true },
                        { name: "Projects", icon: FileText, active: false },
                        { name: "Tasks", icon: CheckCircle, active: false },
                        { name: "Roadmap", icon: Target, active: false },
                        { name: "Timeline", icon: Clock, active: false },
                        { name: "Reports", icon: BarChart3, active: false },
                        { name: "Inbox", icon: Inbox, badge: 12 },
                        { name: "Teams", icon: Users, active: false },
                        { name: "Settings", icon: Settings, active: false },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm mb-1 ${
                            item.active ? "text-white" : "text-gray-500"
                          }`}
                          style={item.active ? { backgroundColor: "rgba(139, 92, 246, 0.2)" } : {}}
                        >
                          <div className="flex items-center space-x-2">
                            <item.icon className="w-4 h-4" />
                            <span>{item.name}</span>
                          </div>
                          {item.badge && (
                            <span className="px-1.5 py-0.5 text-xs rounded" style={{ backgroundColor: "#8B5CF6" }}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-4">
                      <h2 className="text-white text-lg font-semibold mb-4">Overview</h2>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-4 gap-3 mb-4">
                        {[
                          { label: "Active Projects", value: "24" },
                          { label: "Tasks in Progress", value: "128" },
                          { label: "Completed Tasks", value: "2,341" },
                          { label: "Team Velocity", value: "92%", trend: "+12%" },
                        ].map((stat) => (
                          <div key={stat.label} className="p-3 rounded-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}>
                            <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                            <div className="flex items-center space-x-2">
                              <p className="text-xl font-semibold text-white">{stat.value}</p>
                              {stat.trend && (
                                <span className="text-xs text-green-400">{stat.trend}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {/* Progress Chart */}
                        <div className="p-3 rounded-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm text-white">Progress Overview</p>
                            <span className="text-xs text-gray-500">72% Overall progress</span>
                          </div>
                          <div className="h-20 flex items-end space-x-1">
                            {[30, 45, 60, 75, 65, 80].map((height, i) => (
                              <div key={i} className="flex-1 rounded-t" style={{ height: `${height}%`, backgroundColor: "#8B5CF6" }} />
                            ))}
                          </div>
                        </div>

                        {/* Tasks by Status */}
                        <div className="p-3 rounded-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}>
                          <p className="text-sm text-white mb-2">Tasks by Status</p>
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 rounded-full border-4 border-purple-500 flex items-center justify-center">
                              <span className="text-white text-sm font-medium">72%</span>
                            </div>
                            <div className="space-y-1 text-xs">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-gray-400">Completed</span>
                                <span className="text-white">2,341</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                <span className="text-gray-400">In Progress</span>
                                <span className="text-white">128</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                <span className="text-gray-400">Review</span>
                                <span className="text-white">64</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <span className="text-gray-400">Blocked</span>
                                <span className="text-white">23</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Activity & Milestones */}
                      <div className="grid grid-cols-2 gap-3 mt-3">
                        <div className="p-3 rounded-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}>
                          <p className="text-sm text-white mb-2">Recent Activity</p>
                          <div className="space-y-2">
                            {[
                              { color: "bg-green-500", text: "Design system v2.0 completed", team: "UI/UX Team", time: "2h ago" },
                              { color: "bg-blue-500", text: "API integration refactor merged", team: "Engineering", time: "4h ago" },
                              { color: "bg-purple-500", text: "Marketing campaign launched", team: "Marketing", time: "1d ago" },
                            ].map((activity, i) => (
                              <div key={i} className="flex items-start space-x-2">
                                <div className={`w-2 h-2 rounded-full mt-1.5 ${activity.color}`} />
                                <div>
                                  <p className="text-xs text-white">{activity.text}</p>
                                  <p className="text-xs text-gray-500">{activity.team} • {activity.time}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-3 rounded-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm text-white">Upcoming Milestones</p>
                            <span className="text-xs text-purple-400">View all</span>
                          </div>
                          <div className="space-y-2">
                            {[
                              { text: "Mobile App Launch", date: "Jun 15, 2025", status: "on-track" },
                              { text: "Q2 Planning Complete", date: "Jun 20, 2025", status: "on-track" },
                              { text: "Feature Release v1.3", date: "Jun 30, 2025", status: "at-risk" },
                            ].map((milestone, i) => (
                              <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <div className={`w-2 h-2 rounded-full ${milestone.status === "on-track" ? "bg-green-500" : "bg-red-500"}`} />
                                  <span className="text-xs text-white">{milestone.text}</span>
                                </div>
                                <span className="text-xs text-gray-500">{milestone.date}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* User Footer */}
                  <div className="px-4 py-3 border-t border-white/5 flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-medium">
                      SC
                    </div>
                    <div>
                      <p className="text-sm text-white">Sarah Chen</p>
                      <p className="text-xs text-gray-500">sarah@acme.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 border-y border-white/5" style={{ backgroundColor: "#0D0D12" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3" style={{ backgroundColor: "rgba(139, 92, 246, 0.1)" }}>
                  <stat.icon className="w-6 h-6" style={{ color: "#8B5CF6" }} />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm" style={{ color: "#71717A" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24" style={{ backgroundColor: "#0D0D12" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 text-sm font-medium border-0" style={{ backgroundColor: "rgba(139, 92, 246, 0.2)", color: "#8B5CF6" }}>
              POWERFUL FEATURES
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything your team needs
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#71717A" }}>
              Orbit PM combines powerful features with an intuitive interface to help you manage projects, resources, and teams effortlessly.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 border border-white/5 hover:border-purple-500/30 transition-all duration-300"
                style={{ backgroundColor: "#1A1A24" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(139, 92, 246, 0.2)" }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: "#8B5CF6" }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm" style={{ color: "#71717A" }}>{feature.description}</p>

                {/* Feature Preview */}
                <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}>
                  {index === 0 && (
                    <div className="space-y-2">
                      <div className="text-xs text-gray-400">Q2 Roadmap</div>
                      <div className="h-2 rounded-full bg-purple-500/30 overflow-hidden">
                        <div className="h-full w-3/4 rounded-full" style={{ backgroundColor: "#8B5CF6" }} />
                      </div>
                      <div className="text-xs text-gray-400">Mobile App</div>
                      <div className="h-2 rounded-full bg-purple-500/30 overflow-hidden">
                        <div className="h-full w-1/2 rounded-full" style={{ backgroundColor: "#8B5CF6" }} />
                      </div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">M</div>
                      <div>
                        <div className="text-xs text-white">Mike Johnson</div>
                        <div className="text-xs text-gray-500">Updated the API integration specs</div>
                      </div>
                      <span className="text-xs text-gray-500 ml-auto">2h ago</span>
                    </div>
                  )}
                  {index === 2 && (
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-400">Team Velocity</span>
                        <span className="text-xs text-green-400">+12%</span>
                      </div>
                      <div className="h-8 flex items-end space-x-1">
                        {[40, 55, 45, 60, 70, 65, 80].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: "#8B5CF6" }} />
                        ))}
                      </div>
                    </div>
                  )}
                  {index === 3 && (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-xs">
                        <Sparkles className="w-3 h-3 text-purple-400" />
                        <span className="text-gray-400">When</span>
                        <span className="text-white px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(139, 92, 246, 0.2)" }}>Task is completed</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs">
                        <ArrowRight className="w-3 h-3 text-purple-400" />
                        <span className="text-gray-400">Then</span>
                        <span className="text-white px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(139, 92, 246, 0.2)" }}>Move to review</span>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section id="solutions" className="py-24" style={{ backgroundColor: "#1A1A24" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for every team
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#71717A" }}>
              Whether you are running sprints, managing campaigns, or coordinating releases, Orbit adapts to your workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Engineering Teams",
                description: "Sprint planning, bug tracking, and release management with GitHub and GitLab integrations.",
              },
              {
                icon: Target,
                title: "Product Teams",
                description: "Roadmap planning, feature prioritization, and stakeholder alignment in one place.",
              },
              {
                icon: Users,
                title: "Marketing Teams",
                description: "Campaign management, content calendars, and cross-functional collaboration.",
              },
              {
                icon: Shield,
                title: "Operations Teams",
                description: "Process automation, resource allocation, and compliance tracking.",
              },
              {
                icon: Globe,
                title: "Remote Teams",
                description: "Async collaboration, timezone-aware scheduling, and transparent communication.",
              },
              {
                icon: TrendingUp,
                title: "Growing Startups",
                description: "Scale from 5 to 500 people without changing tools or losing velocity.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="p-6 border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
                style={{ backgroundColor: "#0D0D12" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "rgba(139, 92, 246, 0.2)" }}
                >
                  <service.icon className="w-6 h-6" style={{ color: "#8B5CF6" }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p style={{ color: "#71717A" }}>{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24" style={{ backgroundColor: "#0D0D12" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 text-sm font-medium border-0" style={{ backgroundColor: "rgba(139, 92, 246, 0.2)", color: "#8B5CF6" }}>
              SIMPLE PRICING
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start free, scale as you grow
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#71717A" }}>
              No hidden fees. No surprise charges. Upgrade or downgrade anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative p-8 border ${
                  tier.highlighted
                    ? "border-purple-500"
                    : "border-white/5"
                }`}
                style={{
                  backgroundColor: "#1A1A24",
                  boxShadow: tier.highlighted ? "0 0 40px rgba(139, 92, 246, 0.2)" : undefined,
                }}
              >
                {tier.highlighted && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: "#8B5CF6" }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="ml-2 text-sm" style={{ color: "#71717A" }}>{tier.period}</span>
                  </div>
                  <p className="mt-2 text-sm" style={{ color: "#71717A" }}>{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <Check className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: "#8B5CF6" }} />
                      <span style={{ color: "#F4F4F5" }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-6 ${
                    tier.highlighted
                      ? "text-white"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                  style={tier.highlighted ? { backgroundColor: "#8B5CF6" } : {}}
                >
                  {tier.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24" style={{ backgroundColor: "#1A1A24" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Loved by teams worldwide
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#71717A" }}>
              See why thousands of teams choose Orbit PM for their project management needs.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <Card
              className="p-8 md:p-12 border border-white/5"
              style={{ backgroundColor: "#0D0D12" }}
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-white text-center mb-8">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-white">{testimonials[currentTestimonial].author}</p>
                <p style={{ color: "#71717A" }}>{testimonials[currentTestimonial].company}</p>
              </div>
            </Card>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="p-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-purple-500 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentTestimonial ? "bg-purple-500" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="p-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-purple-500 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24" style={{ backgroundColor: "#0D0D12" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg" style={{ color: "#71717A" }}>
              Everything you need to know about Orbit PM.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/5 rounded-xl overflow-hidden"
                style={{ backgroundColor: "#1A1A24" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5" style={{ color: "#71717A" }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to transform how your team works?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#71717A" }}>
            Join thousands of teams already using Orbit PM to ship faster and stay aligned. Start free today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-white px-8 py-6 text-base font-medium"
              style={{ backgroundColor: "#8B5CF6" }}
            >
              Get started for free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base font-medium border-white/10 text-white hover:bg-white/5"
              style={{ backgroundColor: "transparent" }}
            >
              Talk to sales
            </Button>
          </div>
          <p className="mt-6 text-sm" style={{ color: "#71717A" }}>
            No credit card required • Free plan includes 5 team members
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5" style={{ backgroundColor: "#0D0D12" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#8B5CF6" }}>
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-white">Orbit PM</span>
              </Link>
              <p className="text-sm" style={{ color: "#71717A" }}>
                The modern project management platform for high-performing teams.
              </p>
            </div>

            {[
              {
                title: "Product",
                links: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"],
              },
              {
                title: "Resources",
                links: ["Documentation", "API Reference", "Guides", "Blog", "Community"],
              },
              {
                title: "Company",
                links: ["About", "Careers", "Press", "Partners", "Contact"],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Security", "Cookies", "Compliance"],
              },
            ].map((column) => (
              <div key={column.title}>
                <h4 className="font-semibold text-white mb-4">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link
                        href={`/${link.toLowerCase().replace(" ", "-")}`}
                        className="text-sm hover:text-white transition-colors"
                        style={{ color: "#71717A" }}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: "#71717A" }}>
              © {new Date().getFullYear()} Orbit PM. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/twitter" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
              <Link href="/linkedin" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </Link>
              <Link href="/github" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}