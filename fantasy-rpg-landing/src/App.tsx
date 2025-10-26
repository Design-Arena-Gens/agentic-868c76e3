import { useState } from 'react'
import { Sword, Shield, Sparkles, Users, Trophy, Zap, Play, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import './App.css'

function App() {
  const [email, setEmail] = useState('')

  const features = [
    {
      icon: <Sword className="w-12 h-12 text-amber-400" />,
      title: "Dynamic Combat",
      description: "Master an ever-evolving combat system with hundreds of unique abilities and weapon combinations"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-purple-400" />,
      title: "Procedural Magic",
      description: "Discover and combine magical elements to create devastating spells unique to each run"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      title: "Legendary Gear",
      description: "Collect and upgrade mythical equipment with randomized stats and powerful enchantments"
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      title: "Roguelite Progression",
      description: "Permanent upgrades and unlocks that persist between runs, making each attempt stronger"
    },
    {
      icon: <Users className="w-12 h-12 text-green-400" />,
      title: "Hero Classes",
      description: "Choose from diverse character classes, each with unique playstyles and skill trees"
    },
    {
      icon: <Trophy className="w-12 h-12 text-red-400" />,
      title: "Epic Boss Battles",
      description: "Face challenging bosses that adapt to your strategy and require tactical mastery"
    }
  ]

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
    alert('Thanks for signing up! We\'ll notify you when the game launches.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sword className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-bold text-white">Realm of Shadows</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#gameplay" className="text-gray-300 hover:text-white transition">Gameplay</a>
              <a href="#classes" className="text-gray-300 hover:text-white transition">Classes</a>
              <a href="#signup" className="text-gray-300 hover:text-white transition">Sign Up</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/50 to-slate-900"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Realm of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-purple-400">Shadows</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Embark on an endless adventure through procedurally generated dungeons. Every death makes you stronger. Every run tells a new story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-6 text-lg">
              <Play className="w-5 h-5 mr-2" />
              Play Demo
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-900/30 px-8 py-6 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Wishlist on Steam
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Forge Your Legend
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Experience the perfect blend of roguelite progression and RPG depth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gameplay" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Every Run is Unique
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Explore procedurally generated dungeons filled with deadly traps, powerful enemies, and legendary treasures. No two runs are ever the same.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Sparkles className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Discover over 300 unique items and abilities</span>
                </li>
                <li className="flex items-start">
                  <Sword className="w-6 h-6 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Master fast-paced, skill-based combat mechanics</span>
                </li>
                <li className="flex items-start">
                  <Trophy className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Unlock permanent upgrades and new character classes</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800" 
                alt="Fantasy dungeon with mystical lighting and ancient architecture"
                className="rounded-lg shadow-2xl border-2 border-purple-500/30"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/800x600/1e293b/a78bfa?text=Fantasy+Dungeon'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="classes" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Choose Your Hero
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Each class offers a unique playstyle and progression path
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-b from-red-900/30 to-slate-800/50 border-red-500/30 hover:border-red-500/60 transition-all">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=400" 
                  alt="Warrior with sword and armor in battle stance"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/400x300/7f1d1d/ffffff?text=Warrior'
                  }}
                />
                <CardTitle className="text-white text-2xl">Warrior</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Master of melee combat with high defense and devastating physical attacks. Charge into battle and crush your enemies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-purple-900/30 to-slate-800/50 border-purple-500/30 hover:border-purple-500/60 transition-all">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400" 
                  alt="Mage casting magical spells with glowing energy"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/400x300/581c87/ffffff?text=Mage'
                  }}
                />
                <CardTitle className="text-white text-2xl">Mage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Harness the power of arcane magic to unleash devastating spells. Control the battlefield with elemental fury.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-green-900/30 to-slate-800/50 border-green-500/30 hover:border-green-500/60 transition-all">
              <CardHeader>
                <img 
                  src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400" 
                  alt="Rogue with bow in shadowy forest environment"
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/400x300/14532d/ffffff?text=Rogue'
                  }}
                />
                <CardTitle className="text-white text-2xl">Rogue</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Strike from the shadows with precision and speed. Use stealth and agility to outmaneuver your foes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="signup" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-amber-900/30"></div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Adventure
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Sign up for early access and be the first to experience the realm of shadows
          </p>
          
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-lg bg-slate-800 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
            <Button type="submit" size="lg" className="bg-gradient-to-r from-purple-500 to-amber-500 hover:from-purple-600 hover:to-amber-600 text-white px-8 py-4">
              Get Early Access
            </Button>
          </form>
        </div>
      </section>

      <footer className="bg-slate-900 border-t border-purple-500/20 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sword className="w-6 h-6 text-amber-400" />
                <span className="text-xl font-bold text-white">Realm of Shadows</span>
              </div>
              <p className="text-gray-400">
                An epic fantasy roguelite adventure
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Game</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="#gameplay" className="text-gray-400 hover:text-white transition">Gameplay</a></li>
                <li><a href="#classes" className="text-gray-400 hover:text-white transition">Classes</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Reddit</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Press Kit</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Realm of Shadows. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
