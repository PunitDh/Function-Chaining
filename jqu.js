class ElementCollection extends Array {
  ready(callback) {
    const isReady = this.some((e) => e.readyState && e.readyState != "loading");
    if (isReady) {
      callback();
    } else {
      this.on("DOMContentLoaded", callback);
    }
    return this;
  }

  on(event, callbackOrSelector, callback) {
    if (typeof callbackOrSelector === "function") {
      this.forEach((element) =>
        element.addEventListener(event, callbackOrSelector)
      );
    } else {
      this.forEach((element) => {
        element.addEventListener(event, (e) => {
          if (e.target.matches(callbackOrSelector)) callback(e);
        });
      });
    }
    return this;
  }

  click(callback) {
    this.forEach((element) => element.addEventListener("click", callback));
    return this;
  }

  next() {
    return this.map((e) => e.nextElementSibling).filter((e) => e);
  }

  prev() {
    return this.map((e) => e.previousElementSibling).filter((e) => e);
  }

  addClass(className) {
    this.forEach((e) => e.classList.add(className));
    return this;
  }

  removeClass(className) {
    this.forEach((e) => e.classList.remove(className));
    return this;
  }

  css(property, value) {
    const camelProp = property.replace(/(-[a-z])/, (g) =>
      g.replace("-", "").toUpperCase()
    );
    this.forEach((e) => (e.style[camelProp] = value));
    return this;
  }

  html(text) {
    if (!text) {
      return this.map((e) => e.innerHTML).join("\n");
    } else {
      this.forEach((e) => (e.innerHTML = text));
      return this;
    }
  }

  indicesOf(element) {
    // TODO
    return this.map((e) => this.indexOf(e)).filter((e) => e);
  }

  text(content) {
    if (!content) {
      return this.map((e) => e.innerText).join("");
    } else {
      this.forEach((e) => (e.innerText = content));
      return this;
    }
  }

  color(col) {
    if (!col) {
      return this.map((e) => e.style.color);
    } else {
      this.forEach((e) => (e.style.color = col));
      return this;
    }
  }

  display(display) {
    if (!display) {
      return this.map((e) => e.style.display);
    } else {
      this.forEach((e) => (e.style.display = display));
      return this;
    }
  }

  centerScreen() {
    this.display("flex")
      .alignItems("center")
      .justifyContent("center")
      .width("100vw")
      .height("100vh");
    return this;
  }

  margin(margin) {
    this.forEach((e) => (e.style.margin = margin));
    return this;
  }

  padding(padding) {
    this.forEach((e) => (e.style.padding = padding));
    return this;
  }

  hide() {
    this.forEach((e) => (e.style.display = "none"));
    return this;
  }

  alignItems(align) {
    this.forEach((e) => (e.style.alignItems = align));
    return this;
  }

  justifyContent(justify) {
    this.forEach((e) => (e.style.justifyContent = justify));
    return this;
  }

  flexWrap(wrap) {
    this.forEach((e) => (e.style.flexWrap = wrap));
    return this;
  }

  flexDirection(direction) {
    this.forEach((e) => (e.style.flexDirection = direction));
    return this;
  }

  flexGrow(grow) {
    this.forEach((e) => (e.style.flexGrow = grow));
    return this;
  }

  flexShrink(shrink) {
    this.forEach((e) => (e.style.flexShrink = shrink));
    return this;
  }

  flexBasis(basis) {
    this.forEach((e) => (e.style.flexBasis = basis));
    return this;
  }

  position(pos) {
    this.forEach((e) => (e.style.position = pos));
    return this;
  }

  top(top) {
    this.forEach((e) => (e.style.top = top));
    return this;
  }

  left(left) {
    this.forEach((e) => (e.style.left = left));
    return this;
  }

  right(right) {
    this.forEach((e) => (e.style.right = right));
    return this;
  }

  bottom(bottom) {
    this.forEach((e) => (e.style.bottom = bottom));
    return this;
  }

  width(width) {
    this.forEach((e) => (e.style.width = width));
    return this;
  }

  height(height) {
    this.forEach((e) => (e.style.height = height));
    return this;
  }

  opacity(opacity) {
    this.forEach((e) => (e.style.opacity = opacity));
    return this;
  }

  background(background) {
    this.forEach((e) => (e.style.background = background));
    return this;
  }

  backgroundImage(backgroundImage) {
    this.forEach((e) => (e.style.backgroundImage = backgroundImage));
    return this;
  }

  backgroundSize(backgroundSize) {
    this.forEach((e) => (e.style.backgroundSize = backgroundSize));
    return this;
  }

  backgroundPosition(backgroundPosition) {
    this.forEach((e) => (e.style.backgroundPosition = backgroundPosition));
    return this;
  }

  backgroundRepeat(backgroundRepeat) {
    this.forEach((e) => (e.style.backgroundRepeat = backgroundRepeat));
    return this;
  }

  backgroundColor(backgroundColor) {
    this.forEach((e) => (e.style.backgroundColor = backgroundColor));
    return this;
  }

  border(border) {
    this.forEach((e) => (e.style.border = border));
    return this;
  }

  borderTop(borderTop) {
    this.forEach((e) => (e.style.borderTop = borderTop));
    return this;
  }

  borderRight(borderRight) {
    this.forEach((e) => (e.style.borderRight = borderRight));
    return this;
  }

  borderBottom(borderBottom) {
    this.forEach((e) => (e.style.borderBottom = borderBottom));
    return this;
  }

  borderLeft(borderLeft) {
    this.forEach((e) => (e.style.borderLeft = borderLeft));
    return this;
  }

  borderColor(borderColor) {
    this.forEach((e) => (e.style.borderColor = borderColor));
    return this;
  }

  borderStyle(borderStyle) {
    this.forEach((e) => (e.style.borderStyle = borderStyle));
    return this;
  }

  borderWidth(borderWidth) {
    this.forEach((e) => (e.style.borderWidth = borderWidth));
    return this;
  }

  borderRadius(borderRadius) {
    this.forEach((e) => (e.style.borderRadius = borderRadius));
    return this;
  }

  boxShadow(boxShadow) {
    this.forEach((e) => (e.style.boxShadow = boxShadow));
    return this;
  }

  transform(transform) {
    this.forEach((e) => (e.style.transform = transform));
    return this;
  }

  transition(transition) {
    this.forEach((e) => (e.style.transition = transition));
    return this;
  }

  transitionDelay(transitionDelay) {
    this.forEach((e) => (e.style.transitionDelay = transitionDelay));
    return this;
  }

  transitionDuration(transitionDuration) {
    this.forEach((e) => (e.style.transitionDuration = transitionDuration));
    return this;
  }

  transitionProperty(transitionProperty) {
    this.forEach((e) => (e.style.transitionProperty = transitionProperty));
    return this;
  }

  transitionTimingFunction(transitionTimingFunction) {
    this.forEach(
      (e) => (e.style.transitionTimingFunction = transitionTimingFunction)
    );
    return this;
  }

  transformOrigin(transformOrigin) {
    this.forEach((e) => (e.style.transformOrigin = transformOrigin));
    return this;
  }

  transformStyle(transformStyle) {
    this.forEach((e) => (e.style.transformStyle = transformStyle));
    return this;
  }

  userSelect(userSelect) {
    this.forEach((e) => (e.style.userSelect = userSelect));
    return this;
  }

  cursor(cursor) {
    this.forEach((e) => (e.style.cursor = cursor));
    return this;
  }

  pointerEvents(pointerEvents) {
    this.forEach((e) => (e.style.pointerEvents = pointerEvents));
    return this;
  }

  visibility(visibility) {
    this.forEach((e) => (e.style.visibility = visibility));
    return this;
  }

  zIndex(zIndex) {
    this.forEach((e) => (e.style.zIndex = zIndex));
    return this;
  }

  textAlign(textAlign) {
    this.forEach((e) => (e.style.textAlign = textAlign));
    return this;
  }

  textDecoration(textDecoration) {
    this.forEach((e) => (e.style.textDecoration = textDecoration));
    return this;
  }

  textTransform(textTransform) {
    this.forEach((e) => (e.style.textTransform = textTransform));
    return this;
  }

  textOverflow(textOverflow) {
    this.forEach((e) => (e.style.textOverflow = textOverflow));
    return this;
  }

  textShadow(textShadow) {
    this.forEach((e) => (e.style.textShadow = textShadow));
    return this;
  }

  whiteSpace(whiteSpace) {
    this.forEach((e) => (e.style.whiteSpace = whiteSpace));
    return this;
  }

  wordBreak(wordBreak) {
    this.forEach((e) => (e.style.wordBreak = wordBreak));
    return this;
  }

  wordWrap(wordWrap) {
    this.forEach((e) => (e.style.wordWrap = wordWrap));
    return this;
  }

  wordSpacing(wordSpacing) {
    this.forEach((e) => (e.style.wordSpacing = wordSpacing));
    return this;
  }

  letterSpacing(letterSpacing) {
    this.forEach((e) => (e.style.letterSpacing = letterSpacing));
    return this;
  }

  lineHeight(lineHeight) {
    this.forEach((e) => (e.style.lineHeight = lineHeight));
    return this;
  }

  fontFamily(fontFamily) {
    this.forEach((e) => (e.style.fontFamily = fontFamily));
    return this;
  }

  fontSize(fontSize) {
    this.forEach((e) => (e.style.fontSize = fontSize));
    return this;
  }

  fontStyle(fontStyle) {
    this.forEach((e) => (e.style.fontStyle = fontStyle));
    return this;
  }

  fontWeight(fontWeight) {
    this.forEach((e) => (e.style.fontWeight = fontWeight));
    return this;
  }

  fontVariant(fontVariant) {
    this.forEach((e) => (e.style.fontVariant = fontVariant));
    return this;
  }

  font(font) {
    this.forEach((e) => (e.style.font = font));
    return this;
  }

  color(color) {
    this.forEach((e) => (e.style.color = color));
    return this;
  }

  bgRed() {
    this.forEach((e) => (e.style.backgroundColor = "red"));
    return this;
  }

  bgGreen() {
    this.forEach((e) => (e.style.backgroundColor = "green"));
    return this;
  }

  bgBlue() {
    this.forEach((e) => (e.style.backgroundColor = "blue"));
    return this;
  }

  bgYellow() {
    this.forEach((e) => (e.style.backgroundColor = "yellow"));
    return this;
  }

  bgCyan() {
    this.forEach((e) => (e.style.backgroundColor = "cyan"));
    return this;
  }

  bgMagenta() {
    this.forEach((e) => (e.style.backgroundColor = "magenta"));
    return this;
  }

  bgWhite() {
    this.forEach((e) => (e.style.backgroundColor = "white"));
    return this;
  }

  bgBlack() {
    this.forEach((e) => (e.style.backgroundColor = "black"));
    return this;
  }

  bgGray() {
    this.forEach((e) => (e.style.backgroundColor = "gray"));
    return this;
  }

  red() {
    this.forEach((e) => (e.style.color = "red"));
    return this;
  }

  blue() {
    this.forEach((e) => (e.style.color = "blue"));
    return this;
  }

  green() {
    this.forEach((e) => (e.style.color = "green"));
    return this;
  }

  yellow() {
    this.forEach((e) => (e.style.color = "yellow"));
    return this;
  }

  orange() {
    this.forEach((e) => (e.style.color = "orange"));
    return this;
  }

  purple() {
    this.forEach((e) => (e.style.color = "purple"));
    return this;
  }

  pink() {
    this.forEach((e) => (e.style.color = "pink"));
    return this;
  }

  brown() {
    this.forEach((e) => (e.style.color = "brown"));
    return this;
  }

  black() {
    this.forEach((e) => (e.style.color = "black"));
    return this;
  }

  gray() {
    this.forEach((e) => (e.style.color = "gray"));
    return this;
  }

  white() {
    this.forEach((e) => (e.style.color = "white"));
    return this;
  }

  center() {
    if (this.style.display === "flex") {
      this.forEach((e) => (e.style.textAlign = "center"));
    } else {
      this.forEach((e) => (e.style.justifyContent = "center"));
    }
    return this;
  }

  grid() {
    this.forEach((e) => (e.style.display = "grid"));
    return this;
  }

  flex() {
    this.forEach((e) => (e.style.display = "flex"));
    return this;
  }

  first() {
    return this[0];
  }

  second() {
    return this[1];
  }

  third() {
    return this[2];
  }

  fourth() {
    return this[3];
  }

  fifth() {
    return this[4];
  }

  sixth() {
    return this[5];
  }

  seventh() {
    return this[6];
  }

  eighth() {
    return this[7];
  }

  ninth() {
    return this[8];
  }

  tenth() {
    return this[9];
  }

  hundredth() {
    return this[99];
  }

  thousandth() {
    return this[999];
  }

  millionth() {
    return this[1000000 - 1];
  }

  last() {
    return this[this.length - 1];
  }
}

class AjaxPromise {
  constructor(promise) {
    this.promise = promise;
  }

  done(callback) {
    this.promise = this.promise.then((data) => {
      callback(data);
      return data;
    });
    return this;
  }

  fail(callback) {
    this.promise.catch(callback);
    return this;
  }

  always(callback) {
    this.promise.finally(callback);
    return this;
  }
}

function $(param) {
  if (typeof param === "string" || param instanceof String) {
    return new ElementCollection(...document.querySelectorAll(param));
  } else {
    return new ElementCollection(param);
  }
}

$.get = function ({
  url,
  data = {},
  success = () => {},
  dataType = "application/json",
}) {
  const queryString = Object.entries(data)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return new AjaxPromise(
    fetch(`${url}?${queryString}`, {
      method: "GET",
      headers: {
        "Content-Type": dataType,
      },
    })
      .then((res) => {
        if (res.ok) res.json();
        else throw new Error(res.status);
      })
      .then((data) => success(data))
  );
};

String.prototype.indicesOf = function (searchString, position = 0) {
  console.log("Wf");

  const indices = [];
  let index = -1;
  if (typeof searchString === "string" || searchString instanceof String) {
    while ((index = this.indexOf(searchString, index + 1)) !== -1) {
      indices.push(index);
    }
  } else if (searchString instanceof Array) {
    console.log("Wf");
    return searchString.map((string) => this.indexOf(string));
  } else if (searchString instanceof Object) {
    Object.keys(searchString).forEach((key) => {
      while ((index = this.indexOf(key, index + 1)) !== -1) {
        indices.push(index);
      }
    });
  }

  return indices;
};

Array.prototype.splitEach = function (separator) {
  return this.map((e) => e.split(separator));
};

Array.prototype.trimEach = function () {
  return this.map((e) => e.trim());
};

Array.prototype.joinEach = function (separator = "") {
  return this.map((e) => e.join(separator));
};

Array.prototype.first = function (operator) {
  // TODO
  if (this[0]) return this[0];
  else throw new Error("Null Pointer Exception");
};

Array.prototype.firstOrNull = function (operator) {
  // TODO
  return this[0] ? this[0] : null;
};

Array.prototype.second = function () {
  // TODO
  if (this[1]) return this[1];
  else throw new Error("Null Pointer Exception");
};

Array.prototype.secondOrNull = function (operator) {
  // TODO
  return this[1] ? this[1] : null;
};

Array.prototype.toUpperCase = function () {
  return this.map((elem) => elem.toUpperCase());
};

Array.prototype.toLowerCase = function () {
  return this.map((elem) => elem.toLowerCase());
};

Array.prototype.firstOfEach = function () {
  return this.map((elem) => elem[0]);
};

Object.prototype.keys = function () {
  return Object.keys(this);
};

Object.prototype.values = function () {
  return Object.values(this);
};

String.prototype.map = function (callback) {
  return this.split("")
    .map((elem) => callback(elem))
    .join("");
};

String.prototype.forEach = function (callback) {
  this.split("")
    .forEach((elem) => callback(elem))
    .join("");
};

String.prototype.charsAt = function (...indices) {
  return indices.map((index) => this[index]);
};

String.prototype.first = function () {
  return this.charAt(0);
};

String.prototype.capitalize = function (separator = " ") {
  const strings = this.split(separator);
  return strings
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(separator);
};
