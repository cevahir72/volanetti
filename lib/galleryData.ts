export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
}

const GALLERY_MAPPING: Record<string, { title: string; category: string; description: string }> = {
  "Arabic Shelving Art with Books.webp": {
    title: "Arabic Shelving Art",
    category: "Shelves",
    description: "Intricately detailed geometric shelving unit inspired by traditional Arabic architectural motifs, showcasing fine wooden joinery."
  },
  "Colors of the treees.webp": {
    title: "Colors of the Trees",
    category: "Shelves",
    description: "A decorative wall art panel composed of contrasting strips of walnut, cherry, oak, and maple."
  },
  "Cupboard with mirror.webp": {
    title: "Cupboard with Mirror",
    category: "Bedroom",
    description: "A classic tall cupboard made of solid cherry wood with an integrated full-length mirror panel."
  },
  "Dark wood rectangle dining set.webp": {
    title: "Dark Walnut Dining Set",
    category: "Dining Tables",
    description: "A premium solid dark walnut wood rectangular dining table with matching custom chairs."
  },
  "Round dining set -green.webp": {
    title: "Emerald Round Dining Set",
    category: "Dining Tables",
    description: "A sleek circular dining table styled with luxurious emerald-green upholstered seating."
  },
  "Round dining set -purple.webp": {
    title: "Plum Round Dining Set",
    category: "Dining Tables",
    description: "A contemporary round hardwood dining table paired with deep plum velvet chairs."
  },
  "arabic letter shelves.webp": {
    title: "Arabic Calligraphy Shelves",
    category: "Shelves",
    description: "Bespoke floating shelves sculpted in the shapes of classical Arabic letters."
  },
  "bed-blue.webp": {
    title: "Midnight Blue Platform Bed",
    category: "Bedroom",
    description: "Solid oak low-profile bedframe with a plush velvet midnight-blue headboard."
  },
  "bench-1.webp": {
    title: "Artisan Bench",
    category: "Living Room",
    description: "A hand-finished solid timber bench, showcasing natural grain patterns and sturdy mortise-and-tenon joints."
  },
  "blue shelves.webp": {
    title: "Cobalt Floating Shelves",
    category: "Shelves",
    description: "Sleek wooden floating shelves finished in a rich cobalt lacquer for modern display."
  },
  "coffe table- yellow -living room.webp": {
    title: "Amber Accents Coffee Table",
    category: "Living Room",
    description: "A vibrant amber-toned circular wooden coffee table with a contemporary black metal base."
  },
  "coffee table -living room.webp": {
    title: "Architectural Coffee Table",
    category: "Living Room",
    description: "A solid oak block coffee table presenting strong lines and clean, low-profile aesthetics."
  },
  "coffee table -lumber.webp": {
    title: "Raw Timber Coffee Table",
    category: "Living Room",
    description: "A rustic live-edge log cross-section repurposed as a heavy, textured coffee table."
  },
  "coffee table green -living room.webp": {
    title: "Jade Block Coffee Table",
    category: "Living Room",
    description: "A low-slung, green stained hardwood coffee table highlighting beautiful natural textures."
  },
  "dining set- green.webp": {
    title: "Forest Green Dining Suite",
    category: "Dining Tables",
    description: "A custom hardwood dining table complete with matching chairs upholstered in forest green linen."
  },
  "drawer-blue - bedroom.webp": {
    title: "Midnight Dresser",
    category: "Bedroom",
    description: "A multi-drawer bedroom chest painted in dark blue, offset by warm brass drawer pulls."
  },
  "foldable table -living room.jpeg": {
    title: "Convertible Console Table",
    category: "Living Room",
    description: "A space-saving foldable wood console table that expands into a full writing desk or dining surface."
  },
  "light wood rectangle dining set.webp": {
    title: "Oak Dining Suite",
    category: "Dining Tables",
    description: "A classic rectangular dining table crafted from light white oak, evoking bright Scandi interiors."
  },
  "mirror -1.webp": {
    title: "Artisan Vanity Mirror",
    category: "Bedroom",
    description: "A solid walnut framed tabletop dressing mirror with a built-in accessory tray."
  },
  "mirror-2.webp": {
    title: "Segmented Wall Mirror",
    category: "Bedroom",
    description: "A large focal-point wall mirror bordered by decorative interlocking wooden tiles."
  },
  "mirror-3.webp": {
    title: "Arched Floor Mirror",
    category: "Bedroom",
    description: "A full-length floor mirror housed in a gracefully arched solid oak framing."
  },
  "mirror-4.webp": {
    title: "Circular Accented Mirror",
    category: "Bedroom",
    description: "A round wall mirror with an off-center wooden crescent shelf details."
  },
  "napkin holder.jpeg": {
    title: "Artisan Napkin Holder",
    category: "Living Room",
    description: "A handcrafted wooden table accessory made of walnut and maple, highlighting small-scale joinery precision."
  },
  "office table-1.webp": {
    title: "Writing Desk",
    category: "Office",
    description: "A compact office writing desk with elegant tapered legs and integrated storage drawer."
  },
  "office_table.webp": {
    title: "Executive Office Desk",
    category: "Office",
    description: "A double-pedestal walnut executive desk combining curved writing surface with integrated drawer systems."
  },
  "round dining table.webp": {
    title: "Circular Pedestal Table",
    category: "Dining Tables",
    description: "A round oak dining table supported by a hand-carved central pedestal column."
  },
  "shelves-1.webp": {
    title: "Minimalist Bookshelf",
    category: "Shelves",
    description: "A clean-lined freestanding bookshelf made from light-grained ash wood."
  },
  "shelves-2.webp": {
    title: "Modular Shelving System",
    category: "Shelves",
    description: "Wall-mounted modular shelving units that can be configured for books, plants, and art."
  },
  "tool cabinet - shelves.webp": {
    title: "Artisan Tool Cabinet",
    category: "Shelves",
    description: "A heritage tool storage cabinet displaying multiple slots and pull-out drawers in rich cherry wood."
  },
  "wardrobe-1.webp": {
    title: "Bespoke Wardrobe",
    category: "Bedroom",
    description: "A built-in floor-to-ceiling wardrobe featuring soft-closing oak-lined doors."
  }
};

// Generates fallback title from filename
function parseFilenameToTitle(filename: string): string {
  const nameWithoutExt = filename.substring(0, filename.lastIndexOf(".")) || filename;
  
  return nameWithoutExt
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Fallback categorization logic
function getFallbackCategory(filename: string): string {
  const lower = filename.toLowerCase();
  
  if (lower.includes("mirror") || lower.includes("bed") || lower.includes("drawer") || lower.includes("cupboard") || lower.includes("wardrobe")) {
    return "Bedroom";
  }
  if (lower.includes("coffee table") || lower.includes("coffe table") || lower.includes("bench") || lower.includes("napkin holder") || lower.includes("foldable table")) {
    return "Living Room";
  }
  if (lower.includes("shelves") || lower.includes("shelving") || lower.includes("treees")) {
    return "Shelves";
  }
  if (lower.includes("office")) {
    return "Office";
  }
  if (lower.includes("dining")) {
    return "Dining Tables";
  }
  
  return "Living Room"; // Default fallback category
}

export function getGalleryItems(filenames: string[]): GalleryItem[] {
  return filenames.map((filename, index) => {
    const mapped = GALLERY_MAPPING[filename];
    const id = index.toString();
    const src = `/gallery/${filename}`;
    
    if (mapped) {
      return {
        id,
        src,
        title: mapped.title,
        category: mapped.category,
        description: mapped.description
      };
    }
    
    // Dynamic fallback
    const title = parseFilenameToTitle(filename);
    const category = getFallbackCategory(filename);
    
    return {
      id,
      src,
      title,
      category,
      description: `A testament to Volanetti's premium custom ${category.toLowerCase()} design and architectural joinery.`
    };
  });
}
