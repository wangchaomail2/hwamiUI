class StatusCellRenderer {
  constructor() {
    this.eGui = null; // 初始化为 null
    this.circleElement = null; // 初始化为 null
    this.spanElement = null; // 初始化为 null
    this.iconElement = null; // 初始化为 null
  }

  init(params) {
    const { value, valueFormatted ,rendererType} = params;

    if(rendererType == "orderStatus"){
      // 创建主容器
      this.eGui = document.createElement("div");  

      // 创建圆形单元
      this.circleElement = document.createElement("div");
      this.eGui.appendChild(this.circleElement);  

      // 创建文本单元
      this.spanElement = document.createElement("span");
      this.eGui.appendChild(this.spanElement);
    }
     if(rendererType == "pick"){
      // 创建主容器
      this.eGui = document.createElement("div"); 
      // 创建icon单元
      this.iconElement = document.createElement("div");
      this.eGui.appendChild(this.iconElement);  
    }
    if(rendererType == "isPre"){
      // 创建主容器
      this.eGui = document.createElement("div"); 
      // 创建icon单元
      this.iconElement = document.createElement("div");
      this.eGui.appendChild(this.iconElement);  
    }




    // 初始化渲染
    this.refresh(params);
  }

  getGui() {
    return this.eGui;
  }

  refresh(params) {
    const { value, valueFormatted ,rendererType} = params;

    if(rendererType == "orderStatus"){
      // 设置主容器的类名
      this.eGui.className = `tag statusTag${value}`;  

      // 设置圆形的类名
      this.circleElement.className = `circle circle${value}`; 

      // 设置文本内容
      this.spanElement.textContent = valueFormatted || ""; // 防止 valueFormatted 为 undefined
      
      return true; // 返回 true 表示无需重新渲染
    }

     if(rendererType == "pick"){
      
       if(value =="1"){
          this.iconElement.className = `iconCell ZiQu`;
        }else{
          this.iconElement.className = `iconCell PeiSong`;
        }
    }
      if(rendererType == "isPre"){
      
        if(value =="1"){
          this.iconElement.className = `iconCell Pre`;
        }else{
          this.iconElement.className = `iconCell Runtime`;
        }
      }
    return true; // 返回 true 表示无需重新渲染
    
    
    
  }
}