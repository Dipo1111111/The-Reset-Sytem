// =========================
// 1️⃣ Handle Referral Tracking
// =========================
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref"); // e.g. ?ref=anxietychannel

    if (ref) {
        // Store ref in localStorage so it persists even if user navigates around
        localStorage.setItem("refSource", ref);
    }

    const savedRef = localStorage.getItem("refSource");

    // Select all Gumroad links
    const gumroadLinks = document.querySelectorAll('a[href*="gumroad.com/l/reset-system"]');

    gumroadLinks.forEach(link => {
        let url = new URL(link.href);

        // If there's already a ?wanted=true, keep it and add ref
        if (savedRef) {
            url.searchParams.set("ref", savedRef);
        }

        link.href = url.toString();
    });
});

// // =========================
// // 2️⃣ GSAP Animations
// // =========================
// document.addEventListener("DOMContentLoaded", () => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Fade-up effect for all major sections
//     gsap.utils.toArray("section").forEach((section) => {
//         gsap.from(section, {
//             opacity: 0,
//             y: 40,
//             duration: 0.8,
//             ease: "power2.out",
//             scrollTrigger: {
//                 trigger: section,
//                 start: "top 85%",
//                 toggleActions: "play none none reverse"
//             }
//         });
//     });

//     // Animate headline in hero
//     gsap.from("h1", {
//         opacity: 0,
//         y: 30,
//         duration: 1,
//         delay: 0.3,
//         ease: "power3.out"
//     });

//     // Animate CTA button pulse (already has CSS pulse, but this makes entry nice)
//     gsap.from(".cta-button", {
//         opacity: 0,
//         scale: 0.8,
//         duration: 0.8,
//         delay: 0.6,
//         ease: "back.out(1.7)"
//     });
// });
