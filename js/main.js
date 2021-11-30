document.addEventListener("DOMContentLoaded", () => {
  dropdownMenu();

  getDestination();

  getCrew();

  getTechnology();

  function dropdownMenu() {
    const dropdownLinks = document.querySelector(".dropdown-navigation-links");
    const hamburger = document.querySelector("#hamburger");
    const bars = document.querySelector("#bars");
    const close = document.querySelector("#close");
    const openDropdown = () => {
      const cl = dropdownLinks.classList;
      cl.toggle("showitem");
      cl.toggle("hideitem");
      if (Array.from(cl).includes("d-none")) {
        cl.toggle("d-none");
      } else {
        setTimeout(() => cl.toggle("d-none"), 1000);
      }
    };
    const hamburgerToggle = () => {
      bars.classList.toggle("d-none");
      close.classList.toggle("d-none");
    };
    hamburger.addEventListener("click", () => {
      openDropdown();
      hamburgerToggle();
    });
  }

  function getDestination() {
    if (document.querySelector("#destinationList")) {
      const btnDestinationMoon = document.querySelector("#btnDestinationMoon");
      const btnDestinationMars = document.querySelector("#btnDestinationMars");
      const btnDestinationEurope = document.querySelector(
        "#btnDestinationEurope"
      );
      const btnDestinationTitan = document.querySelector(
        "#btnDestinationTitan"
      );
      const changeDestinationContent = (destination = "moon") => {
        const destinations = {
          moon: {
            name: "Moon",
            images: {
              png: "./assets/destination/image-moon.png",
              webp: "./assets/destination/image-moon.webp",
            },
            description:
              "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 km",
            travel: "3 days",
          },
          mars: {
            name: "Mars",
            images: {
              png: "./assets/destination/image-mars.png",
              webp: "./assets/destination/image-mars.webp",
            },
            description:
              "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 mil. km",
            travel: "9 months",
          },
          europe: {
            name: "Europa",
            images: {
              png: "./assets/destination/image-europa.png",
              webp: "./assets/destination/image-europa.webp",
            },
            description:
              "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 mil. km",
            travel: "3 years",
          },
          titan: {
            name: "Titan",
            images: {
              png: "./assets/destination/image-titan.png",
              webp: "./assets/destination/image-titan.webp",
            },
            description:
              "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 bil. km",
            travel: "7 years",
          },
        };
        const destImage = document.querySelector("#destinationImage");
        const destName = document.querySelector("#destinationName");
        const destBio = document.querySelector("#destinationBio");
        const destDist = document.querySelector("#destinationTravesyDistance");
        const destTime = document.querySelector("#destinationTravesyTime");
        destImage.src = destinations[destination].images.png;
        destName.innerText = destinations[destination].name;
        destBio.innerText = destinations[destination].description;
        destDist.innerText = destinations[destination].distance;
        destTime.innerText = destinations[destination].travel;
      };
      const destButtons = [
        btnDestinationMoon,
        btnDestinationMars,
        btnDestinationEurope,
        btnDestinationTitan,
      ];
      destButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const { target } = e;
          const { id, dataset, classList } = target;
          const { destination } = dataset;
          if (!Array.from(classList).includes("active")) {
            destButtons.forEach((btn) => {
              if (btn.id !== id) {
                btn.classList.remove("active");
              }
            });
            classList.toggle("active");
          }
          changeDestinationContent(destination);
        });
      });
    }
  }

  function getCrew() {
    if (document.querySelector("#crewList")) {
      const dotsCrew = Array.from(document.querySelectorAll(".dot-crew"));
      const changeCrewInfoContent = (crewid = "crew01") => {
        const crewData = {
          crew01: {
            name: "Douglas Hurley",
            images: {
              png: "./assets/crew/image-douglas-hurley.png",
              webp: "./assets/crew/image-douglas-hurley.webp",
            },
            role: "Commander",
            bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
          },
          crew02: {
            name: "Mark Shuttleworth",
            images: {
              png: "./assets/crew/image-mark-shuttleworth.png",
              webp: "./assets/crew/image-mark-shuttleworth.webp",
            },
            role: "Mission Specialist",
            bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
          },
          crew03: {
            name: "Victor Glover",
            images: {
              png: "./assets/crew/image-victor-glover.png",
              webp: "./assets/crew/image-victor-glover.webp",
            },
            role: "Pilot",
            bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
          },
          crew04: {
            name: "Anousheh Ansari",
            images: {
              png: "./assets/crew/image-anousheh-ansari.png",
              webp: "./assets/crew/image-anousheh-ansari.webp",
            },
            role: "Flight Engineer",
            bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
          },
        };
        const crewImage = document.querySelector("#crewImage");
        const crewGrade = document.querySelector("#crewGrade");
        const crewName = document.querySelector("#crewName");
        const crewBio = document.querySelector("#crewBio");
        crewImage.src = crewData[crewid].images.png;
        crewGrade.innerText = crewData[crewid].role;
        crewName.innerText = crewData[crewid].name;
        crewBio.innerText = crewData[crewid].bio;
      };
      dotsCrew.forEach((dot) => {
        dot.addEventListener("click", (e) => {
          const { target } = e;
          const { id, classList } = target;
          if (!Array.from(classList).includes("item-active")) {
            dotsCrew.forEach((dot) => {
              if (dot.id !== id) {
                dot.classList.remove("item-active");
              }
            });
            classList.toggle("item-active");
          }
          changeCrewInfoContent(id);
        });
      });
    }
  }

  function getTechnology() {
    if (document.querySelector("#launchSteps")) {
      const launchSteps = Array.from(document.querySelectorAll(".launch-step"));
      const changeLaunchInfoContent = (launchid = "launch01") => {
        const launchData = {
          launch01: {
            name: "Launch vehicle",
            images: {
              portrait:
                "./assets/technology/image-launch-vehicle-portrait.jpg",
              landscape:
                "./assets/technology/image-launch-vehicle-landscape.jpg",
            },
            description:
              "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
          },
          launch02: {
            name: "Spaceport",
            images: {
              portrait: "./assets/technology/image-spaceport-portrait.jpg",
              landscape: "./assets/technology/image-spaceport-landscape.jpg",
            },
            description:
              "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
          },
          launch03: {
            name: "Space capsule",
            images: {
              portrait: "./assets/technology/image-space-capsule-portrait.jpg",
              landscape:
                "./assets/technology/image-space-capsule-landscape.jpg",
            },
            description:
              "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
          },
        };
        const launchImage = document.querySelector("#launchImage");
        const launchName = document.querySelector("#launchName");
        const launchDescription = document.querySelector("#launchDescription");
        launchImage.src = launchData[launchid].images.portrait;
        launchName.innerText = launchData[launchid].name;
        launchDescription.innerText = launchData[launchid].description;
      };
      launchSteps.forEach((step) => {
        step.addEventListener("click", (e) => {
          const { target } = e;
          const { id, classList } = target;
					if (!Array.from(classList).includes("item-active")) {
						launchSteps.forEach((step) => {
							if (step.id !== id) {
								step.classList.remove("item-active");
							}
						});
						classList.toggle("item-active");
					}
					changeLaunchInfoContent(id);
        });
      });
    }
  }
});
