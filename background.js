const URL_MAP = {
  "||miniblox.*assets/default-DKNlYibk.png": "https://media.craiyon.com/2025-08-18/xdgXJE5YToSGvc00da_-zQ.webp",
  "||miniblox.*textures/entity/chicken/chicken.png": "https://t.novaskin.me/9cc99d9fab25b23ea8ee29535c527e2a68ce551c15835005d6bcd30cd63948b4",
  "||miniblox.*textures/entity/cow/cow.png": "https://t.novaskin.me/c80210187cfd80cf4b91ea412b85e0dcfd23c2f2482e2a425069d8020ec8b05a",
  "||miniblox.*textures/entity/creeper/creeper.png": "https://t.novaskin.me/13e44f5b86ac2f78744c4b350d7b70c19ef40eced3b0715a94926fc0dcaee9d9",
  "||miniblox.*textures/entity/pig/pig.png": "https://t.novaskin.me/9b46029e0cefccf776713597eb7af640c62b2a36ce77d489f058ac19129f951a", 
  "||miniblox.*textures/entity/sheep/sheep_fur.png": "https://t.novaskin.me/af69850bf5bb3b31969e556d5c62ae2c45478d3b056822ed1204abba39c03fb3",
  "||miniblox.*textures/entity/skeleton/skeleton.png": "https://t.novaskin.me/89571d25f289c8fe9f397445984ed38c6dec4895a67bc311dbfde88660316f05",
  "||miniblox.*textures/entity/slime/slime.png": "https://t.novaskin.me/ca814332fffdb2484d12489c83c8be3b3be60016fc28e051d85a9c77e91446b0",
  "||miniblox.*textures/entity/spider/spider.png": "https://t.novaskin.me/daf0c5d2aaf0d233c5a1978c3550da191b387be44f4f76164beb47e50d3606cc",
  "||miniblox.*textures/entity/zombie/zombie.png": "https://t.novaskin.me/ae9695e5b7838f6c3b36c42704e72d19d3af9be56e725336e4f9913bf6786f5b",
  "||miniblox.*textures/entity/ghost/ghost.png": "https://t.novaskin.me/06caf6c76aae8e5ec2ec5d509245ebdfe04d0f44419d576bcda4069ff896bf6f",
  "||miniblox.*textures/entity/zombie_cowman/zombie_cowman.png": "https://t.novaskin.me/4ca639378a7e7421e76ef05ca0004602c8638d4f9dcc421a348125dbbe31e565",
  "||miniblox.*textures/entity/snowman/snowman.png": "https://t.novaskin.me/3a6b69d0dedee9f13640ba8966b11ef7f852eae02939b937b6d09fa8d5e458e1",
};

let rules = [];
let idx = 1;

for (const [src, dst] of Object.entries(URL_MAP)) {
  rules.push({
    "id": idx++,
    "action": {
      "type": "redirect",
      "redirect": { "url": dst }
    },
    "condition": {
      "urlFilter": src,
      "resourceTypes": src.endsWith(".otf") ? ["font"] : ["image"]
    }
  });
}

chrome.declarativeNetRequest.updateDynamicRules(
  {
    addRules: rules,
    removeRuleIds: rules.map(rule => rule.id)
  },
  () => {
    if (chrome.runtime.lastError) {
      console.error("Error updating:", chrome.runtime.lastError);
    } else {
      console.log("Rules updated");
    }
  }
);
