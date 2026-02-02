// CLICK EVENT
function handleClick() {
    console.log("Click event triggered");
}

// BLUR EVENT
function handleBlur() {
    console.log("Blur event: input lost focus");
}

// CHANGE EVENT
function handleChange() {
    console.log("Change event: value changed");
}

// KEYBOARD EVENTS
function handleKeyDown(event) {
    console.log("KeyDown event: Key pressed ->", event.key);
}

function handleKeyPress(event) {
    console.log("KeyPress event: Key held ->", event.key);
}

function handleKeyUp(event) {
    console.log("KeyUp event: Key released ->", event.key);
}

// PAGE EVENTS
function handleLoad() {
    console.log("Load event: Page loaded");
}

function handleUnload() {
    console.log("Unload event: Page unloaded");
}

// MOUSE EVENTS
function handleMouseDown() {
    console.log("MouseDown event: Mouse button pressed");
}

function handleMouseMove() {
    console.log("MouseMove event: Mouse moving");
}

function handleMouseOut() {
    console.log("MouseOut event: Mouse left element");
}

function handleMouseOver() {
    console.log("MouseOver event: Mouse over element");
}

function handleMouseUp() {
    console.log("MouseUp event: Mouse button released");
}

// FORM EVENT
function handleSubmit(event) {
    event.preventDefault(); // stops form submission
    console.log("Submit event: Form submitted");
}

//blur event
function handleBlur() {
    console.log("Blur event triggered: Input lost focus");
}

//focus event
function handleFocus() {
    console.log("Focus event triggered: Input gained focus");
}