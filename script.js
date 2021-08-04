// $("#verticalDraggable").draggable({ axis: "y" });
// $("#horizontalDraggable").draggable({ axis: "x" });
// $("#stuckText").draggable({ containment: "parent" });
// $("#resizableBox").resizable({ aspectRatio: true, autoHide: true });

// $("#draggable").draggable();
// $("#droppable").droppable({
//   drop: function (event, ui) {
//     alert("Dropped");
//   },
// });

// $("#accordion").accordion();

$("#sortable").sortable({
  cursor: "move",
});
$("#sortable").disableSelection();
