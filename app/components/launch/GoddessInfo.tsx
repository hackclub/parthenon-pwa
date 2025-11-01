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

const Goddess1 = new Goddess("Ma'at", "Egyptian goddess of truth, justice, and cosmic balance, symbolized by the feather of order.", "/img.png", "#6E7B58") // Olive-green wisdom
const Goddess2 = new Goddess("Kannon", "Japanese bodhisattva of compassion, offering mercy and serenity to all beings.", "/img.png", "#567A86") // Muted teal
const Goddess3 = new Goddess("Parvati", "Hindu goddess of love and devotion, embodying nurturing strength.", "/img.png", "#7E5F4E") // Warm earthy brown
const Goddess4 = new Goddess("Minerva", "Roman goddess of wisdom and strategy, protector of heroes and scholars.", "/img.png", "#7A8350") // Sage green
const Goddess5 = new Goddess("Danu", "Celtic mother goddess of rivers and fertility, source of life and flow.", "/img.png", "#B1975E") // Antique gold
const Goddess6 = new Goddess("Seshat", "Egyptian goddess of writing and knowledge, keeper of divine records.", "/img.png", "#A86F48") // Burnt copper
const Goddess7 = new Goddess("Bellona", "Roman goddess of war, embodying valor and fierce determination.", "/img.png", "#8E4042") // Deep crimson
const Goddess8 = new Goddess("Amaterasu", "Japanese sun goddess who brings light and renewal to the world.", "/img.png", "#B76E3E") // Bronze sunrise orange
const Goddess9 = new Goddess("Saraswati", "Hindu goddess of wisdom, speech, and the arts, serene and enlightened.", "/img.png", "#625C8C") // Dusky violet
const Goddess10 = new Goddess("Artemis", "Greek goddess of the moon and the hunt, guardian of the wild.", "/img.png", "#4F6272") // Moonlit slate-blue
const Goddess11 = new Goddess("Guanyin", "Chinese goddess of mercy and compassion, radiant with calm and grace.", "/img.png", "#718C7B") // Soft jade

export const GoddessList = [
  Goddess1,
  Goddess2,
  Goddess3,
  Goddess4,
  Goddess5,
  Goddess6,
  Goddess7,
  Goddess8,
  Goddess9,
  Goddess10,
  Goddess11
]
