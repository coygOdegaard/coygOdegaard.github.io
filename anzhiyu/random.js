var posts=["2024/10/05/Kaggle/","2024/10/04/hello-world/","2024/10/05/python/","2024/10/05/临时/","2024/10/05/学习/","2024/10/05/数据结构/","2024/10/05/数据结构2/","2024/10/05/职业/","2024/10/05/职规/","2024/10/05/问题/","2024/10/05/英语/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };