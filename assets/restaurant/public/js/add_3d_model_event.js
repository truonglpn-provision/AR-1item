const model_viewer = document.querySelector("#model-viewer");
const menu_items = document.querySelectorAll(".menu-item");

init();
function init() {
    menu_items.forEach(item => {
        item.addEventListener("click", function () {
            console.log("file path: ", item.attributes["data-model"].value)
            const file_path = item.attributes["data-model"].value;
            model_viewer.setAttribute("src", file_path);

            if(file_path === "./assets/glb_3dmodel/low-poly_banana.glb"){
                model_viewer.setAttribute("scale", '5 5 5');
            } else if(file_path === "./assets/glb_3dmodel/3d_scanned_yeast_plait.glb"){
                model_viewer.setAttribute("scale", '0.1 0.1 0.1');
            } else if(file_path === "./assets/glb_3dmodel/easter_decoration_-_lowpoly_cake.glb"){
                model_viewer.setAttribute("scale", '0.06 0.06 0.06');
            } else if(file_path === "./assets/glb_3dmodel/bottle.glb"){
                model_viewer.setAttribute("scale", '0.03 0.03 0.03');
            }else if(file_path === "./assets/3d_model/a_regular_loaf_of_white_bread/scene.gltf"){
                model_viewer.setAttribute("scale", '0.12 0.12 0.12');
            } else{
                model_viewer.setAttribute("scale", '1 1 1');
            }
        });
    });
}