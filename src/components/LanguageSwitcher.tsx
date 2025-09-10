import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'en' ? 'hero' : 'outline-warm'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="text-sm px-3 py-1"
      >
        EN
      </Button>
      <Button
        variant={language === 'id' ? 'hero' : 'outline-warm'}
        size="sm"
        onClick={() => setLanguage('id')}
        className="text-sm px-3 py-1"
      >
        ID
      </Button>
    </div>
  );
};

export default LanguageSwitcher;