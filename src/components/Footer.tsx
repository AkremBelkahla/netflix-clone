import { useLanguage } from '@/hooks/useLanguage';

export const Footer = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <footer className="bg-background/95 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition">Terms</a></li>
              <li><a href="#" className="hover:text-foreground transition">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Language</h3>
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'fr')}
              className="bg-muted text-foreground px-3 py-2 rounded text-sm border border-border hover:border-foreground transition"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
          <p>&copy; 2025 StreamFlix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
