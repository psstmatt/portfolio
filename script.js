const sequence = [
  { key: 'ArrowUp', label: '↑' },
  { key: 'ArrowUp', label: '↑' },
  { key: 'ArrowDown', label: '↓' },
  { key: 'ArrowDown', label: '↓' },
  { key: 'ArrowLeft', label: '←' },
  { key: 'ArrowRight', label: '→' },
  { key: 'ArrowLeft', label: '←' },
  { key: 'ArrowRight', label: '→' },
  { key: 'b', label: 'B' },
  { key: 'a', label: 'A' }
];

const overlay = document.getElementById('konami-overlay');
const closeButton = document.getElementById('konami-close');
const keyRail = document.getElementById('konami-keys');
const stage = document.getElementById('konami-stage');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const threeReady = import('https://unpkg.com/three@0.184.0/build/three.module.js')
  .catch(function () {
    return null;
  });

let index = 0;
let missTimer = 0;
let hideTimer = 0;
let renderer = null;
let scene = null;
let camera = null;
let material = null;
let animationFrame = 0;
let startTime = 0;

function normalizeKey(event) {
  if (event.key.length === 1) {
    return event.key.toLowerCase();
  }

  return event.key;
}

function renderKeys() {
  keyRail.innerHTML = '';

  sequence.forEach(function (item, position) {
    const key = document.createElement('span');
    key.className = 'konami-key';
    key.textContent = item.label;
    key.setAttribute('aria-hidden', 'true');

    if (position < index) {
      key.classList.add('is-hit');
    } else if (position === index) {
      key.classList.add('is-next');
    }

    keyRail.appendChild(key);
  });
}

function showRail() {
  window.clearTimeout(hideTimer);
  keyRail.classList.add('is-visible');
  keyRail.setAttribute('aria-hidden', 'false');
  renderKeys();
}

function hideRailSoon() {
  window.clearTimeout(hideTimer);
  hideTimer = window.setTimeout(function () {
    keyRail.classList.remove('is-visible');
    keyRail.setAttribute('aria-hidden', 'true');
  }, 1400);
}

function spark(position) {
  const keys = keyRail.querySelectorAll('.konami-key');
  const current = keys[position];

  if (!current || reducedMotion.matches) {
    return;
  }

  for (let i = 0; i < 9; i += 1) {
    const sparkEl = document.createElement('span');
    const angle = (Math.PI * 2 * i) / 9;
    const distance = 28 + Math.random() * 18;

    sparkEl.className = 'konami-spark';
    sparkEl.style.setProperty('--spark-x', Math.cos(angle) * distance + 'px');
    sparkEl.style.setProperty('--spark-y', Math.sin(angle) * distance + 'px');
    current.appendChild(sparkEl);
    sparkEl.addEventListener('animationend', function () {
      sparkEl.remove();
    });
  }
}

function flashMiss() {
  window.clearTimeout(missTimer);
  showRail();
  keyRail.querySelectorAll('.konami-key').forEach(function (key) {
    key.classList.add('is-miss');
  });
  missTimer = window.setTimeout(function () {
    keyRail.querySelectorAll('.konami-key').forEach(function (key) {
      key.classList.remove('is-miss', 'is-hit');
    });
    renderKeys();
    hideRailSoon();
  }, 360);
}

function openOverlay() {
  overlay.hidden = false;
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  closeButton.focus();
  startShader();
}

function closeOverlay() {
  overlay.hidden = true;
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  index = 0;
  renderKeys();
  hideRailSoon();
  stopShader();
}

async function startShader() {
  stopShader();

  if (reducedMotion.matches) {
    return;
  }

  const THREE = await threeReady;

  if (!THREE || overlay.hidden) {
    return;
  }

  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    stage.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;

        void main() {
          vec2 uv = gl_FragCoord.xy / resolution.xy;
          vec2 center = uv - 0.5;
          center.x *= resolution.x / resolution.y;

          float radius = length(center);
          float angle = atan(center.y, center.x);
          float rings = sin(radius * 42.0 - time * 5.8);
          float spokes = sin(angle * 9.0 + time * 2.0);
          float pulse = smoothstep(0.72, 0.0, radius) * (0.5 + 0.5 * rings);
          float flare = pow(max(0.0, 1.0 - radius), 3.0);

          vec3 cyan = vec3(0.0, 1.0, 0.94);
          vec3 violet = vec3(0.44, 0.0, 1.0);
          vec3 gold = vec3(1.0, 0.9, 0.0);
          vec3 color = mix(violet, cyan, pulse);
          color += gold * max(0.0, spokes) * flare;
          color += cyan * flare * 1.5;

          float alpha = clamp(pulse * 0.85 + flare * 0.9, 0.0, 0.95);
          gl_FragColor = vec4(color, alpha);
        }
      `
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);
    startTime = performance.now();
    animateShader();
  } catch (error) {
    stopShader();
  }
}

function animateShader() {
  if (!renderer || !material || !scene || !camera) {
    return;
  }

  material.uniforms.time.value = (performance.now() - startTime) / 1000;
  renderer.render(scene, camera);
  animationFrame = window.requestAnimationFrame(animateShader);
}

function resizeShader() {
  if (!renderer || !material) {
    return;
  }

  renderer.setSize(window.innerWidth, window.innerHeight);
  material.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
}

function stopShader() {
  if (animationFrame) {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = 0;
  }

  if (renderer) {
    renderer.dispose();
    if (renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  }

  renderer = null;
  scene = null;
  camera = null;
  material = null;
}

document.addEventListener('keydown', function (event) {
  if (!overlay.hidden && event.key === 'Escape') {
    closeOverlay();
    return;
  }

  const currentKey = normalizeKey(event);
  const expectedKey = sequence[index].key;

  if (currentKey === expectedKey) {
    showRail();
    index += 1;
    renderKeys();
    spark(index - 1);

    if (index === sequence.length) {
      window.setTimeout(function () {
        openOverlay();
      }, reducedMotion.matches ? 0 : 180);
      index = 0;
    }

    return;
  }

  if (index > 0) {
    index = currentKey === sequence[0].key ? 1 : 0;
    flashMiss();
    return;
  }

  if (currentKey === sequence[0].key) {
    index = 1;
    showRail();
    renderKeys();
    spark(0);
  }
});

closeButton.addEventListener('click', closeOverlay);
window.addEventListener('resize', resizeShader);
renderKeys();
