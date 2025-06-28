// Vehicles page functionality
class VehiclesPage {
  constructor() {
    this.vehicles = [
      {
        id: "1",
        name: "C-300",
        price: "Ksh 9,500,500",
        horsepower: "255 HP",
        category: "sedan",
        description: "The C 300 is a versatile sedan that combines performance, comfort, and cutting-edge technology.",
        poster:
          "https://hips.hearstapps.com/hmg-prod/images/2022-mercedes-benz-c300-4matic-sedan-112-1655383531.jpg?crop=0.717xw:0.802xh;0.151xw,0.198xh&resize=768:*",
        features: ["Luxury Interior", "Advanced Safety", "Turbocharged Engine"],
        specs: {
          engine: "2.0L Turbo",
          transmission: "9-Speed Automatic",
          drivetrain: "RWD",
          fuelEconomy: "12.5L/100km",
        },
      },
      {
        id: "2",
        name: "E 53 AMG",
        price: "Ksh 14,500,000",
        horsepower: "429 HP",
        category: "amg",
        description: "The E 53 AMG combines luxury with performance, featuring a powerful engine and sporty design.",
        poster:
          "https://www.mercedes-amg.com/content/amg-pl/en/home/vehicles/e-class/sedan/jcr:content/root/responsivegrid/threeimagegallery/image1.media3.responsive_8col_4_3.1709905099517.jpeg",
        features: ["AMG Performance", "Sport Suspension", "Premium Sound"],
        specs: {
          engine: "3.0L Turbo V6",
          transmission: "9-Speed AMG",
          drivetrain: "4MATIC AWD",
          fuelEconomy: "10.8L/100km",
        },
      },
      {
        id: "3",
        name: "S 580",
        price: "Ksh 22,000,000",
        horsepower: "496 HP",
        category: "sedan",
        description: "The S 580 offers top-tier luxury and performance with state-of-the-art technology.",
        poster:
          "https://www.mercedes-benz.com/content/dam/brandhub/assets/vehicles/mercedes-benz/gls/mercedes-benz-gls-01-stage.cbv20240219195658.jpg/_jcr_content/renditions/mq7-original-aspect.jpeg",
        features: ["Flagship Luxury", "Massage Seats", "AI Assistant"],
        specs: {
          engine: "4.0L Twin-Turbo V8",
          transmission: "9-Speed Automatic",
          drivetrain: "4MATIC AWD",
          fuelEconomy: "11.2L/100km",
        },
      },
      {
        id: "4",
        name: "GLE 350",
        price: "Ksh 13,500,000",
        horsepower: "255 HP",
        category: "suv",
        description: "The GLE 350 is a luxury SUV that combines robust capabilities with refined comfort.",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsL0_CZwQnYR9rYYqY-qiBYlqlf3KciWsLA&s",
        features: ["All-Wheel Drive", "Spacious Interior", "Off-Road Package"],
        specs: {
          engine: "2.0L Turbo",
          transmission: "9-Speed Automatic",
          drivetrain: "4MATIC AWD",
          fuelEconomy: "9.8L/100km",
        },
      },
      {
        id: "5",
        name: "Brabus Ultimate",
        price: "Ksh 90,500,000",
        horsepower: "800 HP",
        category: "brabus",
        description: "Ultimate performance and luxury with exclusive Brabus modifications.",
        poster:
          "https://www.brabus.com/_Resources/Persistent/6/4/6/e/646e5ec426ac8cac35250a67c5fcedff14102723/BRABUS_Rocket_1000_M-AMG%20GT%2063_Mars%20%2814%20von%2023%29-1170x780.jpg",
        features: ["Brabus Tuning", "Carbon Fiber", "Exclusive Interior"],
        specs: {
          engine: "4.0L Twin-Turbo V8",
          transmission: "AMG Speedshift",
          drivetrain: "4MATIC+ AWD",
          fuelEconomy: "15.2L/100km",
        },
      },
      {
        id: "6",
        name: "EQS 450",
        price: "Ksh 18,000,000",
        horsepower: "329 HP",
        category: "hybrid",
        description: "The future of luxury with all-electric performance and zero emissions.",
        poster:
          "https://www.mercedes-benz.com/content/dam/brandhub/assets/vehicles/mercedes-benz/electric-models/00-mercedes-benz-eq-eqa-2021-h243-2560x1440.cbv20231123151944.jpg/_jcr_content/renditions/mq7-original-aspect.jpeg",
        features: ["Electric Power", "500km Range", "Sustainable Luxury"],
        specs: {
          engine: "Electric Motor",
          transmission: "Single-Speed",
          drivetrain: "RWD",
          fuelEconomy: "0L/100km (Electric)",
        },
      },
      {
        id: "7",
        name: "A 220",
        price: "Ksh 6,000,000",
        horsepower: "188 HP",
        category: "sedan",
        description: "The A 220 is a compact luxury sedan that offers premium features in a stylish package.",
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANruB6BoNUwzRJSMD6YXNlEWEos2gVRbqeA&s",
        features: ["Compact Luxury", "MBUX System", "LED Lighting"],
        specs: {
          engine: "2.0L Turbo",
          transmission: "7-Speed DCT",
          drivetrain: "FWD",
          fuelEconomy: "7.8L/100km",
        },
      },
      {
        id: "8",
        name: "G 550",
        price: "Ksh 24,000,000",
        horsepower: "416 HP",
        category: "suv",
        description: "The G 550 is a luxury SUV renowned for its rugged design and unparalleled off-road capabilities.",
        poster:
          "https://www.mercedes-benz.com/content/dam/brandhub/assets/vehicles/g-class/g-class-special-models-extraordinary/star-pattern/11-2022/images/mercedes-benz-g-class-special-models-star-pattern-6x6-image-2560x1440-11-2022.cbv20230517110856.jpg/_jcr_content/renditions/mq7-original-aspect.jpeg",
        features: ["Iconic Design", "Off-Road Master", "Luxury Interior"],
        specs: {
          engine: "4.0L Twin-Turbo V8",
          transmission: "9-Speed Automatic",
          drivetrain: "4MATIC AWD",
          fuelEconomy: "13.8L/100km",
        },
      },
    ]

    this.currentCategory = "all"
    this.init()
  }

  init() {
    this.displayVehicles()
  }

  filterCategory(category) {
    this.currentCategory = category

    // Update active button
    document.querySelectorAll(".category-btn").forEach((btn) => btn.classList.remove("active"))
    event.target.classList.add("active")

    this.displayVehicles()
  }

  displayVehicles() {
    const filteredVehicles =
      this.currentCategory === "all"
        ? this.vehicles
        : this.vehicles.filter((vehicle) => vehicle.category === this.currentCategory)

    const grid = document.getElementById("vehiclesGrid")

    grid.innerHTML = filteredVehicles
      .map(
        (vehicle) => `
            <div class="vehicle-card" onclick="showVehicleModal('${vehicle.id}')">
                <div class="vehicle-image">
                    <img src="${vehicle.poster}" alt="${vehicle.name}" loading="lazy">
                    <div class="vehicle-badge">${vehicle.category.toUpperCase()}</div>
                    <div class="vehicle-overlay">
                        <button class="overlay-btn">
                            <i class="fas fa-eye"></i>
                            View Details
                        </button>
                    </div>
                </div>
                <div class="vehicle-info">
                    <h3>${vehicle.name}</h3>
                    <p class="vehicle-price">${vehicle.price}</p>
                    <div class="vehicle-specs">
                        <span><i class="fas fa-tachometer-alt"></i> ${vehicle.horsepower}</span>
                        <span><i class="fas fa-cog"></i> ${vehicle.specs.transmission}</span>
                        <span><i class="fas fa-road"></i> ${vehicle.specs.drivetrain}</span>
                    </div>
                    <p class="vehicle-description">${vehicle.description}</p>
                    <div class="vehicle-actions">
                        <button class="action-btn primary" onclick="event.stopPropagation(); scheduleTestDrive('${vehicle.name}')">
                            <i class="fas fa-calendar-alt"></i> Test Drive
                        </button>
                        <button class="action-btn secondary" onclick="event.stopPropagation(); requestQuote('${vehicle.name}')">
                            <i class="fas fa-calculator"></i> Get Quote
                        </button>
                    </div>
                </div>
            </div>
        `,
      )
      .join("")
  }

  getVehicleById(id) {
    return this.vehicles.find((vehicle) => vehicle.id === id)
  }
}

function filterCategory(category) {
  vehiclesPage.filterCategory(category)
}

function showVehicleModal(id) {
  const vehicle = vehiclesPage.getVehicleById(id)
  if (!vehicle) return

  const modal = document.createElement("div")
  modal.className = "vehicle-modal"
  modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal()">&times;</button>
            <div class="modal-header">
                <img src="${vehicle.poster}" alt="${vehicle.name}">
                <div class="modal-title">
                    <h2>${vehicle.name}</h2>
                    <p class="modal-price">${vehicle.price}</p>
                </div>
            </div>
            <div class="modal-body">
                <div class="modal-section">
                    <h3>Description</h3>
                    <p>${vehicle.description}</p>
                </div>
                <div class="modal-section">
                    <h3>Key Features</h3>
                    <div class="features-grid">
                        ${vehicle.features.map((feature) => `<span class="feature-tag">${feature}</span>`).join("")}
                    </div>
                </div>
                <div class="modal-section">
                    <h3>Specifications</h3>
                    <div class="specs-grid">
                        <div class="spec-item">
                            <i class="fas fa-engine"></i>
                            <span>Engine: ${vehicle.specs.engine}</span>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-tachometer-alt"></i>
                            <span>Power: ${vehicle.horsepower}</span>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-cog"></i>
                            <span>Transmission: ${vehicle.specs.transmission}</span>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-road"></i>
                            <span>Drivetrain: ${vehicle.specs.drivetrain}</span>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-gas-pump"></i>
                            <span>Fuel Economy: ${vehicle.specs.fuelEconomy}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="modal-btn primary" onclick="scheduleTestDrive('${vehicle.name}')">
                    <i class="fas fa-calendar-alt"></i> Schedule Test Drive
                </button>
                <button class="modal-btn secondary" onclick="requestQuote('${vehicle.name}')">
                    <i class="fas fa-calculator"></i> Request Quote
                </button>
                <button class="modal-btn tertiary" onclick="window.open('contact.html', '_blank')">
                    <i class="fas fa-phone"></i> Contact Us
                </button>
            </div>
        </div>
    `

  document.body.appendChild(modal)
  document.body.style.overflow = "hidden"
}

function closeModal() {
  const modal = document.querySelector(".vehicle-modal")
  if (modal) {
    modal.remove()
    document.body.style.overflow = "auto"
  }
}

function scheduleTestDrive(vehicleName) {
  alert(`Test drive request for ${vehicleName} has been noted. You will be redirected to our contact form.`)
  window.open("contact.html", "_blank")
}

function requestQuote(vehicleName) {
  alert(`Quote request for ${vehicleName} has been noted. Our sales team will contact you within 24 hours.`)
}

// Initialize vehicles page
let vehiclesPage
document.addEventListener("DOMContentLoaded", () => {
  vehiclesPage = new VehiclesPage()
})

// Close modal on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal()
  }
})

// Close modal on outside click
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("vehicle-modal")) {
    closeModal()
  }
})
