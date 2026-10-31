/** Swap `src` values when Shanthi's own photographs arrive. */

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  place: string;
};

export type Wish = {
  kicker: string;
  line: string;
};

export type Post = {
  slug: string;
  number: string;
  title: string;
  dek: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
};

export const photos: Photo[] = [
  {
    src: "/photos/grove.jpg",
    alt: "An olive grove in late afternoon, with a pale path between old trees",
    caption: "The grove, late",
    place: "m-grove",
  },
  {
    src: "/photos/vase.jpg",
    alt: "Olive branches and small white blossoms in a ceramic vase",
    caption: "A branch indoors",
    place: "m-vase",
  },
  {
    src: "/photos/cake.jpg",
    alt: "A small olive-oil cake with sage and honey on a ceramic plate",
    caption: "Something sweet",
    place: "m-cake",
  },
  {
    src: "/photos/leaves.jpg",
    alt: "Close view of olive leaves, silver on one side and deep green on the other",
    caption: "Silver and green",
    place: "m-leaves",
  },
  {
    src: "/photos/table.jpg",
    alt: "A long outdoor table set with linen and ceramics under olive trees",
    caption: "A table with room",
    place: "m-table",
  },
  {
    src: "/photos/window.jpg",
    alt: "Morning light on a wooden table with an olive sprig, a closed notebook, and tea",
    caption: "Morning, before the list",
    place: "m-window",
  },
];

export const wishes: Wish[] = [
  {
    kicker: "Rest",
    line: "May you put the day down without asking if you earned it.",
  },
  {
    kicker: "Health",
    line: "May your body feel like a place you live, not a task.",
  },
  {
    kicker: "People",
    line: "May the ones who love you be easy to reach.",
  },
  {
    kicker: "Work",
    line: "May something you make this year feel unmistakably yours.",
  },
  {
    kicker: "Courage",
    line: "May the brave thing be small enough to start on an ordinary Tuesday.",
  },
  {
    kicker: "Joy",
    line: "May laughter show up without a reason and stay through dessert.",
  },
  {
    kicker: "Luck",
    line: "May good news arrive in a voice you like.",
  },
  {
    kicker: "Peace",
    line: "May you keep a colour, and a quiet, that know you.",
  },
];

export const posts: Post[] = [
  {
    slug: "the-colour",
    number: "01",
    title: "The colour she keeps",
    dek: "Olive is not a trend. It is a temperature.",
    image: "/photos/still-life.jpg",
    imageAlt: "An olive branch on cream linen beside a bowl of green olives",
    paragraphs: [
      "Shanthi, you like olive. Not the loud green. The one with grey and gold in it — the one that looks right next to skin, paper, and old wood.",
      "A colour is a small decision you keep making until it becomes a climate. Olive does that. It calms a room without emptying it. It lets other things, a face or a cake or a sentence, be the bright part.",
      "This place is built in that climate on purpose. The photographs are groves and linen and a table, because those are rooms the colour already knows. When you have pictures of your own, they belong here in their place. The green will still make sense around them.",
      "Until then, take the borrowed light. It was chosen the way you choose a dress you already know you will wear.",
    ],
  },
  {
    slug: "a-long-table",
    number: "02",
    title: "A long table",
    dek: "Celebration as hospitality, not a performance.",
    image: "/photos/table.jpg",
    imageAlt: "A long table under olive trees, set and waiting",
    paragraphs: [
      "A birthday can be a stage. This one would rather be a table: long enough, set, not precious, with room for whoever actually makes the day better.",
      "You do not have to be dazzling to be celebrated. You can be hungry, and a little late, and still the reason the chairs were pulled out.",
      "If the year gives you gatherings, may they be this kind. Plates that do not match on purpose. Conversations that do not need a topic. Someone who notices when your glass is empty.",
      "And if a day comes with no table at all, may you still feel expected somewhere.",
    ],
  },
  {
    slug: "notes-for-the-year",
    number: "03",
    title: "Notes for the year",
    dek: "Not resolutions. Just a few lines by the window.",
    image: "/photos/window.jpg",
    imageAlt: "A quiet morning table with tea, a closed notebook, and an olive sprig",
    paragraphs: [
      "Nothing here is a resolution. Resolutions are loud in January and thin by March. These are notes, the kind you might find in a closed notebook left by a window.",
      "Keep one hour that is not for being useful. Keep the people who are kind when there is nothing to gain. Keep making the thing that has your handwriting on it, even if it is small.",
      "Rest before you are forced to. Say the warm sentence while the person is still in the room. Let olive — or whatever steadies you — live in the ordinary week, not only on the days that are supposed to be special.",
      "Happy birthday, Shanthi. May the year be spacious.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
