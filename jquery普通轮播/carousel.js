function main() {
  var imagesCommon = ["./img/blean1.png", "./img/blean2.png", "./img/blean3.png","./img/blean4.png"];

  var root = document.getElementById("root");

  function appendContainer() {
    var container = document.createElement("div");
    container.className = "container";

    root.prepend(container);

   
    return container;
  }

  var fns = [
    function() {
      var container = appendContainer();
      var awesomeSlider = new AwesomeSlider(imagesCommon, container);
    },
  ];

  for (var i = 0; i < fns.length; i++) {
    fns[i]();
  }
}



function manual() {
  var previous = document.createElement("div");
  previous.className = "manual-btn manual-previous";

  var next = document.createElement("div");
  next.className = "manual-btn manual-next";

  return {
    previous: previous,
    next: next
  };
}

function imageDownloading() {
  var ele = document.createElement("div");
  ele.className = "image-downloading";
  var text = document.createTextNode("loading...");
  ele.appendChild(text);
  return ele;
}

function imagePlaceholder() {
  var ele = document.createElement("div");
  ele.className = "image-placeholder";
  var text = document.createTextNode("error");
  ele.appendChild(text);
  return ele;
}

function readyGo(func) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", func);
  } else {
    func();
  }
}

readyGo(main);
