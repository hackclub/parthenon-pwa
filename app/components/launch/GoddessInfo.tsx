export default class Goddess {
    name: string;
    desc: string;
    src: string;
    color: string;
   
    // Normal signature with defaults
    constructor(name = "", desc="", src="", color="") {
      this.name = name;
      this.desc = desc;
      this.src = src;
      this.color = color;
    }
  }

const Maat = new Goddess("Ma'at", "Egyptian goddess of truth, justice, and cosmic balance, symbolized by the feather of order.", "/gods/maat.jpg", "#6E7B58") // Olive-green wisdom
const Kannon = new Goddess("Kannon", "Japanese bodhisattva of compassion, offering mercy and serenity to all beings.", "/gods/kannon.jpg", "#567A86") // Muted teal
const Parvati = new Goddess("Parvati", "Hindu goddess of love and devotion, embodying nurturing strength.", "/gods/pavarti.webp", "#7E5F4E") // Warm earthy brown
const Minerva = new Goddess("Minerva", "Roman goddess of wisdom and strategy, protector of heroes and scholars.", "/gods/minerva.webp", "#7A8350") // Sage green
const Danu = new Goddess("Danu", "Celtic mother goddess of rivers and fertility, source of life and flow.", "/img.png", "#B1975E") // Antique gold
const Seshat = new Goddess("Seshat", "Egyptian goddess of writing and knowledge, keeper of divine records.", "/img.png", "#A86F48") // Burnt copper
const Bellona = new Goddess("Bellona", "Roman goddess of war, embodying valor and fierce determination.", "/gods/bellona.jpg", "#8E4042") // Deep crimson
const Amaterasu = new Goddess("Amaterasu", "Japanese sun goddess who brings light and renewal to the world.", "/img.png", "#B76E3E") // Bronze sunrise orange
const Saraswati = new Goddess("Saraswati", "Hindu goddess of wisdom, speech, and the arts, serene and enlightened.", "/img.png", "#625C8C") // Dusky violet
const Artemis = new Goddess("Artemis", "Greek goddess of the moon and the hunt, guardian of the wild.", "/img.png", "#4F6272") // Moonlit slate-blue
const Guanyin = new Goddess("Guanyin", "Chinese goddess of mercy and compassion, radiant with calm and grace.", "/img.png", "#718C7B") // Soft jade

export const GoddessList = [
  Maat,
  Kannon,
  Parvati,
  Minerva,
  Danu,
  Seshat,
  Bellona,
  Amaterasu,
  Saraswati,
  Artemis,
  Guanyin
]
