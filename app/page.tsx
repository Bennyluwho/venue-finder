import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, BarChart3, Users, Zap, Music, Target, TrendingUp, Sparkles, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 glass-effect">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Music className="h-6 w-6 text-primary" />
            </div>
            <span className="text-2xl font-bold gradient-text">Museic</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Pricing
            </a>
            <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5 bg-transparent">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-lg">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(158,71,112,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-8 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Venue Booking
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-balance mb-8 leading-tight">
              Find Perfect Venues &<br />
              <span className="gradient-text">Optimize</span> Your Tours
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-12 max-w-3xl mx-auto leading-relaxed">
              Eliminate research time with AI-powered venue suggestions based on your streaming data, audience
              demographics, and revenue forecasting. Built for artists, managers, and booking agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="text-lg px-10 py-4 bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-4 border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything You Need to Book Smarter</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our AI analyzes your streaming data, social media, and audience demographics to suggest the perfect venues
              and optimize your tour strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Smart Venue Discovery</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  AI-powered venue suggestions based on your audience size, location data, and performance history.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Interactive venue mapping
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Capacity optimization
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Local market analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Revenue Forecasting</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Predict ticket sales and revenue potential using streaming data and market analysis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Sales predictions
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Pricing optimization
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    ROI calculations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Audience Analytics</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Deep insights from Spotify, Apple Music, and YouTube to understand your fanbase.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Geographic fan mapping
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Demographic analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Engagement metrics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Automated Outreach</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Let AI handle venue communication, rate negotiations, and booking coordination.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Automated cold outreach
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Rate comparison
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Booking management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Tour Optimization</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Create efficient tour routes based on fan density and venue availability.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Route planning
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Date optimization
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Market timing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Performance Dashboard</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Track sales, streams, and fan engagement across all platforms in one place.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Real-time analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Multi-platform data
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Growth insights
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How Museic Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From data analysis to booked shows in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-3xl font-bold text-primary-foreground">1</span>
                </div>
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-6">Connect Your Data</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Link your Spotify, Apple Music, YouTube, and social media accounts. Our AI analyzes your streaming data
                and fan demographics.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-3xl font-bold text-primary-foreground">2</span>
                </div>
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-6">Get Smart Suggestions</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Receive AI-powered venue recommendations with capacity optimization, pricing suggestions, and revenue
                forecasts for each location.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-3xl font-bold text-primary-foreground">3</span>
                </div>
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-6">Book & Optimize</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Let our AI handle venue outreach and negotiations while you track performance through our comprehensive
                dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Tour Booking?</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Join thousands of artists who use Museic to find perfect venues, optimize pricing, and sell more tickets.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="text-lg px-10 py-4 bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-4 border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-8">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the Plan That Fits Your Needs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Museic offers flexible pricing plans to suit different tour sizes and budgets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Music className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Basic Plan</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Perfect for solo artists and small tours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />5 AI suggestions per month
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Basic audience analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Limited outreach capabilities
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Pro Plan</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Ideal for mid-sized artists and tour managers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    20 AI suggestions per month
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Advanced audience analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Enhanced outreach capabilities
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Enterprise Plan</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Designed for large-scale tours and booking agencies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Unlimited AI suggestions
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Comprehensive audience analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Full-service outreach and booking coordination
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <Music className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xl font-bold gradient-text">Museic</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                AI-powered venue booking and tour optimization for artists worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Product</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Support</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Museic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
