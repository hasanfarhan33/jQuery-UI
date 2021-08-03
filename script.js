$("#verticalDraggable").draggable({ axis: "y" });
$("#horizontalDraggable").draggable({ axis: "x" });
$("#stuckText").draggable({ containment: "parent" });
$("#resizableBox").resizable({ aspectRatio: true, autoHide: true });
