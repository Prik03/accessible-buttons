# Accessible Buttons

A simple demo of **accessible buttons** demonstrating three types: **Normal Button**, **Toggle Button**, and **Switch Button**.  
This project focuses on accessibility using **ARIA roles and states** and provides a responsive design for desktop and mobile.

---

## Button Types

### 1. Normal Button

- Performs a **one-time action** when clicked.
- Does **not maintain any state**.

```html
<button id="normalBtn" onclick="alert('Hello')">Action</button>
```

### 2. Toggle Button

- Has an ON/OFF state.
- Uses aria-pressed for accessibility.
- Example use: Wishlist, Play/Pause.

```html
<button type="button" aria-label="Wishlist" aria-pressed="false" id="likeBtn">
  &#10084;
</button>
```
```html
 <button type="button" id="LikeBtn" aria-label='Pause'>
Pause
</button>
```

### 3. Switch Button

- Represents binary settings (ON/OFF).
- Uses role="switch" and aria-checked for accessibility.
- Example use: Dark Mode, Notifications ON/OFF.

```html
<button
  role="switch"
  aria-label="Dark Mode"
  class="switch-btn"
  aria-checked="false"
  id="darkModeSwitch"
></button>
```

---

## Features

- Keyboard accessible (Tab + Enter/Space)
- Screen reader friendly (ARIA attributes)
- Responsive design for mobile and desktop

---

## Usage

- Clone the repository:

```bash
git clone https://github.com/yourusername/accessible-buttons.git
```

- Open index.html in your browser.
- Click the buttons to see their behavior.

---

## Demo

- Normal Button: Performs an action on click.
- Toggle Button: Changes state and color when toggled.
- Switch Button: Slider-style ON/OFF switch with accessible state updates.

---

## License

MIT License
