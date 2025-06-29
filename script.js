

document.addEventListener("DOMContentLoaded", () => {
  window.app = new DriveNoble(); 
});

class DriveNoble {
  constructor() {
    this.apiUrl = "https://project-phase-1-theta.vercel.app/mercedes";
    this.elements = {};
    this.isLoading = false;
    this.currentView = "home";

    this.defaultData = []; 
    this.init();
  }

  async init() {
    this.cacheElements();
    this.bindEvents();
    await this.showLoadingScreen();
    this.animateHeader();
    await this.loadBestSellers();
  }

  cacheElements() {
    this.elements = {
      loadingScreen: document.getElementById("loadingScreen"),
      header: document.querySelector(".header"),
      navbar: document.querySelector(".navbar"),
      navBrand: document.querySelector(".nav-brand"),
      hamburger: document.querySelector(".hamburger"),
      mobileNav: document.querySelector(".mobile-nav"),
      mainContent: document.querySelector("main"),
      carsGrid: document.querySelector(".cars"), 
      searchButton: document.querySelector(".searchButton"),
      loginButton: document.querySelector(".logButton"),
      carsContainer: document.querySelector(".cars"),
    };
  }

  bindEvents() {
    this.elements.hamburger?.addEventListener("click", () => this.toggleMobileNav());
    this.elements.searchButton?.addEventListener("click", () => this.showSearchInterface());
    this.elements.loginButton?.addEventListener("click", () => this.showLoginForm());
    document.addEventListener("click", (e) => this.handleOutsideClick(e));
    document.addEventListener("keydown", (e) => this.handleKeyboardNav(e));
  }

  async showLoadingScreen() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.elements.loadingScreen?.classList.add("hidden");
        setTimeout(() => {
          this.elements.loadingScreen?.remove();
          resolve();
        }, 500);
      }, 2000);
    });
  }

  animateHeader() {
    setTimeout(() => {
      this.elements.header?.classList.add("visible");
      this.elements.navBrand?.classList.add("visible");
      this.elements.hamburger?.classList.add("visible");
      this.elements.mainContent?.classList.add("visible");
    }, 100);
  }

  toggleMobileNav() {
    const isActive = this.elements.mobileNav?.classList.contains("active");
    this.elements.hamburger?.classList.toggle("active");
    this.elements.mobileNav?.classList.toggle("active");
    this.elements.hamburger?.setAttribute("aria-expanded", !isActive);
    document.body.style.overflow = isActive ? "auto" : "hidden";
  }

  handleOutsideClick(e) {
    if (
      !this.elements.mobileNav?.contains(e.target) &&
      !this.elements.hamburger?.contains(e.target) &&
      this.elements.mobileNav?.classList.contains("active")
    ) {
      this.toggleMobileNav();
    }
  }

  handleKeyboardNav(e) {
    if (e.key === "Escape" && this.elements.mobileNav?.classList.contains("active")) {
      this.toggleMobileNav();
    }
  }

  async fetchData() {
    try {
      this.isLoading = true;
      const response = await fetch(this.apiUrl);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      this.showErrorMessage("Failed to load vehicle data. Using local cache.");
      return this.defaultData;
    } finally {
      this.isLoading = false;
    }
  }

fadeInImagesOnScroll() {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          observerInstance.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.1 
    }
  );

  fadeElements.forEach((el) => {
    observer.observe(el);
  });
}




  
  async loadBestSellers() {
    const data = await this.fetchData();
    const uniquePopular = [];
    const seen = new Set();

    data.forEach((car) => {
      if (car.id === "popular" && !seen.has(car.name)) {
        uniquePopular.push(car);
        seen.add(car.name);
      }
    });

    if (!uniquePopular.length) {
      this.showErrorMessage("No vehicles available at the moment.");
      return;
    }

    this.renderCars(uniquePopular);
  }

 renderCars(cars) {
  if (!this.elements.carsGrid) return;

  this.elements.carsGrid.innerHTML = "";

  if (!cars.length) {
    this.elements.carsGrid.innerHTML =
      '<p style="text-align: center; color: #666;">No cars available at the moment.</p>';
    return;
  }

  cars.forEach((car, index) => {
    const carCard = this.createCarCard(car);
    carCard.classList.add("fade-in"); 
    this.elements.carsGrid.appendChild(carCard);
  });

  this.fadeInImagesOnScroll(); 

}


  createCarCard(car) {
    const card = document.createElement("div");
    card.className = "car-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `View details for ${car.name}`);
    card.innerHTML = `
      <img 
        src="${car.poster}" 
        alt="${car.name}" 
        class="car-image"
        loading="lazy"
        onerror="this.src='https://www.mercedes-benz.com/content/dam/brandhub/assets/vehicles/because-it-is-mercedes-benz/quality/08-2024/images/mercedes-benz-because-it-is-mercedes-benz-quality-gallery-02-1080x1080-08-2024.jpg/_jcr_content/renditions/image-crop-default.jpeg/1743074835068.jpg?im=Resize=(1680);Crop,rect=(0,0,1680,1680)'"
      >
      <div class="car-info">
        <h3 class="car-name">${car.name}</h3>
        <p class="car-details car-price">${this.formatPrice(car.price)}</p>
        <p class="car-details">${car.horsepower}</p>
        <p class="car-description">${car.description}</p>
      </div>
    `;

    card.addEventListener("click", () => this.showCarDetails(car));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.showCarDetails(car);
      }
    });

    return card;
  }

  showCarDetails(car) {
    alert(
      `${car.name}\n\nPrice: ${this.formatPrice(car.price)}\nPower: ${car.horsepower}\n\n${car.description}`
    );
  }

  showErrorMessage(msg) {
    this.showMessage(msg, "error");
  }

  showMessage(msg, type = "info") {
    const div = document.createElement("div");
    div.className = `message message-${type}`;
    div.textContent = msg;
    div.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      padding: 1rem 2rem;
      background: ${type === "error" ? "#e74c3c" : type === "success" ? "#27ae60" : "#3498db"};
      color: white;
      border-radius: 8px;
      z-index: 10000;
      animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(div);
    setTimeout(() => {
      div.style.animation = "slideOut 0.3s ease";
      setTimeout(() => div.remove(), 300);
    }, 3000);
  }

  formatPrice(price) {
    return price.replace(/Ksh\s*/i, "KSh ").replace(/,/g, ",");
  }
}

// Add animation keyframes
const style = document.createElement("style");
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);