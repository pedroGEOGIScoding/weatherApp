# Weather animations

## References

https://x.com/agi_fromwalmart/status/1894144392145113508?s=66&t=xbjPqD-fcUFZjmL-Bgbf2Q

Create a single HTML file containing CSS and JavaScript to generate an animated weather card. The card should visually represent the following weather conditions with distinct animations: Wind: (e.g., moving clouds, swaying trees, or wind lines) Rain: (e.g., falling raindrops, puddles forming) Sun: (e.g., shining rays, bright background) Snow: (e.g., falling snowflakes, snow accumulating) Show all the weather card side by side The card should have a dark background. Provide all the HTML, CSS, and JavaScript code within this single file. The JavaScript should include a way to switch between the different weather conditions (e.g., a function or a set of buttons) to demonstrate the animations for each.

## Code

Let's break down this HTML file:

- which creates four animated weather cards (Wind, Rain, Sun, Snow)
- with temperature, location, 
- and additional details (time, humidity, wind speed).

> The code uses HTML for structure, CSS for styling and animations, and JavaScript for dynamic element creatio

### **HTML Structure**

The HTML defines the document and lays out four weather cards within the `<body>`.

1. **Document Setup**:
   
   - `<!DOCTYPE html>`: Declares the document as HTML5.
   - `<html lang="en">`: Sets the language to English.
   - `<head>`:
     - `<meta charset="UTF-8">`: Ensures proper character encoding.
     - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Makes the page responsive on mobile devices.
     - `<title>Animated Weather Cards with Minimalist Info</title>`: Sets the browser tab title.

2. **Body Content**:
   
   - Four `<div class="weather-card">` elements, each with a unique class (`wind`, `rain`, `sun`, `snow`) to apply specific animations.
   - Each card contains:
     - `<h3 class="weather-title">`: Displays the weather type (e.g., **"Wind"**).
     - `<div class="weather-info">`: Holds the temperature (e.g., `<p class="temperature">15°C</p>`) and location (e.g., `<p class="location">Chicago, USA</p>`).
     - `<div class="weather-details">`: Contains three `<div class="detail-item">` elements for time, humidity, and wind speed, each with an **SVG icon** and text (e.g., `<span>Time: 16:30</span>`).

### **CSS Styling**

The `<style>` section defines the layout, appearance, and animations.

#### **General Layout**

- **`body`**:
  
  - `margin: 0; padding: 20px;`: Removes default margin and adds padding.
  - `background: #1a1a1a;`: Dark gray background.
  - `display: flex; justify-content: center; gap: 20px;`: Centers the cards horizontally with 20px spacing.
  - `font-family: Arial, sans-serif;`: Sets a clean font.

- **`.weather-card`**:
  
  - `width: 200px; height: 300px;`: Fixed size for each card.
  - `background: #2c2c2c;`: Slightly lighter dark gray background.
  - `border-radius: 10px;`: Rounded corners.
  - `position: relative; overflow: hidden;`: Allows absolute positioning of children and hides overflow.
  - `color: white;`: White text.
  - `box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);`: Adds a subtle shadow.
  - `display: flex; flex-direction: column; justify-content: space-between;`: Ensures vertical layout flexibility.

- **`.weather-title`**:
  
  - `text-align: center; padding: 10px;`: Centers text with padding.
  - `background: rgba(0, 0, 0, 0.2);`: Semi-transparent dark overlay.
  - `margin: 0;`: Removes default margin.

#### **Central Info**

- **`.weather-info`**:
  
  - `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);`: Centers the element in the card.
  - `text-align: center; z-index: 1;`: Centers text and ensures it’s above animations.

- **`.temperature`**:
  
  - `font-size: 48px; font-weight: bold; margin: 0;`: Large, bold temperature.
  - `text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);`: Adds shadow for readability against animations.

- **`.location`**:
  
  - `font-size: 16px; margin: 5px 0 0; opacity: 0.9;`: Smaller, slightly faded text below temperature.

#### **Bottom-Left Details**

- **`.weather-details`**:
  
  - `position: absolute; bottom: 10px; left: 10px;`: Positions at bottom-left corner.
  - `z-index: 1; font-size: 12px; opacity: 0.9;`: Ensures visibility over animations, smaller text, slightly faded.

- **`.detail-item`**:
  
  - `display: flex; align-items: center; margin: 4px 0;`: Aligns icon and text horizontally with spacing.

- **`.detail-item .icon`**:
  
  - `width: 14px; height: 14px; margin-right: 5px;`: Small icon size with spacing.
  - `fill: none; stroke: white; stroke-width: 2;`: Outlined white icons.

- **`.detail-item span`**:
  
  - `margin-left: 5px;`: Spaces text from icon.

#### **Animations**

Each weather type has unique animated elements added via JavaScript and styled here.

1. **Wind**:
   
   - **`.wind .cloud`**:
     - A gray oval (`width: 60px; height: 20px; background: #888; border-radius: 20px;`).
     - Positioned at `top: 50px;` and animated with `@keyframes moveCloud` to move from `-60px` to `260px` over **4 seconds**, infinitely.
   - **`.wind .wind-line`**:
     - Horizontal lines (`width: 40px; height: 2px; background: #aaa; opacity: 0.7;`).
     - Animated with `@keyframes windLines` to slide across and fade (**0 to 0.7 to 0 opacity**) over **2 seconds**.

2. **Rain**:
   
   - **`.rain .raindrop`**:
     - Thin blue lines (`width: 2px; height: 20px; background: #00b4d8;`).
     - Animated with `@keyframes fall` to drop from `-50px` to `300px` and fade out over **1 second**.
   - **`.rain .puddle`**:
     - Blue layer at bottom (`width: 100%; height: 20px; background: #00b4d8; opacity: 0.3;`).
     - Animated with `@keyframes puddle` to grow to **20px** then shrink to **15px** over **5 seconds**.

3. **Sun**:
   
   - **`.sun .sunshine`**:
     - Yellow circle (`width: 100px; height: 100px; background: #ffdd00; border-radius: 50%;`).
     - Centered with `top: 50%; left: 50%; transform: translate(-50%, -50%);`.
     - Animated with `@keyframes pulse` to scale from **1 to 1.1** and back over **2 seconds**.
   - **`.sun .ray`**:
     - Yellow lines (`width: 40px; height: 2px; background: #ffdd00; opacity: 0.8;`).
     - Animated with `@keyframes rayPulse` to fade between **0.5 and 1 opacity** over **2 seconds**.

4. **Snow**:
   
   - **`.snow .snowflake`**:
     - Small white circles (`width: 5px; height: 5px; background: white; border-radius: 50%;`).
     - Animated with `@keyframes snowFall` to fall from `-50px` to `300px` and fade out over **3 seconds**.
   - **`.snow .snow-ground`**:
     - White layer at bottom (`width: 100%; height: 0; background: white;`).
     - Animated with `@keyframes snowAccumulate` to grow to **30px** over **10 seconds**.

### **JavaScript**

The `<script>` section dynamically adds animated elements to each card when the page loads.

- **`initWeatherAnimations()`**:
  
  1. **Wind**:
     - Adds a `<div class="cloud">`.
     - Creates **3** `<div class="wind-line">` elements with staggered `top` positions (**100px**, **140px**, **180px**) and animation delays (**0s**, **0.5s**, **1s**).
  2. **Rain**:
     - Adds a `<div class="puddle">`.
     - Creates **10** `<div class="raindrop">` elements with random `left` positions (**0-100%**) and random delays (**0-1s**).
  3. **Sun**:
     - Adds a `<div class="sunshine">`.
     - Creates **8** `<div class="ray">` elements, rotated at **45-degree intervals** (0°, 45°, 90°, etc.), with delays (**0.2s increments**).
  4. **Snow**:
     - Adds a `<div class="snow-ground">`.
     - Creates **15** `<div class="snowflake">` elements with random `left` positions (**0-100%**) and delays (**0-2s**).

- **`window.onload = initWeatherAnimations;`**:
  
  - Runs the function when the page finishes loading.

### **How It Works Together**

1. **Structure**: Four cards are defined in **HTML** with static content (title, temperature, location, details).
2. **Styling**: **CSS** positions and styles the static content while defining animations for dynamic elements.
3. **Dynamic Elements**: **JavaScript** adds animated elements (clouds, raindrops, etc.) to each card, which **CSS** then animates.
4. **Result**: Four side-by-side cards with:
   - **Animated backgrounds** (e.g., moving clouds for Wind).
   - **Central bold temperature and location** (e.g., "15°C" and "Chicago, USA").
   - **Bottom-left details** with minimalist **SVG icons** and text (e.g., "Time: 16:30").
