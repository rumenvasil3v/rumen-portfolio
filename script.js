/* =========================================================
   MOTION PREFERENCE
   Visitors who ask their OS to minimise motion skip the animated
   countdown/liftoff and drop straight into the flight. CSS handles
   the decorative loops; this flag handles the scripted sequence.
   ========================================================= */
const REDUCED_MOTION = window.matchMedia
  && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* =========================================================
   CONTENT
   ========================================================= */
const STAGES = [
  {
    sep: "T+02:12 · STAR 01",
    title: "About Me",
    type: "Hey! My name is Rumen and I will guide you through my journey! Currently, I am studying Computer Science at the University of Surrey and I am headed towards my second-year. I love science, maths, physics, electronics and bunch of other stuff (non-tech related as well). I am excited about AI, robotics and cybersecurity and more specifically the security implications of AI. Along with that, I am intersted in the space industry and I want to specialize there, protecting space assets and automating stuff with AI and robotics. In my free time and hobby time I am learning Arduino and electronics realising my robotics journey and when I need to clear my mind a bit from all the tech I love to go out and skateboard, watch a movie, or hiking. Moreover, reading interesting stuff and travelling to interesting places. I would love to connect, at the end of the journey you'll find contact details. Now, have fun :).",
    extra: `<div class="tags"><span class="tag2">Computer Science</span><span class="tag2">Cybersecurity</span><span class="tag2">AI &amp; Robotics</span><span class="tag2">Space</span><span class="tag2">Problem-solving</span></div>`
  },

  {
    sep: "T+02:14 · STAR 02",
    title: "Education",
    type: "Alongside the degree I'm training as a Junior Cybersecurity Analyst through Hack The Box and gaining expertise into the cybersecurity field through hands-on practice and labs. During first-year I participated into wide range of competitions and focused on fundamentals.",
    extra: `<div class="row"><div class="role">BSc (Hons) Computer Science | Sep 2025 - Present</div><div class="meta">University of Surrey</div><div class="d">Core CS, SWE, DSA, Operating systems and Maths.</div></div>
      <div class="row"><div class="role">Junior Cybersecurity Analyst | Oct 2025 - Present</div><div class="meta">Hack The Box Academy</div><div class="d">Networking, Linux, footprinting, traffic analysis, SIEM, threat hunting.</div></div>` },

  {
    sep: "T+08:03 · STAR 03",
    title: "Professional Experience",
    type: "Currently, I am Computer Science tutor preparing pupils from all age groups to successfully pass their GCSEs and A-Levels. Moreover, I had the privilege to be intern twice in Portugal as part of the Erasmus+ Programme while I was in high school. During the first internship I was responsible for system administration and IT support, while the second one was oriented towards Data Science.",
    extra: `<div class="row"><div class="role">Computer Science Tutor</div><div class="meta">MyTutor · Mar 2026 – Present</div><div class="d">Teaching Computer Science across all age groups, preparing pupils for GCSE and A-Level.</div></div>
      <div class="row"><div class="role">Data Analyst Intern</div><div class="meta">Gabimendes · Jun 2024 – Jul 2024</div><div class="d">Processed and validated financial data from Portuguese invoicing systems; automated invoice handling with Python and SQL.</div></div>
      <div class="row"><div class="role">Technical Support Intern</div><div class="meta">AE Mosteiro e Cávado · Mar 2023 – Apr 2023</div><div class="d">Maintained and repaired hardware; monitored LAN connectivity and configured network devices.</div></div>` },

  {
    sep: "T+12:41 · STAR 04",
    title: "Projects",
    type: "On this window you can find a couple of projects I have done spanning from enumerating hosts on infrastructure level to a database index engine. This is just a short list of projects I have worked on. If you want to find more I encourage you to have a look of my github profile. You can find link on the upper-left corner where the github icon is and click on it or at the end of the journey you will find contact details. Both methods work.",
    projects: true
  },

  {
    sep: "T+13:20 · STAR 05",
    title: "Skills",
    type: "List of my expertise and areas",
    extra: `<div class="sh mono">LANGUAGES</div>
      <div class="chips"><span class="chip">Python</span><span class="chip">Java</span><span class="chip">C#</span><span class="chip">C / C++</span><span class="chip">JavaScript</span><span class="chip">HTML5 · CSS3</span></div>
      <div class="sh mono">NETWORKING &amp; SECURITY</div>
      <div class="chips"><span class="chip">Nmap</span><span class="chip">Wireshark</span><span class="chip">TCP/IP · OSI</span></div>
      <div class="sh mono">TECH &amp; DATA</div>
      <div class="chips"><span class="chip">Spring</span><span class="chip">Docker</span><span class="chip">Linux</span><span class="chip">Git</span><span class="chip">MySQL</span><span class="chip">MongoDB</span></div>` },

  {
    sep: "T+18:00 · STAR 06",
    title: "Awards & Certifications",
    type: "Recognitions and credentials earned along the way.",
    extra: `<ul class="certs">
        <li><b>Lunar CubeSAT Team Member</b> — Spaceport America Cup / SDC challenge <span class="yr">2026</span></li>
        <li><b>Junior Cybersecurity Analyst Path</b> — Hack The Box Academy <span class="yr">2025–26</span></li>
        <li><b>Computer Science Degree Programme</b> — University of Surrey <span class="yr">ongoing</span></li>
      </ul>` }
];

const PROJECTS = [
  { t: "SECURITY TOOLING", n: "Infrastructure Enumeration", d: "A Bash toolkit that enumerates hosts to determine internet presence and map network gateways.", s: ["Bash", "Shell", "Networking"], u: "https://github.com/rumenvasil3v/Bash-scirpt-infrastructure-enumeration" },
  { t: "SECURITY TOOLING", n: "Footprinting Services", d: "Maps an organisation's infrastructure via common-service footprinting across FTP, SMB and more.", s: ["Bash", "FTP", "SMB"], u: "https://github.com/rumenvasil3v/Footprinting-common-services" },
  { t: "SYSTEMS", n: "Database Index Engine", d: "A from-scratch indexing engine in Java, built to explore data-structure performance trade-offs.", s: ["Java", "Data Structures"], u: "https://github.com/rumenvasil3v/Database-Index-Engine" },
  { t: "APPLICATIONS", n: "Weather CLI App", d: "A command-line weather client consuming a live API, with clean request handling and parsing.", s: ["Java", "OkHttp", "Gson"], u: "https://github.com/rumenvasil3v/Weather-CLI-App" }
];

/* =========================================================
   STARFIELD (2D backdrop)
   ========================================================= */
const sc = document.getElementById("stars"), sx = sc.getContext("2d");
let DPR = Math.min(devicePixelRatio || 1, 2), stars = [], drift = 0;
function sizeStars() {
  sc.width = innerWidth * DPR; sc.height = innerHeight * DPR;
  sc.style.width = innerWidth + "px"; sc.style.height = innerHeight + "px";
  sx.setTransform(DPR, 0, 0, DPR, 0, 0);
  const n = Math.round(innerWidth * innerHeight / 8000); stars = [];
  for (let i = 0; i < n; i++)stars.push({
    x: Math.random() * innerWidth, y: Math.random() * innerHeight,
    r: Math.random() * 1.3 + .2, tw: Math.random() * 6.28, sp: Math.random() * .02 + .004, dz: Math.random() * .6 + .2
  });
}
let paused = false;
function starLoop(t) {
  if (!paused) drift += 1.1;
  sx.clearRect(0, 0, innerWidth, innerHeight);
  for (const s of stars) {
    let y = (s.y + drift * s.dz) % innerHeight;
    const a = .35 + Math.sin(t * .001 * s.sp * 60 + s.tw) * .35;
    sx.globalAlpha = Math.max(0, a); sx.fillStyle = "#cfd6ff";
    sx.beginPath(); sx.arc(s.x, y, s.r, 0, 7); sx.fill();
  }
  sx.globalAlpha = 1; requestAnimationFrame(starLoop);
}
addEventListener("resize", () => { DPR = Math.min(devicePixelRatio || 1, 2); sizeStars(); });
sizeStars(); requestAnimationFrame(starLoop);

// Three.js rocket
let renderer, scene, camera, rocketGroup, parts = {}, flames = {}, hasWebGL = !!window.THREE;
const sceneEl = document.getElementById("scene");
// star state declared up-front: the render loop (started inside initThree, below)
// calls updateStars() which touches these — they must exist before that first call
let starList = [], activeStar = null, DRIFT_SPEED = 0.0016;

function metal(color, rough, metal_) {
  return new THREE.MeshStandardMaterial({ color: color, roughness: rough, metalness: metal_ });
}
function makeFlame(radius, length, color) {
  const g = new THREE.ConeGeometry(radius, length, 20, 1, true);
  const m = new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: .9, side: THREE.DoubleSide });
  const cone = new THREE.Mesh(g, m);
  cone.rotation.x = Math.PI;          // point downward
  cone.position.y = -length / 2;
  const grp = new THREE.Group(); grp.add(cone);
  grp.visible = false;
  return grp;
}

function buildRocket() {
  rocketGroup = new THREE.Group();

  const white = metal(0xf1f2f6, .45, .35);
  const grey = metal(0xc4c9d4, .5, .4);
  const orange = metal(0xdc6a30, .55, .2);
  const dark = metal(0x2a2d36, .6, .5);

  // ---- core stage ----
  const core = new THREE.Group();
  const coreBody = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.66, 5.4, 40), orange);
  coreBody.position.y = 0.2;
  const coreBand = new THREE.Mesh(new THREE.CylinderGeometry(0.63, 0.63, 0.25, 40), white);
  coreBand.position.y = 2.2;
  const coreNozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.42, 0.7, 28), dark);
  coreNozzle.position.y = -2.75;
  core.add(coreBody, coreBand, coreNozzle);
  parts.core = core;
  flames.core = makeFlame(0.4, 2.6, 0xffb14a); flames.core.position.y = -3.0; core.add(flames.core);

  // ---- upper stage (sits on top of core) ----
  const upper = new THREE.Group();
  const upBody = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 1.9, 36), grey);
  upBody.position.y = 3.85;
  const upNozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.3, 0.5, 24), dark);
  upNozzle.position.y = 2.7;
  upper.add(upBody, upNozzle);
  parts.upper = upper;
  flames.upper = makeFlame(0.26, 1.6, 0x8fb4ff); flames.upper.position.y = 2.55; upper.add(flames.upper);

  // ---- fairing (shroud around payload) ----
  const fairing = new THREE.Group();
  const fairBody = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.1, 36), white);
  fairBody.position.y = 5.1;
  const fairCone = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.0, 36), white);
  fairCone.position.y = 6.15;
  fairing.add(fairBody, fairCone);
  parts.fairing = fairing;

  // ---- capsule (payload, revealed after fairing) ----
  const capsule = new THREE.Group();
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.42, 0.7, 28), grey);
  cap.position.y = 5.2;
  const capTop = new THREE.Mesh(new THREE.SphereGeometry(0.22, 20, 16), white);
  capTop.position.y = 5.6;
  capsule.add(cap, capTop);
  parts.capsule = capsule;

  // ---- boosters ----
  function booster(xSign) {
    const b = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.3, 4.0, 28), white);
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.7, 28), grey);
    nose.position.y = 2.35;
    const noz = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.22, 0.4, 20), dark);
    noz.position.y = -2.2;
    b.add(body, nose, noz);
    b.position.set(xSign * 0.92, -0.3, 0);
    return b;
  }
  parts.rBooster = booster(1);
  parts.lBooster = booster(-1);
  flames.rBooster = makeFlame(0.2, 1.4, 0xffb14a); flames.rBooster.position.y = -2.5; parts.rBooster.add(flames.rBooster);
  flames.lBooster = makeFlame(0.2, 1.4, 0xffb14a); flames.lBooster.position.y = -2.5; parts.lBooster.add(flames.lBooster);

  rocketGroup.add(core, upper, fairing, capsule, parts.rBooster, parts.lBooster);
  // centre the rocket's mass on the origin, then lay it on its side (nose -> +X / right)
  const inner = new THREE.Group();
  inner.add(...rocketGroup.children.slice());
  rocketGroup.add(inner);
  inner.position.y = -1.9;               // balance nose & engine around 0 (in local up axis)
  rocketGroup.rotation.z = -Math.PI / 2;   // rotate whole rocket so nose points right
  rocketGroup.scale.setScalar(0.6);    // scale down for breathing room
  // held in the LEFT third of the frame; travels only by gentle drift, never separates
  rocketGroup.position.set(-6.4, 0, 0);
  rocketGroup.visible = false;           // hidden until lift-off
  scene.add(rocketGroup);
}

/* Responsive camera: on narrow / portrait screens the horizontal field
   of view is much tighter, which crops the rocket (held far left) and
   the incoming stars (right) off the edges and makes them look tiny.
   Pull the camera back as the screen narrows so the whole scene fits,
   giving the rocket and stars room and separation on phones. */
function applyResponsiveCamera() {
  if (!camera) return;
  const aspect = innerWidth / innerHeight;
  let z;
  if (aspect >= 1.6) z = 15;   // wide desktop — original framing
  else if (aspect >= 1.2) z = 17;   // small laptop / landscape tablet
  else if (aspect >= 0.9) z = 20;   // square-ish / portrait tablet
  else if (aspect >= 0.65) z = 25;   // large phone portrait
  else z = 30;   // narrow phone portrait — pull well back
  camera.position.z = z;
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
}

function initThree() {
  if (!hasWebGL) return;
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  sceneEl.appendChild(renderer.domElement);
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.1, 100);
  camera.position.set(0, 0, 15);
  camera.lookAt(0, 0, 0);
  applyResponsiveCamera();

  scene.add(new THREE.AmbientLight(0x556080, 0.75));
  const key = new THREE.DirectionalLight(0xffffff, 1.15); key.position.set(4, 6, 6); scene.add(key);
  const rim = new THREE.DirectionalLight(0x6f8bff, 0.6); rim.position.set(-5, 2, -4); scene.add(rim);

  buildRocket();
  renderLoop();
}
let rocketFlying = false;
// motion state for dynamic, banking flight
let rkPrevX = -6.4, rkPrevY = 0;   // last-frame position (to derive velocity)
let rkBank = 0;                    // current nose lean, eased toward heading
function renderLoop() {
  if (!hasWebGL) return;
  requestAnimationFrame(renderLoop);
  const now = performance.now() * 0.001;
  // rocket: whole, continuous. Follows the cursor when the view is clear;
  // falls back to a gentle bob + slow crawl while an info window is open.
  if (rocketGroup && rocketFlying) {
    if (pointerActive && !windowOpen()) {
      // steer toward where the cursor points, snappier so it feels alive
      const t = pointerWorldTarget();
      const tx = Math.max(-8, Math.min(8, t.x));
      const ty = Math.max(-4.2, Math.min(4.2, t.y));
      // higher lerp = more responsive; a touch of idle float on top
      rocketGroup.position.x += (tx - rocketGroup.position.x) * 0.09;
      rocketGroup.position.y += (ty - rocketGroup.position.y) * 0.09 + Math.sin(now * 0.6) * 0.003;
    } else {
      // window open (or no pointer yet): original calm drift + bob
      rocketGroup.position.y += (Math.sin(now * 0.6) * 0.35 - rocketGroup.position.y) * 0.06;
      rocketGroup.position.x += DRIFT_SPEED;
      if (rocketGroup.position.x > -4.6) rocketGroup.position.x = -4.6;
    }

    // --- dynamic nose: lean toward the vertical direction of travel ---
    const vx = rocketGroup.position.x - rkPrevX;
    const vy = rocketGroup.position.y - rkPrevY;
    rkPrevX = rocketGroup.position.x; rkPrevY = rocketGroup.position.y;
    const speed = Math.hypot(vx, vy);
    const MAX_BANK = Math.PI / 3;   // 60 degrees, cap on the lean off horizontal
    let targetBank;
    if (speed > 0.0025) {
      // heading vs. horizontal: pure sideways -> 0deg, pure up/down -> +-90deg
      // (then clamped to +-60). Vertical motion drives the tilt.
      const ang = Math.atan2(vy, Math.abs(vx));   // -PI/2..PI/2, sign = up/down
      targetBank = Math.max(-MAX_BANK, Math.min(MAX_BANK, ang));
    } else {
      targetBank = Math.sin(now * 0.8) * 0.02;    // gentle idle wobble
    }
    // ease slowly so the nose glides between angles (no jitter)
    rkBank += (targetBank - rkBank) * 0.06;
    rocketGroup.rotation.z = -Math.PI / 2 + rkBank;
  }
  // flame flicker (engines always burning while flying)
  const f = 0.85 + Math.random() * 0.3;
  for (const k in flames) { if (flames[k].visible) { flames[k].scale.set(1, f, 1); } }
  // stars: approach, twinkle, rotate
  updateStars(now);
  renderer.render(scene, camera);
}
addEventListener("resize", () => {
  if (!hasWebGL) return;
  applyResponsiveCamera();
  renderer.setSize(innerWidth, innerHeight);
});

/* ---- cursor tracking: the rocket follows the pointer when no window is open ---- */
let pointerNDC = { x: 0, y: 0 };     // normalised device coords, -1..1
let pointerActive = false;           // becomes true after first real move
function updatePointerNDC(clientX, clientY) {
  pointerNDC.x = (clientX / innerWidth) * 2 - 1;
  pointerNDC.y = -(clientY / innerHeight) * 2 + 1;
  pointerActive = true;
}
addEventListener("pointermove", e => updatePointerNDC(e.clientX, e.clientY), { passive: true });
// touch: let a drag steer the rocket too
addEventListener("touchmove", e => {
  if (e.touches && e.touches[0]) updatePointerNDC(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: true });

// true while an info window (or its scrim) is on screen
function windowOpen() {
  return win.classList.contains("open") || winScrim.classList.contains("open");
}

// project the pointer onto the rocket's z=0 world plane, so we know where
// in 3D space the cursor is pointing. Reused each frame.
const _ptV = new THREE.Vector3();
function pointerWorldTarget() {
  _ptV.set(pointerNDC.x, pointerNDC.y, 0.5).unproject(camera);
  const dir = _ptV.sub(camera.position).normalize();
  const dist = -camera.position.z / dir.z;      // travel to z=0 plane
  return camera.position.clone().add(dir.multiplyScalar(dist));
}

/* ---- themed custom cursor: glowing bordered sphere + trailing core ---- */
(function customCursor() {
  const fine = window.matchMedia && window.matchMedia("(pointer:fine)").matches;
  const ring = document.getElementById("cursorRing");
  const dot = document.getElementById("cursorDot");
  if (!fine || !ring || !dot) return;             // skip on touch / coarse pointers

  document.body.classList.add("custom-cursor");
  let mx = innerWidth / 2, my = innerHeight / 2;   // live pointer
  let rx = mx, ry = my;                             // ring position (lags slightly)
  let seen = false;

  addEventListener("pointermove", e => {
    mx = e.clientX; my = e.clientY;
    if (!seen) { rx = mx; ry = my; seen = true; ring.style.opacity = dot.style.opacity = "1"; }
    dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    // ring over an interactive element? -> "hot" state
    const el = e.target;
    const hot = el && (el.closest && el.closest('a,button,[role="button"],.txt-btn,.win-close,.connect-list a,.proj-nav button'));
    document.body.classList.toggle("hot", !!hot);
  }, { passive: true });

  addEventListener("pointerdown", () => document.body.classList.add("down"), { passive: true });
  addEventListener("pointerup", () => document.body.classList.remove("down"), { passive: true });
  // hide when the pointer leaves the window
  addEventListener("pointerleave", () => { ring.style.opacity = dot.style.opacity = "0"; });
  addEventListener("pointerenter", () => { if (seen) ring.style.opacity = dot.style.opacity = "1"; });

  ring.style.opacity = dot.style.opacity = "0";
  (function follow() {
    rx += (mx - rx) * 0.22; ry += (my - ry) * 0.22;   // smooth trailing ring
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(follow);
  })();
})();

initThree();

/* =========================================================
   STARS — detailed glowing waypoints that carry each section
   ========================================================= */
// (starList / activeStar declared earlier, above initThree)
// radial-gradient sprite texture (soft glow), cached
let _glowTex = null;
function glowTexture() {
  if (_glowTex) return _glowTex;
  const s = 128, c = document.createElement("canvas"); c.width = c.height = s;
  const g = c.getContext("2d"), grd = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  grd.addColorStop(0, "rgba(255,255,255,1)");
  grd.addColorStop(0.25, "rgba(210,225,255,0.85)");
  grd.addColorStop(0.5, "rgba(120,150,255,0.35)");
  grd.addColorStop(1, "rgba(80,110,255,0)");
  g.fillStyle = grd; g.fillRect(0, 0, s, s);
  _glowTex = new THREE.CanvasTexture(c); return _glowTex;
}
// cross/star flare sprite texture
let _flareTex = null;
function flareTexture() {
  if (_flareTex) return _flareTex;
  const s = 128, c = document.createElement("canvas"); c.width = c.height = s;
  const g = c.getContext("2d"); g.translate(s / 2, s / 2);
  const grad = g.createLinearGradient(-s / 2, 0, s / 2, 0);
  grad.addColorStop(0, "rgba(255,255,255,0)"); grad.addColorStop(.5, "rgba(255,255,255,1)"); grad.addColorStop(1, "rgba(255,255,255,0)");
  g.strokeStyle = grad;
  for (let a = 0; a < 4; a++) {
    g.save(); g.rotate(a * Math.PI / 4); g.lineWidth = a % 2 ? 1.4 : 2.4;
    g.beginPath(); g.moveTo(-s / 2, 0); g.lineTo(s / 2, 0); g.stroke(); g.restore();
  }
  _flareTex = new THREE.CanvasTexture(c); return _flareTex;
}
function makeStar(hue) {
  const grp = new THREE.Group();
  const col = new THREE.Color().setHSL(hue, 0.55, 0.7);
  // emissive core
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.34, 32, 24),
    new THREE.MeshBasicMaterial({ color: col }));
  grp.add(core);
  // soft glow
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: glowTexture(), color: col,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
  }));
  glow.scale.setScalar(3.4); grp.add(glow);
  // sharp cross flare
  const flare = new THREE.Sprite(new THREE.SpriteMaterial({
    map: flareTexture(), color: 0xffffff,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: .9
  }));
  flare.scale.setScalar(4.2); grp.add(flare);
  // point light so it lights the rocket as it passes
  const light = new THREE.PointLight(col.getHex(), 0.0, 14, 2); grp.add(light);
  grp.userData = { core, glow, flare, light, base: col, seed: Math.random() * 6.28 };
  return grp;
}
// spawn one star entering from the right, target x just ahead of the rocket
function spawnStar(idx) {
  if (!hasWebGL) return null;
  const hue = (idx * 0.14 + 0.55) % 1;                 // vary color per section
  const g = makeStar(hue);
  const ty = (Math.random() * 3.4 - 1.7);            // random vertical lane
  g.position.set(11, ty, -1.5 - Math.random() * 1.5);
  g.userData.targetX = -1.4;                   // pass point (right of rocket, mid screen)
  g.userData.targetY = ty;
  g.userData.state = "approach";                 // approach -> reached -> leaving
  scene.add(g); starList.push(g);
  return g;
}
function updateStars(now) {
  for (let i = starList.length - 1; i >= 0; i--) {
    const s = starList[i], u = s.userData;
    // twinkle + slow spin of flare
    const tw = 0.75 + Math.sin(now * 2.2 + u.seed) * 0.25;
    u.glow.material.opacity = tw; u.flare.material.rotation = now * 0.25 + u.seed;
    u.flare.material.opacity = 0.5 + tw * 0.4;
    if (u.state === "approach") {
      s.position.x += (u.targetX - s.position.x) * 0.02;
      s.position.y += (u.targetY - s.position.y) * 0.02;
      u.light.intensity = Math.min(1.4, u.light.intensity + 0.02);
      if (s.position.x - u.targetX < 0.12) { u.state = "reached"; onStarReached(s); }
    } else if (u.state === "leaving") {
      s.position.x -= 0.06; s.position.y += 0.015;
      u.core.material.opacity = (u.core.material.opacity ?? 1);
      // fade everything
      [u.glow, u.flare].forEach(sp => sp.material.opacity *= 0.94);
      u.light.intensity *= 0.94;
      if (s.position.x < -12) { scene.remove(s); starList.splice(i, 1); }
    }
  }
}
function clearStars() {
  for (const s of starList) { scene.remove(s); }
  starList = []; activeStar = null;
}
// project a 3D object to 2D screen pixels
function projectToScreen(obj3d) {
  const v = new THREE.Vector3(); obj3d.getWorldPosition(v); v.project(camera);
  return { x: (v.x * 0.5 + 0.5) * innerWidth, y: (-v.y * 0.5 + 0.5) * innerHeight };
}

/* ---- star -> window connecting line ---- */
const starLineEl = document.getElementById("starLine"),
  starLineSeg = document.getElementById("starLineSeg");
let lineRAF = null;
function windowAnchor() {
  // left edge / center of the (offset) window — the line meets the window here
  const r = win.getBoundingClientRect();
  return { x: r.left, y: r.top + r.height / 2 };
}
function showStarLine(star) {
  if (!star) { return; }
  starLineEl.classList.add("show");
  cancelAnimationFrame(lineRAF);
  (function draw() {
    if (!star || !starList.includes(star)) { return; }
    const p = projectToScreen(star.userData.core || star);
    const a = windowAnchor();
    starLineSeg.setAttribute("x1", p.x); starLineSeg.setAttribute("y1", p.y);
    starLineSeg.setAttribute("x2", a.x); starLineSeg.setAttribute("y2", a.y);
    lineRAF = requestAnimationFrame(draw);
  })();
}
function hideStarLine() {
  starLineEl.classList.remove("show");
  cancelAnimationFrame(lineRAF); lineRAF = null;
}

/* rocket helpers (no-op safe if WebGL missing) */
function burnFlames(ids) {
  for (const k in flames) { flames[k].visible = ids.includes(k); }
}
function resetRocket() {
  if (!hasWebGL || !rocketGroup) return;
  scene.remove(rocketGroup);
  for (const k in parts) delete parts[k];
  for (const k in flames) delete flames[k];
  buildRocket();
}

/* =========================================================
   AUDIO — synthesized engine rumble + countdown beeps (Web Audio)
   ========================================================= */
let AC = null, engineNodes = null, muted = false;
function ensureAudio() {
  if (AC) { if (AC.state === "suspended") AC.resume(); return; }
  try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { AC = null; }
}
// unlock audio on first user interaction (autoplay policy), then start ambient music
["pointerdown", "keydown", "touchstart"].forEach(ev =>
  window.addEventListener(ev, () => { ensureAudio(); if (!muted) startMusic(); }, { once: false, passive: true }));

function startEngineSound() {
  if (muted) return; ensureAudio(); if (!AC) return;
  if (engineNodes) return;                       // already running
  // brown-ish noise buffer for rumble
  const dur = 2, buf = AC.createBuffer(1, AC.sampleRate * dur, AC.sampleRate), data = buf.getChannelData(0);
  let last = 0;
  for (let i = 0; i < data.length; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; data[i] = last * 3.2; }
  const src = AC.createBufferSource(); src.buffer = buf; src.loop = true;
  const lp = AC.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 220;
  const gain = AC.createGain(); gain.gain.value = 0;
  src.connect(lp); lp.connect(gain); gain.connect(AC.destination);
  src.start();
  gain.gain.setTargetAtTime(0.16, AC.currentTime, 0.4);   // fade in
  engineNodes = { src, gain, lp };
}
function stopEngineSound() {
  if (!engineNodes || !AC) return;
  const { src, gain } = engineNodes;
  gain.gain.setTargetAtTime(0, AC.currentTime, 0.25);
  setTimeout(() => { try { src.stop(); } catch (e) { } }, 600);
  engineNodes = null;
}
function beep(freq, len) {
  if (muted) return; ensureAudio(); if (!AC) return;
  const o = AC.createOscillator(), g = AC.createGain();
  o.type = "sine"; o.frequency.value = freq;
  g.gain.value = 0; o.connect(g); g.connect(AC.destination);
  const t = AC.currentTime;
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.25, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + (len || 0.18));
  o.start(t); o.stop(t + (len || 0.18) + 0.02);
}

/* ---- ambient background music — evolving "deep space" synth ----
   layers: sub-drone + detuned warm chord pad through a slow filter sweep
   + sparse high shimmer notes (pentatonic) + very slow reverb-ish delay   */
let musicNodes = null, shimmerTimer = null;
function startMusic() {
  if (muted) return; ensureAudio(); if (!AC) return;
  if (musicNodes) { musicNodes.master.gain.setTargetAtTime(0.07, AC.currentTime, 1.5); return; }
  const t0 = AC.currentTime;
  const master = AC.createGain(); master.gain.value = 0; master.connect(AC.destination);

  // a long feedback delay for spacious tails
  const delay = AC.createDelay(1.5); delay.delayTime.value = 0.66;
  const fb = AC.createGain(); fb.gain.value = 0.35;
  const delayMix = AC.createGain(); delayMix.gain.value = 0.5;
  delay.connect(fb); fb.connect(delay); delay.connect(delayMix); delayMix.connect(master);

  // warm master low-pass that slowly breathes open and closed
  const lp = AC.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 600; lp.Q.value = 0.6;
  lp.connect(master); lp.connect(delay);
  const sweep = AC.createOscillator(); sweep.frequency.value = 0.018;   // ~55s cycle
  const sweepAmt = AC.createGain(); sweepAmt.gain.value = 520;
  sweep.connect(sweepAmt); sweepAmt.connect(lp.frequency); sweep.start();

  const oscs = [sweep];

  // deep sub drone (root)
  const sub = AC.createOscillator(); sub.type = "sine"; sub.frequency.value = 55; // A1
  const subG = AC.createGain(); subG.gain.value = 0.5; sub.connect(subG); subG.connect(master);
  sub.start(); oscs.push(sub);

  // detuned chord pad: A2, C#3, E3, B3  (A add9 — open, cinematic)
  const chord = [110, 138.59, 164.81, 246.94];
  chord.forEach((f, i) => {
    // two detuned oscillators per note for width
    [-6, 6].forEach(det => {
      const o = AC.createOscillator(); o.type = i % 2 ? "sawtooth" : "triangle";
      o.frequency.value = f; o.detune.value = det;
      const g = AC.createGain(); g.gain.value = (i === 0 ? 0.16 : 0.10);
      const lfo = AC.createOscillator(); lfo.frequency.value = 0.04 + 0.02 * i;
      const lfoG = AC.createGain(); lfoG.gain.value = 0.05;
      lfo.connect(lfoG); lfoG.connect(g.gain);
      o.connect(g); g.connect(lp); o.start(); lfo.start();
      oscs.push(o, lfo);
    });
  });

  master.gain.setTargetAtTime(0.07, t0, 4.0);   // slow fade in
  musicNodes = { master, oscs, lp };

  // sparse shimmer: occasional bell-like high notes from an A-pentatonic set
  const penta = [880, 1108.73, 1318.51, 1760, 1975.53];   // A5 C#6 E6 A6 B6
  clearInterval(shimmerTimer);
  shimmerTimer = setInterval(() => {
    if (muted || !AC || !musicNodes) return;
    if (Math.random() < 0.55) {
      const f = penta[Math.floor(Math.random() * penta.length)];
      const o = AC.createOscillator(); o.type = "sine"; o.frequency.value = f;
      const g = AC.createGain(); g.gain.value = 0;
      o.connect(g); g.connect(lp);
      const t = AC.currentTime;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.05, t + 0.6);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 4.5);
      o.start(t); o.stop(t + 4.7);
    }
  }, 2600);
}
function stopMusic() {
  clearInterval(shimmerTimer); shimmerTimer = null;
  if (!musicNodes || !AC) return;
  musicNodes.master.gain.setTargetAtTime(0, AC.currentTime, 1.2);
}
function setMuted(on) {
  muted = on;
  if (muted) {
    stopMusic(); stopEngineSound();
    if (AC) { try { AC.suspend(); } catch (e) { } }
  } else {
    ensureAudio(); if (AC) { try { AC.resume(); } catch (e) { } }
    startMusic();
  }
}

/* =========================================================
   INTRO / MESSAGE ENGINE
   ========================================================= */
const introEl = document.getElementById("intro"), msgEl = document.getElementById("introMsg"),
  actionsEl = document.getElementById("introActions"), skipBtn = document.getElementById("skip");
let timers = [], aborted = false, seqToken = 0;
const wait = ms => new Promise(r => timers.push(setTimeout(r, ms)));
function clearTimers() { timers.forEach(t => { if (t && t.clear) t.clear(); else clearTimeout(t); }); timers = []; }

function typeIn(text, cls, speed) {
  return new Promise(res => {
    msgEl.className = (cls || "") + " typing"; msgEl.textContent = ""; let i = 0;
    const iv = setInterval(() => {
      msgEl.textContent = text.slice(0, ++i);
      if (i >= text.length) { clearInterval(iv); res(); }
    }, speed || 58);
    timers.push({ clear: () => clearInterval(iv) });
  });
}
function typeOut(speed) {
  return new Promise(res => {
    let t = msgEl.textContent, i = t.length;
    const iv = setInterval(() => {
      msgEl.textContent = t.slice(0, --i);
      if (i <= 0) { clearInterval(iv); msgEl.className = ""; res(); }
    }, speed || 26);
    timers.push({ clear: () => clearInterval(iv) });
  });
}
function showMsg(text, cls) { msgEl.className = (cls || ""); msgEl.textContent = text; }
function fadeOut() {
  return new Promise(res => {
    msgEl.classList.add("fade-out");
    timers.push(setTimeout(() => { msgEl.classList.remove("fade-out"); msgEl.textContent = ""; res(); }, 520));
  });
}

function showIntro() { introEl.style.display = "flex"; }
function hideIntro() { introEl.style.display = "none"; }
function clearActions() { actionsEl.className = ""; actionsEl.innerHTML = ""; }

/* =========================================================
   MASTER SEQUENCE
   ========================================================= */
async function startMission(fromIntro) {
  seqToken++; const my = seqToken;
  clearTimers(); clearInterval(altTimer); clearInterval(typing); clearStars(); hideStarLine();
  rocketFlying = false;
  win.classList.remove("open"); winScrim.classList.remove("open");
  aborted = false; clearActions(); msgEl.className = ""; msgEl.textContent = "";
  showIntro(); skipBtn.style.display = "";
  resetRocket();
  document.getElementById("hud").classList.remove("show");

  if (fromIntro && !REDUCED_MOTION) {
    await typeIn("Welcome to my journey", null, 56); if (my !== seqToken) return;
    await wait(1200); await typeOut(24); await wait(250);
    await typeIn("Get ready for lift-off", null, 56); if (my !== seqToken) return;
    await wait(1200); await typeOut(24); await wait(300);
    for (let n = 10; n >= 1; n--) {
      showMsg(String(n), "count"); beep(n === 1 ? 880 : 440, 0.16); await wait(520);
      await fadeOut(); if (my !== seqToken) return; await wait(120);
    }
    await typeIn("LIFT-OFF", "liftoff", 80); beep(660, 0.4); if (my !== seqToken) return;
    await wait(1000); await fadeOut();
  }
  if (my !== seqToken) return;
  beginFlight();
}
skipBtn.addEventListener("click", () => { if (introEl.style.display !== "none") { clearTimers(); msgEl.className = ""; msgEl.textContent = ""; beginFlight(); } });

/* =========================================================
   FLIGHT STATE MACHINE
   ========================================================= */
const hudAlt = document.getElementById("alt"), sepNote = document.getElementById("sepNote"),
  resumeEl = document.getElementById("resume");
let stageIdx = 0, altitude = 0, altTimer = null;

const ALL_FLAMES = ["rBooster", "lBooster", "core"];   // tail engines only (upper-stage flame would sit at the nose)
function beginFlight() {
  hideIntro(); skipBtn.style.display = "none";
  document.getElementById("hud").classList.add("show");
  paused = false; stageIdx = 0; altitude = 0;
  if (rocketGroup) {
    rocketGroup.visible = true;
    rocketGroup.position.set(-6.4, 0, 0);
    rkPrevX = -6.4; rkPrevY = 0; rkBank = 0;   // reset motion state
  }
  // rocket is ONE whole vehicle — all engines lit, sound continuous for the whole journey
  burnFlames(ALL_FLAMES);
  startEngineSound();
  // slide the rocket in from off-frame-left to its holding lane
  rocketFlying = false;
  const start = performance.now(), from = -11, to = -6.4;
  if (rocketGroup) rocketGroup.position.x = from;
  (function rise(now) {
    const k = Math.min(1, (now - start) / 2200);
    if (rocketGroup) rocketGroup.position.x = from + (to - from) * ease(k);
    if (k < 1) requestAnimationFrame(rise); else rocketFlying = true;
  })(performance.now());
  altClimb();
  // first star begins its approach; window opens when it reaches the rocket
  timers.push(setTimeout(sendNextStar, 2600));
}
function ease(k) { return 1 - Math.pow(1 - k, 3); }
function altClimb() {
  clearInterval(altTimer);
  altTimer = setInterval(() => {
    altitude += Math.random() * 4 + 2;
    hudAlt.textContent = altitude.toFixed(1).padStart(5, "0");
  }, 120);
}
// dispatch the star for the current stage; it flies in and triggers onStarReached
function sendNextStar() {
  if (stageIdx >= STAGES.length) { finishFlight(); return; }
  activeStar = spawnStar(stageIdx);
  const st = STAGES[stageIdx];
  sepNote.textContent = "◦ APPROACHING · " + st.title.toUpperCase();
  sepNote.classList.remove("flash"); void sepNote.offsetWidth; sepNote.classList.add("flash");
}
// called from updateStars when the active star reaches the pass point
function onStarReached(star) {
  if (star !== activeStar) return;
  const st = STAGES[stageIdx];
  beep(720, 0.14); timers.push(setTimeout(() => beep(960, 0.1), 90));   // soft arrival chime (not a thud)
  showStarLine(star);                 // line from star to the (offset) window
  openWindow(st);                     // rocket keeps flying; sound never stops
}
// after the window closes: retract line, let the star drift away, advance
function afterClose() {
  hideStarLine();
  if (activeStar) { activeStar.userData.state = "leaving"; activeStar = null; }
  stageIdx++;
  if (stageIdx < STAGES.length) {
    resumeEl.classList.add("show");
    timers.push(setTimeout(() => resumeEl.classList.remove("show"), 1500));
    timers.push(setTimeout(sendNextStar, 1800));   // next star only after this one closed
  } else {
    finishFlight();
  }
}
function finishFlight() {
  clearInterval(altTimer);
  sepNote.textContent = "◦ DESTINATION REACHED"; sepNote.classList.remove("flash"); void sepNote.offsetWidth; sepNote.classList.add("flash");
  // arrival: rocket cruises off toward the destination, engines wind down
  timers.push(setTimeout(() => {
    rocketFlying = false;                 // hand control of x to the fly-off tween
    if (rocketGroup) {
      const s = performance.now(), x0 = rocketGroup.position.x;
      (function fly(now) {
        const k = Math.min(1, (now - s) / 1600);
        if (rocketGroup) { rocketGroup.position.x = x0 + k * 18; }
        if (k < 1) requestAnimationFrame(fly); else { if (rocketGroup) rocketGroup.visible = false; }
      })(performance.now());
    }
    burnFlames([]); stopEngineSound();
  }, 900));
  timers.push(setTimeout(connectPhase, 1900));
}

/* =========================================================
   CONNECT PHASE (message + debris + connect window)
   ========================================================= */
async function connectPhase() {
  seqToken++; const my = seqToken;
  showIntro(); paused = true;
  await typeIn("Connect with me", null, 60); if (my !== seqToken) return;
  await wait(900);
  // reveal connect links below the message
  actionsEl.innerHTML =
    `<div class="connect-wrap">
       <div class="connect-list" style="min-width:min(420px,86vw)">
         <a href="https://www.linkedin.com/in/rumen-vasilev-a79974264/" target="_blank" rel="noopener">
           <span class="ci"><svg viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.07c.63-1.2 2.17-2.47 4.47-2.47C21.4 7.73 24 10 24 14.6V24h-5v-8.3c0-2-.04-4.55-2.77-4.55-2.78 0-3.2 2.17-3.2 4.4V24h-5V8z"/></svg></span>
           <span class="cv">Rumen Vasilev</span><span class="ck mono">LINKEDIN</span></a>
         <a href="https://github.com/rumenvasil3v" target="_blank" rel="noopener">
           <span class="ci"><svg viewBox="0 0 24 24"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.52.1-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.3-1.23 3.3-1.23.63 1.65.23 2.87.1 3.17.77.84 1.24 1.92 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.56 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z"/></svg></span>
           <span class="cv">rumenvasil3v</span><span class="ck mono">GITHUB</span></a>
         <a href="mailto:rumenstvass@gmail.com">
           <span class="ci"><svg viewBox="0 0 24 24"><path d="M2 4h20a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V6a2 2 0 012-2zm10 7L2.2 6h19.6L12 11zm0 2.2L2 7v11h20V7l-10 6.2z"/></svg></span>
           <span class="cv">rumenstvass@gmail.com</span><span class="ck mono">EMAIL</span></a>
       </div>
       <button class="txt-btn accent" id="toEnd">Continue →</button>
     </div>`;
  actionsEl.classList.add("show");
  document.getElementById("toEnd").onclick = () => { endingPhase(); };
}

/* =========================================================
   ENDING PHASE (thank you / repeat / abort / farewell)
   ========================================================= */
async function endingPhase() {
  seqToken++; const my = seqToken; clearActions(); paused = true;
  await typeIn("Thank you for being part of my journey", null, 44); if (my !== seqToken) return;
  await wait(1400); await fadeOut(); if (my !== seqToken) return; await wait(250);
  await typeIn("Do you want to play my journey again?", null, 44); if (my !== seqToken) return;
  await wait(300);
  actionsEl.innerHTML =
    `<button class="txt-btn accent" id="again">↻ Start again</button>
     <button class="txt-btn" id="abort">✕ Abort</button>`;
  actionsEl.classList.add("show");
  document.getElementById("again").onclick = () => { startMission(true); };
  document.getElementById("abort").onclick = () => { farewell(); };
}
async function farewell() {
  seqToken++; const my = seqToken; clearActions(); stopEngineSound();
  await fadeOut();
  await typeIn("Farewell, friend. Have a safe journey back home", null, 48); if (my !== seqToken) return;
  actionsEl.innerHTML = `<button class="txt-btn accent" id="againF">↻ Repeat the journey</button>`;
  actionsEl.classList.add("show");
  document.getElementById("againF").onclick = () => { startMission(true); };
}

/* =========================================================
   INFO WINDOW + TYPEWRITER
   ========================================================= */
const win = document.getElementById("win"), winScrim = document.getElementById("winScrim"),
  winTag = document.getElementById("winTag"), winSep = document.getElementById("winSep"),
  winBody = document.getElementById("winBody"), winClose = document.getElementById("winClose");
let typing = null, projIdx = 0;

function openWindow(st) {
  winTag.textContent = st.tag; winSep.textContent = st.sep; winBody.innerHTML = "";
  winScrim.classList.add("open"); win.classList.add("open");
  const h = document.createElement("h2"); h.textContent = st.title;
  const line = document.createElement("div"); line.className = "type-line caret";
  winBody.appendChild(h); winBody.appendChild(line);
  typeText(line, st.type, () => {
    line.classList.remove("caret");
    if (st.projects) { mountProjects(); }
    else if (st.extra) {
      const ex = document.createElement("div"); ex.className = "reveal"; ex.innerHTML = st.extra;
      winBody.appendChild(ex); requestAnimationFrame(() => ex.classList.add("in"));
    }
  });
}
function typeText(el, text, done) {
  let i = 0; clearInterval(typing);
  typing = setInterval(() => {
    el.textContent = text.slice(0, ++i); winBody.scrollTop = winBody.scrollHeight;
    if (i >= text.length) { clearInterval(typing); if (done) done(); }
  }, 16);
}
function mountProjects() {
  projIdx = 0;
  const wrap = document.createElement("div"); wrap.className = "proj-view reveal";
  wrap.innerHTML = `<div class="proj-card" id="pc"></div>
    <div class="proj-nav"><button id="pPrev">← Prev</button><div class="dots" id="pDots"></div><button id="pNext">Next →</button></div>`;
  winBody.appendChild(wrap); requestAnimationFrame(() => wrap.classList.add("in"));
  document.getElementById("pPrev").onclick = () => { projIdx = (projIdx - 1 + PROJECTS.length) % PROJECTS.length; renderProj(); };
  document.getElementById("pNext").onclick = () => { projIdx = (projIdx + 1) % PROJECTS.length; renderProj(); };
  renderProj();
}
function renderProj() {
  const p = PROJECTS[projIdx];
  document.getElementById("pc").innerHTML =
    `<div class="pt mono">${p.t}</div><h3>${p.n}</h3><p>${p.d}</p>
     <div class="stk">${p.s.map(x => `<span>${x}</span>`).join("")}</div>
     <a href="${p.u}" target="_blank" rel="noopener">View source →</a>`;
  document.getElementById("pDots").innerHTML = PROJECTS.map((_, i) => `<i class="${i === projIdx ? 'on' : ''}"></i>`).join("");
}
function closeWindow() {
  clearInterval(typing); win.classList.remove("open"); winScrim.classList.remove("open");
  timers.push(setTimeout(afterClose, 300));
}
winClose.addEventListener("click", closeWindow);
winScrim.addEventListener("click", closeWindow);
document.addEventListener("keydown", e => { if (e.key === "Escape" && win.classList.contains("open")) closeWindow(); });

/* ---- sound toggle ---- */
(function () {
  const btn = document.getElementById("sound"),
    onI = document.getElementById("soundOn"),
    offI = document.getElementById("soundOff");
  btn.addEventListener("click", () => {
    const nowMuted = !muted;
    setMuted(nowMuted);
    btn.classList.toggle("off", nowMuted);
    onI.style.display = nowMuted ? "none" : "";
    offI.style.display = nowMuted ? "" : "none";
  });
})();

/* =========================================================
   GO
   ========================================================= */
startMission(true);
