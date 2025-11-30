const db = {
    'vietnam': {
        bg: 'assets/img/bg_vietnam.jpg',
        foods: [
            {
                name: "Phở Bò", t: "4h", c: "450", d: "Khó",
                img: "assets/img/vn_pho.jpg",
                desc: "Món ăn quốc hồn quốc túy của Việt Nam với nước dùng thanh ngọt từ xương bò hầm kỹ, bánh phở mềm dai và thịt bò tươi ngon.",
                ingredients: ["500g Bánh phở", "1kg Xương bò", "500g Thịt bò tái", "Thảo quả, quế, hồi", "Hành tây, hành lá"],
                steps: ["Hầm xương bò 4-6 tiếng lấy nước dùng.", "Nướng gừng, hành tây, gia vị rồi thả vào nồi.", "Trần bánh phở, xếp thịt, chan nước dùng sôi."]
            },
            {
                name: "Bánh Mì", t: "30m", c: "400", d: "Dễ",
                img: "assets/img/vn_banhmi.jpg",
                desc: "Sự hòa quyện tuyệt vời giữa vỏ bánh giòn rụm và nhân thịt, pate, dưa góp đặc trưng.",
                ingredients: ["Bánh mì nóng giòn", "Pate gan", "Thịt nguội/Xá xíu", "Dưa leo, ngò rí", "Đồ chua (cà rốt, củ cải)"],
                steps: ["Nướng nóng bánh mì.", "Phết pate, bơ.", "Xếp nhân thịt, dưa leo, đồ chua.", "Thêm ngò rí và tương ớt."]
            },
            {
                name: "Bún Chả", t: "1h", c: "550", d: "Trung bình",
                img: "assets/img/vn_buncha.jpg",
                desc: "Đặc sản Hà Nội với thịt nướng than hoa thơm lừng ăn kèm bún và nước chấm chua ngọt.",
                ingredients: ["500g Thịt ba chỉ", "500g Bún tươi", "Đu đủ xanh, cà rốt", "Nước mắm ngon", "Rau sống các loại"],
                steps: ["Ướp thịt với gia vị và nước hàng.", "Nướng thịt trên than hoa.", "Pha nước chấm chua ngọt.", "Ăn kèm bún và rau."]
            },
            {
                name: "Gỏi Cuốn", t: "40m", c: "200", d: "Dễ",
                img: "assets/img/vn_goicuon.jpg",
                desc: "Món khai vị thanh mát, healthy với tôm thịt và rau tươi cuốn trong bánh tráng mỏng.",
                ingredients: ["Bánh tráng", "Tôm luộc", "Thịt ba chỉ luộc", "Bún tươi", "Xà lách, hẹ"],
                steps: ["Làm ướt bánh tráng.", "Xếp rau, bún, thịt, tôm lên.", "Cuộn chặt tay.", "Chấm tương đen hoặc mắm nêm."]
            },
            {
                name: "Bánh Xèo", t: "1h", c: "600", d: "Khó",
                img: "assets/img/vn_banhxeo.jpg",
                desc: "Bánh chiên giòn rụm màu vàng nghệ, nhân tôm thịt giá đỗ, ăn kèm rau rừng.",
                ingredients: ["Bột bánh xèo", "Tôm, thịt ba chỉ", "Giá đỗ", "Nước cốt dừa", "Rau cải xanh"],
                steps: ["Pha bột với nước cốt dừa, hành lá.", "Xào sơ nhân tôm thịt.", "Đổ bột vào chảo nóng, thêm nhân.", "Chiên giòn, gập đôi."]
            },
            {
                name: "Cà Phê Sữa", t: "15m", c: "150", d: "Dễ",
                img: "assets/img/vn_coffee.jpg",
                desc: "Thức uống nổi tiếng thế giới với vị đắng đậm của Robusta và ngọt béo của sữa đặc.",
                ingredients: ["Cà phê phin", "Sữa đặc", "Đá viên", "Nước sôi"],
                steps: ["Tráng nóng phin.", "Cho cafe và nước sôi vào ủ.", "Thêm sữa đặc vào ly.", "Khuấy đều và thêm đá."]
            }
        ]
    },
    'sushi': {
        bg: 'assets/img/bg_sushi.jpg',
        foods: [
            { name: "Tuna Sashimi", t: "10m", c: "150", d: "Trung bình", img: "assets/img/sushi_tuna.jpg", ingredients: ["200g Cá ngừ", "Củ cải trắng", "Lá tía tô", "Wasabi"], steps: ["Rửa cá ngừ sạch", "Thái lát mỏng 0.5cm", "Bày ra đĩa cùng tía tô"] },
            { name: "Salmon Roll", t: "20m", c: "300", d: "Khó", img: "assets/img/sushi_roll.jpg" },
            { name: "Ebi Tempura", t: "15m", c: "250", d: "Trung bình", img: "assets/img/sushi_ebi.jpg" },
            { name: "Unagi Don", t: "30m", c: "500", d: "Khó", img: "assets/img/sushi_unagi.jpg" },
            { name: "Saba Nigiri", t: "10m", c: "180", d: "Dễ", img: "assets/img/sushi_saba.jpg" },
            { name: "Fugu Sashimi", t: "15m", c: "120", d: "Rất khó", img: "assets/img/sushi_fugu.jpg" },
            { name: "Tamago", t: "5m", c: "100", d: "Dễ", img: "assets/img/sushi_tamago.jpg" }
        ]
    },
    'pasta': {
        bg: 'assets/img/bg_pasta.jpg',
        foods: [
            { name: "Carbonara", t: "25m", c: "500", d: "Trung bình", img: "assets/img/pasta_carbonara.jpg" },
            { name: "Pesto", t: "15m", c: "400", d: "Dễ", img: "assets/img/pasta_pesto.jpg" },
            { name: "Bolognese", t: "40m", c: "600", d: "Trung bình", img: "assets/img/pasta_bolognese.jpg" },
            { name: "Lasagna", t: "50m", c: "700", d: "Khó", img: "assets/img/pasta_lasagna.jpg" },
            { name: "Alfredo", t: "30m", c: "550", d: "Dễ", img: "assets/img/pasta_alfredo.jpg" },
            { name: "Ravioli", t: "35m", c: "450", d: "Khó", img: "assets/img/pasta_ravioli.jpg" }
        ]
    },
    'bbq': {
        bg: 'assets/img/bg_bbq.jpg',
        foods: [
            { name: "Smoked Ribs", t: "2h", c: "800", d: "Khó", img: "assets/img/bbq_ribs.jpg" },
            { name: "Beef Steak", t: "30m", c: "600", d: "Trung bình", img: "assets/img/bbq_steak.jpg" },
            { name: "Chicken Wings", t: "40m", c: "500", d: "Dễ", img: "assets/img/bbq_wings.jpg" },
            { name: "Grilled Skewers", t: "20m", c: "350", d: "Dễ", img: "assets/img/bbq_skewers.jpg" }
        ]
    },
    'dessert': {
        bg: 'assets/img/bg_dessert.jpg',
        foods: [
            { name: "Cheesecake", t: "20m", c: "400", d: "Trung bình", img: "assets/img/des_cheesecake.jpg" },
            { name: "Tiramisu", t: "30m", c: "350", d: "Khó", img: "assets/img/des_tiramisu.jpg" },
            { name: "Macarons", t: "5m", c: "150", d: "Rất khó", img: "assets/img/des_macarons.jpg" }
        ]
    },
    'drinks': {
        bg: 'assets/img/bg_drinks.jpg',
        foods: [
            { name: "Mojito", t: "5m", c: "100", d: "Dễ", img: "assets/img/drk_mojito.jpg" },
            { name: "Red Cocktail", t: "5m", c: "150", d: "Dễ", img: "assets/img/drk_red.jpg" },
            { name: "Blue Lagoon", t: "5m", c: "180", d: "Dễ", img: "assets/img/drk_blue.jpg" }
        ]
    }
};

const categoryKeys = Object.keys(db);
const ITEM_WIDTH = 350;
let currentScroll = 0, targetScroll = 0, isDragging = false, startX = 0;
let activeKey = 'vietnam', lastKeyIndex = 0, foodIndex = 0;
let bgToggle = true, lastWheelTime = 0;
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

const menuTrack = document.getElementById('menuTrack');
const rulerTrack = document.getElementById('rulerTrack');
const viewport = document.getElementById('menuViewport');

function initMenu() {
    menuTrack.innerHTML = '';
    const allKeys = [...categoryKeys, ...categoryKeys, ...categoryKeys];
    allKeys.forEach((key, index) => {
        const el = document.createElement('div');
        el.className = 'cat-item';
        el.innerText = key;
        el.dataset.key = key;
        const offsetIndex = index - categoryKeys.length;
        const initialPos = offsetIndex * ITEM_WIDTH;
        el.dataset.pos = initialPos;
        el.onclick = () => { targetScroll = -initialPos; };
        menuTrack.appendChild(el);
    });
    update();
}

function update() {
    currentScroll += (targetScroll - currentScroll) * 0.1;
    const singleSetWidth = categoryKeys.length * ITEM_WIDTH;
    if (currentScroll > singleSetWidth / 2) { currentScroll -= singleSetWidth; targetScroll -= singleSetWidth; }
    if (currentScroll < -singleSetWidth / 2) { currentScroll += singleSetWidth; targetScroll += singleSetWidth; }
    rulerTrack.style.backgroundPositionX = `${currentScroll * 0.8}px`;

    const items = document.querySelectorAll('.cat-item');
    let closestDist = Infinity, closestItem = null;

    items.forEach(item => {
        const basePos = parseFloat(item.dataset.pos);
        const realPos = basePos + currentScroll;
        const dist = Math.abs(realPos);
        let scale = 0.6, y = 15;
        item.classList.remove('active', 'neighbor');
        if (dist < ITEM_WIDTH / 2) {
            if (dist < closestDist) { closestDist = dist; closestItem = item; }
            const ratio = 1 - (dist / (ITEM_WIDTH / 2));
            scale = 0.6 + (0.6 * ratio);
            y = 15 - (15 * ratio);
        } else if (dist < ITEM_WIDTH * 1.5) {
            item.classList.add('neighbor');
            scale = 0.8;
            y = 10;
        }
        item.style.transform = `translate3d(calc(-50% + ${realPos}px), calc(-50% + ${y}px), 0) scale(${scale})`;
    });

    if (closestItem) {
        closestItem.classList.add('active');
        const key = closestItem.dataset.key;
        if (key !== activeKey && Math.abs(targetScroll - currentScroll) < 10) {
            changeCategory(key);
        }
    }
    requestAnimationFrame(update);
}

viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastWheelTime < 50) return;
    lastWheelTime = now;
    targetScroll -= Math.sign(e.deltaY) * ITEM_WIDTH;
}, { passive: false });

viewport.addEventListener('mousedown', (e) => { isDragging = true; startX = e.clientX; viewport.style.cursor = 'grabbing'; });
window.addEventListener('mousemove', (e) => { if (!isDragging) return; targetScroll += (e.clientX - startX) * 1.5; startX = e.clientX; });
window.addEventListener('mouseup', () => { isDragging = false; viewport.style.cursor = 'grab'; targetScroll = Math.round(targetScroll / ITEM_WIDTH) * ITEM_WIDTH; });

function changeCategory(key, forcedFoodIndex = null) {
    const newKeyIndex = categoryKeys.indexOf(key);
    let direction = 'right';
    if (lastKeyIndex === 0 && newKeyIndex === categoryKeys.length - 1) direction = 'left';
    else if (lastKeyIndex === categoryKeys.length - 1 && newKeyIndex === 0) direction = 'right';
    else if (newKeyIndex > lastKeyIndex) direction = 'right';
    else direction = 'left';

    lastKeyIndex = newKeyIndex;
    activeKey = key;
    foodIndex = (forcedFoodIndex !== null) ? forcedFoodIndex : Math.floor(Math.random() * db[activeKey].foods.length);

    const bg1 = document.getElementById('bg-1');
    const bg2 = document.getElementById('bg-2');
    const url = `url('${db[key].bg}')`;
    let nextBg = bgToggle ? bg2 : bg1;
    let currBg = bgToggle ? bg1 : bg2;

    gsap.killTweensOf(nextBg); gsap.killTweensOf(currBg);
    nextBg.style.backgroundImage = url; nextBg.style.zIndex = 1; currBg.style.zIndex = 0;

    const duration = 0.8;
    if (direction === 'right') {
        gsap.fromTo(nextBg, { x: '20%', opacity: 0, scale: 1.4 }, { x: '0%', opacity: 1, scale: 1.2, duration: duration });
        gsap.to(currBg, { x: '-20%', opacity: 0, scale: 1.0, duration: duration });
    } else {
        gsap.fromTo(nextBg, { x: '-20%', opacity: 0, scale: 1.4 }, { x: '0%', opacity: 1, scale: 1.2, duration: duration });
        gsap.to(currBg, { x: '20%', opacity: 0, scale: 1.0, duration: duration });
    }
    bgToggle = !bgToggle;
    createFoodCards();
}

function createFoodCards() {
    const stage = document.getElementById('foodStage');
    const foods = db[activeKey].foods;
    const total = foods.length;
    stage.innerHTML = '';
    const leftIndex = (foodIndex - 1 + total) % total;
    const rightIndex = (foodIndex + 1) % total;

    foods.forEach((f, i) => {
        const card = document.createElement('div');
        const cardInner = document.createElement('div');
        cardInner.className = 'food-card-inner';
        cardInner.style.backgroundImage = `url('${f.img}')`;
        card.appendChild(cardInner);

        let posClass = 'hidden';
        if (i === foodIndex) posClass = 'center';
        else if (i === leftIndex) posClass = 'left';
        else if (i === rightIndex) posClass = 'right';
        card.className = `food-card ${posClass}`;

        if (posClass !== 'hidden') cardInner.style.animationDelay = (posClass === 'center') ? '0s' : '0.2s';
        else cardInner.style.animation = 'none';

        card.onclick = () => {
            const offset = i - foodIndex;
            if (offset !== 0) { foodIndex = i; updateCardPositions(); }
            else { app.openDetail(f); }
        };
        stage.appendChild(card);
    });
    updateCardPositions(true);
}

function updateCardPositions(isInit = false) {
    const stage = document.getElementById('foodStage');
    const info = document.getElementById('infoLayer');
    const cards = stage.children;
    const foods = db[activeKey].foods;
    const total = foods.length;
    const leftIndex = (foodIndex - 1 + total) % total;
    const rightIndex = (foodIndex + 1) % total;

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        card.classList.remove('center', 'left', 'right', 'hidden');
        if (i === foodIndex) card.classList.add('center');
        else if (i === leftIndex) card.classList.add('left');
        else if (i === rightIndex) card.classList.add('right');
        else card.classList.add('hidden');
        if (!isInit) card.querySelector('.food-card-inner').style.animation = 'none';
    }
    const cur = foods[foodIndex];
    if (cur) info.innerHTML = `<h1 class="info-title">${cur.name}</h1><div class="info-meta"><i class="far fa-clock"></i> ${cur.t} | <i class="fas fa-fire"></i> ${cur.c} Kcal</div>`;
}

const app = {
    scrollToSection: (id) => {
        app.closeDetail();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    },

    checkAuth: () => {
        if (currentUser) {
            document.getElementById('authHeader').classList.add('hidden');
            document.getElementById('userHeader').classList.remove('hidden');
            document.getElementById('userNameDisplay').innerText = `Hi, ${currentUser.name}`;
            app.renderStaticList('favorites');
            app.renderStaticList('history');
        } else {
            document.getElementById('authHeader').classList.remove('hidden');
            document.getElementById('userHeader').classList.add('hidden');
            document.getElementById('favResults').innerHTML = '<p class="empty-msg">Đăng nhập để xem danh sách yêu thích.</p>';
            document.getElementById('histResults').innerHTML = '<p class="empty-msg">Đăng nhập để xem lịch sử.</p>';
        }
    },
    switchAuth: (type) => {
        if (type === 'login') {
            document.getElementById('loginForm').classList.remove('hidden');
            document.getElementById('registerForm').classList.add('hidden');
        } else {
            document.getElementById('loginForm').classList.add('hidden');
            document.getElementById('registerForm').classList.remove('hidden');
        }
    },
    togglePass: (id, icon) => {
        const input = document.getElementById(id);
        if (input.type === "password") {
            input.type = "text";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        } else {
            input.type = "password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
    },
    login: () => {
        const email = document.getElementById('logEmail').value;
        const pass = document.getElementById('logPass').value;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.pass === pass);
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            app.checkAuth();
            Toastify({ text: "Đăng nhập thành công!", backgroundColor: "#76ff03", style: { color: "#000" } }).showToast();
            app.scrollToSection('home');

            document.getElementById('logEmail').value = '';
            document.getElementById('logPass').value = '';
        } else {
            Toastify({ text: "Sai email hoặc mật khẩu!", backgroundColor: "#ff5f6d" }).showToast();
        }
    },
    register: () => {
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const pass = document.getElementById('regPass').value;
        const passRegex = /^(?=.*[A-Za-z0-9]).{8,}$/;
        if (!passRegex.test(pass)) { Toastify({ text: "Mật khẩu >= 8 ký tự!", backgroundColor: "#ff5f6d" }).showToast(); return; }
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(u => u.email === email)) { Toastify({ text: "Email đã tồn tại!", backgroundColor: "#ff5f6d" }).showToast(); return; }

        users.push({ name, email, pass });
        localStorage.setItem('users', JSON.stringify(users));
        Toastify({ text: "Đăng ký thành công!", backgroundColor: "#76ff03", style: { color: "#000" } }).showToast();
        app.switchAuth('login');

        document.getElementById('regName').value = '';
        document.getElementById('regEmail').value = '';
        document.getElementById('regPass').value = '';
    },
    logout: () => {
        currentUser = null;
        localStorage.removeItem('currentUser');
        app.checkAuth();
        app.scrollToSection('home');
    },

    handleSearch: (val) => {
        const container = document.getElementById('searchResults');
        if (!val) { container.innerHTML = '<p class="empty-msg">Nhập từ khóa để tìm kiếm...</p>'; return; }
        const key = val.toLowerCase();
        let res = [];
        Object.keys(db).forEach(cat => {
            db[cat].foods.forEach(f => {
                if (f.name.toLowerCase().includes(key)) res.push(f);
            });
        });

        if (res.length === 0) container.innerHTML = '<p class="empty-msg">Không tìm thấy món nào.</p>';
        else {
            container.innerHTML = '';
            res.forEach(f => container.appendChild(app.createGridItem(f)));
        }
    },

    renderStaticList: (type) => {
        const container = document.getElementById(type === 'favorites' ? 'favResults' : 'histResults');
        const data = JSON.parse(localStorage.getItem(type)) || [];
        container.innerHTML = '';
        if (data.length === 0) container.innerHTML = '<p class="empty-msg">Chưa có dữ liệu.</p>';
        else data.forEach(f => container.appendChild(app.createGridItem(f)));
    },
    createGridItem: (f) => {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.innerHTML = `
            <div class="grid-img" style="background-image: url('${f.img}')"></div>
            <div class="grid-info">
                <h4>${f.name}</h4>
                <p>${f.t} | ${f.d || 'Dễ'}</p>
            </div>
        `;
        div.onclick = () => app.openDetail(f);
        return div;
    },

    startRandom: () => {
        app.scrollToSection('home');

        isDragging = true;

        const rIndex = Math.floor(Math.random() * categoryKeys.length);
        const rKey = categoryKeys[rIndex];

        const currentIdx = categoryKeys.indexOf(activeKey);
        const loopCount = 3;
        const totalItems = categoryKeys.length;

        let stepDiff = rIndex - currentIdx;
        if (stepDiff <= 0) stepDiff += totalItems;
        stepDiff += (loopCount * totalItems);

        const finalTarget = targetScroll - (stepDiff * ITEM_WIDTH);

        const proxy = { val: targetScroll };

        gsap.to(proxy, {
            val: finalTarget,
            duration: 3.5,
            ease: "power2.out",
            onUpdate: function () {
                targetScroll = this.targets()[0].val;
            },
            onComplete: function () {
                isDragging = false;
                targetScroll = Math.round(targetScroll / ITEM_WIDTH) * ITEM_WIDTH;

                activeKey = rKey;
                const foods = db[activeKey].foods;
                const mid = Math.floor(foods.length / 2);
                changeCategory(activeKey, mid);

                setTimeout(() => {
                    app.openDetail(foods[mid]);
                }, 500);
            }
        });
    },

    openDetail: (food) => {
        const overlay = document.getElementById('detailOverlay');
        document.getElementById('detailImg').style.backgroundImage = `url('${food.img}')`;
        document.getElementById('detailTitle').innerText = food.name;
        document.getElementById('detailTime').innerHTML = `<i class="far fa-clock"></i> ${food.t}`;
        document.getElementById('detailKcal').innerHTML = `<i class="fas fa-fire"></i> ${food.c} Kcal`;
        document.getElementById('detailDiff').innerHTML = `<i class="fas fa-chart-line"></i> ${food.d || 'Dễ'}`;

        document.getElementById('detailDesc').innerText = food.desc || "Món ăn tuyệt vời đang chờ bạn khám phá.";

        let views = JSON.parse(localStorage.getItem('views')) || {};
        if (!views[food.name]) views[food.name] = 0;
        views[food.name]++;
        localStorage.setItem('views', JSON.stringify(views));
        document.getElementById('detailViews').innerHTML = `<i class="fas fa-eye"></i> ${views[food.name]} views`;

        const ings = food.ingredients || ["Nguyên liệu đang cập nhật..."];
        document.getElementById('detailIng').innerHTML = ings.map(i => `<li>${i}</li>`).join('');
        const steps = food.steps || ["Công thức đang cập nhật..."];
        document.getElementById('detailStep').innerHTML = steps.map(s => `<li>${s}</li>`).join('');

        const btnFav = document.getElementById('btnFav');
        const favs = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favs.some(f => f.name === food.name)) {
            btnFav.classList.add('active');
            btnFav.innerHTML = '<i class="fas fa-heart"></i> Đã thích';
        } else {
            btnFav.classList.remove('active');
            btnFav.innerHTML = '<i class="far fa-heart"></i> Yêu thích';
        }
        btnFav.onclick = () => app.toggleFav(food, btnFav);

        let hist = JSON.parse(localStorage.getItem('history')) || [];
        hist = hist.filter(h => h.name !== food.name);
        hist.unshift(food);
        if (hist.length > 10) hist.pop();
        localStorage.setItem('history', JSON.stringify(hist));
        if (currentUser) app.renderStaticList('history');

        overlay.classList.add('active');
        document.body.classList.add('no-scroll');
    },
    closeDetail: () => {
        document.getElementById('detailOverlay').classList.remove('active');
        document.body.classList.remove('no-scroll');
    },
    toggleFav: (food, btn) => {
        if (!currentUser) {
            Toastify({ text: "Vui lòng đăng nhập để yêu thích!", backgroundColor: "#ff5f6d" }).showToast();
            app.closeDetail();
            app.scrollToSection('auth-section');
            return;
        }

        let favs = JSON.parse(localStorage.getItem('favorites')) || [];
        const idx = favs.findIndex(f => f.name === food.name);
        if (idx > -1) {
            favs.splice(idx, 1);
            btn.classList.remove('active');
            btn.innerHTML = '<i class="far fa-heart"></i> Yêu thích';
            Toastify({ text: "Đã xóa khỏi yêu thích", backgroundColor: "#ff5f6d" }).showToast();
        } else {
            favs.push(food);
            btn.classList.add('active');
            btn.innerHTML = '<i class="fas fa-heart"></i> Đã thích';
            Toastify({ text: "Đã thêm vào yêu thích", backgroundColor: "#76ff03", style: { color: "#000" } }).showToast();
        }
        localStorage.setItem('favorites', JSON.stringify(favs));
        if (currentUser) app.renderStaticList('favorites');
    },
    share: () => {
        window.open('https://m.facebook.com/profile.php?id=1307160018', '_blank');
    }
};

document.getElementById('closeDetail').onclick = app.closeDetail;
document.getElementById('btnPrev').onclick = () => { foodIndex = (foodIndex - 1 + db[activeKey].foods.length) % db[activeKey].foods.length; updateCardPositions(); };
document.getElementById('btnNext').onclick = () => { foodIndex = (foodIndex + 1) % db[activeKey].foods.length; updateCardPositions(); };

window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});

initMenu();
lastKeyIndex = -1;
changeCategory('vietnam');
app.checkAuth();

viewport.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX; 
}, { passive: false });

window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    
    if(e.cancelable) e.preventDefault(); 

    const x = e.touches[0].clientX;
    
    targetScroll += (x - startX) * 1.5; 
    
    startX = x;
}, { passive: false });

window.addEventListener('touchend', () => {
    isDragging = false;
    targetScroll = Math.round(targetScroll / ITEM_WIDTH) * ITEM_WIDTH;
});