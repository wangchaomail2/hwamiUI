class ProductCellRenderer {
    constructor() {
        this.eGui = document.createElement("div");
        this.eGui.className = "productCell";
    }

    init(params) {
        const { value, data } = params;

        // 创建图片容器
        const imageContainer = document.createElement("div");
        imageContainer.className = "image";

        const imageElement = document.createElement("img");
        imageElement.src = `/images/${data.image}.png`;
        imageElement.alt = data.image;
        imageContainer.appendChild(imageElement);
        this.eGui.appendChild(imageContainer);

        // 创建文本容器
        const textContainer = document.createElement("div");

        const nameElement = document.createElement("div");
        nameElement.textContent = value;
        textContainer.appendChild(nameElement);

        const categoryElement = document.createElement("div");
        categoryElement.className = "stockCell";
        categoryElement.textContent = data.category;
        textContainer.appendChild(categoryElement);

        this.eGui.appendChild(textContainer);
    }

    getGui() {
        return this.eGui;
    }

    refresh(params) {
        return true; // 刷新时返回 true 表示无需更新
    }
}
