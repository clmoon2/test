"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Input } from '../components/ui/input';
import { MetricCard } from '../components/MetricCard';
import { FeatureCard } from '../components/FeatureCard';
import { ColorSchemeDemo } from '../components/ColorSchemeDemo';
import { OutfitOfTheDay } from '../components/OutfitOfTheDay';
import { DigitalCloset } from '../components/DigitalCloset';
import { WeeklyPlanner } from '../components/WeeklyPlanner';
import { TripPacker } from '../components/TripPacker';
import { GapDetectionShop } from '../components/GapDetectionShop';
import { BrandPortal } from '../components/BrandPortal';
import { DesignSystem } from '../components/DesignSystem';
import { AppShowcase } from '../components/AppShowcase';
import { WavyDivider } from '../components/WavyDivider';
import { BlobBackground } from '../components/BlobBackground';
import { TestimonialCard } from '../components/TestimonialCard';
import { PhoneMockup } from '../components/PhoneMockup';
import { LiveCounter } from '../components/LiveCounter';
import { PressStrip } from '../components/PressStrip';
import { InspirationGrid } from '../components/InspirationGrid';
import { BlogTiles } from '../components/BlogTiles';
import { KPIStats } from '../components/KPIStats';
import { ChatPreview } from '../components/ChatPreview';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ChevronDown, 
  Grid3X3,
  TrendingUp,
  Package,
  Shield,
  Brain,
  BarChart3,
  Twitter,
  Instagram,
  Linkedin,
  Sparkles
} from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentOutfit, setCurrentOutfit] = useState(0);
  const [showColorDemo, setShowColorDemo] = useState(false);
  const [showOutfitApp, setShowOutfitApp] = useState(false);
  const [showCloset, setShowCloset] = useState(false);
  const [showPlanner, setShowPlanner] = useState(false);
  const [showTripPacker, setShowTripPacker] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showBrandPortal, setShowBrandPortal] = useState(false);
  const [showDesignSystem, setShowDesignSystem] = useState(false);
  const [showAppShowcase, setShowAppShowcase] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOutfit((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const outfits = [
    {
      title: "Morning Business",
      description: "63°F, 0.6-mile walk, business-casual",
      colors: "navy+tan"
    },
    {
      title: "Lunch Meeting", 
      description: "68°F, indoor meeting, professional",
      colors: "grey+white"
    },
    {
      title: "Evening Casual",
      description: "59°F, dinner out, smart-casual", 
      colors: "black+denim"
    }
  ];

  if (showColorDemo) {
    return <ColorSchemeDemo onBack={() => setShowColorDemo(false)} />;
  }

  if (showOutfitApp) {
    return <OutfitOfTheDay onBack={() => setShowOutfitApp(false)} />;
  }

  if (showCloset) {
    return <DigitalCloset onBack={() => setShowCloset(false)} />;
  }

  if (showPlanner) {
    return <WeeklyPlanner onBack={() => setShowPlanner(false)} />;
  }

  if (showTripPacker) {
    return <TripPacker onBack={() => setShowTripPacker(false)} />;
  }

  if (showShop) {
    return <GapDetectionShop onBack={() => setShowShop(false)} />;
  }

  if (showBrandPortal) {
    return <BrandPortal onBack={() => setShowBrandPortal(false)} />;
  }

  if (showDesignSystem) {
    return <DesignSystem onBack={() => setShowDesignSystem(false)} />;
  }

  if (showAppShowcase) {
    return <AppShowcase 
      onBack={() => setShowAppShowcase(false)} 
      onNavigate={(section) => {
        setShowAppShowcase(false);
        switch (section) {
          case 'outfit':
            setShowOutfitApp(true);
            break;
          case 'closet':
            setShowCloset(true);
            break;
          case 'planner':
            setShowPlanner(true);
            break;
          case 'trip':
            setShowTripPacker(true);
            break;
          case 'shop':
            setShowShop(true);
            break;
          case 'brands':
            setShowBrandPortal(true);
            break;
        }
      }}
    />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-background/50 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-6 py-4 border-b border-border/40 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-xl tracking-tight text-foreground">Aiphrodite</h1>
              <div className="hidden lg:flex items-center gap-6">
                <button 
                  onClick={() => setShowOutfitApp(true)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Outfits
                </button>
                <button 
                  onClick={() => setShowCloset(true)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Closet
                </button>
                <button 
                  onClick={() => setShowPlanner(true)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Planner
                </button>
                <button 
                  onClick={() => setShowShop(true)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Shop
                </button>
                <button 
                  onClick={() => setShowBrandPortal(true)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  For Brands
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-muted-foreground hover:text-foreground transition-colors">Sign in</button>
              <div className="hidden md:flex items-center gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => setShowAppShowcase(true)}
                  size="sm"
                >
                  Demo
                </Button>
              </div>
              <Button className="gap-2">
                Get early access <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 py-16 lg:py-28 overflow-hidden">
        <BlobBackground color="primary" position="top-right" />
        <BlobBackground color="secondary" position="bottom-left" className="opacity-50" />
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-sm">AI-powered styling, made personal</span>
                </div>
                <LiveCounter />
              </div>
              <h1 className="text-4xl lg:text-6xl tracking-tight leading-none">
                Wear better. <br />Buy smarter.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Your digital twin closet that actually gets you. Weather-aware, calendar-smart, and always on point.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
                Get early access <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setShowAppShowcase(true)}
                className="gap-2"
              >
                See how it works <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <PhoneMockup 
              currentOutfit={currentOutfit} 
              outfits={outfits}
              onOutfitChange={(index) => setCurrentOutfit(index)}
            />
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative py-16 bg-muted/20">
        <WavyDivider className="absolute top-0" opacity={0.5} />
        <div className="container mx-auto px-6">
          <p className="text-center text-muted-foreground mb-10">Real people, real style transformations</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <TestimonialCard
              quote="I actually wear 40% more of my closet now. Game changer for decision fatigue."
              author="Maya Chen"
              role="Creative Director"
              initials="MC"
            />
            <TestimonialCard
              quote="Finally, an app that gets that I hate the tedious job of outfit planning but love looking good."
              author="Jordan Park"
              role="Product Designer"
              initials="JP"
            />
            <TestimonialCard
              quote="Saved me from buying 3 things I didn't need this month. My wallet thanks you."
              author="Alex Rivera"
              role="Software Engineer"
              initials="AR"
            />
          </div>
        </div>
        <WavyDivider className="absolute bottom-0" flip opacity={0.5} />
      </section>

      {/* Press Strip */}
      <PressStrip />

      {/* How It Works */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl tracking-tight">Here&apos;s the deal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No complicated setup. No manual data entry. Just three steps to smarter dressing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <FeatureCard
              icon={<Grid3X3 className="w-6 h-6" />}
              title="Auto-import closet"
              description="Connect your email and we'll do they work of making your digital closet. or snap photos; your call."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Context-aware daily outfits"
              description="We check the weather, your calendar, and your style vibe to suggest what you should actually wear."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FeatureCard
              icon={<Package className="w-6 h-6" />}
              title="Smart gap detection"
              description="Before you impulse-buy another sweater, we'll tell you what's actually missing from your wardrobe."
              onClick={() => setShowShop(true)}
            />
          </motion.div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="relative bg-gradient-to-b from-muted/30 to-transparent py-24">
        <div className="container mx-auto px-6">
          <div className="text-left md:text-center space-y-4 mb-16 max-w-3xl md:mx-auto">
            <h2 className="text-3xl lg:text-4xl tracking-tight">Everything you need, nothing you don&apos;t</h2>
            <p className="text-muted-foreground">Each feature is built to solve an actual wardrobe problem. No fluff.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card 
                className="p-6 space-y-4 cursor-pointer hover:shadow-xl transition-all h-full"
                onClick={() => setShowCloset(true)}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                  <Grid3X3 className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-lg">Digital Closet</h3>
                <p className="text-muted-foreground">See everything you own in one place. Finally.</p>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card 
                className="p-6 space-y-4 cursor-pointer hover:shadow-xl transition-all h-full"
                onClick={() => setShowOutfitApp(true)}
              >
                <div className="aspect-square bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-12 h-12 text-secondary" />
                </div>
                <h3 className="text-lg">Outfit of the Day</h3>
                <p className="text-muted-foreground">No more staring at your closet for 20 minutes</p>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card 
                className="p-6 space-y-4 cursor-pointer hover:shadow-xl transition-all h-full"
                onClick={() => setShowTripPacker(true)}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                  <Package className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-lg">Trip Packer</h3>
                <p className="text-muted-foreground">Pack smart, not heavy. Capsule wardrobes on autopilot.</p>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card 
                className="p-6 space-y-4 cursor-pointer hover:shadow-xl transition-all h-full"
                onClick={() => setShowPlanner(true)}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-lg">Weekly Planner</h3>
                <p className="text-muted-foreground">Plan your week. Skip the morning panic.</p>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card 
                className="p-6 space-y-4 cursor-pointer hover:shadow-xl transition-all h-full"
                onClick={() => setShowShop(true)}
              >
                <div className="aspect-square bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl flex items-center justify-center">
                  <Package className="w-12 h-12 text-secondary" />
                </div>
                <h3 className="text-lg">Gap Detection Shop</h3>
                <p className="text-muted-foreground">Buy only what actually makes sense for your closet</p>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card 
                className="p-6 space-y-4 cursor-pointer hover:shadow-xl transition-all h-full"
                onClick={() => setShowAppShowcase(true)}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                  <Grid3X3 className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-lg">Full App Demo</h3>
                <p className="text-muted-foreground">See it all in action. Interactive tour included.</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KPI Stats */}
      <KPIStats />

      {/* Inspiration Grid */}
      <InspirationGrid />

      {/* Chat Preview */}
      <ChatPreview />

      {/* Value Props */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-left md:text-center">
            <h2 className="text-2xl lg:text-3xl tracking-tight mb-4">Why we&apos;re different</h2>
            <p className="text-muted-foreground">We&apos;re not another shopping app trying to sell you stuff.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <FeatureCard
                icon={<Grid3X3 className="w-6 h-6" />}
                title="Closet-first"
                description="Start with what you own, not what brands want to sell you."
                className="h-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="h-full"
            >
              <FeatureCard
                icon={<Brain className="w-6 h-6" />}
                title="Context Engine"
                description="Weather, calendar, and location awareness for perfect timing."
                className="h-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="h-full"
            >
              <FeatureCard
                icon={<BarChart3 className="w-6 h-6" />}
                title="WUS Score"
                description="Track how efficiently you're using your closet. Data that actually matters."
                className="h-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="h-full"
            >
              <FeatureCard
                icon={<Shield className="w-6 h-6" />}
                title="Privacy-first"
                description="Your style data stays yours. No tracking, no selling."
                className="h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WUS Highlight */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-24 overflow-hidden">
        <BlobBackground color="primary" position="top-left" className="opacity-30" />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-left md:text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl tracking-tight">Your closet deserves a report card</h2>
              <p className="text-muted-foreground max-w-2xl md:mx-auto">
                The Wardrobe Utilization Score tells you what&apos;s working (and what&apos;s just taking up space)
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <MetricCard
                  title="Current WUS"
                  value="78%"
                  delta="+12%"
                  deltaType="positive"
                  sparklineData={[45, 52, 61, 68, 74, 78]}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <MetricCard
                  title="Cost per wear"
                  value="$12.40"
                  delta="-$3.20"
                  deltaType="positive"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <MetricCard
                  title="Unused items"
                  value="23"
                  delta="-8"
                  deltaType="positive"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* For Brands */}
      <section className="relative bg-card/50 py-24">
        <WavyDivider className="absolute top-0" opacity={0.3} />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-left md:text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl tracking-tight">Hey brands, let&apos;s talk</h2>
            <p className="text-lg text-muted-foreground max-w-2xl md:mx-auto">
              We help you recommend fewer, better items that actually get worn. Pay for unlocked outfits, not impressions.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-8 text-left h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-xl mb-4">Quality over Quantity</h3>
                  <p className="text-muted-foreground">
                    We suggest pieces that complete actual outfit gaps, not random recs. Your products become part of real wardrobes.
                  </p>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-8 text-left h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-xl mb-4">Performance-based</h3>
                  <p className="text-muted-foreground">
                    Only pay when your suggestions unlock new outfit combos. No vanity metrics, just real value.
                  </p>
                </Card>
              </motion.div>
            </div>
            <Button 
              size="lg" 
              onClick={() => setShowBrandPortal(true)}
              className="gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              Partner with us <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <WavyDivider className="absolute bottom-0" flip opacity={0.3} />
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-left md:text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl tracking-tight">Pricing that makes sense</h2>
          <p className="text-muted-foreground">Try it free. Upgrade if you love it. Cancel anytime.</p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 space-y-6 h-full hover:shadow-lg transition-all">
              <div>
                <h3 className="text-2xl mb-2">Free</h3>
                <p className="text-muted-foreground mb-4">Perfect for getting started</p>
                <div className="text-3xl tracking-tight">$0<span className="text-lg text-muted-foreground">/month</span></div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Auto-import closet</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Daily outfit suggestions</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Basic WUS tracking</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full mt-9">Get started</Button>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-8 space-y-6 border-primary h-full hover:shadow-xl transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl">Pro</h3>
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">Popular</span>
                </div>
                <p className="text-muted-foreground mb-4">For style enthusiasts</p>
                <div className="text-3xl tracking-tight">$9<span className="text-lg text-muted-foreground">/month</span></div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Trip Packer</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Weekly Planner</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <Button className="w-full shadow-md">Upgrade to Pro</Button>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Privacy & Trust */}
      <section className="bg-card/50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-left md:text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl tracking-tight">Your data is yours. Period.</h2>
            <p className="text-muted-foreground max-w-2xl md:mx-auto">
              We&apos;re not here to sell your style data or track your shopping habits.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto md:mx-auto">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg">On-device processing</h3>
                <p className="text-muted-foreground">Your style data never leaves your device. Ever.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto md:mx-auto">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg">Zero tracking</h3>
                <p className="text-muted-foreground">No creepy browser tracking. No data selling. Just style.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto md:mx-auto">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg">You own it</h3>
                <p className="text-muted-foreground">Export or delete everything with one click. No questions asked.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Tiles */}
      <BlogTiles />

      {/* FAQ */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-left md:text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl tracking-tight">Questions? We got you.</h2>
            <p className="text-muted-foreground">Everything else you might be wondering</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-xl px-6 hover:border-primary/50 transition-colors">
              <AccordionTrigger>How does the auto-import feature work?</AccordionTrigger>
              <AccordionContent>
                We scan your email for fashion receipts and automatically add items to your digital closet. We only read receipt data and never access personal emails. You can also manually add items or snap photos.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-border rounded-xl px-6 hover:border-primary/50 transition-colors">
              <AccordionTrigger>What is the Wardrobe Utilization Score?</AccordionTrigger>
              <AccordionContent>
                WUS measures how efficiently you&apos;re using your closet by tracking wear frequency, outfit variety, and cost-per-wear. A higher score = you&apos;re actually wearing your clothes instead of letting them collect dust. The goal is to help you buy less and wear more.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-border rounded-xl px-6 hover:border-primary/50 transition-colors">
              <AccordionTrigger>Is my data really private?</AccordionTrigger>
              <AccordionContent>
                Yes. All style analysis happens on your device. We never see your outfit photos or personal style data. Only anonymous usage analytics are shared to improve the app. No tracking, no selling, no BS.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-border rounded-xl px-6 hover:border-primary/50 transition-colors">
              <AccordionTrigger>Can I use this without connecting my email?</AccordionTrigger>
              <AccordionContent>
                Absolutely. You can manually add items to your closet or take photos with your phone. The auto-import feature is optional and can be disabled at any time. Your closet, your rules.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary-foreground rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 text-left md:text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <h2 className="text-3xl lg:text-5xl tracking-tight">Ready to wear what you already own?</h2>
            <p className="text-lg opacity-90">
              Join the waitlist. Get early access. Transform your morning routine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="your@email.com"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-primary-foreground/20 transition-colors"
              />
              <Button variant="secondary" className="gap-2 shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap">
                Get early access <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-sm opacity-75">
              No spam. Just updates on launch. You can unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg tracking-tight">Aiphrodite</h3>
              <p className="text-muted-foreground">
                Your digital twin closet for smarter dressing and shopping.
              </p>
              <div className="flex gap-4">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h4>Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button 
                    onClick={() => setShowAppShowcase(true)}
                    className="hover:text-foreground transition-colors text-left"
                  >
                    Demo
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowBrandPortal(true)}
                    className="hover:text-foreground transition-colors text-left"
                  >
                    For Brands
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowDesignSystem(true)}
                    className="hover:text-foreground transition-colors text-left"
                  >
                    Design System
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4>Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4>Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Aiphrodite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
