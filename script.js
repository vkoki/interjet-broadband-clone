const tvCheckbox = document.getElementById("content_switcher");
tvCheckbox.addEventListener("change", () => {
    tvOn = tvCheckbox.checked;
    updateUIState();

    if (currentMode === "limited") {
        renderCards(tvOn ? limitedTvOn : limitedTvOff);
    } else {
        renderCards(tvOn ? unlimitedTvOn : unlimitedTvOff);
    }
});

const limitedTvOff = [
  { price: "699", dlText: "Download / Upload A File (1GB) 81sec", dlWidth: "55%",
    features: [
      "Free Wifi-Router*",
      "Free Installation*",
      "Free OTT(Sun Next, aha, DistroTV,Zee5,Fridaay,+5OTT)",
      "Most Suitable for Light broadband users mostly do basic tasks like browsing and checking emails.",
      "Available in 1,3,6 and 12 months"
    ],
    icon: "phone-icon.png"
  },
  { price: "899", dlText: "Download / Upload A File (1GB) 40sec", dlWidth: "70%",
    features: [
      "Free Wifi-Router*",
      "Free Installation*",
      "Free OTT(Sun Next, aha, DistroTV,Zee5,Fridaay,+2OTT)",
      "Most Suitable for Average Broadband users use for streaming, gaming and downloading",
      "Available in 1,3,6 and 12 months"
    ],
    icon: "router-icon.png"
  },
  { price: "1399", dlText: "Download / Upload A File (1GB) 16sec", dlWidth: "90%",
    features: [
      "Free Dual Band Wifi-Router*",
      "Free Installation*",
      "Free OTT(Sony Liv, Zee5, Hotstar, Prime)",
      "Most suitable for Heavy Broadband users for HD gaming, streaming, and Regorus Downloading",
      "Available in 1,3,6 and 12 months"
    ],
    icon: "rocket-icon.png"
  }
];

const unlimitedTvOff = [
  { price: "750", dlText: "Download / Upload A File (1GB) 81sec", dlWidth: "60%",
    features: [
      "Unlimited Data",
      "Guaranteed Upload and Download Speed",
      "Free Wifi-Router*",
      "Free Installation*",
      "Free OTT(Sun Next, aha, DistroTV,Zee5,Fridaay,+5 OTT)",
      "Most Suitable for Light broadband users mostly do basic tasks like browsing and checking emails.",
      "Available in 1,3,6 and 12 months"
    ],
    icon: "phone-icon.png"
  },
  { price: "950", dlText: "Download / Upload A File (1GB) 40sec", dlWidth: "75%",
    features: [
      "Unlimited Data",
      "Guaranteed Upload and Download Speed",
      "Free Wifi-Router*",
      "Free Installation*",
      "Free OTT(Sun Next, aha, DistroTV,Zee5,Fridaay,+5 OTT)",
      "Most Suitable for Average Broadband users do use from streaming, gaming and downloading",
      "Available in 1,3,6 and 12 months"
    ],
    icon: "router-icon.png"
  },
  { price: "1750", dlText: "Download / Upload A File (1GB) 16sec", dlWidth: "90%",
    features: [
      "Unlimited Data",
      "Guaranteed Upload and Download Speed",
      "Free Wifi-Router*",
      "Free Installation*",
      "Free OTT(Sun Next, aha, Sonyliv,DistroTV,Zee5,Fridaay,+6OTT)",
      "Most suitable for Heavy Broadband users are used for HD gaming, streaming, and Regorus Downloading",
      "Available in 1,3,6 and 12 months"
    ],
    icon: "rocket-icon.png"
  }
];

const limitedTvOn = [
  { price: "799", dlText: "Download / Upload A File (1GB) 81sec", dlWidth: "55%",
    features: [
      "Free Wifi-Router*",
      "Free Installation*",
      "Free OTT (Sun Next, aha, DistroTV, Zee5, Fridaay, +2 OTT)",
      "350+ Channels (HD Channels)",
      "Most Suitable for Light broadband users mostly do basic tasks like browsing and checking emails.",
      "Available in 1,3,6 and 12 months"
    ],
    icon: "phone-icon.png"
  },
  { price: "999", dlText: "Download / Upload A File (1GB) 81sec", dlWidth: "70%",
    features: [
      "Free Wifi-Router*",
      "Free Installation*",
      "Free OTT (Sun Next, aha, DistroTV, Zee5, Fridaay, +2 OTT)",
      "350+ Channels (HD Channels)",
      "Most Suitable for Average Broadband users do use from streaming, gaming and downloading",
      "Available in 1,3,6 and 12 months"
    ],
    icon: "router-icon.png"
  },
  { price: "1499", dlText: "Download / Upload A File (1GB) 81sec", dlWidth: "90%",
    features: [
      "Free Wifi-Router*",
      "Free Installation*",
      "Free OTT(Sun Next, aha, DistroTV,Zee5,Fridaay,+5 OTT)​",
      "350+ Channels (HD Channels)",
      "Most suitable for Heavy Broadband users for HD gaming, streaming, and rigorous Downloading",
      "Available in 1,3,6 and 12 months"
    ],
    icon: "rocket-icon.png"
  }
];

const unlimitedTvOn = [
  { price: "850", dlText: "Download / Upload A File (1GB) 81sec", dlWidth: "65%",
    features: [
      "Free Wifi-Router*",
      "Free Installation*",
      "Free OTT (Sun Next, aha, DistroTV, Zee5, Fridaay, +5 OTT)",
      "350+ Channels (HD Channels)",
      "Most Suitable for Light broadband users mostly do basic tasks like browsing and checking emails.​",
      "Available in 1,3,6 and 12 months"
    ],
    icon: "phone-icon.png"
  },
  { price: "1050", dlText: "Download / Upload A File (1GB) 81sec", dlWidth: "80%",
    features: [
      "Free Wifi-Router*",
      "Free Installation*",
      "Free OTT (Sun Next, aha, DistroTV, Zee5, Fridaay, +5 OTT)",
      "350+ Channels (HD Channels)",
      "Most Suitable for Average Broadband users do use from streaming, gaming and downloading",
      "Available in 1,3,6 and 12 months"
    ],
    icon: "router-icon.png"
  },
  { price: "1950", dlText: "Download / Upload A File (1GB) 81sec", dlWidth: "95%",
    features: [
      "Free Wifi-Router*",

      "Free Installation*",

      "Free OTT(Sun Next,aha,Sony Liv, Zee 5,+8OTT)​",

      "350+ Channels (HD Channels)",

      "Most suitable for Heavy Broadband users are used for HD gaming, streaming, and Regorus Downloading",
      "Available in 1,3,6 and 12 months"
    ],
    icon: "rocket-icon.png"
  }
];

const pillLimited = document.getElementById("pill-limited");
const pillUnlimited = document.getElementById("pill-unlimited");
const tvBlock = document.getElementById("tvBlock");

let currentMode = "limited"; 
let tvOn = false; 

function renderCards(dataset) {
  dataset.forEach((plan, idx) => {
    const priceEl = document.getElementById(`price-${idx}`);
    const dlEl = document.getElementById(`dl-${idx}`);
    const dlFillEl = document.getElementById(`dlfill-${idx}`);
    const ul = document.getElementById(`features-${idx}`);
    const img = document.querySelector(`.card[data-index="${idx}"] .card-art img`);

    if (priceEl) priceEl.textContent = plan.price;
    if (dlEl) dlEl.textContent = plan.dlText;
    if (dlFillEl) {
      let w = plan.dlWidth;
      if (!w.endsWith("%") && !w.endsWith("px")) w = w + "%";
      dlFillEl.style.width = w;
    }

    if (ul) {
      ul.innerHTML = "";
      plan.features.forEach(f => {
        const li = document.createElement("li");
        li.textContent = f;
        ul.appendChild(li);
      });
    }

    if (img) img.src = plan.icon || "";
  });
}

function updateUIState() {
  if (currentMode === "limited") {
    pillLimited.classList.add("active");
    pillUnlimited.classList.remove("active");
  } else {
    pillUnlimited.classList.add("active");
    pillLimited.classList.remove("active");
  }

  tvBlock.classList.toggle("on", tvOn);
  tvBlock.setAttribute('aria-checked', tvOn ? 'true' : 'false');
}

renderCards(limitedTvOff);
updateUIState();

pillLimited.addEventListener('click', () => {
  currentMode = 'limited';
  updateUIState();
  renderCards(tvOn ? limitedTvOn : limitedTvOff);
});

pillUnlimited.addEventListener('click', () => {
  currentMode = 'unlimited';
  updateUIState();
  renderCards(tvOn ? unlimitedTvOn : unlimitedTvOff);
});

tvBlock.addEventListener('click', () => {
  tvOn = !tvOn;
  updateUIState();

  if (currentMode === 'limited') {
    renderCards(tvOn ? limitedTvOn : limitedTvOff);
  } else {
    renderCards(tvOn ? unlimitedTvOn : unlimitedTvOff);
  }
});
