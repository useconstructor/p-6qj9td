"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  FileText,
  Settings,
  Inbox,
  Layout,
  Target,
  Check,
  Sparkles
} from "lucide-react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Product", href: "#features", hasDropdown: true },
    { name: "Features", href: "#features", hasDropdown: false },
    { name: "Solutions", href: "#solutions", hasDropdown: true },
    { name: "Resources", href: "#resources", hasDropdown: true },
    { name: "Pricing", href: "#pricing", hasDropdown: false },
  ]

  const features = [
    {
      icon: FileText,
      title: "Smart Project Planning",
      description: "Create project plans in minutes with AI-powered recommendations and smart templates.",
      preview: "roadmap",
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "Work together seamlessly with live updates, comments, and file sharing across your team.",
      preview: "collaboration",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get actionable insights with advanced reports and dashboards that drive better decisions.",
      preview: "analytics",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and workflows to focus on what really matters.",
      preview: "automation",
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D0D12" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{ backgroundColor: "rgba(13, 13, 18, 0.8)", backdropFilter: "blur(20px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#8B5CF6" }}>
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Orbit PM</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center px-5 py-2.5 text-base text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/5 text-base">
                Sign in
              </Button>
              <Button className="text-white text-base px-6 py-2.5" style={{ backgroundColor: "#8B5CF6" }}>
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
      <section className="relative pt-36 pb-24 overflow-hidden min-h-screen">
        {/* Background Nebula Effects - More prominent and colorful */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main purple nebula */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full opacity-40"
            style={{
              background: "radial-gradient(ellipse at center, #8B5CF6 0%, #6D28D9 25%, #4C1D95 40%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          {/* Pink/magenta accent nebula */}
          <div
            className="absolute top-20 right-0 w-[900px] h-[900px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(ellipse at center, #EC4899 0%, #DB2777 30%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />
          {/* Blue accent nebula */}
          <div
            className="absolute top-40 left-0 w-[800px] h-[800px] rounded-full opacity-25"
            style={{
              background: "radial-gradient(ellipse at center, #3B82F6 0%, #1D4ED8 30%, transparent 70%)",
              filter: "blur(90px)",
            }}
          />
          {/* Cyan/teal accent */}
          <div
            className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(ellipse at center, #06B6D4 0%, #0891B2 30%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          {/* Star-like particles effect */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent),
                              radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.2), transparent),
                              radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.4), transparent),
                              radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.2), transparent),
                              radial-gradient(1px 1px at 160px 120px, rgba(255,255,255,0.3), transparent)`,
            backgroundSize: '200px 200px',
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-8 px-5 py-2.5 text-base font-medium border-0 inline-flex items-center" style={{ backgroundColor: "rgba(139, 92, 246, 0.25)", color: "#A78BFA" }}>
                <span className="w-2.5 h-2.5 rounded-full mr-3" style={{ backgroundColor: "#8B5CF6" }} />
                Built for high-performing teams
              </Badge>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 tracking-tight">
                <span className="text-white">Plan. Build. Launch.</span>
                <br />
                <span style={{ color: "#A78BFA" }}>All in Orbit.</span>
              </h1>

              <p className="text-xl md:text-2xl mb-10 max-w-xl leading-relaxed" style={{ color: "#A1A1AA" }}>
                Orbit PM is the modern project management platform that helps teams ship faster, stay aligned, and drive results that matter.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-8">
                <Button
                  size="lg"
                  className="text-white px-8 py-7 text-lg font-semibold rounded-xl"
                  style={{ backgroundColor: "#8B5CF6" }}
                >
                  Get started — it's free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-7 text-lg font-semibold border-white/20 text-white hover:bg-white/5 rounded-xl"
                  style={{ backgroundColor: "transparent" }}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a demo
                </Button>
              </div>

              <div className="flex items-center gap-8 text-base" style={{ color: "#A1A1AA" }}>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{ color: "#8B5CF6" }} />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" style={{ color: "#8B5CF6" }} />
                  Setup in under 2 minutes
                </div>
              </div>
            </div>

            {/* Right Content - Large Dashboard Preview */}
            <div className="relative lg:scale-110 lg:translate-x-8">
              <div
                className="rounded-2xl p-1.5 shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.5) 0%, rgba(236, 72, 153, 0.3) 50%, rgba(139, 92, 246, 0.2) 100%)",
                  boxShadow: "0 0 120px rgba(139, 92, 246, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)",
                }}
              >
                <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#13131A" }}>
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#8B5CF6" }}>
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white text-base font-semibold">Orbit PM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-purple-600" />
                    </div>
                  </div>

                  <div className="flex">
                    {/* Sidebar */}
                    <div className="w-56 border-r border-white/10 p-4 hidden sm:block">
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
                          className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm mb-1.5 ${
                            item.active ? "text-white" : "text-gray-500"
                          }`}
                          style={item.active ? { backgroundColor: "rgba(139, 92, 246, 0.25)" } : {}}
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.name}</span>
                          </div>
                          {item.badge && (
                            <span className="px-2 py-1 text-xs rounded-md font-medium" style={{ backgroundColor: "#8B5CF6" }}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-5">
                      <div className="flex items-center justify-between mb-5">
                        <h2 className="text-white text-xl font-bold">Overview</h2>
                        <span className="text-sm text-gray-500">Last updated: 2 min ago</span>
                      </div>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-4 gap-4 mb-5">
                        {[
                          { label: "Active Projects", value: "24", color: "#8B5CF6" },
                          { label: "Tasks in Progress", value: "128", color: "#3B82F6" },
                          { label: "Completed Tasks", value: "2,341", color: "#10B981" },
                          { label: "Team Velocity", value: "92%", trend: "+12%", color: "#F59E0B" },
                        ].map((stat) => (
                          <div key={stat.label} className="p-4 rounded-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
                            <p className="text-xs text-gray-500 mb-2 font-medium">{stat.label}</p>
                            <div className="flex items-center space-x-2">
                              <p className="text-2xl font-bold text-white">{stat.value}</p>
                              {stat.trend && (
                                <span className="text-xs text-green-400 font-medium">{stat.trend}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {/* Progress Chart */}
                        <div className="p-4 rounded-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
                          <div className="flex items-center justify-between mb-3">
                            <p className="text-base font-semibold text-white">Progress Overview</p>
                            <span className="text-xs text-gray-500 font-medium">72% Overall</span>
                          </div>
                          <div className="h-24 flex items-end space-x-1.5">
                            {[30, 45, 60, 75, 65, 80, 70, 85].map((height, i) => (
                              <div
                                key={i}
                                className="flex-1 rounded-t transition-all duration-300"
                                style={{
                                  height: `${height}%`,
                                  backgroundColor: i === 7 ? "#8B5CF6" : "rgba(139, 92, 246, 0.4)"
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Tasks by Status */}
                        <div className="p-4 rounded-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
                          <p className="text-base font-semibold text-white mb-3">Tasks by Status</p>
                          <div className="flex items-center space-x-5">
                            <div className="relative w-20 h-20">
                              <svg className="w-20 h-20 transform -rotate-90">
                                <circle cx="40" cy="40" r="32" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                                <circle cx="40" cy="40" r="32" stroke="#8B5CF6" strokeWidth="8" fill="none"
                                  strokeDasharray={`${72 * 2.01} ${100 * 2.01}`} />
                              </svg>
                              <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">72%</span>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="text-gray-400">Completed</span>
                                <span className="text-white font-semibold">2,341</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 rounded-full bg-blue-500" />
                                <span className="text-gray-400">In Progress</span>
                                <span className="text-white font-semibold">128</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <span className="text-gray-400">Review</span>
                                <span className="text-white font-semibold">64</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <span className="text-gray-400">Blocked</span>
                                <span className="text-white font-semibold">23</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Activity & Milestones */}
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="p-4 rounded-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
                          <p className="text-base font-semibold text-white mb-3">Recent Activity</p>
                          <div className="space-y-3">
                            {[
                              { color: "bg-green-500", text: "Design system v2.0 completed", team: "UI/UX Team", time: "2h ago" },
                              { color: "bg-blue-500", text: "API integration refactor merged", team: "Engineering", time: "4h ago" },
                              { color: "bg-purple-500", text: "Marketing campaign launched", team: "Marketing", time: "1d ago" },
                            ].map((activity, i) => (
                              <div key={i} className="flex items-start space-x-3">
                                <div className={`w-2.5 h-2.5 rounded-full mt-1.5 ${activity.color}`} />
                                <div>
                                  <p className="text-sm text-white font-medium">{activity.text}</p>
                                  <p className="text-xs text-gray-500">{activity.team} • {activity.time}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-4 rounded-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
                          <div className="flex items-center justify-between mb-3">
                            <p className="text-base font-semibold text-white">Upcoming Milestones</p>
                            <span className="text-xs text-purple-400 font-medium cursor-pointer hover:text-purple-300">View all</span>
                          </div>
                          <div className="space-y-3">
                            {[
                              { text: "Mobile App Launch", date: "Jun 15, 2025", status: "on-track" },
                              { text: "Q2 Planning Complete", date: "Jun 20, 2025", status: "on-track" },
                              { text: "Feature Release v1.3", date: "Jun 30, 2025", status: "at-risk" },
                            ].map((milestone, i) => (
                              <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className={`w-2.5 h-2.5 rounded-full ${milestone.status === "on-track" ? "bg-green-500" : "bg-red-500"}`} />
                                  <span className="text-sm text-white font-medium">{milestone.text}</span>
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
                  <div className="px-5 py-4 border-t border-white/10 flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                      SC
                    </div>
                    <div>
                      <p className="text-base text-white font-medium">Sarah Chen</p>
                      <p className="text-sm text-gray-500">sarah@acme.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - 2x2 Grid with Preview Images */}
      <section id="features" className="py-28" style={{ backgroundColor: "#0D0D12" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 px-5 py-2.5 text-base font-medium border-0" style={{ backgroundColor: "rgba(139, 92, 246, 0.25)", color: "#A78BFA" }}>
              POWERFUL FEATURES
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Everything your team needs
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "#A1A1AA" }}>
              Orbit PM combines powerful features with an intuitive interface to help you manage projects, resources, and teams effortlessly.
            </p>
          </div>

          {/* 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden"
                style={{ backgroundColor: "#16161F" }}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "rgba(139, 92, 246, 0.25)" }}
                  >
                    <feature.icon className="w-7 h-7" style={{ color: "#A78BFA" }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-base leading-relaxed" style={{ color: "#A1A1AA" }}>{feature.description}</p>
                  </div>
                </div>

                {/* Feature Preview Image/Mockup */}
                <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#0D0D12" }}>
                  <div className="p-5">
                    {index === 0 && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400 font-medium">Q2 Product Roadmap</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">On Track</span>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-white">Mobile App Launch</span>
                              <span className="text-gray-500">75%</span>
                            </div>
                            <div className="h-3 rounded-full bg-purple-500/20 overflow-hidden">
                              <div className="h-full w-3/4 rounded-full" style={{ backgroundColor: "#8B5CF6" }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-white">API V2 Release</span>
                              <span className="text-gray-500">50%</span>
                            </div>
                            <div className="h-3 rounded-full bg-purple-500/20 overflow-hidden">
                              <div className="h-full w-1/2 rounded-full" style={{ backgroundColor: "#8B5CF6" }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-white">Dashboard Redesign</span>
                              <span className="text-gray-500">90%</span>
                            </div>
                            <div className="h-3 rounded-full bg-purple-500/20 overflow-hidden">
                              <div className="h-full w-[90%] rounded-full" style={{ backgroundColor: "#10B981" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="space-y-3">
                        {[
                          { avatar: "bg-blue-500", initials: "MJ", name: "Mike Johnson", action: "Updated the API integration specs", time: "2m ago" },
                          { avatar: "bg-pink-500", initials: "SC", name: "Sarah Chen", action: "Commented on Dashboard wireframes", time: "15m ago" },
                          { avatar: "bg-green-500", initials: "AL", name: "Alex Lee", action: "Completed Mobile navigation task", time: "1h ago" },
                        ].map((activity, i) => (
                          <div key={i} className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                            <div className={`w-10 h-10 rounded-full ${activity.avatar} flex items-center justify-center text-white text-sm font-bold`}>
                              {activity.initials}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-white font-medium">{activity.name}</span>
                                <span className="text-xs text-gray-500">{activity.time}</span>
                              </div>
                              <p className="text-sm text-gray-400">{activity.action}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {index === 2 && (
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-gray-400 font-medium">Team Velocity</span>
                          <span className="text-sm text-green-400 font-semibold">+12% this week</span>
                        </div>
                        <div className="h-32 flex items-end space-x-2">
                          {[40, 55, 45, 60, 70, 65, 80, 75, 85, 70, 90, 85].map((h, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-t transition-all duration-300"
                              style={{
                                height: `${h}%`,
                                backgroundColor: i >= 10 ? "#8B5CF6" : "rgba(139, 92, 246, 0.4)"
                              }}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between mt-3 text-xs text-gray-500">
                          <span>Mon</span>
                          <span>Wed</span>
                          <span>Fri</span>
                          <span>Sun</span>
                        </div>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg border border-purple-500/30" style={{ backgroundColor: "rgba(139, 92, 246, 0.1)" }}>
                          <div className="flex items-center space-x-3 text-sm mb-3">
                            <Sparkles className="w-5 h-5 text-purple-400" />
                            <span className="text-purple-300 font-medium">Automation Rule</span>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <span className="text-gray-400 text-sm">When</span>
                              <span className="text-white px-3 py-1.5 rounded-lg text-sm font-medium" style={{ backgroundColor: "rgba(139, 92, 246, 0.3)" }}>Task is completed</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <ArrowRight className="w-4 h-4 text-purple-400" />
                              <span className="text-gray-400 text-sm">Then</span>
                              <span className="text-white px-3 py-1.5 rounded-lg text-sm font-medium" style={{ backgroundColor: "rgba(139, 92, 246, 0.3)" }}>Move to Done column</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <ArrowRight className="w-4 h-4 text-purple-400" />
                              <span className="text-gray-400 text-sm">And</span>
                              <span className="text-white px-3 py-1.5 rounded-lg text-sm font-medium" style={{ backgroundColor: "rgba(139, 92, 246, 0.3)" }}>Notify assignee</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative overflow-hidden">
        {/* Background gradient for CTA */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(ellipse at center, #8B5CF6 0%, #6D28D9 30%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to transform how your team works?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: "#A1A1AA" }}>
            Join thousands of teams already using Orbit PM to ship faster and stay aligned. Start free today.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              size="lg"
              className="text-white px-10 py-7 text-lg font-semibold rounded-xl"
              style={{ backgroundColor: "#8B5CF6" }}
            >
              Get started for free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-7 text-lg font-semibold border-white/20 text-white hover:bg-white/5 rounded-xl"
              style={{ backgroundColor: "transparent" }}
            >
              Talk to sales
            </Button>
          </div>
          <p className="mt-8 text-base" style={{ color: "#71717A" }}>
            No credit card required • Free plan includes 5 team members
          </p>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 border-t border-white/5" style={{ backgroundColor: "#0D0D12" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#8B5CF6" }}>
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">Orbit PM</span>
            </Link>
            <p className="text-sm" style={{ color: "#71717A" }}>
              © {new Date().getFullYear()} Orbit PM. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
