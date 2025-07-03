let games = [
    { id: "1", title: "Elden Ring", platform: ["PS5", "Xbox", "PC"] },
    { id: "2", title: "Zelda: Breath of the Wild", platform: ["Switch"] },
    { id: "3", title: "God of War Ragnarok", platform: ["PS5"] },
    { id: "4", title: "Minecraft", platform: ["PC", "Mobile", "Console"] },
    { id: "5", title: "Hades", platform: ["PC", "Switch"] }
  ];
  
  let authors = [
    { id: "1", name: "Aklile Ansa", verfied: true },
    { id: "2", name: "Liya Kebede", verfied: false },
    { id: "3", name: "Nahom Daniel", verfied: true }
  ];
  
  let reviews = [
    {
      id: "1",
      rating: 9,
      content: "Amazing world and deep lore.",
      authorId: "1",
      gameId: "1"
    },
    {
      id: "2",
      rating: 5,
      content: "A masterpiece in open-world gaming.",
      authorId: "2",
      gameId: "2"
    },
    {
      id: "3",
      rating: 8,
      content: "Incredible combat and visuals.",
      authorId: "1",
      gameId: "3"
    },
    {
      id: "4",
      rating: 7,
      content: "Fun but repetitive.",
      authorId: "3",
      gameId: "5"
    },
    {
      id: "5",
      rating: 9,
      content: "Still the best sandbox game.",
      authorId: "2",
      gameId: "4"
    },
    {
      id: "6",
      rating: 6,
      content: "Decent but not my type.",
      authorId: "3",
      gameId: "2"
    },
    {
      id: "7",
      rating: 8,
      content: "Unique style and fun combat.",
      authorId: "1",
      gameId: "5"
    }
  ];
export default {games,authors,reviews}